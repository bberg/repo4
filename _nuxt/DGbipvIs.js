import{d as o,p as i,N as h,K as u,an as l,a3 as m,ao as d,c as g,J as p,I as n,ap as f}from"./Bx4oWqCX.js";const w=o({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const r=i().public.mdc.useNuxtImage?h:"img",t=e,c=u(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const a=l(m(i().app.baseURL));if(a!=="/"&&!t.src.startsWith(a))return d(a,t.src)}return t.src});return(s,a)=>(g(),p(f(n(r)),{src:n(c),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{w as default};
