import{e as N,f as m,r as o,o as d,c as f,a,w as e,d as t,F as x,G as D,k as p,t as v,Z as j,h as k,_ as B}from"./app-bcbed475.js";const K={class:"center"},L=N({__name:"edit",setup(T){const u=m({name:"",email:""}),s=m(),r=m(!1),y=m([{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}]);return(z,n)=>{const c=o("vs-th"),b=o("vs-tr"),_=o("vs-td"),h=o("vs-table"),V=o("vs-input"),i=o("vs-option"),w=o("vs-select"),C=o("vs-dialog");return d(),f("div",K,[a(h,null,{thead:e(()=>[a(b,null,{default:e(()=>[a(c,null,{default:e(()=>[t(" Name ")]),_:1}),a(c,null,{default:e(()=>[t(" Email ")]),_:1}),a(c,null,{default:e(()=>[t(" Id ")]),_:1})]),_:1})]),tbody:e(()=>[(d(!0),f(x,null,D(y.value,(l,g)=>(d(),p(b,{key:g,data:l},{default:e(()=>[a(_,{edit:"",onClick:S=>{u.value=l,s.value="name",r.value=!0}},{default:e(()=>[t(v(l.name),1)]),_:2},1032,["onClick"]),a(_,{edit:"",onClick:S=>{u.value=l,s.value="email",r.value=!0}},{default:e(()=>[t(v(l.email),1)]),_:2},1032,["onClick"]),a(_,null,{default:e(()=>[t(v(l.id),1)]),_:2},1024)]),_:2},1032,["data"]))),128))]),_:1}),a(C,{modelValue:r.value,"onUpdate:modelValue":n[4]||(n[4]=l=>r.value=l)},{header:e(()=>[t(" Change Prop "+v(s.value),1)]),default:e(()=>[s.value=="email"?(d(),p(V,{key:0,modelValue:u.value[s.value],"onUpdate:modelValue":n[0]||(n[0]=l=>u.value[s.value]=l),block:"",onKeypress:n[1]||(n[1]=j(l=>r.value=!1,["enter"]))},null,8,["modelValue"])):k("",!0),s.value=="name"?(d(),p(w,{key:1,modelValue:u.value[s.value],"onUpdate:modelValue":n[2]||(n[2]=l=>u.value[s.value]=l),block:"",placeholder:"Select",onChange:n[3]||(n[3]=l=>r.value=!1)},{default:e(()=>[a(i,{label:"Vuesax",value:"Vuesax"},{default:e(()=>[t(" Vuesax ")]),_:1}),a(i,{label:"Vue",value:"Vuejs"},{default:e(()=>[t(" Vue ")]),_:1}),a(i,{label:"Javascript",value:"Javascript"},{default:e(()=>[t(" Javascript ")]),_:1}),a(i,{disabled:"",label:"Sass",value:"Sass"},{default:e(()=>[t(" Sass ")]),_:1}),a(i,{label:"Typescript",value:"Typescript"},{default:e(()=>[t(" Typescript ")]),_:1}),a(i,{label:"Webpack",value:"Webpack"},{default:e(()=>[t(" Webpack ")]),_:1}),a(i,{label:"Nodejs",value:"Nodejs"},{default:e(()=>[t(" Nodejs ")]),_:1})]),_:1},8,["modelValue"])):k("",!0)]),_:1},8,["modelValue"])])}}}),J=B(L,[["__file","edit.vue"]]);export{J as default};
