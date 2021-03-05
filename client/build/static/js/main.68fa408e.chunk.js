(this["webpackJsonpdelivery-notes"]=this["webpackJsonpdelivery-notes"]||[]).push([[0],{31:function(e,t,n){e.exports=n(44)},36:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a,r,o,i,l,s,c,d,u,h,m,p,g,b=n(0),y=n.n(b),v=n(25),f=n.n(v),E=(n(36),n(8)),j=n(3),O=n(1),x=n(14),w=n(6),C=n(7),S=n(5),k=n(10),N=n(9),L=n(2),D=function(e){Object(k.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).state={userName:"",password:"",error:""},a.handleChange=a.handleChange.bind(Object(S.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(S.a)(a)),a}return Object(C.a)(n,[{key:"handleChange",value:function(e){this.setState({error:void 0}),this.setState(Object(x.a)({},e.target.name,e.target.value)),e.preventDefault()}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("/api/v1/user/login",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:this.state.userName,password:this.state.password})}).then((function(e){return e.json()})).then((function(e){Object.prototype.hasOwnProperty.call(e,"error")&&(t.setState({error:e.error}),t.props.history.push("/")),Object.prototype.hasOwnProperty.call(e,"token")&&(localStorage.setItem("token",e.token),t.props.history.push("/stops"))}))}},{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(A,null,"Delivery Notes"),y.a.createElement(T,null,this.state.error),y.a.createElement(I,{onSubmit:this.handleSubmit},y.a.createElement("input",{name:"userName",type:"text",placeholder:"User Name",value:this.state.userName,onChange:this.handleChange}),y.a.createElement("input",{name:"password",type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange}),y.a.createElement("input",{type:"submit",value:"Submit"}),y.a.createElement("div",null,y.a.createElement("p",null,"Don't have an account?",y.a.createElement(E.b,{to:"/register"}," Register User")),y.a.createElement("p",null,"Login as a Demo User ",y.a.createElement(E.b,{to:"/demo"}," Click Here")))))}}]),n}(b.Component),A=L.a.h1(a||(a=Object(O.a)(["\n  text-align: center;\n  color: red;\n  margin-top: 4rem;\n"]))),T=L.a.p(r||(r=Object(O.a)(["\n  text-align: center;\n  color: red;\n  font-weight: bold;\n"]))),I=L.a.form(o||(o=Object(O.a)(['\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\n  input {\n    width: 20rem;\n    margin: 0.5rem 0;\n    padding: 1rem 0;\n    text-align: center;\n  }\n\n  input[type="submit"] {\n    width: 5rem;\n  }\n']))),P=n(22),z=n.n(P),J=n(29),U=n(30);var W,_,B,q,G,M,H,R,$,F,K,Q,V,X,Y,Z,ee,te,ne,ae=function(e){var t=Object(b.useState)(""),n=Object(U.a)(t,2),a=n[0],r=n[1],o=function(){var e=Object(J.a)(z.a.mark((function e(t){var n,r,o;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),r={signerName:a,id:t},o={method:"PUT",mode:"cors",headers:{"Content-Type":"application/json",Authorization:n},body:JSON.stringify(r)},e.next=5,fetch("/api/v1/notes",o).then((function(e){return e.json()})).then((function(e){return console.log(e)}));case 5:return e.next=7,void window.location.reload();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return y.a.createElement(re,null,y.a.createElement(oe,null,e.stop.custName),y.a.createElement(ce,null,y.a.createElement(ie,null,y.a.createElement("p",null,"Address: ",y.a.createElement("span",null,e.stop.address)),""!==e.stop.suite&&y.a.createElement("p",null,"Suite: ",y.a.createElement("span",null,e.stop.suite)),y.a.createElement("p",null,"City:",y.a.createElement("span",null," ",e.stop.city)),y.a.createElement("p",null,"Delivery Location: ",y.a.createElement("span",null,e.stop.deliveryLocation)),""!==e.stop.notes&&y.a.createElement("p",null,"Notes: ",y.a.createElement("span",null,e.stop.notes))),y.a.createElement(le,null,""!==e.stop.signers&&y.a.createElement(se,null,y.a.createElement("p",null,"Past Signers"),y.a.createElement("ul",null,e.stop.signers.map((function(e){return y.a.createElement("li",{key:e},e)})))),y.a.createElement("div",null,y.a.createElement(me,{placeholder:"Signer Name",type:"text",value:a,onChange:function(e){return r(e.target.value)}}),y.a.createElement(he,{onClick:function(){o(e.stop._id),r("")}},"Add Signer")))),y.a.createElement(de,null,y.a.createElement(ue,{to:{pathname:"/update",state:{stop:e}}},"Update Note")))},re=L.a.div(i||(i=Object(O.a)(["\n  width: 70%;\n  padding-left: 2rem;\n  margin: 0.5rem 0;\n  border-radius: 8px;\n  border: solid 1px black;\n  background-color: white;\n  p {\n    font-weight: bold;\n  }\n  span {\n    font-weight: normal;\n  }\n"]))),oe=L.a.h3(l||(l=Object(O.a)(["\n  text-align: center;\n  font-size: 1.5rem;\n"]))),ie=L.a.div(s||(s=Object(O.a)(["\n  padding: 0 1rem;\n  width: 50%;\n  @media (max-width: 676px) {\n    width: 100%;\n  }\n"]))),le=L.a.div(c||(c=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0 1rem;\n  width: 50%;\n  @media (max-width: 676px) {\n    width: 100%;\n  }\n"]))),se=L.a.div(d||(d=Object(O.a)(["\n  ul {\n    list-style-type: none;\n  }\n"]))),ce=L.a.div(u||(u=Object(O.a)(["\n  display: flex;\n  margin-right: 2rem;\n  @media (max-width: 676px) {\n    flex-direction: column;\n  }\n"]))),de=L.a.div(h||(h=Object(O.a)(["\n  text-align: center;\n"]))),ue=Object(L.a)(E.b)(m||(m=Object(O.a)(["\n  display: inline-block;\n  text-decoration: none;\n  font-weight: bold;\n  color: white;\n  overflow: hidden;\n  background-color: red;\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border: 1px solid red;\n  border-radius: 5px;\n"]))),he=L.a.button(p||(p=Object(O.a)(["\n  display: inline-block;\n  text-decoration: none;\n  font-weight: bold;\n  color: white;\n  overflow: hidden;\n  background-color: red;\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border: 1px solid red;\n  border-radius: 5px;\n"]))),me=L.a.input(g||(g=Object(O.a)(["\n  padding: 0.5rem;\n  margin-right: 0.5rem;\n"]))),pe=function(e){Object(k.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).logout=a.logout.bind(Object(S.a)(a)),a}return Object(C.a)(n,[{key:"logout",value:function(){localStorage.removeItem("token"),this.props.history.push("/")}},{key:"render",value:function(){return y.a.createElement(be,null,y.a.createElement(ye,{to:"/add"},"Add"),y.a.createElement(ye,{to:"/stops"},"Stops"),y.a.createElement(ye,{to:"",onClick:this.logout},"Log Out"))}}]),n}(b.Component),ge=Object(j.f)(pe),be=L.a.div(W||(W=Object(O.a)(["\n  //   width: 50%;\n  border: 1px solid lightgray;\n  background: white;\n  text-align: center;\n"]))),ye=Object(L.a)(E.b)(_||(_=Object(O.a)(["\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  margin: 0.5rem 0;\n  text-decoration: none;\n  color: black;\n"]))),ve=function(e){Object(k.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={stops:[],search:"",dataLoaded:!1},e.onchange=function(t){e.setState({search:t.target.value})},e}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token");fetch("/api/v1/notes",{method:"GET",mode:"cors",headers:{Authorization:t}}).then((function(e){return e.json()})).then((function(t){return e.setState({stops:t.data,dataLoaded:!0})})).catch((function(t){console.log(t),e.props.history.push("/")}))}},{key:"render",value:function(){var e=this.state.search,t=this.state.stops.filter((function(t){return-1!==t.custName.toLowerCase().indexOf(e.toLowerCase())}));return t.length||!0!==this.state.dataLoaded?y.a.createElement("div",null,y.a.createElement(ge,null),y.a.createElement(je,null,"Stops"),y.a.createElement(fe,null,y.a.createElement(Ee,{type:"text",placeholder:"Search",onChange:this.onchange}),t.map((function(e){return y.a.createElement(ae,{key:e._id,stop:e})})))):y.a.createElement("div",null,y.a.createElement(ge,null),y.a.createElement(je,null,"Stops"),y.a.createElement(fe,null,y.a.createElement(Ee,{type:"text",placeholder:"Search",onChange:this.onchange}),y.a.createElement("p",null,"There were no matches for that search. Would you like to add one?"),y.a.createElement(Oe,{to:"/add"},"Add")))}}]),n}(y.a.Component),fe=L.a.div(B||(B=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),Ee=L.a.input(q||(q=Object(O.a)(["\n  margin-bottom: 1rem;\n  padding: 1rem 0;\n  width: 50%;\n  text-align: center;\n"]))),je=L.a.h1(G||(G=Object(O.a)(["\n  color: red;\n  font-size: 3rem;\n  text-align: center;\n"]))),Oe=Object(L.a)(E.b)(M||(M=Object(O.a)(["\n  display: inline-block;\n  text-decoration: none;\n  font-weight: bold;\n  color: white;\n  background-color: red;\n  margin-bottom: 1rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid red;\n"]))),xe=function(e){Object(k.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).state={custName:"",address:"",suite:"",city:"",deliveryLocation:"",notes:"",error:""},a.handleChange=a.handleChange.bind(Object(S.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(S.a)(a)),a}return Object(C.a)(n,[{key:"handleChange",value:function(e){this.setState({error:void 0}),this.setState(Object(x.a)({},e.target.name,e.target.value)),e.preventDefault()}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=localStorage.getItem("token");fetch("/api/v1/notes",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:t},body:JSON.stringify({custName:this.state.custName,address:this.state.address,suite:this.state.suite,city:this.state.city,deliveryLocation:this.state.deliveryLocation,notes:this.state.notes,signers:this.state.signers})}),this.setState({custName:"",address:"",suite:"",city:"",deliveryLocation:"",notes:"",signers:"",error:""}),this.props.history.push("/stops")}},{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(ge,null),y.a.createElement(we,null,"Add Stop"),y.a.createElement("p",null,this.state.error),y.a.createElement(Ce,null,y.a.createElement("input",{name:"custName",type:"text",placeholder:"Customer Name",value:this.state.custName,onChange:this.handleChange}),y.a.createElement("input",{name:"address",type:"text",placeholder:"Address",value:this.state.address,onChange:this.handleChange}),y.a.createElement("input",{name:"suite",type:"text",placeholder:"Suite",value:this.state.suite,onChange:this.handleChange}),y.a.createElement("input",{name:"city",type:"text",placeholder:"City",value:this.state.city,onChange:this.handleChange}),y.a.createElement("input",{name:"deliveryLocation",type:"text",placeholder:"Delivery Location",value:this.state.deliveryLocation,onChange:this.handleChange}),y.a.createElement("input",{name:"notes",type:"text",placeholder:"Notes",value:this.state.notes,onChange:this.handleChange}),y.a.createElement("input",{name:"signers",type:"text",placeholder:"Signers",value:this.state.signers,onChange:this.handleChange}),y.a.createElement("input",{type:"submit",value:"Add Note",onClick:this.handleSubmit})))}}]),n}(b.Component),we=L.a.h1(H||(H=Object(O.a)(["\n  font-size: 3rem;\n  color: red;\n  text-align: center;\n"]))),Ce=L.a.form(R||(R=Object(O.a)(['\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\n  input[type="text"] {\n    margin: 0.5rem 0;\n    padding: 1rem 0;\n    width: 50%;\n  }\n']))),Se=function(e){Object(k.a)(n,e);var t=Object(N.a)(n);function n(e){var a;if(Object(w.a)(this,n),void 0!==(a=t.call(this,e)).props.location.state){var r=a.props.location.state.stop.stop;localStorage.setItem("data",JSON.stringify(r)),console.log(r),a.state={id:r._id,custName:r.custName,address:r.address,suite:r.suite,city:r.city,deliveryLocation:r.deliveryLocation,notes:r.notes,signers:r.signers}}if(void 0===a.props.location.state){var o=localStorage.getItem("data"),i=JSON.parse(o);console.log(i),a.state={id:i._id,custName:i.custName,address:i.address,suite:i.suite,city:i.city,deliveryLocation:i.deliveryLocation,notes:i.notes,signers:i.signers}}return a.handleChange=a.handleChange.bind(Object(S.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(S.a)(a)),a}return Object(C.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value)),e.preventDefault()}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=localStorage.getItem("token");fetch("/api/v1/notes/".concat(this.state.id),{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json",Authorization:t},body:JSON.stringify({custName:this.state.custName,address:this.state.address,suite:this.state.suite,city:this.state.city,deliveryLocation:this.state.deliveryLocation,notes:this.state.notes,signers:this.state.signers})}),localStorage.removeItem("data"),this.props.history.push("/stops")}},{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(ge,null),y.a.createElement(ke,null,"Update Stop"),y.a.createElement("p",null,this.state.error),y.a.createElement(Ne,null,y.a.createElement("input",{name:"custName",type:"text",placeholder:"Customer Name",value:this.state.custName,onChange:this.handleChange}),y.a.createElement("input",{name:"address",type:"text",placeholder:"Address",value:this.state.address,onChange:this.handleChange}),y.a.createElement("input",{name:"suite",type:"text",placeholder:"Suite",value:this.state.suite,onChange:this.handleChange}),y.a.createElement("input",{name:"city",type:"text",placeholder:"City",value:this.state.city,onChange:this.handleChange}),y.a.createElement("input",{name:"deliveryLocation",type:"text",placeholder:"Delivery Location",value:this.state.deliveryLocation,onChange:this.handleChange}),y.a.createElement("input",{name:"notes",type:"text",placeholder:"Notes",value:this.state.notes,onChange:this.handleChange}),y.a.createElement("input",{name:"signers",type:"text",placeholder:"Signers",value:this.state.signers,onChange:this.handleChange}),y.a.createElement("input",{type:"submit",value:"Update Note",onClick:this.handleSubmit})))}}]),n}(b.Component),ke=L.a.h1($||($=Object(O.a)(["\n  font-size: 3rem;\n  color: red;\n  text-align: center;\n"]))),Ne=L.a.form(F||(F=Object(O.a)(['\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\n  input[type="text"] {\n    margin: 0.5rem 0;\n    padding: 1rem 0;\n    width: 50%;\n  }\n\n  input[type="submit"] {\n    margin: 0.5rem 0;\n    padding: 1rem 0;\n    width: 20%;\n  }\n']))),Le=function(e){Object(k.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).state={userName:"",password:"",error:""},a.handleChange=a.handleChange.bind(Object(S.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(S.a)(a)),a}return Object(C.a)(n,[{key:"handleChange",value:function(e){this.setState({error:void 0}),this.setState(Object(x.a)({},e.target.name,e.target.value)),e.preventDefault()}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("/api/v1/user/add",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:this.state.userName,password:this.state.password})}).then((function(e){return e.json()})).then((function(e){Object.prototype.hasOwnProperty.call(e,"error")&&(t.setState({error:e.error}),t.props.history.push("/")),Object.prototype.hasOwnProperty.call(e,"success")&&(localStorage.setItem("token",e.token),t.props.history.push("/stops"))}))}},{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(De,null,"Delivery Notes"),y.a.createElement(Ae,null,this.state.error),y.a.createElement(Te,{onSubmit:this.handleSubmit},y.a.createElement("input",{required:!0,name:"userName",type:"text",placeholder:"User Name",value:this.state.userName,onChange:this.handleChange}),y.a.createElement("input",{required:!0,name:"password",type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange}),y.a.createElement("input",{type:"submit",value:"Submit"})))}}]),n}(b.Component),De=L.a.h1(K||(K=Object(O.a)(["\n  text-align: center;\n  color: red;\n  margin-top: 4rem;\n"]))),Ae=L.a.p(Q||(Q=Object(O.a)(["\n  text-align: center;\n"]))),Te=L.a.form(V||(V=Object(O.a)(['\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\n  input {\n    width: 20rem;\n    margin: 0.5rem 0;\n    padding: 1rem 0;\n    text-align: center;\n  }\n\n  input[type="submit"] {\n    width: 5rem;\n  }\n'])));var Ie,Pe,ze,Je,Ue,We,_e=Object(j.f)((function(e){var t=["J. Doe","J. Smith","B. Williams"];return y.a.createElement(Be,null,y.a.createElement(qe,null,e.stop.custName),y.a.createElement(Re,null,y.a.createElement(Ge,null,y.a.createElement("p",null,"Address: ",y.a.createElement("span",null,e.stop.address)),""!==e.stop.suite&&y.a.createElement("p",null,"Suite: ",y.a.createElement("span",null,e.stop.suite)),y.a.createElement("p",null,"City:",y.a.createElement("span",null," ",e.stop.city)),y.a.createElement("p",null,"Delivery Location: ",y.a.createElement("span",null,e.stop.deliveryLocation))),y.a.createElement(Me,null,""!==t&&y.a.createElement(He,null,y.a.createElement("p",null,"Past Signers"),y.a.createElement("ul",null,t.map((function(e){return y.a.createElement("li",{key:e},e)})))))))})),Be=L.a.div(X||(X=Object(O.a)(["\n  width: 70%;\n  padding-left: 2rem;\n  margin: 0.5rem 0;\n  border-radius: 8px;\n  border: solid 1px black;\n  background-color: white;\n  p {\n    font-weight: bold;\n  }\n  span {\n    font-weight: normal;\n  }\n"]))),qe=L.a.h3(Y||(Y=Object(O.a)(["\n  text-align: center;\n  font-size: 1.5rem;\n"]))),Ge=L.a.div(Z||(Z=Object(O.a)(["\n  padding: 0 1rem;\n  width: 50%;\n  @media (max-width: 676px) {\n    width: 100%;\n  }\n"]))),Me=L.a.div(ee||(ee=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0 1rem;\n  width: 50%;\n  @media (max-width: 676px) {\n    width: 100%;\n  }\n"]))),He=L.a.div(te||(te=Object(O.a)(["\n  ul {\n    list-style-type: none;\n  }\n"]))),Re=L.a.div(ne||(ne=Object(O.a)(["\n  display: flex;\n  margin-right: 2rem;\n  @media (max-width: 676px) {\n    flex-direction: column;\n  }\n"]))),$e=function(e){Object(k.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).logout=a.logout.bind(Object(S.a)(a)),a}return Object(C.a)(n,[{key:"logout",value:function(){localStorage.removeItem("token"),this.props.history.push("/")}},{key:"render",value:function(){return y.a.createElement(Ke,null,y.a.createElement(Qe,{to:"",onClick:this.logout},"Log Out"))}}]),n}(b.Component),Fe=Object(j.f)($e),Ke=L.a.div(Ie||(Ie=Object(O.a)(["\n  //   width: 50%;\n  border: 1px solid lightgray;\n  background: white;\n  text-align: center;\n"]))),Qe=Object(L.a)(E.b)(Pe||(Pe=Object(O.a)(["\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  margin: 0.5rem 0;\n  text-decoration: none;\n  color: black;\n"]))),Ve=function(e){Object(k.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={stops:[],search:"",dataLoaded:!1},e.onchange=function(t){e.setState({search:t.target.value})},e}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token");fetch("/api/v1/notes/demo",{method:"GET",mode:"cors",headers:{Authorization:t}}).then((function(e){return e.json()})).then((function(t){return e.setState({stops:t.data,dataLoaded:!0})})).catch((function(t){console.log(t),e.props.history.push("/")}))}},{key:"render",value:function(){var e=this.state.search,t=this.state.stops.filter((function(t){return-1!==t.custName.toLowerCase().indexOf(e.toLowerCase())}));return t.length||!0!==this.state.dataLoaded?y.a.createElement("div",null,y.a.createElement(Fe,null),y.a.createElement(Ze,null,"Stops"),y.a.createElement(Xe,null,y.a.createElement(Ye,{type:"text",placeholder:"Search",onChange:this.onchange}),t.map((function(e){return y.a.createElement(_e,{key:e._id,stop:e})})))):y.a.createElement("div",null,y.a.createElement(Fe,null),y.a.createElement(Ze,null,"Stops"),y.a.createElement(Xe,null,y.a.createElement(Ye,{type:"text",placeholder:"Search",onChange:this.onchange}),y.a.createElement("p",null,"There were no matches for that search. Would you like to add one?"),y.a.createElement(et,{to:"/add"},"Add")))}}]),n}(y.a.Component),Xe=L.a.div(ze||(ze=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),Ye=L.a.input(Je||(Je=Object(O.a)(["\n  margin-bottom: 1rem;\n  padding: 1rem 0;\n  width: 50%;\n  text-align: center;\n"]))),Ze=L.a.h1(Ue||(Ue=Object(O.a)(["\n  color: red;\n  font-size: 3rem;\n  text-align: center;\n"]))),et=Object(L.a)(E.b)(We||(We=Object(O.a)(["\n  display: inline-block;\n  text-decoration: none;\n  font-weight: bold;\n  color: white;\n  background-color: red;\n  margin-bottom: 1rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid red;\n"])));function tt(){return y.a.createElement(E.a,null,y.a.createElement(j.c,null,y.a.createElement(j.a,{path:"/",exact:!0,component:D}),y.a.createElement(j.a,{path:"/stops",component:ve}),y.a.createElement(j.a,{path:"/add",exact:!0,component:xe}),y.a.createElement(j.a,{path:"/update",exact:!0,component:Se}),y.a.createElement(j.a,{path:"/register",exact:!0,component:Le}),y.a.createElement(j.a,{path:"/demo",exact:!0,component:Ve})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.render(y.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.68fa408e.chunk.js.map