(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(5),s=n.n(r),i=n(3),o=n(6),l=n.n(o),b=n(0),j=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,r=t.positivePercentage;return Object(b.jsxs)("ul",{className:l.a.Statlist,children:[Object(b.jsxs)("li",{children:["Good: ",e]}),Object(b.jsxs)("li",{children:["Neutral: ",n]}),Object(b.jsxs)("li",{children:["Bad: ",a]}),Object(b.jsxs)("li",{children:["Total: ",c]}),Object(b.jsxs)("li",{children:["Positive feedback: ",r]})]})},u=n(7),d=function(t){var e=t.message;return Object(b.jsx)("p",{children:e})};d.propType={message:n.n(u).a.array.isRequired};var O=d,h=n(2),p=n.n(h),x=function(t){var e=t.propspArr,n=t.onLeaveFeedback;return Object(b.jsx)("ul",{className:p.a.Statlist,children:e.map((function(t){return Object(b.jsx)("li",{className:p.a.StatlistItem,children:Object(b.jsx)("button",{onClick:n,className:p.a.button,type:"button",children:t})},t)}))})};var f=function(){var t=Object(a.useState)(0),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(0),s=Object(i.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(0),d=Object(i.a)(u,2),h=d[0],p=d[1];function f(){return o+h+n}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Please leave feedback"}),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(x,{propspArr:["Good","Neutral","Bad"],onLeaveFeedback:function(t){"Good"===t.target.innerHTML&&c((function(t){return t+1})),"Neutral"===t.target.innerHTML&&l((function(t){return t+1})),"Bad"===t.target.innerHTML&&p((function(t){return t+1}))}})}),Object(b.jsx)("h2",{children:"Statistics"}),0===f()?Object(b.jsx)(O,{message:"No feedback given"}):Object(b.jsx)(j,{good:n,neutral:o,bad:h,total:f(),positivePercentage:function(){var t=o+h+n;return Math.floor(n/t*100)+"%"}()})]})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={button:"FeedbackOptions_button__3UdWO",Statlist:"FeedbackOptions_Statlist__1As3F",StatlistItem:"FeedbackOptions_StatlistItem__2lVkb"}},6:function(t,e,n){t.exports={Statlist:"Statistics_Statlist__3W0ND"}}},[[15,1,2]]]);
//# sourceMappingURL=main.a86d0ad0.chunk.js.map