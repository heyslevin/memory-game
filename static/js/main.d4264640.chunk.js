(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{43:function(e,c,a){},48:function(e,c,a){"use strict";a.r(c);var t=a(2),r=a(0),i=a.n(r),s=a(7),d=a.n(s),n=a(18);a(43);var o=function(e){return Object(t.jsxs)("div",{className:"flex-small one-fourth",children:[Object(t.jsx)("p",{className:"no-margin-bottom",children:"High Score"}),Object(t.jsx)("h2",{className:"no-top gray-text",children:e.highScore})]})};var l=function(e){return Object(t.jsxs)("div",{className:"flex-small one-fourth",children:[Object(t.jsx)("p",{className:"no-margin-bottom",children:"Current Score:"}),Object(t.jsx)("h2",{className:"no-top",children:e.currentScore})]})};var j=function(e){var c=e.currentScore,a=e.highScore;return Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:"flex-row",children:[Object(t.jsxs)("div",{className:"flex-small half",children:[Object(t.jsx)("h1",{className:"no-margin-top",children:"Memory Game"}),Object(t.jsxs)("p",{className:"gray-text",children:["The cards get shuffled every time they are clicked. You CAN NOT click on any card more than once or else your score resets to zero."," "]})]}),Object(t.jsx)(o,{highScore:a}),Object(t.jsx)(l,{currentScore:c})]}),Object(t.jsx)("hr",{})]})};var p=function(e){return Object(t.jsx)("div",{className:"flex-small one-fourth card red",children:Object(t.jsx)("img",{src:e.card,alt:e.card,className:"responsive-image",onClick:function(){return e.handleClick(e.card)}})})},b=a(78),m=a(77),h=a(76),u=a(74),O=a(75),g=a(73);function x(e){var c=e.open,a=e.handleClose;return Object(t.jsx)("div",{children:Object(t.jsxs)(m.a,{open:c,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(t.jsx)(g.a,{id:"alert-dialog-title",children:"I have bad news"}),Object(t.jsx)(u.a,{children:Object(t.jsx)(O.a,{id:"alert-dialog-description",children:"Sorry to tell you, but you have lost. Sincere apologies."})}),Object(t.jsx)(h.a,{children:Object(t.jsx)(b.a,{onClick:a,variant:"contained",color:"primary",children:"Okidoke"})})]})})}var f=a.p+"static/media/apache.feb16034.jpg",v=a.p+"static/media/barril.43ed7007.jpg",S=a.p+"static/media/camaron.c9920221.jpg",N=a.p+"static/media/corazon.76bc35a8.jpg",k=a.p+"static/media/diablo.dcc0eb7c.jpg",y=a.p+"static/media/jaras.54f9326b.jpg",C=a.p+"static/media/luna.fec78adc.jpg",w=a.p+"static/media/melon.5b08ff33.jpg",T=a.p+"static/media/sirena.c6c8f19a.jpg",z=a.p+"static/media/soldado.d6433472.jpg",H=a.p+"static/media/valiente.4edc8489.jpg",M=a.p+"static/media/venado.ed362761.jpg",A=a.p+"static/media/violin.3b00e494.jpg",E=a.p+"static/media/bandolon.1e1e7898.jpg",I=a.p+"static/media/arbol.d17da2c7.jpg",J=a.p+"static/media/botella.158b9795.jpg",B=a.p+"static/media/escalera.b0d10d18.jpg",G=a.p+"static/media/gorrito.1256a36d.jpg",Y=a.p+"static/media/muerte.31aacd68.jpg",q=a.p+"static/media/pera.d31f28e0.jpg",D=a.p+"static/media/pajaro.e4255101.jpg",F=a.p+"static/media/garza.ffd736b1.jpg",K=a.p+"static/media/catrin.58fd51c3.jpg",L=a.p+"static/media/dama.d653d8e4.jpg",P=a.p+"static/media/paraguas.67e6194f.jpg";var Q=function(e){var c=Object(r.useState)([]),a=Object(n.a)(c,2),i=a[0],s=a[1],d=Object(r.useState)([]),o=Object(n.a)(d,2),l=o[0],j=o[1],b=Object(r.useState)(!1),m=Object(n.a)(b,2),h=m[0],u=m[1],O=[f,v,S,N,k,y,C,w,T,z,H,M,A,E,I,J,B,G,Y,q,D,F,K,L,P];function g(c){l.includes(c)?(u(!0),e.resetScore(),j([])):(l.push(c),j(l),e.addToScore())}return Object(r.useEffect)((function(){s([].concat(O).sort((function(){return.5-Math.random()}))),e.updateHighScore()}),[e.currentScore]),Object(t.jsxs)("div",{children:[Object(t.jsx)(x,{open:h,handleClose:function(){u(!1)}}),Object(t.jsxs)("div",{className:"flex-row",children:[Object(t.jsx)(p,{card:i[0],handleClick:g}),Object(t.jsx)(p,{card:i[1],handleClick:g}),Object(t.jsx)(p,{card:i[2],handleClick:g}),Object(t.jsx)(p,{card:i[3],handleClick:g})]}),Object(t.jsxs)("div",{className:"flex-row",children:[Object(t.jsx)(p,{card:i[4],handleClick:g}),Object(t.jsx)(p,{card:i[5],handleClick:g}),Object(t.jsx)(p,{card:i[6],handleClick:g}),Object(t.jsx)(p,{card:i[7],handleClick:g})]})]})};var R=function(){var e=Object(r.useState)(0),c=Object(n.a)(e,2),a=c[0],i=c[1],s=Object(r.useState)(0),d=Object(n.a)(s,2),o=d[0],l=d[1];return Object(t.jsx)("div",{className:"App",children:Object(t.jsxs)("div",{className:"small-container",children:[Object(t.jsx)(j,{currentScore:a,highScore:o}),Object(t.jsx)(Q,{updateHighScore:function(){a>=o&&l(a)},currentScore:a,addToScore:function(){i(a+1)},resetScore:function(){i(0)}})]})})};d.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(R,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.d4264640.chunk.js.map