(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){},18:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=(a(18),a(3)),i=a(4),h=a(6),l=a(5),u=a(7),p=a(11),j=a.n(p),b=(a(39),a(1)),g=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.elem,t=e.largeImageURL,a=e.webformatURL,n=e.tags;return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:t,children:Object(b.jsx)("img",{src:a,alt:n})})})}}]),a}(n.Component),f=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={page:1},e.hendelNextPage=function(){console.log(e.props.page);var t=e.props.page+1;e.props.onClick(t)},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("button",{type:"button",onClick:this.hendelNextPage,children:"Load more"})}}]),a}(n.Component),d=a(12),m=a.n(d),O=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],url:"https://pixabay.com/api/",key:"22580473-9722fdac11ed5197610aea928",page:1,perPage:12,options:"image_type=photo&orientation=horizontal",status:"idle",error:null},e.hendelNextPage=function(t){e.setState({page:t})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props.search;if(e.search!==n){var r=this.state,c=r.url,s=r.page,o=r.key,i=r.perPage,h=r.options,l="".concat(c,"?q=").concat(n.trim(),"&page=").concat(s,"&key=").concat(o,"&").concat(h,"&per_page=").concat(i);this.setState({status:"pending"}),fetch(l).then((function(e){return e.json()})).then((function(e){if(console.log(!e.hits.length),!e.hits.length)return Promise.reject(new Error("The given request ".concat(n," is not available!!!")));a.setState({gallery:e.hits,status:"resoved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})})).finally((function(){}))}}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.status,n=e.page,r=e.error,c=!!t.length;return"idle"===a?Object(b.jsx)("div",{}):"pending"===a?Object(b.jsx)(j.a,{type:"Watch",color:"#00BFFF",height:100,width:100}):(console.log(t,r),Object(b.jsxs)("div",{children:[Object(b.jsx)("ul",{className:m.a.gallery_list,children:c&&t.map((function(e){return Object(b.jsx)(g,{elem:e},e.id)}))}),!c&&u.b.error(r.message),"resoved"===a&&Object(b.jsx)(f,{page:n,onClick:this.hendelNextPage})]}))}}]),a}(n.Component),v=a(13),y=(a(41),a(9)),x=a.n(y),S=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.handleSearchChange=function(t){e.setState({search:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.search.trim())return e.setState({search:""}),u.b.error("Search must not be empty!");e.props.onSubmit(e.state.search),e.setState({search:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.search;return Object(b.jsxs)("form",{className:x.a.form,onSubmit:this.handleSubmit,children:[Object(b.jsx)("input",{className:x.a.form_input,type:"text",name:"search",required:!0,onChange:this.handleSearchChange,value:e}),Object(b.jsx)("button",{className:x.a.form_submit,type:"submit",children:Object(b.jsx)(v.a,{})})]})}}]),a}(n.Component),k=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.hendleFormSearch=function(t){e.setState({search:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.search;return Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsx)(S,{onSubmit:this.hendleFormSearch}),Object(b.jsx)(O,{search:e}),Object(b.jsx)(u.a,{autoClose:3e3})]})}}]),a}(n.Component);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[42,1,2]]]);
//# sourceMappingURL=main.057be705.chunk.js.map