(this.webpackJsonpv1=this.webpackJsonpv1||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(2),c=a.n(i),s=a(16),r=a.n(s),l=(a(22),a.p+"static/media/TEG.06c3085d.png"),o=function(){return Object(n.jsxs)("header",{children:[Object(n.jsx)("nav",{className:"navbar",style:{minHeight:80,backgroundColor:"#1a1a1a"},children:Object(n.jsx)("div",{className:"container-fluid ",style:{},children:Object(n.jsx)("a",{className:"navbar-brand brandPicForceToCenter",href:"#",style:{left:"50%",position:"absolute"},children:Object(n.jsx)("img",{src:l,style:{width:110,height:70}})})})}),Object(n.jsx)("nav",{className:"navbar toBeShownOnScroll",style:{minHeight:80,backgroundColor:"#1a1a1a"},children:Object(n.jsx)("div",{className:"container-fluid ",style:{},children:Object(n.jsx)("a",{className:"navbar-brand",href:"#",style:{},children:Object(n.jsx)("img",{src:l,style:{width:110,height:70}})})})})]})},d=function(){return Object(n.jsx)("footer",{style:{backgroundColor:"#1a1a1a"},children:Object(n.jsx)("div",{className:"container",id:"form",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-12",style:{minHeight:50,paddingTop:10,color:"#fff"},children:"\xa9 2020 The E-Guardians"})})})})},j=function(e){var t=e.children;return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(o,{}),t,Object(n.jsx)(d,{})]})},m=(a(23),a.p,function(){return Object(n.jsx)("div",{className:"backgroundImage",children:Object(n.jsxs)("div",{className:"backgroundImageText",children:[Object(n.jsx)("h1",{style:{fontSize:50},children:"Achivement Record"}),Object(n.jsx)("h3",{style:{fontSize:30},children:"B.Tech CSE SEM 1"}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"#form",children:Object(n.jsx)("i",{style:{fontSize:70,marginTop:150},class:"fas fa-chevron-circle-down"})})})]})})}),b=a(4),u=a(1),h=a(5),O=a(7),g=a.n(O),p=function(){return Object(n.jsxs)("div",{style:{textAlign:"center",marginBottom:200,paddingTop:80},children:[Object(n.jsx)("img",{src:"https://i.pinimg.com/originals/3e/f0/e6/3ef0e69f3c889c1307330c36a501eb12.gif",alt:"",style:{height:200,width:200,marginBottom:50}}),Object(n.jsx)("h1",{children:"Uploading Please Wait!!"})]})},f=function(){var e=Object(i.useState)({file:null}),t=Object(h.a)(e,2),a=t[0],c=t[1],s=Object(i.useState)({name:"",amityEmail:"",email:""}),r=Object(h.a)(s,2),l=r[0],o=r[1],d=l.name,j=l.amityEmail,m=l.email,O=Object(i.useState)({isUploading:!1,uploaded:!1,errorMessage:null}),f=Object(h.a)(O,2),x=f[0],v=f[1],y=x.isUploading,N=(x.uploaded,x.errorMessage),C=Object(i.useState)({courseName:"",organisation:""}),w=Object(h.a)(C,2),E=w[0],S=w[1],M=E.courseName,F=E.organisation,T=function(e){return function(t){o(Object(u.a)(Object(u.a)({},l),{},Object(b.a)({},e,t.target.value)))}},k=function(e){return function(t){S(Object(u.a)(Object(u.a)({},E),{},Object(b.a)({},e,t.target.value)))}};return Object(n.jsx)("div",{className:"container",id:"form",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-md-12",children:[1!=y&&Object(n.jsxs)("div",{className:"form-style-5",children:[Object(n.jsx)("div",{style:{marginTop:20,marginBottom:20},children:N}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("fieldset",{children:[Object(n.jsxs)("legend",{children:[Object(n.jsx)("span",{className:"number",children:"1"})," Candidate Info"]}),Object(n.jsx)("input",{type:"text",name:"field1",placeholder:"Your Name *",value:d,onChange:T("name")}),Object(n.jsx)("input",{type:"email",name:"field2",placeholder:"Your Amity Email *",value:j,onChange:T("amityEmail")}),Object(n.jsx)("input",{type:"email",name:"field3",placeholder:"Your Email *",value:m,onChange:T("email")})]}),Object(n.jsxs)("fieldset",{children:[Object(n.jsxs)("legend",{children:[Object(n.jsx)("span",{className:"number",children:"2"})," Achievment Information"]}),Object(n.jsx)("input",{type:"text",name:"field4",placeholder:"Name of the Course / Certificate",value:M,onChange:k("courseName")}),Object(n.jsx)("input",{type:"text",name:"field5",placeholder:"Issuing Organization",value:F,onChange:k("organisation")}),"Scaned Form",Object(n.jsx)("span",{style:{color:"red"},children:" *"})," : \xa0 ",Object(n.jsx)("input",{type:"file",onChange:function(e){c({file:e.target.files[0]})},style:{marginBottom:10},accept:"application/img"}),null!==a.file&&Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"File Details:"}),Object(n.jsxs)("p",{children:["File Name: ",a.file.name]}),Object(n.jsxs)("p",{children:["File Type: ",a.file.type]}),Object(n.jsxs)("p",{children:["Last Modified:"," ",a.file.lastModifiedDate.toDateString()]})]})]}),Object(n.jsx)("input",{type:"submit",defaultValue:"Apply",onClick:function(e){e.preventDefault(),console.log("candidateDetail : ",l),console.log("Achivement : ",E),console.log("File  : ",a.file),""!==d&&""!==j&&""!==m&&""!==M&&""!==F&&null!==a.file?(v(Object(u.a)(Object(u.a)({},x),{},{isUploading:!0,errorMessage:""})),function(){var e=new FormData;e.append("file",a.file),e.append("upload_preset","UserProfile"),e.append("cloud_name","dd0txohwe"),g.a.post("https://api.cloudinary.com/v1_1/dd0txohwe/image/upload",e).then((function(e){g.a.post("https://newsapp-api-admin.herokuapp.com/form/api",{name:d,email:m,amityEmail:j,courseName:M,organisation:F,imageLink:e.data.url}).then((function(){v(Object(u.a)(Object(u.a)({},x),{},{isUploading:!1,errorMessage:"Form Uploaded"})),o({name:"",amityEmail:"",email:""}),S({courseName:"",organisation:""}),c({file:null})})).catch((function(e){return alert("Request failed, Please contact system organisation with error : ",e)}))}))}()):""===d?v(Object(u.a)(Object(u.a)({},x),{},{errorMessage:"You have not entered your name"})):""===j?v(Object(u.a)(Object(u.a)({},x),{},{errorMessage:"You have not entered your Amity Email"})):""===m?v(Object(u.a)(Object(u.a)({},x),{},{errorMessage:"You have not entered your Email"})):""===M?v(Object(u.a)(Object(u.a)({},x),{},{errorMessage:"You have not entered Course Name"})):""===F?v(Object(u.a)(Object(u.a)({},x),{},{errorMessage:"You have not entered your Issuing Organisation"})):null===a.file?v(Object(u.a)(Object(u.a)({},x),{},{errorMessage:"You have not selected any file"})):alert("Error")}})]})]}),y&&Object(n.jsx)(p,{})]})})})};var x=function(){return Object(n.jsx)(j,{children:Object(n.jsxs)("div",{style:{backgroundColor:"#1a1a1a",color:"white",paddingTop:20,minHeight:"600px"},children:[Object(n.jsx)(m,{}),Object(n.jsx)(f,{})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),v()}},[[42,1,2]]]);
//# sourceMappingURL=main.ee6644cc.chunk.js.map