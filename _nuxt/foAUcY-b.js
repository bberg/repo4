import{_ as k,a as p}from"./Bj0cQHKM.js";import{d as v,x as C,I as r,c as a,J as s,w as _,h as w,e as h,t as o,f as t,F as N,M as B,n as F,g as T,N as V,C as $}from"./Bx4oWqCX.js";const j={key:2,class:"w-full h-48 flex justify-center items-center rounded-t font-bold text-2xl bg-gray-200 dark:bg-gray-600"},z={class:"p-6"},D={class:"m-0 text-lg font-semibold dark:text-gray-50"},I={class:"line-clamp-4 mt-2"},L={class:"p-0 mt-2 flex gap-2"},A={class:"inline-flex gap-2 items-center"},E=["src"],J={class:"font-semibold dark:text-gray-50"},M={class:"text-gray-600 dark:text-gray-300"},G=v({__name:"Card",props:["item"],setup(e){var i,c;const n=(c=(i=C().directory)==null?void 0:i.grid)==null?void 0:c.card;return(S,d)=>{var m,g,u;const f=k,y=V,x=p,l=$;return((m=r(n))==null?void 0:m.type)!=="bullet"?(a(),s(l,{key:0,to:e.item._path,class:F(["border col-span-1 border-gray-200 dark:border-gray-500 hover:border-primary-400 hover:border-solid dark:hover:border-primary-300 rounded relative group transition-all",((g=r(n))==null?void 0:g.type)==="shadow"?"shadow-sm":((u=r(n))==null?void 0:u.type)==="dashed"?"border-dashed":""])},{default:_(()=>[e.item.featured?(a(),s(f,{key:0,class:"ml-6"})):w("",!0),e.item.card_image?(a(),s(y,{key:1,sizes:"400px",alt:`${e.item.title} banner`,class:"w-full h-48 rounded-t object-cover",src:e.item.card_image??"/logo.png"},null,8,["alt","src"])):(a(),h("div",j,o(e.item.title),1)),t("div",z,[t("h3",D,o(e.item.title),1),t("p",I,o(e.item.description),1),t("div",L,[(a(!0),h(N,null,B(e.item.tags,b=>(a(),s(x,{tag:b},null,8,["tag"]))),256))])])]),_:1},8,["to","class"])):(a(),s(l,{key:1,to:e.item._path},{default:_(()=>[t("div",A,[t("img",{class:"h-5 w-5",src:e.item.cover??"/logo.png"},null,8,E),t("span",J,o(e.item.title),1),d[0]||(d[0]=T(" - ")),t("span",M,o(e.item.description),1)])]),_:1},8,["to"]))}}});export{G as _};
