(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1232:function(e,r,n){"use strict";n.d(r,{Z:function(){return m}});var t=n(7294),o=n(3264),i=n(9893),s=n(7414),a=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,r,n)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,p=(e,r)=>{for(var n in r||(r={}))c.call(r,n)&&f(e,n,r[n]);if(l)for(var n of l(r))u.call(r,n)&&f(e,n,r[n]);return e},d=(e,r)=>{var n={};for(var t in e)c.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))0>r.indexOf(t)&&u.call(e,t)&&(n[t]=e[t]);return n};let x={position:"left",spacing:"md"},m=(0,t.forwardRef)((e,r)=>{let n=(0,o.N4)("Group",x,e),{className:a,position:l,align:c,children:u,noWrap:f,grow:m,spacing:g,unstyled:b}=n,h=d(n,["className","position","align","children","noWrap","grow","spacing","unstyled"]),w=t.Children.toArray(u).filter(Boolean),{classes:j,cx:z}=(0,i.Z)({align:c,grow:m,noWrap:f,spacing:g,position:l,count:w.length},{unstyled:b,name:"Group"});return t.createElement(s.x,p({className:z(j.root,a),ref:r},h),w)});m.displayName="@mantine/core/Group"},9893:function(e,r,n){"use strict";n.d(r,{H:function(){return o}});var t=n(1485);let o={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var i=(0,t.k)((e,{spacing:r,position:n,noWrap:t,grow:i,align:s,count:a})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:s||"center",flexWrap:t?"nowrap":"wrap",justifyContent:o[n],gap:e.fn.size({size:r,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:i?`calc(${100/a}% - ${e.fn.size({size:r,sizes:e.spacing})-e.fn.size({size:r,sizes:e.spacing})/a}px)`:void 0,flexGrow:i?1:0}}}));r.Z=i},5728:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5518)}])},5518:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return p}});var t=n(5893),o=n(5117),i=n(9236),s=n(1163),a=n(1232),l=n(9834),c=n(3991);let u=()=>{let e=(0,s.useRouter)(),r={tex:(0,t.jsx)(c.rwW,{size:200,stroke:1.5}),md:(0,t.jsx)(c.khS,{size:200,stroke:1.5}),csv:(0,t.jsx)(c.fqO,{size:200,stroke:1.5}),yaml:(0,t.jsx)(c.ZdG,{size:200,stroke:1.5}),audio:(0,t.jsx)(c.sv8,{size:200,stroke:1.5}),mantine:(0,t.jsx)(c.S_3,{size:200,stroke:1.5})};return(0,t.jsx)(a.Z,{position:"center",mt:"xl",grow:!0,children:Object.entries(r).map((r,n)=>{let[o,i]=r;return(0,t.jsx)(l.A,{onClick:()=>e.push("/".concat(o)),size:180,sx:e=>({backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.light,color:e.colors.yellow[4]}),children:i},n)})})},f=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.x,{mt:100,align:"center",children:"Welcome to"}),(0,t.jsx)(i.D,{mb:200,align:"center",children:"How to Put Almost Anything in a Papaya"}),(0,t.jsx)(u,{})]});var p=f}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);