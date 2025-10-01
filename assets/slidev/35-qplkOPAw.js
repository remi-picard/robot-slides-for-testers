import{_}from"./CodeBlockWrapper-BT9sHJAE.js";import{I as v}from"../default-D5aJsrQ3.js";import{b as k,ap as o}from"../index-BmBrGjwQ.js";import{p as c,u,f as $}from"./context-CqaLfLAD.js";import{b as y,o as w,w as d,g as s,e as x,m as A,a0 as n,v as C,x as K}from"../modules/vue-4mDv654O.js";import"../modules/unplugin-icons-IIIzr7mw.js";import"./index-JlaTiTph.js";import"../modules/shiki-Cs_zAk09.js";const h={__name:"35",setup(m,{expose:e}){e(),c(o);const{$slidev:t,$nav:a,$clicksContext:r,$clicks:p,$page:l,$renderContext:f,$frontmatter:g}=u(),i={$slidev:t,$nav:a,$clicksContext:r,$clicks:p,$page:l,$renderContext:f,$frontmatter:g,InjectedLayout:v,get frontmatter(){return o},get useSlideContext(){return u},get _provideFrontmatter(){return c},get _frontmatterToProps(){return $}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function b(m,e,t,a,r,p){const l=_;return w(),y(a.InjectedLayout,C(K(a._frontmatterToProps(a.frontmatter,34))),{default:d(()=>[e[1]||(e[1]=s("h2",null,"Keyword",-1)),e[2]||(e[2]=s("h3",null,"List (args) / Dict (kwargs)",-1)),x(l,A({},{ranges:["1-6","1-6,14-18","1,8-12","1,8-12,14-15,20-23","all"]}),{default:d(()=>[...e[0]||(e[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"*** Keywords ***")]),n(`
`),s("span",{class:"line"},[s("span",null,"Keyword Avec Args")]),n(`
`),s("span",{class:"line"},[s("span",null,"    [Arguments]    @{list}")]),n(`
`),s("span",{class:"line"},[s("span",null,"    FOR    ${i}    IN    @{list}")]),n(`
`),s("span",{class:"line"},[s("span",null,"        Log    i=${i}")]),n(`
`),s("span",{class:"line"},[s("span",null,"    END")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"Keyword Avec Kwargs")]),n(`
`),s("span",{class:"line"},[s("span",null,"    [Arguments]    &{map}")]),n(`
`),s("span",{class:"line"},[s("span",null,"    FOR    ${k}    ${v}    IN    &{map}")]),n(`
`),s("span",{class:"line"},[s("span",null,"        Log    key=${k}, value=${v}")]),n(`
`),s("span",{class:"line"},[s("span",null,"    END")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"*** Test Cases ***")]),n(`
`),s("span",{class:"line"},[s("span",null,"Appel Keywords")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # ${list}    Create List    1    2    3")]),n(`
`),s("span",{class:"line"},[s("span",null,"    VAR    @{list}    1    2    3")]),n(`
`),s("span",{class:"line"},[s("span",null,"    Keyword Avec Args    ${list}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # ${map}    Create Dictionary    cle1=valeur1    cle2=valeur2")]),n(`
`),s("span",{class:"line"},[s("span",null,"    VAR    &{map}    cle1=valeur1    cle2=valeur2")]),n(`
`),s("span",{class:"line"},[s("span",null,"    Keyword Avec Kwargs    &{map}")])])],-1)])]),_:1},16)]),_:1},16)}const D=k(h,[["render",b],["__file","/@slidev/slides/35.md"]]);export{D as default};
