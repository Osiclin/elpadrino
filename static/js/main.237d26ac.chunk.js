(this.webpackJsonpelpadrino=this.webpackJsonpelpadrino||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(8),i=s.n(n),l=(s(14),s(3)),o=s(4),r=s(6),d=s(5),j=(s(15),s(2)),u=s.n(j),m=s(0),b=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).displayMenu=function(){u()(".displaymenu").slideDown(1e3).show(),u()(".displaymenutext").slideDown(1e3).show(),document.getElementsByClassName("close")[0].style.display="block";for(var e=0;e<document.getElementsByClassName("menublock").length;e++)document.getElementsByClassName("menublock")[e].style.display="block"},a.displayContact=function(){u()(".displaymenu").slideDown(1e3).show(),u()(".displaymenutext").slideDown(1e3).show(),document.getElementsByClassName("contactblock")[0].style.display="block",document.getElementsByClassName("close")[0].style.display="block"},a}return Object(o.a)(s,[{key:"render",value:function(){return"menu"===this.props.class?Object(m.jsx)("button",{onClick:this.displayMenu,className:this.props.class,children:this.props.title}):Object(m.jsx)("button",{onClick:this.displayContact,className:this.props.class,children:this.props.title})}}]),s}(a.Component),p=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(l.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("p",{children:[this.props.dayStart," - ",this.props.dayEnd," ",this.props.startTime," - ",this.props.endTime]})}}]),s}(a.Component),h=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(l.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){return Object(m.jsx)("p",{children:"59 Raymond Njoku, Ikoyi, Lagos, Nigeria."})}}]),s}(a.Component);var O=function(){return Object(m.jsx)("div",{className:"background"})};var x=function(e){return Object(m.jsxs)("div",{className:"menublock",children:[Object(m.jsxs)("div",{className:"foods",children:[e.food," ",Object(m.jsx)("span",{children:e.price})]}),Object(m.jsx)("p",{className:"food-details",children:e.details}),Object(m.jsxs)("form",{id:"menuform",children:[Object(m.jsxs)("select",{name:"quantity",id:"quantity",children:[Object(m.jsx)("option",{value:"1",children:"1"}),Object(m.jsx)("option",{value:"2",children:"2"}),Object(m.jsx)("option",{value:"3",children:"3"}),Object(m.jsx)("option",{value:"4",children:"4"}),Object(m.jsx)("option",{value:"5",children:"5"})]}),Object(m.jsx)("button",{children:"Add to Cart"})]})]})};var f=function(e){return Object(m.jsxs)("div",{className:"contactblock",children:[Object(m.jsx)("div",{className:"info",children:e.info}),Object(m.jsx)("p",{className:"contact-details",children:e.details}),Object(m.jsxs)("form",{id:"contactform",children:[Object(m.jsx)("input",{className:"cf",type:"text",placeholder:"Name"}),Object(m.jsx)("input",{className:"cf",type:"email",placeholder:"Email"}),Object(m.jsx)("input",{className:"cf",type:"date",placeholder:"Date"}),Object(m.jsx)("textarea",{rows:"8",name:"comment",placeholder:"Message"}),Object(m.jsx)("button",{className:"sendmsg",children:"Send Message"})]})]})},y=s(9);var v=function(e){var t=Object(a.useState)(0),s=Object(y.a)(t,2),c=s[0];return s[1],Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("i",{className:"fas fa-shopping-cart"}),Object(m.jsx)("div",{className:"circle",children:c})]})};var N=function(){return Object(m.jsx)("span",{className:"close",onClick:function(){u()(".displaymenu").slideUp(1e3).hide(1e3),u()(".displaymenutext").slideUp(1e3).hide(1e3),u()(".menublock").hide(1e3),u()(".contactblock").hide(1e3),document.getElementsByClassName("close")[0].style.display="none"},children:"X"})},g=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{}),Object(m.jsx)(v,{}),Object(m.jsxs)("h1",{className:"logo",children:["El Padrino",Object(m.jsx)("span",{className:"logo-caption",children:"mexican foods"})]}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)(b,{class:"menu",title:"menu"}),Object(m.jsx)("br",{}),Object(m.jsx)(b,{class:"contact",title:"contact"})]}),Object(m.jsxs)("div",{className:"workdays",children:[Object(m.jsx)(p,{dayStart:"monday",dayEnd:"friday",startTime:"10am",endTime:"10pm"}),Object(m.jsx)(p,{dayStart:"saturday",dayEnd:"sunday",startTime:"12pm",endTime:"8pm"})]}),Object(m.jsx)("div",{className:"address",children:Object(m.jsx)(h,{})}),Object(m.jsx)("div",{className:"displaymenu"}),Object(m.jsxs)("div",{className:"displaymenutext",children:[Object(m.jsx)(N,{}),Object(m.jsx)(x,{food:"tacos",price:"\u20a62,500",details:"Your choice of three soft handmade flour tortillas with meat, salsas, and lettuce."}),Object(m.jsx)(x,{food:"burritos",price:"\u20a63,000",details:"A large handmade flour tortilla with a choice of lime rice or Mexican red rice, beans, meat, salsa, and cheese."}),Object(m.jsx)(x,{food:"quesadillas",price:"\u20a64,000",details:"A large handmade flour tortilla stuffed mozzarella cheese and meat. Served with shredded lettuce, salsa, and fresh guacamole."}),Object(m.jsx)(x,{food:"ensalada",price:"\u20a63,000",details:"A large handmade flour tortilla, filled with beans, lime rice or Mexican red rice, meat and lettuce. Topped with salsa, crispy tortilla strips, cheese, and house dressing."}),Object(m.jsx)(x,{food:"limeade",price:"\u20a61,000",details:"Lime flavoured drink made with freshly squeezed limes, water and sugar."}),Object(m.jsx)(x,{food:"agua de jamaica",price:"\u20a61,000",details:"Fresh hibiscus juice made with pineapple, ginger and bananas."}),Object(m.jsx)(f,{info:"contact",details:"No available reservations."})]})]})}}]),s}(a.Component);i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.237d26ac.chunk.js.map