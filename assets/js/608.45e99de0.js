(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{1333:function(e,t,s){"use strict";s.r(t);var a=s(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"interface-os3encoding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interface-os3encoding"}},[e._v("#")]),e._v(" Interface OS3Encoding")]),e._v(" "),s("Badge",{attrs:{text:"Interface",type:"interface"}}),e._v(" "),s("section",{staticClass:"table-features"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[e._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[e._v("import")]),e._v(" { OS3Encoding } "),s("span",{staticClass:"token keyword"},[e._v("from")]),e._v(" "),s("span",{staticClass:"token string"},[e._v('"@tsed/specs"')])])])]),s("tr",[s("th",[e._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/tsedio/tsed/blob/v6.75.3/packages/specs/openspec/src/openspec3/OS3Encoding.ts#L0-L0"}},[e._v("/packages/specs/openspec/src/openspec3/OS3Encoding.ts")])])])])])]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" OS3Encoding "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[e._v('contentType?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nheaders?<span class="token punctuation">:</span> <a href="/api/specs/openspec/common/OpenSpecHash.html"><span class="token">OpenSpecHash</span></a>&lt;<a href="/api/specs/openspec/openspec3/OS3Header.html"><span class="token">OS3Header</span></a>&gt;<span class="token punctuation">;</span>\n\nstyle?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nexplode?<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n\nallowReserved?<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n')])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[e._v("#")]),e._v(" Members")]),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("contentType?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("Content-Type")]),e._v(" for encoding a specific property. Default value depends on the property type: for "),s("code",[e._v("string")]),e._v(" with "),s("code",[e._v("format")]),e._v(" being "),s("code",[e._v("binary")]),e._v(" – "),s("code",[e._v("application/octet-stream")]),e._v("; for other primitive types – "),s("code",[e._v("text/plain")]),e._v("; for "),s("code",[e._v("object")]),e._v(" - application/json; for "),s("code",[e._v("array")]),e._v(" – the default is defined based on the inner type. The value can be a specific media type (e.g. "),s("code",[e._v("application/json")]),e._v("), a wildcard media type (e.g. "),s("code",[e._v("image/*")]),e._v("), or a comma-separated list of the two types.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("headers?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/specs/openspec/common/OpenSpecHash.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecHash")])]),e._v("<"),s("a",{pre:!0,attrs:{href:"/api/specs/openspec/openspec3/OS3Header.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Header")])]),e._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("A map allowing additional information to be provided as headers, for example "),s("code",[e._v("Content-Disposition")]),e._v(". "),s("code",[e._v("Content-Type")]),e._v(" is described separately and SHALL be ignored in this section. This property SHALL be ignored if the request body media type is not a multipart.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("style?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("Describes how a specific property value will be serialized depending on its type. See "),s("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterObject",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parameter Object"),s("OutboundLink",{pre:!0})],1),e._v(" for details on the "),s("code",[e._v("[style](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterStyle)")]),e._v(" property. The behavior follows the same values as "),s("code",[e._v("query")]),e._v(" parameters, including default values. This property SHALL be ignored if the request body media type is not "),s("code",[e._v("application/x-www-form-urlencoded")]),e._v(".")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("explode?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("When this is true, property values of type "),s("code",[e._v("array")]),e._v(" or "),s("code",[e._v("object")]),e._v(" generate separate parameters for each value of the array, or key-value-pair of the map. For other types of properties this property has no effect. When "),s("code",[e._v("[style](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterStyle)")]),e._v(" is "),s("code",[e._v("form")]),e._v(", the default value is true. For all other styles, the default value is "),s("code",[e._v("false")]),e._v(". This property SHALL be ignored if the request body media type is not "),s("code",[e._v("application/x-www-form-urlencoded")]),e._v(".")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("allowReserved?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("Determines whether the parameter value SHOULD allow reserved characters, as defined by "),s("a",{pre:!0,attrs:{href:"https://tools.ietf.org/html/rfc3986#section-2.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC3986"),s("OutboundLink",{pre:!0})],1),e._v(" "),s("code",[e._v(":/?#[]@!$&'()*+,;=")]),e._v(" to be included without percent-encoding. The default value is "),s("code",[e._v("false")]),e._v(". This property SHALL be ignored if the request body media type is not "),s("code",[e._v("application/x-www-form-urlencoded")]),e._v(".")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);