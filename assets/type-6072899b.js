import{e as p,f,Q as g,R as v,s as m,o as r,c,F as h,G as y,b as k,u as x,n as C,P as l,_ as L}from"./app-bcbed475.js";const b=["onClick"],B=p({__name:"type",setup(q){const n=["atom","ball","scale","waves","border","points","square","circles","corners","default","gradient","rectangle","square-rotate"],s=f(!1);let t=g([]);const _=e=>{const a=l({type:e});s.value=!0,setTimeout(()=>{a.close(),s.value=!1},3e3)},i=(e,a)=>{l({target:a,text:e,type:e})};return v(()=>{t=[]}),m(()=>{n.forEach((e,a)=>{i(e,t[a])})}),(e,a)=>(r(),c("div",{class:C([{hasOpenLoading:s.value},"center"])},[(r(),c(h,null,y(n,(d,u)=>k("div",{key:u,ref_for:!0,ref:o=>x(t).push(o),class:"box-loading",onClick:o=>_(d)},null,8,b)),64))],2))}});const F=L(B,[["__scopeId","data-v-63e68f06"],["__file","type.vue"]]);export{F as default};
