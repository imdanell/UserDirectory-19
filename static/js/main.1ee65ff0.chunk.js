(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),r=n(4),a=n.n(r),l=(n(10),n(2));n(11);var d=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)({}),a=Object(l.a)(r,2),d=(a[0],a[1],Object(s.useState)([])),j=Object(l.a)(d,2),o=j[0],u=j[1];return Object(s.useEffect)((function(){fetch("https://randomuser.me/api/?results=50&inc=picture,name,phone,email,dob").then((function(e){return e.json()})).then((function(e){console.log(e.results),i(e.results),u(e.results)}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:"Employee Directory"}),Object(c.jsx)("h5",{children:"Sort employees by using the search box to narrow your results"})]}),Object(c.jsx)("input",{name:"searchTerm",onChange:function(e){var t=e.target,c=(t.name,t.value),s=n.filter((function(e){return e.name.first.includes(c)||e.name.last.includes(c)||e.phone.includes(c)||e.email.includes(c)||e.dob.date.includes(c)}));console.log(s),u(s)},placeholder:"Search"}),Object(c.jsxs)("div",{className:"employees-grid",children:[Object(c.jsx)("div",{children:"Image"}),Object(c.jsx)("div",{children:"Name"}),Object(c.jsx)("div",{children:"Phone"}),Object(c.jsx)("div",{children:"Email"}),Object(c.jsx)("div",{children:"DOB"})]}),o.map((function(e,t){return Object(c.jsxs)("div",{className:"employees-grid",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:e.picture.thumbnail,alt:t})}),Object(c.jsxs)("div",{children:[e.name.first," ",e.name.last]}),Object(c.jsx)("div",{children:e.phone}),Object(c.jsx)("div",{children:e.email}),Object(c.jsx)("div",{children:e.dob.date})]},t)}))]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),j()}},[[12,1,2]]]);
//# sourceMappingURL=main.1ee65ff0.chunk.js.map