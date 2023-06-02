"use strict";(self.webpackChunkfinal=self.webpackChunkfinal||[]).push([[462],{7413:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(4165),a=n(5861),s=n(9439),o=n(7363),c=n(5350),l=n(6507),i=n(2912),u=n(114),d=n(9961),h=n(6776),p=n(5419),m=(n(9390),n(5466)),f=n(184),g=function(){var e=(0,o.useState)(null),t=(0,s.Z)(e,2),n=t[0],g=t[1],x=(0,o.useState)({aspect:1,unit:"%"}),Z=(0,s.Z)(x,2),w=Z[0],b=Z[1],v=(0,o.useState)(null),j=(0,s.Z)(v,2),k=j[0],y=j[1],P=(0,o.useState)(null),N=(0,s.Z)(P,2),C=N[0],I=N[1],L=(0,o.useState)(null),T=(0,s.Z)(L,2),R=(T[0],T[1]),S=(0,o.useRef)(null),U=(0,o.useState)(0),H=(0,s.Z)(U,2),E=(H[0],H[1]),M=(0,o.useState)(!1),W=(0,s.Z)(M,2),D=(W[0],W[1]),O=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==k){e.next=3;break}return c.ZP.error("\u54ce\u54df\uff0c\u4f60\u5e72\u561b\u54ce\u54df\uff0c\u8bf7\u5148\u5b8c\u6210\u88c1\u526a\u5566"),e.abrupt("return");case 3:return e.prev=3,D(!0),e.next=7,(0,m.K)(k);case 7:return n=e.sent,(a=new FormData).append("file",n,"image.zip"),e.next=12,F(a,(function(e){E(e)}));case 12:c.ZP.success("\u4e0a\u4f20\u6210\u529f"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),console.error(e.t0),c.ZP.error("\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5");case 19:return e.prev=19,D(!1),E(0),e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[3,15,19,23]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.type.startsWith("image/")){e.next=3;break}return c.ZP.error("\u8bf7\u9009\u62e9\u4e00\u4e2a\u56fe\u7247\u6587\u4ef6\u3002"),e.abrupt("return",!1);case 3:if(null===n){e.next=9;break}if(window.confirm("\u524d\u4e00\u4e2a\u56fe\u7247\u5c1a\u672a\u4e0a\u4f20\uff0c\u60a8\u786e\u5b9a\u8981\u653e\u5f03\u4e4b\u524d\u7684\u7f16\u8f91\u548c\u66f4\u6539\u5417\uff1f")){e.next=7;break}return e.abrupt("return",!1);case 7:y(null),b(null);case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:if(!e.sent){e.next=8;break}I(URL.createObjectURL(t)),g(t),console.log("local upload success"),e.next=9;break;case 8:console.log("local upload failed",n);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e,t){return new Promise((function(n,r){var a=new XMLHttpRequest;a.open("POST","http://54.180.149.62:8080/files/upload"),a.upload.onprogress=function(e){if(e.lengthComputable){var n=Math.round(100*e.loaded/e.total);t(n)}},a.onload=function(e){a.status>=200&&a.status<300?n(a.responseText):r(new Error("Upload failed with status: "+a.statusText))},a.onerror=function(){r(new Error("Upload failed with status: "+a.statusText))},a.send(e)}))},X=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://54.180.149.62:8080/files/download",{method:"GET"});case 3:if(t=e.sent,console.log("response",t),t.ok){e.next=7;break}throw new Error("HTTP error! status: ".concat(t.status));case 7:return e.next=9,t.blob();case 9:n=e.sent,a=window.URL.createObjectURL(n),(s=document.createElement("a")).href=a,s.setAttribute("download","example.zip"),document.body.appendChild(s),s.click(),document.body.removeChild(s),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),console.error("Downloading file failed:",e.t0),c.ZP.error("\u4e0b\u8f7d\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5");case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();return(0,f.jsx)("div",{className:"outer-container",children:(0,f.jsx)(l.Z,{title:"\u56fe\u7247\u526a\u88c1",className:"home-container",children:(0,f.jsxs)(i.Z,{layout:"vertical",children:[n?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{className:"crop-container",children:(0,f.jsxs)(i.Z.Item,{label:"\u88c1\u526a\u56fe\u7247",className:"image-center",children:[(0,f.jsx)(p.ZP,{src:C,onImageLoaded:g,crop:w,onChange:function(e){return b(e)},onComplete:function(e){return R(e)},children:(0,f.jsx)(i.Z.Item,{children:(0,f.jsx)("img",{className:"image-center",src:C,ref:S})})}),(0,f.jsx)(i.Z.Item,{children:(0,f.jsx)(u.ZP,{className:"submit-button",onClick:function(){var e=new Image;e.src=C;var t=document.createElement("canvas");console.log("src",C),console.log("canvas",t),console.log("image",n);var r=e.naturalWidth/S.current.clientWidth,a=e.naturalHeight/S.current.clientHeight;console.log("scaleX",r),console.log("image_HTML.naturalWidth",e.naturalWidth),console.log("image_HTML.width",e.width),console.log("scaleY",a),t.width=w.width,t.height=w.height;var s=t.getContext("2d"),o=window.devicePixelRatio;t.width=w.width*o,t.height=w.height*o,s.setTransform(o,0,0,o,0,0),s.imageSmoothingQuality="high",console.log("crop",w),console.log("image_HTML",e),s.drawImage(e,w.x*r,w.y*a,w.width*r,w.height*a,0,0,w.width,w.height);var c=t.toDataURL("image/jpeg");y(c),console.log("base64Image",c)},children:"\u88c1\u526a"})})]})}),k&&(0,f.jsx)(l.Z,{className:"crop-container",children:(0,f.jsx)(i.Z.Item,{label:"\u9884\u89c8",className:"image-center",children:(0,f.jsx)("img",{src:k,alt:"\u88c1\u526a\u540e\u7684\u56fe\u7247"})})})]}):(0,f.jsx)("p",{className:"image-center",children:"\u8bf7\u5728\u4e0b\u65b9\u4e0a\u4f20\u56fe\u7247"}),(0,f.jsx)(i.Z.Item,{label:"\u4e0a\u4f20\u56fe\u7247",children:(0,f.jsxs)(d.Z.Dragger,{accept:"image/*",showUploadList:!1,beforeUpload:z,onRemove:function(e){console.log("onRemove",e),I(null),g(null)},children:[(0,f.jsx)("p",{className:"ant-upload-drag-icon",children:(0,f.jsx)(h.Z,{})}),(0,f.jsx)("p",{children:"\u70b9\u51fb\u8fd9\u91cc\u6216\u8005\u62d6\u62fd\u56fe\u7247\u5230\u6b64\u5904\u4e0a\u4f20"})]})}),(0,f.jsx)(i.Z.Item,{children:(0,f.jsx)(u.ZP,{className:"submit-button",onClick:O,type:"primary",children:"\u4e0a\u4f20\u56fe\u7247"})}),(0,f.jsx)(i.Z.Item,{children:(0,f.jsx)(u.ZP,{className:"submit-button",onClick:X,type:"primary",children:"\u4e0b\u8f7d\u6587\u4ef6"})})]})})})}}}]);
//# sourceMappingURL=462.bb565bc2.chunk.js.map