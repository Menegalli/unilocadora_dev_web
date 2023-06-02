"use strict";(globalThis["webpackChunkunilocadora"]=globalThis["webpackChunkunilocadora"]||[]).push([[887],{9409:(e,l,t)=>{t.d(l,{U:()=>i});t(9665);var a=t(1809);const n=(0,a.Q_)("app",{state:()=>({carrinho:{filmes:[],cliente:null,valor:0,data:null,devolvido:!1},cliente:null,filmes:[]}),actions:{addFilme(e){this.filmes.push(e)},setFilmes(e){this.filmes=e},getFilmesByAno(e){return this.filmes.filter((l=>l.ano==e))},getFilmesByActor(e){return this.filmes.filter((l=>l.atores.includes(e)))},setCliente(e){this.cliente=e},limparCarrinho(){this.carrinho={filmes:[],cliente:null,valor:0,data:null,devolvido:!1}},setClienteCarrinho(e){this.carrinho.cliente=e},addFilmeCarrinho(e){this.carrinho.filmes.push(e)}}}),i=n()},7887:(e,l,t)=>{t.r(l),t.d(l,{default:()=>I});var a=t(9835),n=t(6970);function i(e,l,t,i,r,o){const u=(0,a.up)("q-btn"),s=(0,a.up)("q-toolbar-title"),c=(0,a.up)("q-toolbar"),m=(0,a.up)("q-header"),d=(0,a.up)("q-item-label"),p=(0,a.up)("q-separator"),f=(0,a.up)("EssentialLink"),h=(0,a.up)("q-list"),w=(0,a.up)("q-drawer"),g=(0,a.up)("router-view"),k=(0,a.up)("q-page-container"),v=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(v,{view:"lHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{elevated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" Unilocadora ")])),_:1}),e.mostraCarrinho()?((0,a.wg)(),(0,a.j4)(u,{key:0,round:"",color:"primary",icon:"shopping_cart"})):(0,a.kq)("",!0),(0,a._)("div",null,"Quasar v"+(0,n.zw)(e.$q.version),1)])),_:1})])),_:1}),(0,a.Wm)(w,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":l[0]||(l[0]=l=>e.leftDrawerOpen=l),bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{header:""},{default:(0,a.w5)((()=>[(0,a.Uk)(" Menu ")])),_:1}),(0,a.Wm)(p,{class:"q-mb-md"}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.essentialLinks,(e=>((0,a.wg)(),(0,a.j4)(f,(0,a.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g)])),_:1})])),_:1})}var r=t(499);function o(e,l,t,i,r,o){const u=(0,a.up)("q-icon"),s=(0,a.up)("q-item-section"),c=(0,a.up)("q-item-label"),m=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(m,{clickable:"",tag:"a",target:"_self",href:e.link},{default:(0,a.w5)((()=>[e.icon?((0,a.wg)(),(0,a.j4)(s,{key:0,avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:e.icon},null,8,["name"])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.title),1)])),_:1}),(0,a.Wm)(c,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}const u=(0,a.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var s=t(1639),c=t(490),m=t(1233),d=t(2857),p=t(3115),f=t(9984),h=t.n(f);const w=(0,s.Z)(u,[["render",o]]),g=w;h()(u,"components",{QItem:c.Z,QItemSection:m.Z,QIcon:d.Z,QItemLabel:p.Z});var k=t(9409);const v=[{title:"Inicio",caption:"Ir para a página inicial",icon:"home",link:"/"},{title:"Filmes",caption:"Ir para os Filmes",icon:"movie",link:"/filmes.json"}],q=(0,a.aZ)({name:"MainLayout",components:{EssentialLink:g},methods:{mostraCarrinho(){return null!=k.U.carrinho.cliente&&k.U.carrinho.filmes.length>0}},setup(){const e=(0,r.iH)(!1);return{essentialLinks:v,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});var Z=t(7605),b=t(6602),_=t(1663),Q=t(4455),W=t(1973),y=t(3655),L=t(3246),C=t(926),U=t(2133);const F=(0,s.Z)(q,[["render",i]]),I=F;h()(q,"components",{QLayout:Z.Z,QHeader:b.Z,QToolbar:_.Z,QBtn:Q.Z,QToolbarTitle:W.Z,QDrawer:y.Z,QList:L.Z,QItemLabel:p.Z,QSeparator:C.Z,QPageContainer:U.Z})}}]);