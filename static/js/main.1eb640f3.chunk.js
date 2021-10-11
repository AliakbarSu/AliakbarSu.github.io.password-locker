(this["webpackJsonppassword-locker"]=this["webpackJsonppassword-locker"]||[]).push([[0],{164:function(e,t,n){},174:function(e,t){},176:function(e,t){},186:function(e,t){},188:function(e,t){},215:function(e,t){},217:function(e,t){},218:function(e,t){},223:function(e,t){},225:function(e,t){},231:function(e,t){},233:function(e,t){},252:function(e,t){},264:function(e,t){},267:function(e,t){},314:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(46),r=n.n(s),o=(n(98),n(13)),i=(n.p,n(163),n(164),n(326)),j=n(49),l=n.n(j),d=n(322),b=n(2),u=function(e){function t(){var t=l()();return t.isBefore(e.note.startDate)||t.isAfter(e.note.endDate)}return Object(b.jsxs)(i.a.Item,{children:[Object(b.jsx)("h5",{children:e.note.title}),Object(b.jsxs)("p",{children:[!t()&&"Opens At "+l()(e.note.endDate).format("MMMM Do, h:mm a"),t()&&l()(e.note.endDate).format("MMMM Do, h:mm a")]}),t()&&e.note.note,!t()&&"******************",Object(b.jsxs)("div",{className:"deleteBtnContainer",children:[t()&&Object(b.jsx)(d.a,{onClick:function(){navigator.clipboard.writeText(e.note.note)},className:"deleteBadge",bg:"primary",children:"Copy"}),Object(b.jsx)(d.a,{onClick:function(){e.onDelete(e.note.id)},className:"deleteBadge ml-1",bg:"secondary",children:"Delete"})]})]})},O=function(e){return Object(b.jsx)(i.a,{children:e.notes.map((function(t){return Object(b.jsx)(u,{onDelete:e.onDelete,note:t},t.id)}))})},h=n(97),f=n.n(h),x=n(323),m=n(324),p=n(155),v=n(327),g=n(325),w=(n(166),n(328)),C=n(167),D=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),j=i[0],l=i[1],d=Object(c.useState)(new Date),u=Object(o.a)(d,2),O=u[0],h=u[1],D=Object(c.useState)(new Date),S=Object(o.a)(D,2),N=S[0],y=S[1];return Object(b.jsxs)(x.a,{className:"addNoteContainer",children:[Object(b.jsx)(m.a,{children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(v.a.Label,{children:"Title"}),Object(b.jsx)(v.a.Control,{value:j,onChange:function(e){var t=e.target.value;return l(t)},type:"text"})]})}),Object(b.jsxs)(m.a,{className:"p-1 d-flex justify-content-between mt-4",children:[Object(b.jsx)(p.a,{children:Object(b.jsx)(v.a.Label,{children:"Password"})}),Object(b.jsxs)(p.a,{className:"d-flex justify-content-end",children:[Object(b.jsx)(g.a,{variant:"secondary",onClick:function(){var e=C.generate({length:15,numbers:!0});s(e)},children:"Auto Generate"})," "]})]}),Object(b.jsx)(m.a,{children:Object(b.jsx)(p.a,{children:Object(b.jsx)(v.a.Control,{value:a,onChange:function(e){e.preventDefault(),s(e.target.value)},as:"textarea",rows:3,style:{height:"100px"}})})}),Object(b.jsx)(m.a,{className:"p-1 mt-2",children:Object(b.jsx)(p.a,{children:Object(b.jsx)(v.a.Label,{children:"Lock password from"})})}),Object(b.jsx)(m.a,{children:Object(b.jsx)(p.a,{children:Object(b.jsx)(f.a,{showTimeSelect:!0,selected:O,onChange:function(e){return h(e)}})})}),Object(b.jsx)(m.a,{className:"p-1 mt-3",children:Object(b.jsx)(p.a,{children:Object(b.jsx)(v.a.Label,{children:"To"})})}),Object(b.jsx)(m.a,{children:Object(b.jsx)(p.a,{children:Object(b.jsx)(f.a,{showTimeSelect:!0,selected:N,onChange:function(e){return y(e)}})})}),Object(b.jsx)(m.a,{children:Object(b.jsxs)(p.a,{className:"buttonContainer",children:[Object(b.jsx)(g.a,{variant:"primary",onClick:function(){var t={id:Object(w.a)(),title:j,note:a,startDate:O,endDate:N};e.onSave(t)},children:"Save Password"})," "]})})]})};var S=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(o.a)(s,2),i=r[0],j=r[1];function l(){var e=localStorage.getItem("passwords");return e?JSON.parse(e):[]}function d(e){localStorage.removeItem("passwords"),localStorage.setItem("passwords",JSON.stringify(e))}return Object(c.useEffect)((function(){j(l())}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(x.a,{children:[Object(b.jsx)(m.a,{children:Object(b.jsxs)(p.a,{children:[!n&&(i.length?Object(b.jsx)(O,{onDelete:function(e){var t=l();t=t.filter((function(t){return t.id!==e})),j(t),d(t)},notes:i}):Object(b.jsx)("p",{className:"noPassText",children:"No Password To Display"})),n&&Object(b.jsx)(D,{onSave:function(e){var t=l();t.push(e),j(t),d(t),a(!1)}})]})}),!n&&Object(b.jsx)(m.a,{children:Object(b.jsxs)(p.a,{className:"buttonContainer",children:[Object(b.jsx)(g.a,{variant:"primary",onClick:function(){a(!0)},children:"Add Password"})," "]})})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,329)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),N()},98:function(e,t,n){}},[[314,1,2]]]);
//# sourceMappingURL=main.1eb640f3.chunk.js.map