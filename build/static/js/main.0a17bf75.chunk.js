(this["webpackJsonptodo-frontend"]=this["webpackJsonptodo-frontend"]||[]).push([[0],{35:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),s=n(14),o=n.n(s),i=(n(35),n(7)),u=n.n(i),l=n(10),d=n(8),j=n(17),h=n(16),b=function(e){var t=e.content,n=void 0===t?null:t,c=e.todoId,s=void 0===c?null:c,o=e.createTodo,i=e.editTodo,u=e.isToEdit,l=void 0!==u&&u,b=e.setIsToEdit,p=Object(r.useState)({content:n||"",isPrivate:!1}),m=Object(d.a)(p,2),O=m[0],v=m[1],f=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;v(Object(h.a)(Object(h.a)({},O),{},Object(j.a)({},e.target.name,t)))};return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"add-todo",onSubmit:s?function(e){e.preventDefault(),console.log("todoIdd edittttt",s),console.log(" edittttt",O),i(s,O),b(!1)}:function(e){e.preventDefault(),o(O),v({content:"",isPrivate:!1})},children:[Object(a.jsx)("input",{value:O.content,name:"content",onChange:f,className:"add-todo-input",type:"text"}),Object(a.jsx)("span",{className:"private-todo",children:"Private"}),Object(a.jsx)("input",{value:O.isPrivate,name:"isPrivate",onChange:f,className:"add-todo-input-checkbox",type:"checkbox"}),Object(a.jsx)("button",{className:"my-button",type:"submit",children:l?"Save":"Add todo"}),l&&Object(a.jsx)("span",{onClick:function(){return b(!1)},className:"my-cancel",children:"Cancel"})]})})},p=function(e){var t=e.todo,n=e.deleteTodo,c=e.editTodo,s=e.user,o=Object(r.useState)(!1),i=Object(d.a)(o,2),u=i[0],l=i[1];return Object(a.jsx)(a.Fragment,{children:u?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(b,{content:t.content,isPrivate:t.isPrivate,todoId:t.id,editTodo:c,isToEdit:u,setIsToEdit:l})}):Object(a.jsxs)("div",{className:"todo",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"todo-content",children:[t.content," ",t.isPrivate&&Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-lock",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"})})]}),Object(a.jsxs)("p",{className:"todo-owner",children:["Owner: ",t.userId]})]}),Object(a.jsx)("div",{children:t.userId===function(e){var t=null;return e&&e.username&&(t=e.username),t}(s)&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{className:"edit-todo-icon",onClick:function(){return l(!0)},children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})})}),Object(a.jsx)("span",{className:"edit-todo-icon",onClick:function(){return n(t.id)},children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})})})]})})]})})},m=n(12),O=n(9),v=n(18),f=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,r=e.handlePasswordChange,c=e.username,s=e.password,o=e.errorMessage,i=e.loadingSend,u=e.show,l=e.onHide;return Object(a.jsxs)(m.a,{show:u,onHide:l,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal",children:[Object(a.jsx)(m.a.Header,{closeButton:!0,children:Object(a.jsx)(m.a.Title,{id:"contained-modal-title-vcenter",children:"Login"})}),Object(a.jsx)(m.a.Body,{children:Object(a.jsxs)(O.a,{onSubmit:t,children:[Object(a.jsx)(O.a.Label,{children:"Username"}),Object(a.jsx)(O.a.Control,{id:"username",value:c,onChange:n,placeholder:"Enter your username..."}),Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{id:"password",value:s,onChange:r,type:"password",placeholder:"Enter your password..."}),o&&Object(a.jsx)("p",{className:"my-error-message",children:o}),Object(a.jsxs)("button",{className:"my-button my-button-2",children:["Login",i&&Object(a.jsx)(v.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",variant:"light",className:"my-spinner"})]})]})})]})},x=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,r=e.handleNameChange,c=e.handlePasswordChange,s=e.handlePasswordConfirmChange,o=e.username,i=e.password,u=e.passwordConfirm,l=e.name,d=e.errorMessage,j=e.successMessage,h=e.loadingSend,b=e.show,p=e.onHide;return Object(a.jsxs)(m.a,{show:b,onHide:p,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal",children:[Object(a.jsx)(m.a.Header,{closeButton:!0,children:Object(a.jsx)(m.a.Title,{id:"contained-modal-title-vcenter",children:"Sign up"})}),Object(a.jsx)(m.a.Body,{children:Object(a.jsxs)(O.a,{onSubmit:t,children:[Object(a.jsx)(O.a.Label,{children:"Username"}),Object(a.jsx)(O.a.Control,{id:"username",value:o,onChange:n,placeholder:"Enter your username..."}),Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{id:"password",value:i,onChange:c,type:"password",placeholder:"Enter your password..."}),Object(a.jsx)(O.a.Label,{children:"Confirm password"}),Object(a.jsx)(O.a.Control,{id:"passwordConfirm",value:u,onChange:s,type:"password",placeholder:"Retype your password..."}),Object(a.jsx)(O.a.Label,{children:"Name"}),Object(a.jsx)(O.a.Control,{id:"name",value:l,onChange:r,placeholder:"Enter your name..."}),d&&Object(a.jsx)("p",{className:"my-error-message",children:d}),j&&Object(a.jsx)("p",{className:"my-success-message",children:j}),Object(a.jsxs)("button",{className:"my-button my-button-2",type:"submit",children:["Sign up",h&&Object(a.jsx)(v.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",variant:"light",className:"my-spinner"})]})]})})]})},g=n(15),w=n.n(g),y={BASE_URL:"https://aqueous-castle-68448.herokuapp.com/api"},C={GET_URL_CONFIG:function(){var e=window.localStorage.getItem("loggedInUser"),t=JSON.parse(e);return t?{headers:{Authorization:"bearer ".concat(t.token)}}:null},GET_LOGGED_IN_USER:function(){var e=window.localStorage.getItem("loggedInUser");return JSON.parse(e).username}},S=y.BASE_URL+"/todos",N=function(e){return Object(h.a)(Object(h.a)({},e),{},{userId:C.GET_LOGGED_IN_USER()})},T={getAllTodos:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get(S,C.GET_URL_CONFIG());case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createTodo:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:return n=e.sent,e.next=5,w.a.post(S,n,C.GET_URL_CONFIG());case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateTodo:function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N(n),console.log("id holdssss",t),e.next=4,w.a.put("".concat(S,"/").concat(t),a,C.GET_URL_CONFIG());case 4:return r=e.sent,e.abrupt("return",r.data[0]);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),deleteTodo:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("".concat(S,"/").concat(t),C.GET_URL_CONFIG());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=y.BASE_URL+"/login",L=y.BASE_URL+"/users",I={login:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post(k,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),createAccount:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post(L,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(null),o=Object(d.a)(s,2),i=o[0],j=o[1],h=Object(r.useState)(null),m=Object(d.a)(h,2),O=m[0],v=m[1],g=Object(r.useState)(""),w=Object(d.a)(g,2),y=w[0],C=w[1],S=Object(r.useState)(""),N=Object(d.a)(S,2),k=N[0],L=N[1],E=Object(r.useState)(""),U=Object(d.a)(E,2),_=U[0],P=U[1],A=Object(r.useState)(""),G=Object(d.a)(A,2),B=G[0],F=G[1],M=Object(r.useState)(null),R=Object(d.a)(M,2),z=R[0],H=R[1],D=Object(r.useState)(!1),V=Object(d.a)(D,2),J=V[0],q=V[1],K=Object(r.useState)(!1),Q=Object(d.a)(K,2),W=Q[0],X=Q[1],Y=Object(r.useState)(!1),Z=Object(d.a)(Y,2),$=Z[0],ee=Z[1];Object(r.useEffect)((function(){T.getAllTodos().then((function(e){c(e)}));var e=window.localStorage.getItem("loggedInUser");if(e){var t=JSON.parse(e);H(t)}}),[]);var te=function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.createTodo(t);case 3:a=e.sent,c(n.concat(a)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),j("Incorrect credentials"),setTimeout((function(){j(null)}),5e3);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(l.a)(u.a.mark((function e(t,a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.updateTodo(t,a);case 3:r=e.sent,c(n.map((function(e){return e.id!==t?e:r}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("exception====",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),ae=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.deleteTodo(t);case 3:c(n.filter((function(e){return e.id!==t}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("exception====",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),ee(!0),e.prev=2,e.next=5,I.login({username:y,password:k});case 5:n=e.sent,window.localStorage.setItem("loggedInUser",JSON.stringify(n)),H(n),C(""),L(""),q(!1),T.getAllTodos().then((function(e){c(e)})),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),console.log("exception=======",e.t0),j("Incorrect credentials"),setTimeout((function(){j(null)}),5e3);case 19:ee(!1);case 20:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),k===_){e.next=6;break}j("Passwords do not match"),setTimeout((function(){j(null)}),5e3),e.next=26;break;case 6:return ee(!0),e.prev=7,e.next=10,I.createAccount({username:y,password:k,name:B});case 10:e.sent,v("Account ".concat(y," created successfully")),setTimeout((function(){v(null)}),5e3),C(""),L(""),P(""),F(""),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(7),console.log("exception=======",e.t0),j("Account already exists"),setTimeout((function(){j(null)}),5e3);case 25:ee(!1);case 26:case"end":return e.stop()}}),e,null,[[7,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"my-container",children:[Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h1",{children:"Todos"})}),Object(a.jsxs)("div",{className:"my-widget",children:[Object(a.jsxs)("div",{className:"my-widget-header",children:[Object(a.jsx)("div",{children:Object(a.jsx)("h4",{children:"All todos"})}),null===z?Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"my-button",onClick:function(){return q(!0)},children:"Login"}),Object(a.jsx)("span",{className:"my-signup-button",onClick:function(){return X(!0)},children:"Sign up"})]}):Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{children:["Logged in: ",z.name," (",z.username,")"]}),Object(a.jsx)("span",{className:"my-signup-button",onClick:function(){return function(){try{window.localStorage.removeItem("loggedInUser"),H(null),T.getAllTodos().then((function(e){c(e)}))}catch(e){console.log(e)}}()},children:"Log out"})]})]}),Object(a.jsx)(f,{username:y,password:k,errorMessage:i,loadingSend:$,handleUsernameChange:function(e){var t=e.target;return C(t.value)},handlePasswordChange:function(e){var t=e.target;return L(t.value)},handleSubmit:re,show:J,onHide:function(){return q(!1)}}),Object(a.jsx)(x,{username:y,password:k,errorMessage:i,successMessage:O,passwordConfirm:_,name:B,loadingSend:$,handleUsernameChange:function(e){var t=e.target;return C(t.value)},handlePasswordChange:function(e){var t=e.target;return L(t.value)},handlePasswordConfirmChange:function(e){var t=e.target;return P(t.value)},handleNameChange:function(e){var t=e.target;return F(t.value)},handleSubmit:ce,show:W,onHide:function(){return X(!1)}}),n.map((function(e){return Object(a.jsx)(p,{todo:e,user:z,editTodo:ne,deleteTodo:ae},e.id)})),z&&Object(a.jsx)("div",{children:Object(a.jsx)(b,{createTodo:te})})]})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(58);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),U()}},[[59,1,2]]]);
//# sourceMappingURL=main.0a17bf75.chunk.js.map