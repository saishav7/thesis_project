!function(t,e,i){function n(){h=e[o](function(){r.each(function(){var e=t(this),i=e.width(),n=e.height(),h=t.data(this,u);(i!==h.w||n!==h.h)&&e.trigger(a,[h.w=i,h.h=n])}),n()},s[d])}var h,r=t([]),s=t.resize=t.extend(t.resize,{}),o="setTimeout",a="resize",u=a+"-special-event",d="delay",c="throttleWindow";s[d]=250,s[c]=!0,t.event.special[a]={setup:function(){if(!s[c]&&this[o])return!1;var e=t(this);r=r.add(e),t.data(this,u,{w:e.width(),h:e.height()}),1===r.length&&n()},teardown:function(){if(!s[c]&&this[o])return!1;var e=t(this);r=r.not(e),e.removeData(u),r.length||clearTimeout(h)},add:function(e){function n(e,n,r){var s=t(this),o=t.data(this,u);o.w=n!==i?n:s.width(),o.h=r!==i?r:s.height(),h.apply(this,arguments)}if(!s[c]&&this[o])return!1;var h;return t.isFunction(e)?(h=e,n):(h=e.handler,e.handler=n,void 0)}}}(jQuery,this),function(t){function e(t){function e(){var e=t.getPlaceholder();0!=e.width()&&0!=e.height()&&(t.resize(),t.setupGrid(),t.draw())}function i(t){t.getPlaceholder().resize(e)}function n(t){t.getPlaceholder().unbind("resize",e)}t.hooks.bindEvents.push(i),t.hooks.shutdown.push(n)}var i={};t.plot.plugins.push({init:e,options:i,name:"resize",version:"1.0"})}(jQuery);