"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7188],{15746:function(e,n,t){var r=t(21584);n.Z=r.Z},27049:function(e,n,t){var r=t(87462),a=t(4942),s=t(94184),l=t.n(s),o=t(67294),i=t(53124),c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>n.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};n.Z=function(e){var n,t=o.useContext(i.E_),s=t.getPrefixCls,d=t.direction,u=e.prefixCls,m=e.type,h=void 0===m?"horizontal":m,x=e.orientation,b=void 0===x?"center":x,p=e.orientationMargin,j=e.className,f=e.children,y=e.dashed,g=e.plain,w=c(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),Z=s("divider",u),k=b.length>0?"-".concat(b):b,v=!!f,C="left"===b&&null!=p,N="right"===b&&null!=p,T=l()(Z,"".concat(Z,"-").concat(h),(n={},(0,a.Z)(n,"".concat(Z,"-with-text"),v),(0,a.Z)(n,"".concat(Z,"-with-text").concat(k),v),(0,a.Z)(n,"".concat(Z,"-dashed"),!!y),(0,a.Z)(n,"".concat(Z,"-plain"),!!g),(0,a.Z)(n,"".concat(Z,"-rtl"),"rtl"===d),(0,a.Z)(n,"".concat(Z,"-no-default-orientation-margin-left"),C),(0,a.Z)(n,"".concat(Z,"-no-default-orientation-margin-right"),N),n),j),P=(0,r.Z)((0,r.Z)({},C&&{marginLeft:p}),N&&{marginRight:p});return o.createElement("div",(0,r.Z)({className:T},w,{role:"separator"}),f&&"vertical"!==h&&o.createElement("span",{className:"".concat(Z,"-inner-text"),style:P},f))}},71230:function(e,n,t){var r=t(92820);n.Z=r.Z},94538:function(e,n,t){t.d(n,{e:function(){return m}});var r=t(85893),a=t(85402),s=t(71577),l=t(5152),o=t.n(l),i=t(64777);let c=o()(()=>Promise.all([t.e(2074),t.e(2461)]).then(t.t.bind(t,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),d=o()(()=>Promise.all([t.e(2074),t.e(1538)]).then(t.t.bind(t,11538,23)),{loadableGenerated:{webpack:()=>[11538]},ssr:!1}),u=o()(()=>Promise.all([t.e(2074),t.e(6773)]).then(t.t.bind(t,6773,23)),{loadableGenerated:{webpack:()=>[6773]},ssr:!1}),m=e=>{let{user:n,isEnabled:t,label:l,onClick:o}=e;async function m(e){let{id:n}=e;try{let e=await (0,i.rQ)(i.NM,{data:{userId:n,enabled:!t},method:"POST",auth:!0});return e.success}catch(e){console.error(e)}return!1}let h=t?"ban":"unban",x=t?(0,r.jsx)(c,{style:{color:"var(--ant-error)"}}):(0,r.jsx)(d,{style:{color:"var(--ant-warning)"}}),b=(0,r.jsxs)(r.Fragment,{children:["Are you sure you want to ",h," ",(0,r.jsx)("strong",{children:n.displayName}),t?" and remove their messages?":"?"]}),p=()=>{a.Z.confirm({title:"Confirm ".concat(h),content:b,onCancel:()=>{},onOk:()=>new Promise((e,t)=>{let r=m(n);r?setTimeout(()=>{e(r),null==o||o()},3e3):t()}),okType:"danger",okText:t?"Absolutely":null,icon:x})};return(0,r.jsx)(s.Z,{type:"primary",onClick:p,size:"small",icon:t?(0,r.jsx)(u,{twoToneColor:"#ff4d4f"}):null,className:"block-user-button",children:l||h})};m.defaultProps={label:"",onClick:null}},6491:function(e,n,t){t.d(n,{Z:function(){return T}});var r=t(85893),a=t(67294),s=t(94199),l=t(85402),o=t(85818),i=t(71230),c=t(15746),d=t(27049),u=t(26713),m=t(45938),h=t(58091),x=t(96486),b=t(94538),p=t(71577),j=t(5152),f=t.n(j),y=t(64777);let g=f()(()=>Promise.all([t.e(2074),t.e(2461)]).then(t.t.bind(t,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),w=f()(()=>Promise.all([t.e(2074),t.e(1538)]).then(t.t.bind(t,11538,23)),{loadableGenerated:{webpack:()=>[11538]},ssr:!1}),Z=f()(()=>Promise.all([t.e(2074),t.e(6773)]).then(t.t.bind(t,6773,23)),{loadableGenerated:{webpack:()=>[6773]},ssr:!1}),k=f()(()=>Promise.all([t.e(2074),t.e(4612)]).then(t.t.bind(t,64612,23)),{loadableGenerated:{webpack:()=>[64612]},ssr:!1}),v=e=>{var n;let{user:t,onClick:a}=e;async function s(e,n){let{id:t}=e;try{let e=await (0,y.rQ)(y.jr,{data:{userId:t,isModerator:n},method:"POST",auth:!0});return e.success}catch(e){console.error(e)}return!1}let o=null===(n=t.scopes)||void 0===n?void 0:n.includes("MODERATOR"),i=o?"remove moderator":"add moderator",c=o?(0,r.jsx)(g,{style:{color:"var(--ant-error)"}}):(0,r.jsx)(w,{style:{color:"var(--ant-warning)"}}),d=(0,r.jsxs)(r.Fragment,{children:["Are you sure you want to ",i," ",(0,r.jsx)("strong",{children:t.displayName}),"?"]}),u=()=>{l.Z.confirm({title:"Confirm ".concat(i),content:d,onCancel:()=>{},onOk:()=>new Promise((e,n)=>{let r=s(t,!o);r?setTimeout(()=>{e(r),null==a||a()},3e3):n()}),okType:"danger",okText:o?"Yup!":null,icon:c})};return(0,r.jsx)(p.Z,{type:"primary",onClick:u,size:"small",icon:o?(0,r.jsx)(Z,{twoToneColor:"#ff4d4f"}):(0,r.jsx)(k,{twoToneColor:"#22bb44"}),className:"block-user-button",children:i})};v.defaultProps={onClick:null};var C=t(45840),N=t(70241);let T=e=>{let{user:n,connectionInfo:t,children:p}=e,[j,f]=(0,a.useState)(!1),y=()=>{f(!0)},g=()=>{f(!1)},{displayName:w,createdAt:Z,previousNames:k,nameChangedAt:T,disabledAt:P}=n,{connectedAt:O,messageCount:A,userAgent:D}=t||{},E=null,M=k&&[...k];k&&k.length>1&&T&&(E=new Date(T),M.reverse());let S=new Date(Z),G=(0,h.Z)(S,"PP pp"),I=E?(0,m.Z)(E):null;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{title:(0,r.jsxs)(r.Fragment,{children:["Created at: ",G,".",(0,r.jsx)("br",{})," Click for more info."]}),placement:"bottomLeft",children:(0,r.jsx)("button",{type:"button","aria-label":"Display more details about this user",className:"user-item-container",onClick:y,children:p})}),(0,r.jsx)(l.Z,{destroyOnClose:!0,width:600,cancelText:"Close",okButtonProps:{style:{display:"none"}},title:"User details: ".concat(w),open:j,onOk:g,onCancel:g,children:(0,r.jsxs)("div",{className:"user-details",children:[(0,r.jsx)(o.Z.Title,{level:4,children:w}),(0,r.jsxs)("p",{className:"created-at",children:["User created at ",G,"."]}),(0,r.jsxs)(i.Z,{gutter:16,children:[t&&(0,r.jsxs)(c.Z,{md:E?12:24,children:[(0,r.jsx)(o.Z.Title,{level:5,children:"This user is currently connected to Chat."}),(0,r.jsxs)("ul",{className:"connection-info",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Active for:"})," ",(0,m.Z)(new Date(O))]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Messages sent:"})," ",A]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"User Agent:"}),(0,r.jsx)("br",{}),(0,N.AB)(D)]})]})]}),E&&(0,r.jsxs)(c.Z,{md:t?12:24,children:[(0,r.jsx)(o.Z.Title,{level:5,children:"This user is also seen as:"}),(0,r.jsx)("ul",{className:"previous-names-list",children:(0,x.uniq)(M).map((e,n)=>(0,r.jsxs)("li",{className:0===n?"latest":"",children:[(0,r.jsx)("span",{className:"user-name-item",children:e}),0===n?" (Changed ".concat(I," ago)"):""]}))})]})]}),(0,r.jsx)(d.Z,{}),(0,r.jsxs)(u.Z,{direction:"horizontal",children:[P?(0,r.jsxs)(r.Fragment,{children:["This user was banned on ",(0,r.jsx)("code",{children:(0,C.u)(P)}),".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(b.e,{label:"Unban this user",user:n,isEnabled:!1,onClick:g})]}):(0,r.jsx)(b.e,{label:"Ban this user",user:n,isEnabled:!0,onClick:g}),(0,r.jsx)(v,{user:n,onClick:g})]})]})})]})};T.defaultProps={connectionInfo:null}},45840:function(e,n,t){t.d(n,{K:function(){return c},u:function(){return i}});var r=t(85893),a=t(54398),s=t(58091),l=t(6491),o=t(94538);function i(e){return(0,s.Z)(new Date(e),"MMM d H:mma")}let c=e=>{let{data:n}=e;return(0,r.jsx)(a.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:[{title:"Last Known Display Name",dataIndex:"displayName",key:"displayName",render:(e,n)=>(0,r.jsx)(l.Z,{user:n,children:(0,r.jsx)("span",{className:"display-name",children:e})})},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:e=>i(e),sorter:(e,n)=>new Date(e.createdAt).getTime()-new Date(n.createdAt).getTime(),sortDirections:["descend","ascend"]},{title:"Disabled at",dataIndex:"disabledAt",key:"disabledAt",defaultSortOrder:"descend",render:e=>e?i(e):null,sorter:(e,n)=>new Date(e.disabledAt).getTime()-new Date(n.disabledAt).getTime(),sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:(e,n)=>(0,r.jsx)(o.e,{user:n,isEnabled:!n.disabledAt})}],dataSource:n,size:"small",rowKey:"id"})}}}]);
//# sourceMappingURL=7188-a7411d0a016c1e3d.js.map