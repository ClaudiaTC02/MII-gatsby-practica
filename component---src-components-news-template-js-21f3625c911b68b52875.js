"use strict";(self.webpackChunkgatsby_news=self.webpackChunkgatsby_news||[]).push([[605],{3722:function(e,t,a){a.d(t,{A:function(){return o}});var l=a(6540);var n=()=>l.createElement("footer",null,l.createElement("p",null,"© ",(new Date).getFullYear()," Claudia Torres Cruz")),r=a(4810);var c=()=>{const e=(0,r.GR)("3159585216");return l.createElement("header",null,l.createElement("h1",null,e.site.siteMetadata.title),l.createElement("nav",null,l.createElement(r.N_,{to:(0,r.Fe)("/")},"Inicio")," | ",l.createElement(r.N_,{to:(0,r.Fe)("/tech")},"Tecnología")," |"," ",l.createElement(r.N_,{to:(0,r.Fe)("/sports")},"Deportes")," | ",l.createElement(r.N_,{to:(0,r.Fe)("/health")},"Salud")))};var o=e=>{let{children:t}=e;return l.createElement("div",null,l.createElement(c,null),l.createElement("main",null,t),l.createElement(n,null))}},6940:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var l={};a.r(l),a.d(l,{modalOverlay:function(){return s},ratingButton:function(){return m},ratingModal:function(){return u},ratingModalButton:function(){return i}});var n=a(3722),r=a(6540),c=a(9712);var o=e=>{let{onRate:t}=e;const{0:a,1:l}=(0,r.useState)(0),n=e=>{l(e),t(e)};return r.createElement("div",{className:"rating-module--rating--1357a"},[1,2,3,4,5].map((e=>r.createElement("span",{key:e,role:"button",tabIndex:0,className:"rating-module--star--a4836 "+(e<=a?"rating-module--selected--56efa":""),onClick:()=>n(e),onKeyDown:t=>((e,t)=>{"Enter"!==e.key&&" "!==e.key||n(t)})(t,e),"aria-label":"Rate "+e+" stars",style:{cursor:"pointer"}},e<=a?"★":"☆"))))},s="modal-module--modalOverlay--4c169",m="modal-module--ratingButton--ea172",u="modal-module--ratingModal--28f9e",i="modal-module--ratingModalButton--0a08e";var d=e=>{let{title:t}=e;const{ratings:a,updateRating:n}=(0,c.G)(),{0:d,1:E}=(0,r.useState)(!1),g=a.find((e=>e.title===t))||{avgRating:0,count:0};return r.createElement(r.Fragment,null,r.createElement("button",{id:l,onClick:()=>{E(!0)},className:m},"Ver valoraciones"),d&&r.createElement("div",{className:s},r.createElement("div",{className:u},r.createElement("h3",null,'Valoraciones para "',t,'"'),r.createElement("p",null,r.createElement("strong",null,"Promedio:")," ",g.avgRating.toFixed(2)," estrellas"),r.createElement("p",null,r.createElement("strong",null,"Cantidad:")," ",g.count," valoraciones"),r.createElement("button",{onClick:()=>{E(!1)},className:i},"Cerrar"))),r.createElement(o,{onRate:e=>{n(t,e)}}))};var E=e=>{let{pageContext:t}=e;const{topic:a,articles:l}=t,{0:c,1:o}=(0,r.useState)(0);(0,r.useEffect)((()=>{l.length>0&&(e=>{const t=new Date(e),a=new Date-t,l=Math.floor(a/864e5);o(l)})(l[0].published_at)}),[l]);const s={tech:"tecnología",health:"salud",sports:"deportes"}[a]||a;return r.createElement(n.A,null,r.createElement("h1",{className:"card-module--topicTitle--a00ee"},"Noticias sobre ",s),r.createElement("div",{className:"card-module--newsGrid--2e8a7"},l.map((e=>{return r.createElement("div",{key:e.uuid,className:"card-module--card--63c6d"},r.createElement("img",{src:e.image_url,alt:e.title}),r.createElement("div",{className:"card-module--cardContent--c4158"},r.createElement("h3",{className:"card-module--title--65e8b"},e.title),r.createElement("p",{className:"card-module--snippet--2e9a8"},e.description)),r.createElement("div",{className:"card-module--cardFooter--059f8"},r.createElement("span",null,(t=e.published_at,new Date(t).toLocaleDateString())),r.createElement("a",{className:"card-module--readMore--cd884",href:e.url,target:"_blank",rel:"noopener noreferrer"},"Leer más")),r.createElement("div",{style:{top:"5px",right:"5px",fontSize:"12px",color:"gray",marginTop:"5px"}},"Han pasado ",c," días"),r.createElement("div",{className:"card-module--ratingContainer--d6601"},r.createElement(d,{title:e.title})));var t}))))}}}]);
//# sourceMappingURL=component---src-components-news-template-js-21f3625c911b68b52875.js.map