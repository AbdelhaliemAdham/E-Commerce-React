import{b as p,r as c}from"./react-DAnAhD9J.js";import"./react-dom-B4KzwZxx.js";import{a as E,_ as g,b as x,c as b}from"./@babel-DuB8yAtz.js";const m=p.createContext(null);function h(i,r){var a=function(t){return r&&c.isValidElement(t)?r(t):t},o=Object.create(null);return i&&c.Children.map(i,function(e){return e}).forEach(function(e){o[e.key]=a(e)}),o}function C(i,r){i=i||{},r=r||{};function a(f){return f in r?r[f]:i[f]}var o=Object.create(null),e=[];for(var t in i)t in r?e.length&&(o[t]=e,e=[]):e.push(t);var n,l={};for(var u in r){if(o[u])for(n=0;n<o[u].length;n++){var s=o[u][n];l[o[u][n]]=a(s)}l[u]=a(u)}for(n=0;n<e.length;n++)l[e[n]]=a(e[n]);return l}function d(i,r,a){return a[r]!=null?a[r]:i.props[r]}function M(i,r){return h(i.children,function(a){return c.cloneElement(a,{onExited:r.bind(null,a),in:!0,appear:d(a,"appear",i),enter:d(a,"enter",i),exit:d(a,"exit",i)})})}function V(i,r,a){var o=h(i.children),e=C(r,o);return Object.keys(e).forEach(function(t){var n=e[t];if(c.isValidElement(n)){var l=t in r,u=t in o,s=r[t],f=c.isValidElement(s)&&!s.props.in;u&&(!l||f)?e[t]=c.cloneElement(n,{onExited:a.bind(null,n),in:!0,exit:d(n,"exit",i),enter:d(n,"enter",i)}):!u&&l&&!f?e[t]=c.cloneElement(n,{in:!1}):u&&l&&c.isValidElement(s)&&(e[t]=c.cloneElement(n,{onExited:a.bind(null,n),in:s.props.in,exit:d(n,"exit",i),enter:d(n,"enter",i)}))}}),e}var F=Object.values||function(i){return Object.keys(i).map(function(r){return i[r]})},T={component:"div",childFactory:function(r){return r}},v=function(i){E(r,i);function r(o,e){var t;t=i.call(this,o,e)||this;var n=t.handleExited.bind(b(t));return t.state={contextValue:{isMounting:!0},handleExited:n,firstRender:!0},t}var a=r.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(e,t){var n=t.children,l=t.handleExited,u=t.firstRender;return{children:u?M(e,l):V(e,n,l),firstRender:!1}},a.handleExited=function(e,t){var n=h(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(l){var u=g({},l.children);return delete u[e.key],{children:u}}))},a.render=function(){var e=this.props,t=e.component,n=e.childFactory,l=x(e,["component","childFactory"]),u=this.state.contextValue,s=F(this.state.children).map(n);return delete l.appear,delete l.enter,delete l.exit,t===null?p.createElement(m.Provider,{value:u},s):p.createElement(m.Provider,{value:u},p.createElement(t,l,s))},r}(p.Component);v.propTypes={};v.defaultProps=T;export{v as T};
