var t=function(t){return function(e){return Math.pow(e,t)}},e=function(t){return function(e){return 1-Math.abs(Math.pow(e-1,t))}},i=function(i){return function(n){return n<.5?t(i)(2*n)/2:e(i)(2*n-1)/2+.5}},n={linear:function(t){return t},quadIn:t(2),quadOut:e(2),quadInOut:i(2),cubicIn:t(3),cubicOut:e(3),cubicInOut:i(3),quartIn:t(4),quartOut:e(4),quartInOut:i(4),quintIn:t(5),quintOut:e(5),quintInOut:i(5),sineIn:function(t){return 1+Math.sin(Math.PI/2*t-Math.PI/2)},sineOut:function(t){return Math.sin(Math.PI/2*t)},sineInOut:function(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2},bounce:function(t){var e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375}},r=[];function o(t,e,i,o,h){void 0===o&&(o=0);var s=Date.now(),u={},a={};for(var c in i)u[c]=t[c],a[c]=i[c],t[c]=i[c];var p=o+s,d={start:p,end:p+e,easing:n[h],target:t,properties:i,duration:e,delay:o,from:u,to:a};return r.push(d),function(t){d.cb=t}}function h(t){for(var e={},i=Date.now(),n=function(n){var h=r[n];if(h.target===t){var s=h.duration,u=h.to,a=h.easing;void 0===a&&(a=function(t){return t});var c=h.start,p=h.end,d=h.from;for(var l in h.properties)e[l]||(e[l]=0),i<c?e[l]+=d[l]-u[l]:i>=c&&i<p&&(e[l]+=a((p-Date.now())/s)*(d[l]-u[l]));i>p&&(r.splice(n--,1),setTimeout((function(){h.cb&&h.cb()}),0)),o=n}},o=0;o<r.length;o++)n(o);return e}function s(t,e){var i=t.length;t.forEach((function(t){t((function(t){0===--i&&e()}))}))}function u(t,e){if(t===e)return!1;var i=(t.absolutePosition||t).x,n=(t.absolutePosition||t).y,r=t.width,o=t.height,h=(e.absolutePosition||e).x,s=(e.absolutePosition||e).y,u=e.width,a=e.height;return i+r>=h&&i<=h+u&&n+o>=s&&n<=s+a}var a=function(t){void 0===t&&(t={});var e=t.game,i=t.group,n=t.type,r=t.style,o=t.x,h=t.y,s=t.width,u=t.height,a=t.createEl,c=t.render;this.type=n,this.style=r,this.x=o,this.y=h,this.width=s,this.height=u,this.createEl=a,this.render=c,Object.defineProperties(this,{_game:{writable:!0,value:e},group:{writable:!0,value:i}})},c={absolutePosition:{configurable:!0},game:{configurable:!0}};c.absolutePosition.get=function(){var t={x:this.x,y:this.y},e=h(this);return t.x+=e.x||0,t.y+=e.y||0,this.group&&(t.x+=this.group.x,t.y+=this.group.y),t},a.prototype.isIntersectingWith=function(t){return t.children?t.isIntersectingWith(this):u(this,t)},c.game.set=function(t){this._game=t},c.game.get=function(){return this.group?this.group.game:this._game},Object.defineProperties(a.prototype,c);var p=function(t){var e=t.game,i=t.type,n=t.x,r=t.y;this.type=i,this.x=n,this.y=r,Object.defineProperties(this,{children:{writable:!0,value:[]},game:{writable:!0,value:e}})};p.prototype.add=function(t,e){t.group?(t.group.remove(t),t.x-=this.x,t.y-=this.y):t.game&&(t.game.remove(t),t.x-=this.x,t.y-=this.y),t.group=this,this.children.push(t),e&&this.moveBack(!0)},p.prototype.remove=function(t,e){var i=this.children.indexOf(t);~i&&(t.x+=this.x,t.y+=this.y,t.group=null,this.children.splice(i,1)),e&&this.moveBack(!0)},p.prototype.isIntersectingWith=function(t){return t.children?this.children.find((function(e){return t.children.find((function(t){return u(e,t)}))})):this.children.find((function(e){return u(t,e)}))},p.prototype.distanceTo=function(t){return this.children.reduce((function(e,i){return Math.min(e,Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2)))}),1/0)};var d=function(t){function e(e){void 0===e&&(e={});var i=e.dir;t.call(this,Object.assign({},e,{type:"Pile"})),this.dir=i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.moveBack=function(){for(var t=this.dir,e=0;e<this.children.length;e++)o(this.children[e],200,{x:"horizontal"===t?15*e:0,y:"vertical"===t?30*e:0})},e}(p),l=function(t){function e(e){void 0===e&&(e={}),t.call(this,Object.assign({},e,{type:"Card"}));var i=e.i,n=e.side;this.i=i,this.side=n,Object.defineProperties(this,{_movingGroup:{writable:!0,value:!1}})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.preMove=function(){this._moving=!0},e.prototype.click=function(t){this.side="front"===this.side?"back":"front"},e.prototype.hold=function(){this.group&&(this._movingGroup=!0,this._moving=!1,this.group.children[0]._moving=!0)},e.prototype.dblClick=function(){this.group&&"Deck"===this.group.type&&this.group.shuffle()},e.prototype.startMove=function(t){this._movingGroup?this.group.game.add(this.group):this.group?(this.group.game.add(this.group),this.group.add(this)):this.game.add(this)},e.prototype.move=function(t){if(this._movingGroup)this.group.x+=t.x,this.group.y+=t.y;else{this.x+=t.x,this.y+=t.y;var e=this.group;e&&(e.isIntersectingWith(this)||(e.remove(this,!0),e.game.add(this)))}},e.prototype.endMove=function(){if(this._movingGroup)this._movingGroup=!1,this.group.children.forEach((function(t){t._moving=!1}));else if(this._moving=!1,this.group)this.group.moveBack(!0);else{var t=this.game.intersectingChildren(this);t.sort((function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}));var e=t[0];if(!e)return;if(e.children){if("Pile"===e.type&&1===e.children.length){var i={x:Math.abs(e.x-this.x),y:Math.abs(e.y-this.y)};e.dir=i.y>i.x?"vertical":"horizontal"}e.add(this,!0)}else{var n={x:Math.abs(e.x-this.x),y:Math.abs(e.y-this.y)},r=new d({game:this.game,dir:n.y>n.x?"vertical":"horizontal"});r.x=e.x,r.y=e.y,r.add(e),r.add(this,!0),this.game.add(r)}}},e.prototype.handleEvent=function(t){var e=this;if("mousedown"===t.type||"touchstart"===t.type){var i={x:(t.touches?t.touches[0]:t).pageX,y:(t.touches?t.touches[0]:t).pageY},n=Date.now();this.preMove();var r=i,o=!1,h=setTimeout((function(){e.hold()}),500),s=Date.now();s-this._lastClick<200&&this.dblClick(),this._lastClick=s;var u=function(t){o||(clearTimeout(h),e.startMove(),o=!0);var i={x:(t.touches?t.touches[0]:t).pageX,y:(t.touches?t.touches[0]:t).pageY},n={x:i.x-r.x,y:i.y-r.y};e.move(n),r=i},a=function(t){Date.now()-n<200&&e.click(),e._moving=!1,e._movingGroup=!1,e.group&&e.group.children.forEach((function(t){t._moving=!1})),clearTimeout(h),o&&e.endMove(),window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",a)};window.addEventListener("mousemove",u),window.addEventListener("mouseup",a),window.addEventListener("touchmove",u),window.addEventListener("touchend",a)}},e}(a);function f(t,e){e.style.width=t.width+"px",e.style.height=t.height+"px";for(var i=t.entities,n=0;n<i.length;n++){var r=i[n];r.el||Object.defineProperties(r,{el:{writable:!0,value:r.createEl()}}),r.render(r.el,r)}for(var o=e.firstChild,h=0;h<i.length;h++){var s=i[h];if(s.el)if(o){if(o===s.el){o=o.nextSibling;continue}e.insertBefore(s.el,o)}else e.appendChild(s.el)}for(;o;){var u=o.nextSibling;e.removeChild(o),o=u}}var g=function(t){void 0===t&&(t={});var e=t.width;void 0===e&&(e=1920);var i=t.height;void 0===i&&(i=1080),this.width=e,this.height=i,Object.defineProperties(this,{children:{writable:!0,value:[]},rendering:{writable:!0,value:null}})},v={entities:{configurable:!0},groups:{configurable:!0}};function y(t){if(!t.length)return t;for(var e=t.length-1;e;e--){var i=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[i],t[i]=n}return t}v.entities.get=function(){return this.children.reduce((function(t,e){return e.children?t.concat(e.children):t.concat(e)}),[])},v.groups.get=function(){return this.children.filter((function(t){return null!=t.children}))},g.prototype.add=function(t){return t.game&&t.game.remove(t),t.group&&t.group.remove(t),this.children.push(t),t.game=this,this},g.prototype.remove=function(t){var e=this.children.indexOf(t);return~e&&(this.children.splice(e,1),t.game=null),this},g.prototype.render=function(t){f(this,t)},g.prototype.startRender=function(t){var e=this;this.rendering||(this.rendering=requestAnimationFrame((function(){e.rendering=null,e.startRender(t),e.render(t)})))},g.prototype.intersectingChildren=function(t){return this.children.filter((function(e){return e.isIntersectingWith(t)}))},g.prototype.stopRender=function(){cancelAnimationFrame(this.rendering)},Object.defineProperties(g.prototype,v);export{l as Card,a as Entity,g as Game,p as Group,d as Pile,s as all,o as animate,h as getAnimatedProps,u as isIntersectingWith,f as render,y as shuffle};
