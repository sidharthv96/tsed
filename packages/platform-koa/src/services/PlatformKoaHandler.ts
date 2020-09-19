import {HandlerContext, HandlerMetadata, HandlerType, OnRequestOptions, ParamTypes, PlatformContext, PlatformHandler} from "@tsed/common";
import * as Koa from "koa";
import "./PlatformKoaRequest";

export class PlatformKoaHandler extends PlatformHandler {
  protected getArg(type: ParamTypes | string, h: HandlerContext): any {
    const koaCtx = h.request.ctx;

    switch (String(type)) {
      case "KOA_CTX":
        return koaCtx;
      case ParamTypes.LOCALS:
        return koaCtx.state;

      default:
        return super.getArg(type, h);
    }
  }

  protected createRawHandler(metadata: HandlerMetadata) {
    switch (metadata.type) {
      default:
        return super.createRawHandler(metadata);

      case HandlerType.CTX_FN:
        return async (ctx: Koa.Context, next: any) => {
          await metadata.handler(ctx.request.$ctx);

          return next();
        };

      case HandlerType.RAW_ERR_FN:
      case HandlerType.RAW_FN:
        return metadata.handler;

      case HandlerType.ENDPOINT:
      case HandlerType.MIDDLEWARE:
      case HandlerType.ERR_MIDDLEWARE:
        return (ctx: Koa.Context, next: Koa.Next) =>
          this.onRequest({
            $ctx: ctx.request.$ctx,
            metadata,
            next
          });
    }
  }

  protected async flush(data: any, ctx: PlatformContext): Promise<void> {
    if (data === undefined && ctx.getResponse().body) {
      data = ctx.getResponse().body;
    }

    return super.flush(data, ctx);
  }

  protected async onRequest(requestOptions: OnRequestOptions): Promise<any> {
    const {metadata, $ctx} = requestOptions;

    if ($ctx.data instanceof Error) {
      if (metadata.hasErrorParam) {
        requestOptions.err = $ctx.data;
      } else {
        return this.onError($ctx.data, requestOptions);
      }
    }

    return super.onRequest(requestOptions);
  }

  protected onError(error: unknown, requestOptions: OnRequestOptions) {
    const {next, $ctx, metadata} = requestOptions;

    // istanbul ignore next
    if ($ctx.isDone()) {
      return;
    }

    $ctx.data = error;

    if (!next || metadata.isFinal()) {
      $ctx.getApp().emit("error", error, $ctx.getRequest().ctx);

      return;
    }

    return next();
  }
}