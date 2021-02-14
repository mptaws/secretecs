(this.webpackJsonpclientv2=this.webpackJsonpclientv2||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(6),s=n.n(a),o=n(2),i=n.n(o),l=n(3),d=n(4),u=n(0),j=function(){var t=Object(c.useState)(""),e=Object(d.a)(t,2),n=e[0],r=e[1],a=function(){var t=Object(l.a)(i.a.mark((function t(e){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),""!==n){t.next=5;break}alert("Please enter a value."),t.next=16;break;case 5:return t.prev=5,c={description:n},console.log(c),t.next=10,fetch("http://localhost:4000/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 10:window.location.href="/",t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),console.error(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("h1",{className:"text-center mt-5",children:"Todo List Example"}),Object(u.jsxs)("form",{className:"d-flex mt-5",onSubmit:a,children:[Object(u.jsx)("input",{type:"text",className:"form-control",value:n,onChange:function(t){return r(t.target.value)}}),Object(u.jsx)("button",{className:"btn btn-success",children:"Add"})]})]})},b=function(t){var e=t.todo,n=Object(c.useState)(e.description),r=Object(d.a)(n,2),a=r[0],s=r[1],o=function(){var t=Object(l.a)(i.a.mark((function t(n){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),""===a&&alert("Please enter a value"),t.prev=2,c={description:a},t.next=6,fetch("http://localhost:4000/todos/".concat(e.todo_id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 6:window.location.href="/",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("button",{type:"button",className:"btn btn-warning","data-toggle":"modal","data-target":"#id".concat(e.todo_id),children:"Edit"}),Object(u.jsx)("div",{className:"modal",id:"id".concat(e.todo_id),onClick:function(){return s(e.description)},children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h4",{className:"modal-title",children:"Edit Todo"}),Object(u.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",onClick:function(){return s(e.description)},children:"\xd7"})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(t){return s(t.target.value)}})}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-warning","data-dismiss":"modal",onClick:function(t){return o(t)},children:"Edit"}),Object(u.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:function(){return s(e.description)},children:"Close"})]})]})})})]})},h=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],r=e[1],a=function(){var t=Object(l.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:4000/todos/".concat(e),{method:"DELETE"});case 3:r(n.filter((function(t){return t.todo_id!==e}))),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(l.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:4000/todos");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,r(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(u.jsxs)(c.Fragment,{children:[" ",Object(u.jsxs)("table",{className:"table mt-5 text-center",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Description"}),Object(u.jsx)("th",{children:"Edit"}),Object(u.jsx)("th",{children:"Delete"})]})}),Object(u.jsx)("tbody",{children:n.map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.description}),Object(u.jsx)("td",{children:Object(u.jsx)(b,{todo:t})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return a(t.todo_id)},children:"Delete"})})]},t.todo_id)}))})]})]})};var p=function(){return Object(u.jsx)(c.Fragment,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{}),Object(u.jsx)(h,{})]})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e4bb745c.chunk.js.map