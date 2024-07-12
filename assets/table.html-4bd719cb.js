import{_ as v,r as e,o as h,c as w,a as t,w as a,b as n,d as s}from"./app-66719e14.js";const _={},f=n("h1",{id:"table",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#table","aria-hidden":"true"},"#"),s(" Table")],-1),q=n("h2",{id:"default",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#default","aria-hidden":"true"},"#"),s(" Default")],-1),x=n("p",null,[s("Create a table simply with the "),n("code",null,"vs-table"),s(" component and its"),n("code",null,"vs-tr"),s(", "),n("code",null,"vs-td"),s(","),n("code",null,"vs-th"),s(" components.")],-1),S=n("p",null,"This component has a different logic for better data management and freer customization according to needs.",-1),D=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("center examplex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#thead"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Name "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Email "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Id "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#tbody"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(tr, i) in users"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("i"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tr"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.name }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.email }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.id }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),C=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
type User `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(" number "),n("span",{class:"token operator"},"|"),s(` string
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(` string
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"users"),n("span",{class:"token operator"},":"),s(" User"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leanne Graham'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Bret'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sincere@april.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hildegard.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ervin Howell'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antonette'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Shanna@melissa.tv'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'anastasia.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementine Bauch'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Samantha'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nathan@yesenia.net'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ramiro.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Patricia Lebsack'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karianne'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Julianne.OConner@kory.org'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'kale.biz'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chelsey Dietrich'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kamren'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Lucio_Hettinger@annie.ca'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demarco.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Mrs. Dennis Schulist'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leopoldo_Corkery'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karley_Dach@jasper.info'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ola.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kurtis Weissnat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Elwyn.Skiles'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Telly.Hoeger@billy.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'elvis.io'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nicholas Runolfsdottir V'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Maxime_Nienow'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sherwood@rosamond.me'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'jacynthe.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Glenna Reichert'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Delphine'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chaim_McDermott@dana.io'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'conrad.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementina DuBuque'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Moriah.Stanton'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Rey.Padberg@karina.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ambrose.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),z=n("h2",{id:"striped",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#striped","aria-hidden":"true"},"#"),s(" Striped")],-1),N=n("p",null,[s("You can easily strip the table with the "),n("code",null,"striped"),s(" property")],-1),P=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("center examplex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-table")]),s(),n("span",{class:"token attr-name"},"striped"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#thead"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Name "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Email "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Id "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#tbody"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(tr, i) in users"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("i"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tr"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.name }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.email }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.id }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"highlight-lines"},[n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),L=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
type User `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(" number "),n("span",{class:"token operator"},"|"),s(` string
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(` string
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"users"),n("span",{class:"token operator"},":"),s(" User"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leanne Graham'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Bret'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sincere@april.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hildegard.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ervin Howell'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antonette'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Shanna@melissa.tv'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'anastasia.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementine Bauch'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Samantha'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nathan@yesenia.net'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ramiro.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Patricia Lebsack'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karianne'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Julianne.OConner@kory.org'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'kale.biz'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chelsey Dietrich'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kamren'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Lucio_Hettinger@annie.ca'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demarco.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Mrs. Dennis Schulist'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leopoldo_Corkery'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karley_Dach@jasper.info'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ola.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kurtis Weissnat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Elwyn.Skiles'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Telly.Hoeger@billy.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'elvis.io'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nicholas Runolfsdottir V'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Maxime_Nienow'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sherwood@rosamond.me'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'jacynthe.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Glenna Reichert'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Delphine'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chaim_McDermott@dana.io'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'conrad.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementina DuBuque'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Moriah.Stanton'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Rey.Padberg@karina.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ambrose.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),K=n("h2",{id:"color",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#color","aria-hidden":"true"},"#"),s(" Color")],-1),M=n("p",null,[s("Change the color of a tr by adding the color property to the component "),n("code",null,"vs-tr")],-1),j=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#thead"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Name "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Email "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Id "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#tbody"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(tr, i) in users"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("i"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tr"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("trColor(i)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.name }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.email }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.id }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),T=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" Color "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuesax-alpha'"),s(`

type User `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(" number "),n("span",{class:"token operator"},"|"),s(` string
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(` string
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" trColor "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token operator"},":"),s(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"Color"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token operator"},":"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'danger'"),s(`
    `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token operator"},":"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'success'"),s(`
    `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token operator"},":"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'primary'"),s(`
    `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token operator"},":"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'warn'"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'secondary'"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"users"),n("span",{class:"token operator"},":"),s(" User"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leanne Graham'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Bret'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sincere@april.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hildegard.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ervin Howell'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antonette'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Shanna@melissa.tv'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'anastasia.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementine Bauch'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Samantha'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nathan@yesenia.net'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ramiro.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Patricia Lebsack'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karianne'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Julianne.OConner@kory.org'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'kale.biz'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chelsey Dietrich'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kamren'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Lucio_Hettinger@annie.ca'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demarco.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Mrs. Dennis Schulist'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leopoldo_Corkery'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karley_Dach@jasper.info'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ola.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kurtis Weissnat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Elwyn.Skiles'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Telly.Hoeger@billy.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'elvis.io'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nicholas Runolfsdottir V'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Maxime_Nienow'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sherwood@rosamond.me'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'jacynthe.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Glenna Reichert'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Delphine'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chaim_McDermott@dana.io'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'conrad.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementina DuBuque'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Moriah.Stanton'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Rey.Padberg@karina.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ambrose.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),E=n("h2",{id:"pagination",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pagination","aria-hidden":"true"},"#"),s(" Pagination")],-1),R=n("p",null,[s("You can add the pagination functionality for the table using the "),n("code",null,"#footer"),s(" slot and the vs-pagination component")],-1),B=n("p",null,[s("To make the development easier you can use the vuesax function that generates the items ("),n("code",null,"getPage"),s(") based on the page and also the one that generates the total number of pages in the pagination component ("),n("code",null,"getLength"),s(")")],-1),A=n("p",null,"This way of handling data is to improve the freedom of customization without losing the ease of implementation",-1),U=n("p",null,"See the example",-1),H=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#thead"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Name "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Email "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Id "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#tbody"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),s(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(tr, i) in getPage(totalUser, page, pageSize)"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("i"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tr"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.name }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.email }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.id }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-pagination")]),s(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("current-page")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("page"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("page-size")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("pageSize"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},":page-sizes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("[3, 5, 7]"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("totalUser.length"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),V=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getPage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuesax-alpha'"),s(`

type User `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(" number "),n("span",{class:"token operator"},"|"),s(` string
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(` string
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" page "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" pageSize "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"totalUser"),n("span",{class:"token operator"},":"),s(" User"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leanne Graham'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Bret'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sincere@april.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hildegard.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ervin Howell'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antonette'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Shanna@melissa.tv'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'anastasia.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementine Bauch'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Samantha'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nathan@yesenia.net'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ramiro.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Patricia Lebsack'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karianne'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Julianne.OConner@kory.org'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'kale.biz'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chelsey Dietrich'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kamren'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Lucio_Hettinger@annie.ca'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demarco.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Mrs. Dennis Schulist'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leopoldo_Corkery'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karley_Dach@jasper.info'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ola.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kurtis Weissnat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Elwyn.Skiles'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Telly.Hoeger@billy.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'elvis.io'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nicholas Runolfsdottir V'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Maxime_Nienow'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sherwood@rosamond.me'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'jacynthe.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Glenna Reichert'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Delphine'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chaim_McDermott@dana.io'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'conrad.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementina DuBuque'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Moriah.Stanton'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Rey.Padberg@karina.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ambrose.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),G=n("h2",{id:"single-selected",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#single-selected","aria-hidden":"true"},"#"),s(" Single Selected")],-1),W=n("p",null,[s("You can add the select functionality with a v-model in the table and the "),n("code",null,"is-selected"),s(" property")],-1),J=n("div",{class:"custom-container tip"},[s("TIP "),n("p",null,[s("Using the "),n("code",null,"data"),s(" property in the "),n("code",null,"tr"),s(" is important as that is the data to be added to the v-model")])],-1),I=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-table")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#thead"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Name "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Email "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Id "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#tbody"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(tr, i) in users"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("i"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tr"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.name }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.email }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.id }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("data-table"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("pre")]),n("span",{class:"token punctuation"},">")]),s(`
        {{ selected ? selected : 'Select an item in the table' }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("pre")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),O=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

type User `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(" number "),n("span",{class:"token operator"},"|"),s(` string
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(` string
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" selected "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("User"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"users"),n("span",{class:"token operator"},":"),s(" User"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leanne Graham'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Bret'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sincere@april.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hildegard.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ervin Howell'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antonette'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Shanna@melissa.tv'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'anastasia.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementine Bauch'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Samantha'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nathan@yesenia.net'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ramiro.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Patricia Lebsack'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karianne'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Julianne.OConner@kory.org'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'kale.biz'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chelsey Dietrich'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kamren'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Lucio_Hettinger@annie.ca'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demarco.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Mrs. Dennis Schulist'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leopoldo_Corkery'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karley_Dach@jasper.info'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ola.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kurtis Weissnat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Elwyn.Skiles'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Telly.Hoeger@billy.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'elvis.io'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nicholas Runolfsdottir V'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Maxime_Nienow'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sherwood@rosamond.me'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'jacynthe.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Glenna Reichert'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Delphine'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chaim_McDermott@dana.io'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'conrad.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementina DuBuque'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Moriah.Stanton'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Rey.Padberg@karina.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ambrose.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),$=n("h2",{id:"multiple-selected",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#multiple-selected","aria-hidden":"true"},"#"),s(" Multiple Selected")],-1),Y=n("p",null,[s("You can do multiple select functionality in the table with the "),n("code",null,"v-model"),s(" property with its value being an array")],-1),F=n("p",null,[s("for this functionality you can use for example the vuesax checkboxes and the function "),n("code",null,"toggleSelectAll"),s(" in the checkbox of th")],-1),Q=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-table")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"multiple"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-input")]),s(`
          `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("search"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"block"),s(`
          `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("url"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"input-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("border"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Search"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#thead"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-checkbox")]),s(`
              `),n("span",{class:"token attr-name"},":checked-force"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected.length > 0"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token attr-name"},":indeterminate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected.length < users.length"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected = toggleSelectAll(selected, getSearch)"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token punctuation"},"/>")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Name "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Email "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Id "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#tbody"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(tr, i) in users"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("i"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tr"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),s(),n("span",{class:"token attr-name"},"checkbox"),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-checkbox")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tr"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.name }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.email }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.id }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("data-table"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("pre")]),n("span",{class:"token punctuation"},">")]),s(`
        {{ selected.length > 0 ? selected : 'Select an item in the table' }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("pre")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),X=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" computed"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" toggleSelectAll "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuesax-alpha'"),s(`

type User `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(" number "),n("span",{class:"token operator"},"|"),s(` string
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(` string
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" search "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" selected "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("User"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" users "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("User"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leanne Graham'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Bret'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sincere@april.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hildegard.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ervin Howell'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antonette'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Shanna@melissa.tv'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'anastasia.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementine Bauch'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Samantha'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nathan@yesenia.net'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ramiro.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Patricia Lebsack'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karianne'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Julianne.OConner@kory.org'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'kale.biz'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chelsey Dietrich'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kamren'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Lucio_Hettinger@annie.ca'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demarco.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Mrs. Dennis Schulist'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leopoldo_Corkery'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karley_Dach@jasper.info'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ola.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kurtis Weissnat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Elwyn.Skiles'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Telly.Hoeger@billy.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'elvis.io'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nicholas Runolfsdottir V'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Maxime_Nienow'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sherwood@rosamond.me'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'jacynthe.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Glenna Reichert'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Delphine'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chaim_McDermott@dana.io'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'conrad.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementina DuBuque'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Moriah.Stanton'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Rey.Padberg@karina.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ambrose.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" getSearch "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" users"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
    e`),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),s("search"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Z=n("h2",{id:"expandable-data",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#expandable-data","aria-hidden":"true"},"#"),s(" Expandable data")],-1),nn=n("p",null,[s("To add a "),n("code",null,"tr"),s(" that can display expanded data use the"),n("code",null,"#expand"),s(" slot inside the "),n("code",null,"vs-tr"),s(" component.")],-1),sn=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#thead"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Name "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Email "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Id "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#tbody"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(tr, i) in users"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("i"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tr"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.name }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.email }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.id }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`

          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#expand"),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("con-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-avatar")]),n("span",{class:"token punctuation"},">")]),s(`
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("`/avatars/avatar-${i + 1}.png`"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-avatar")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
                  {{ tr.name }}
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("flat"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token punctuation"},">")]),s(`
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bx bx-lock-open-alt"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-button")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("flat"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token punctuation"},">")]),s(" Send Email "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-button")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("border"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("danger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                  Remove User
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-button")]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),an=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
type User `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(" number "),n("span",{class:"token operator"},"|"),s(` string
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(` string
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"users"),n("span",{class:"token operator"},":"),s(" User"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leanne Graham'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Bret'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sincere@april.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hildegard.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ervin Howell'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antonette'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Shanna@melissa.tv'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'anastasia.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementine Bauch'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Samantha'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nathan@yesenia.net'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ramiro.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Patricia Lebsack'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karianne'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Julianne.OConner@kory.org'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'kale.biz'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chelsey Dietrich'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kamren'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Lucio_Hettinger@annie.ca'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demarco.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Mrs. Dennis Schulist'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leopoldo_Corkery'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karley_Dach@jasper.info'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ola.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kurtis Weissnat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Elwyn.Skiles'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Telly.Hoeger@billy.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'elvis.io'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nicholas Runolfsdottir V'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Maxime_Nienow'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sherwood@rosamond.me'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'jacynthe.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Glenna Reichert'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Delphine'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chaim_McDermott@dana.io'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'conrad.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementina DuBuque'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Moriah.Stanton'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Rey.Padberg@karina.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ambrose.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),tn=n("h2",{id:"edit-data",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#edit-data","aria-hidden":"true"},"#"),s(" Edit data")],-1),en=n("p",null,[s("You can edit the data inside the table easily using the "),n("code",null,"vs-dialog"),s(" component and the magic of vuejs")],-1),on=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#thead"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Name "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Email "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(" Id "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#tbody"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(tr, i) in users"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("i"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tr"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),s(`
            `),n("span",{class:"token attr-name"},"edit"),s(`
            `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(";(edit = tr), (editProp = 'name'), (editActive = true)"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.name }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),s(`
            `),n("span",{class:"token attr-name"},"edit"),s(`
            `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(";(edit = tr), (editProp = 'email'), (editActive = true)"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.email }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.id }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-dialog")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("editActive"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token punctuation"},">")]),s(" Change Prop {{ editProp }} "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-input")]),s(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("editProp == 'email'"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("edit[editProp]"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"block"),s(`
        `),n("span",{class:"token attr-name"},"@keypress.enter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("editActive = false"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-select")]),s(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("editProp == 'name'"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("edit[editProp]"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"block"),s(`
        `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Select"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("editActive = false"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Vuesax"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Vuesax"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" Vuesax "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Vue"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Vuejs"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" Vue "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Javascript"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Javascript"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          Javascript
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"disabled"),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Sass"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Sass"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" Sass "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Typescript"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Typescript"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          Typescript
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Webpack"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Webpack"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" Webpack "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Nodejs"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Nodejs"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" Nodejs "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-select")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-dialog")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),pn=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

type User `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(" number "),n("span",{class:"token operator"},"|"),s(` string
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(` string
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" edit "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("Pick"),n("span",{class:"token operator"},"<"),s("User"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'name'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'email'"),n("span",{class:"token operator"},">>"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" editProp "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("keyof "),n("span",{class:"token keyword"},"typeof"),s(" edit"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" editActive "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" users "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("User"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leanne Graham'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Bret'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sincere@april.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hildegard.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ervin Howell'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antonette'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Shanna@melissa.tv'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'anastasia.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementine Bauch'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Samantha'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nathan@yesenia.net'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ramiro.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Patricia Lebsack'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karianne'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Julianne.OConner@kory.org'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'kale.biz'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chelsey Dietrich'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kamren'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Lucio_Hettinger@annie.ca'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demarco.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Mrs. Dennis Schulist'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leopoldo_Corkery'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karley_Dach@jasper.info'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ola.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kurtis Weissnat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Elwyn.Skiles'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Telly.Hoeger@billy.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'elvis.io'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nicholas Runolfsdottir V'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Maxime_Nienow'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sherwood@rosamond.me'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'jacynthe.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Glenna Reichert'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Delphine'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chaim_McDermott@dana.io'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'conrad.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementina DuBuque'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Moriah.Stanton'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Rey.Padberg@karina.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ambrose.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),cn=n("h2",{id:"sort",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sort","aria-hidden":"true"},"#"),s(" Sort")],-1),ln=n("p",null,[s("Sort functionality is independent and you can use the global function "),n("code",null,"sortData")],-1),rn=n("div",{class:"custom-container tip"},[s("TIP "),n("p",null,[s("The "),n("code",null,"sortData"),s(" function needs 4 parameters: the event, the data of the table, the number of items to be ordered, and the sort type")])],-1),un=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},`/**
 * return array was sorted
 */`),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"sortData"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token keyword"},"extends"),s(" Record"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"unknown"),n("span",{class:"token operator"},">>")])]),n("span",{class:"token punctuation"},"("),s(`
  event`),n("span",{class:"token operator"},":"),s(" Event"),n("span",{class:"token punctuation"},","),s(`
  arr`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  sortKey`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"keyof"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),s(`
  sortType`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'desc'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'esc'"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
`)])])],-1),kn=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#thead"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),s(),n("span",{class:"token attr-name"},"sort"),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("users = sortData($event, users, 'name')"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            Name
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),s(),n("span",{class:"token attr-name"},"sort"),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("users = sortData($event, users, 'email')"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            Email
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),s(),n("span",{class:"token attr-name"},"sort"),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("users = sortData($event, users, 'id')"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            Id
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#tbody"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(tr, i) in users"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("i"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tr"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.name }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.email }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.id }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),gn=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sortData "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuesax-alpha'"),s(`

type User `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(" number "),n("span",{class:"token operator"},"|"),s(` string
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(` string
  `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(` string
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" users "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("User"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leanne Graham'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Bret'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sincere@april.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hildegard.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ervin Howell'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antonette'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Shanna@melissa.tv'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'anastasia.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementine Bauch'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Samantha'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nathan@yesenia.net'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ramiro.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Patricia Lebsack'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karianne'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Julianne.OConner@kory.org'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'kale.biz'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chelsey Dietrich'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kamren'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Lucio_Hettinger@annie.ca'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demarco.info'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Mrs. Dennis Schulist'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leopoldo_Corkery'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Karley_Dach@jasper.info'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ola.org'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Kurtis Weissnat'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Elwyn.Skiles'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Telly.Hoeger@billy.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'elvis.io'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Nicholas Runolfsdottir V'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Maxime_Nienow'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Sherwood@rosamond.me'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'jacynthe.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Glenna Reichert'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Delphine'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Chaim_McDermott@dana.io'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'conrad.com'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Clementina DuBuque'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Moriah.Stanton'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"email"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Rey.Padberg@karina.biz'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"website"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ambrose.net'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),yn=n("h2",{id:"miscellaneous",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#miscellaneous","aria-hidden":"true"},"#"),s(" Miscellaneous")],-1),mn=n("p",null,"This is a sample of everything united and its functionality together",-1),dn=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-table")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"multiple"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-input")]),s(`
          `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("search"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"block"),s(`
          `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("url"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"input-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("border"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Search"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#thead"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-checkbox")]),s(`
              `),n("span",{class:"token attr-name"},":checked-force"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected.length > 0"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token attr-name"},":indeterminate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected.length < users.length"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected = toggleSelectAll(selected, getSearch)"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token punctuation"},"/>")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),s(),n("span",{class:"token attr-name"},"sort"),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("users = sortData($event, users, 'name')"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            Name
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),s(),n("span",{class:"token attr-name"},"sort"),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("users = sortData($event, users, 'email')"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            Email
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-th")]),s(),n("span",{class:"token attr-name"},"sort"),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("users = sortData($event, users, 'id')"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            Id
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-th")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#tbody"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-tr")]),s(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(tr, i) in getPage(getSearch, page, pageSize)"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("i"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tr"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"not-click-selected"),s(`
          `),n("span",{class:"token attr-name"},"open-expand-only-td"),s(`
        `),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),s(),n("span",{class:"token attr-name"},"checkbox"),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-checkbox")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tr"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),s(`
            `),n("span",{class:"token attr-name"},"edit"),s(`
            `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(";(edit = tr), (editProp = 'name'), (editActive = true)"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.name }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.email }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`
            {{ tr.id }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-td")]),n("span",{class:"token punctuation"},">")]),s(`

          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#expand"),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("con-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-avatar")]),n("span",{class:"token punctuation"},">")]),s(`
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("`/avatars/avatar-${i + 1}.png`"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-avatar")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
                  {{ tr.name }}
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("flat"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token punctuation"},">")]),s(`
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bx bx-lock-open-alt"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-button")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("flat"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token punctuation"},">")]),s(" Send Email "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-button")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("border"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("danger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                  Remove User
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-button")]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-pagination")]),s(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("current-page")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("page"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("page-size")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("pageSize"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},":page-sizes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("[3, 5, 7]"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSearch.length"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"progress"),s(`
          `),n("span",{class:"token attr-name"},"infinite"),s(`
        `),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-table")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-dialog")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("editActive"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token punctuation"},">")]),s(" Change Prop {{ editProp }} "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-input")]),s(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("editProp == 'email'"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("edit[editProp]"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"@keypress.enter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("editActive = false"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-select")]),s(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("editProp == 'name'"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("edit[editProp]"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"block"),s(`
        `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Select"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("editActive = false"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Vuesax"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Vuesax"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" Vuesax "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Vue"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Vuejs"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" Vue "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Javascript"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Javascript"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          Javascript
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"disabled"),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Sass"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Sass"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" Sass "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Typescript"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Typescript"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          Typescript
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Webpack"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Webpack"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" Webpack "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("vs-option")]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Nodejs"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Nodejs"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(" Nodejs "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-option")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-select")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("vs-dialog")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),bn=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[s(`import { computed, ref } from 'vue'
import { getPage, sortData, toggleSelectAll } from 'vuesax-alpha'

type User = {
  id: number | string
  name: string
  username: string
  email: string
  website: string
}

const editActive = ref(false)
const edit = ref<Pick`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("User,")]),s(),n("span",{class:"token attr-name"},"'name'"),s(),n("span",{class:"token attr-name"},"|"),s(),n("span",{class:"token attr-name"},"'email'"),n("span",{class:"token punctuation"},">")]),s(`>({ name: '', email: '' })
const editProp = ref`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("keyof")]),s(),n("span",{class:"token attr-name"},"typeof"),s(),n("span",{class:"token attr-name"},"edit.value"),n("span",{class:"token punctuation"},">")]),s(`()
const search = ref('')
const page = ref(1)
const pageSize = ref(4)
const selected = ref`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("User[]")]),n("span",{class:"token punctuation"},">")]),s(`([])

const users = ref`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("User[]")]),n("span",{class:"token punctuation"},">")]),s(`([
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
  },
])

const getSearch = computed(() => {
  return users.value.filter((e) =>
    e.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),vn=n("div",{class:"language-vue","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[s(`.con-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      margin-left: 10px;
    }
  }
}
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),hn=n("h2",{id:"functions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#functions","aria-hidden":"true"},"#"),s(" Functions")],-1),wn=n("p",null,"We create this component with a different logic and maybe something not very common as a first point we want development to be more free and for the programmer to have many options and customization based on what he needs and wants to create, for example a very important theme it is the queries of the data in the server and that now they are not manipulated by the component until you yourself using a vuesax function impose it",-1),_n=n("p",null,"So now we use functions that you can use if you need them such as:",-1),fn=n("h4",{id:"toggleselectall",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#toggleselectall","aria-hidden":"true"},"#"),s(" toggleSelectAll")],-1),qn=n("p",null,[s("See the "),n("a",{href:"#miscellaneous"},"Example"),s(":")],-1),xn=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * return empty array if all items are in selected, otherwise return originalData
 *
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"selected"),s(` Array
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"originalData"),s(` Array
 *
 * `),n("span",{class:"token keyword"},"@returns"),s(` Array
 */`)]),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"toggleSelectAll"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("selected"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" originalData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
`)])])],-1),Sn=n("h4",{id:"sortdata",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sortdata","aria-hidden":"true"},"#"),s(" sortData")],-1),Dn=n("p",null,[s("See the "),n("a",{href:"#sort"},"Example"),s(":")],-1),Cn=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},`/**
 * return array was sorted
 */`),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"sortData"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token keyword"},"extends"),s(" Record"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"unknown"),n("span",{class:"token operator"},">>")])]),n("span",{class:"token punctuation"},"("),s(`
  event`),n("span",{class:"token operator"},":"),s(" Event"),n("span",{class:"token punctuation"},","),s(`
  arr`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  sortKey`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"keyof"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),s(`
  sortType`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'desc'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'esc'"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
`)])])],-1),zn=n("h2",{id:"api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#"),s(" API")],-1);function Nn(Pn,Ln){const c=e("docs-warn"),l=e("table-default"),o=e("card"),r=e("table-striped"),u=e("table-color"),k=e("table-pagination"),i=e("table-selected"),g=e("table-multiple"),y=e("table-expand"),m=e("table-edit"),p=e("command"),d=e("table-sort"),b=e("table-miscellaneous");return h(),w("div",null,[f,t(o,null,{example:a(()=>[t(l)]),template:a(()=>[D]),script:a(()=>[C]),default:a(()=>[q,t(c),x,S]),_:1}),t(o,null,{example:a(()=>[t(r)]),template:a(()=>[P]),script:a(()=>[L]),default:a(()=>[z,N]),_:1}),t(o,null,{example:a(()=>[t(u)]),template:a(()=>[j]),script:a(()=>[T]),default:a(()=>[K,M]),_:1}),t(o,null,{example:a(()=>[t(k)]),template:a(()=>[H]),script:a(()=>[V]),default:a(()=>[E,R,B,A,U]),_:1}),t(o,null,{example:a(()=>[t(i)]),template:a(()=>[I]),script:a(()=>[O]),default:a(()=>[G,W,J]),_:1}),t(o,null,{example:a(()=>[t(g)]),template:a(()=>[Q]),script:a(()=>[X]),default:a(()=>[$,Y,F]),_:1}),t(o,null,{example:a(()=>[t(y)]),template:a(()=>[sn]),script:a(()=>[an]),default:a(()=>[Z,nn]),_:1}),t(o,null,{example:a(()=>[t(m)]),template:a(()=>[on]),script:a(()=>[pn]),default:a(()=>[tn,en]),_:1}),t(o,null,{example:a(()=>[t(d)]),template:a(()=>[kn]),script:a(()=>[gn]),default:a(()=>[cn,ln,rn,t(p,null,{default:a(()=>[un]),_:1})]),_:1}),t(o,null,{example:a(()=>[t(b)]),template:a(()=>[dn]),script:a(()=>[bn]),style:a(()=>[vn]),default:a(()=>[yn,mn]),_:1}),t(o,null,{default:a(()=>[hn,wn,_n,fn,qn,t(p,null,{default:a(()=>[xn]),_:1}),Sn,Dn,t(p,null,{default:a(()=>[Cn]),_:1}),zn]),_:1})])}const Mn=v(_,[["render",Nn],["__file","table.html.vue"]]);export{Mn as default};
