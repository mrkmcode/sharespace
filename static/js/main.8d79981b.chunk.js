(this.webpackJsonpsharespace=this.webpackJsonpsharespace||[]).push([[0],{109:function(e,t,n){e.exports=n(216)},114:function(e,t,n){},118:function(e,t){},120:function(e,t){},131:function(e,t){},133:function(e,t){},160:function(e,t){},162:function(e,t){},163:function(e,t){},169:function(e,t){},171:function(e,t){},189:function(e,t){},192:function(e,t){},208:function(e,t){},211:function(e,t){},214:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(103),o=n.n(r),i=(n(114),n(35)),s=n(17),l=n(37),u=n(36),p=n(104),m=(n(214),n(108)),f=(n(215),n(105)),d=n(107),S=n(54),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onSubmit=function(e){e.preventDefault();var t=a.state.peerId;(0,a.props.joinSpace)(t),a.setState({peerId:""})},a.render=function(){return c.a.createElement(f.a,null,c.a.createElement(d.a,{sm:"12",md:"8",lg:"8"},c.a.createElement("div",{className:"ss-centered"},c.a.createElement("h1",null,"SHARESPACE"),c.a.createElement("h2",{className:"ss-tagline"},"Create Space. Invite People. Share Stuff."),c.a.createElement("div",{className:"ss-form"},c.a.createElement("input",{className:"form-control ss-text-input",type:"text",placeholder:"Enter Space Name",value:a.state.peerId,onChange:function(e){a.setState({peerId:e.target.value})}}),c.a.createElement(S.a,{className:"ss-submit-btn",variant:"outline-primary",onClick:function(e){a.onSubmit(e)}},"JOIN")),c.a.createElement("p",{style:{marginTop:"1rem",color:"#ffffff"}},"OR"),c.a.createElement("div",{className:"ss-form"},c.a.createElement(S.a,{className:"ss-submit-btn",variant:"outline-primary",onClick:a.props.createSpace},"CREATE")))))},a.state={peerId:""},a.onSubmit=a.onSubmit.bind(Object(s.a)(a)),a}return n}(a.Component),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).createSpaceHandler=function(){var t=Object(p.randomBytes)(4).toString("hex");e.setState({userId:t}),console.log("Space created",e.state.userId)},e.joinSpaceHandler=function(t){e.setState({peerId:t}),console.log("Peer created",e.state.peerId)},e.render=function(){return c.a.createElement(m.a,{fluid:"md"},c.a.createElement(b,{createSpace:e.createSpaceHandler,joinSpace:e.joinSpaceHandler}))},e.state={userId:"",peerId:""},e.createSpaceHandler=e.createSpaceHandler.bind(Object(s.a)(e)),e.joinSpaceHandler=e.joinSpaceHandler.bind(Object(s.a)(e)),e}return n}(a.Component);o.a.render(c.a.createElement(E,null),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.8d79981b.chunk.js.map