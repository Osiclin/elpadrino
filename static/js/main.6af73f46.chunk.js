(this.webpackJsonpelpadrino=this.webpackJsonpelpadrino||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(9),l=s.n(n),i=(s(14),s(3)),r=s(4),d=s(6),o=s(5),j=(s(15),s(2)),m=s.n(j),u=s(0),b=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).displayMenu=function(){m()(".displaymenutext").css({left:"-1200px"}),m()(".displaymenutext").show().animate({left:"0px"},500),document.getElementsByClassName("close")[0].style.display="block";for(var e=0;e<document.getElementsByClassName("menublock").length;e++)document.getElementsByClassName("menublock")[e].style.display="block"},a.displayContact=function(){m()(".displaymenutext").css({left:"-1200px"}),m()(".displaymenutext").show().animate({left:"0px"},500),document.getElementsByClassName("contactblock")[0].style.display="block",document.getElementsByClassName("close")[0].style.display="block"},a}return Object(r.a)(s,[{key:"render",value:function(){return"menu"===this.props.class?Object(u.jsx)("button",{onClick:this.displayMenu,className:this.props.class,children:this.props.title}):Object(u.jsx)("button",{onClick:this.displayContact,className:this.props.class,children:this.props.title})}}]),s}(a.Component),p=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(r.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("p",{id:"days",children:[this.props.dayStart," - ",this.props.dayEnd," ",this.props.startTime," - ",this.props.endTime]})}}]),s}(a.Component),h=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(r.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("p",{children:"\xa9 Osita Ezeigbo 2020"})})}}]),s}(a.Component);var x=function(){return Object(u.jsx)("div",{className:"background"})},O=s(7);var f=function(){return Object(u.jsx)("span",{className:"close",onClick:function(){m()(".displaymenutext").animate({left:"-1500px"},500),m()(".cartmenu").animate({left:"-1500px"},500),m()(".menublock").hide(500),m()(".contactblock").hide(500)},children:"\u2190"})};var N=function(){var e=Object(a.useState)(1),t=Object(O.a)(e,2);return t[0],t[1],Object(u.jsxs)("div",{className:"cartmenu",children:[Object(u.jsx)(f,{}),Object(u.jsxs)("div",{className:"carthead",children:[Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Food"}),Object(u.jsx)("li",{children:"Qty"}),Object(u.jsx)("li",{children:"Price"}),Object(u.jsx)("li",{children:"Total"})]}),Object(u.jsx)("hr",{})]}),Object(u.jsx)("div",{className:"ullist"}),Object(u.jsxs)("div",{id:"total",children:[Object(u.jsx)("h3",{children:"Total"}),Object(u.jsx)("h3",{children:"--"})]})]})};var v=[{title:"tacos",price:"2,500",details:"Your choice of three soft handmade flour tortillas with meat, salsas, and lettuce."},{title:"burritos",price:"3,000",details:"A large handmade flour tortilla with a choice of lime rice or Mexican red rice, beans, meat, salsa, and cheese."},{title:"quesadillas",price:"4,000",details:"A large handmade flour tortilla stuffed mozzarella cheese and meat. Served with shredded lettuce, salsa, and fresh guacamole."},{title:"ensalada",price:"3,000",details:"A large handmade flour tortilla, filled with beans, lime rice or Mexican red rice, meat and lettuce. Topped with salsa, crispy tortilla strips, cheese, and house dressing."},{title:"limeade",price:"1,000",details:"Lime flavoured drink made with freshly squeezed limes, water and sugar."},{title:"agua de jamaica",price:"1,000",details:"Fresh hibiscus juice made with pineapple, ginger and bananas."}],y=function(){var e=Object(a.useState)(0),t=Object(O.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)({title:"",price:""}),l=Object(O.a)(n,2),i=l[0],r=l[1],d=function(e){e.preventDefault(),c(s+1),r({title:e.target.name,price:e.target.value}),console.log(i)};return Object(a.useEffect)((function(){var e=document.getElementsByClassName("circle")[0],t=document.getElementsByClassName("ullist")[0],a=document.createTextNode(i.title),c=document.createTextNode("1"),n=document.createTextNode(i.price),l=document.createTextNode("--");if(e.textContent=s,""!==i.title){var d=document.createElement("ul");d.classList="cover";var o=document.createElement("li"),j=document.createElement("li"),m=document.createElement("li"),u=document.createElement("li"),b=document.createElement("span"),p=document.createElement("span"),h=document.createTextNode("-"),x=document.createTextNode("+");t.append(d),d.append(o,j,m,u),o.append(a),j.append(b),b.append(h),b.classList="minus",b.append(c),b.append(p),p.append(x),p.classList="plus",m.append(n),u.append(l)}r({title:"",price:""})}),[s]),Object(u.jsxs)("div",{className:"menublock",children:[Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"foods",children:[v[0].title," ",Object(u.jsxs)("span",{children:["\u20a6",v[0].price]})]}),Object(u.jsx)("p",{className:"food-details",children:v[0].details}),Object(u.jsx)("button",{className:"menubutton",value:v[0].price,name:v[0].title,onClick:d,children:"Add to Cart"})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"foods",children:[v[1].title," ",Object(u.jsxs)("span",{children:["\u20a6",v[1].price]})]}),Object(u.jsx)("p",{className:"food-details",children:v[1].details}),Object(u.jsx)("button",{className:"menubutton",value:v[1].price,name:v[1].title,onClick:d,children:"Add to Cart"})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"foods",children:[v[2].title," ",Object(u.jsxs)("span",{children:["\u20a6",v[2].price]})]}),Object(u.jsx)("p",{className:"food-details",children:v[2].details}),Object(u.jsx)("button",{className:"menubutton",value:v[2].price,name:v[2].title,onClick:d,children:"Add to Cart"})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"foods",children:[v[3].title," ",Object(u.jsxs)("span",{children:["\u20a6",v[3].price]})]}),Object(u.jsx)("p",{className:"food-details",children:v[3].details}),Object(u.jsx)("button",{className:"menubutton",value:v[3].price,name:v[3].title,onClick:d,children:"Add to Cart"})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"foods",children:[v[4].title," ",Object(u.jsxs)("span",{children:["\u20a6",v[4].price]})]}),Object(u.jsx)("p",{className:"food-details",children:v[4].details}),Object(u.jsx)("button",{className:"menubutton",value:v[4].price,name:v[4].title,onClick:d,children:"Add to Cart"})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"foods",children:[v[5].title," ",Object(u.jsxs)("span",{children:["\u20a6",v[5].price]})]}),Object(u.jsx)("p",{className:"food-details",children:v[5].details}),Object(u.jsx)("button",{className:"menubutton",value:v[5].price,name:v[5].title,onClick:d,children:"Add to Cart"})]}),Object(u.jsx)(N,{})]})};var g=function(e){return Object(u.jsxs)("div",{className:"contactblock",children:[Object(u.jsx)("div",{className:"info",children:e.info}),Object(u.jsx)("p",{className:"contact-details address",children:e.address}),Object(u.jsx)("p",{className:"contact-details reservations",children:e.reservations}),Object(u.jsxs)("form",{id:"contactform",action:"#",children:[Object(u.jsx)("input",{className:"cf",type:"text",placeholder:"Name"}),Object(u.jsx)("input",{className:"cf",type:"email",placeholder:"Email"}),Object(u.jsx)("input",{className:"cf",type:"date",placeholder:"Date"}),Object(u.jsx)("textarea",{rows:"8",name:"comment",placeholder:"Message"}),Object(u.jsx)("button",{className:"sendmsg",onClick:function(e){return e.preventDefault()},children:"Send Message"})]})]})};var k=function(){return Object(u.jsxs)("div",{className:"cartblock",onClick:function(){m()(".cartmenu").css({left:"-1200px",display:"grid"}),m()(".cartmenu").animate({left:"0px"},500),document.getElementsByClassName("close")[0].style.display="block"},children:[Object(u.jsx)("i",{className:"fas fa-shopping-cart"}),Object(u.jsx)("div",{className:"circle"})]})};var C=function(){return Object(u.jsxs)("h1",{className:"logo",children:["El Padrino",Object(u.jsx)("span",{className:"logo-caption",children:"gourmet mexican foods"})]})},E=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{}),Object(u.jsx)(N,{}),Object(u.jsx)(k,{}),Object(u.jsx)(C,{}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)(b,{class:"menu",title:"menu"}),Object(u.jsx)("br",{}),Object(u.jsx)(b,{class:"contact",title:"contact"})]}),Object(u.jsxs)("div",{className:"workdays",children:[Object(u.jsx)(p,{dayStart:"monday",dayEnd:"friday",startTime:"10am",endTime:"10pm"}),Object(u.jsx)(p,{dayStart:"saturday",dayEnd:"sunday",startTime:"12pm",endTime:"8pm"})]}),Object(u.jsx)(h,{}),Object(u.jsxs)("div",{className:"displaymenutext",children:[Object(u.jsx)(f,{}),Object(u.jsx)(y,{}),Object(u.jsx)(g,{info:"contact",address:"59 Raymond Njoku, Ikoyi, Lagos, Nigeria.",reservations:"No available reservations."})]})]})}}]),s}(a.Component);l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6af73f46.chunk.js.map