import{_ as u}from"./Bp0qPdIu.js";import{f as i}from"./BFDxGfwR.js";import{d,s as _,x as g,K as r,L as f,u as y,B as x,c as A,e as h,f as B,t as C,I as c,i as D,q as $}from"./Bx4oWqCX.js";import{u as v}from"./CpCzBR5Y.js";import"./DkefCOmr.js";import"./foAUcY-b.js";import"./Bj0cQHKM.js";const w={class:""},H=d({__name:"[slug]",async setup(N){let s,a;const e=_(),o=g(),n=r(()=>{var t;return i(((t=o.directory.tagPages)==null?void 0:t.title)||"All {0}",e.params.slug)}),p=r(()=>{var t;return i(((t=o.directory.tagPages)==null?void 0:t.description)||"All {0}",e.params.slug)}),{data:l}=([s,a]=f(()=>v(`tag-${e.params.slug}`,()=>$("/dir").where({$and:[{_extension:"md"},{tags:{$contains:e.params.slug}}]}).find())),s=await s,a(),s);return y(),x({title:n.value||"Missing Title",meta:[{name:"description",content:p.value||"Missing Description"}]}),(t,P)=>{const m=u;return A(),h("div",w,[B("h1",null,C(c(n)),1),D(m,{listings:c(l)},null,8,["listings"])])}}});export{H as default};
