$(document).ready(function(){function a(){$(e+" "+t).removeClass(t.substring(1))}var e,i,t;e=".post-toc",i=$(e),t=".active-current",i.on("activate.bs.scrollspy",function(){var t=$(e+" .active").last();a(),t.addClass("active-current"),i.scrollTop(t.offset().top-i.offset().top+i.scrollTop()-i.height()/2)}).on("clear.bs.scrollspy",a),$("body").scrollspy({target:e})}),$(document).ready(function(){var i=$("html"),s=$.isFunction(i.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this);if(!t.hasClass("sidebar-nav-active")){var a=$(".sidebar-panel-active"),e=$("."+t.data("target"));s?a.velocity("transition.slideUpOut",200,function(){e.velocity("stop").velocity("transition.slideDownIn",200).addClass("sidebar-panel-active")}):a.animate({opacity:0},200,function(){a.hide(),e.stop().css({opacity:0,display:"block"}).animate({opacity:1},200,function(){a.removeClass("sidebar-panel-active"),e.addClass("sidebar-panel-active")})}),t.siblings().removeClass("sidebar-nav-active"),t.addClass("sidebar-nav-active")}}),$(".post-toc a").on("click",function(t){t.preventDefault();var a=NexT.utils.escapeSelector(this.getAttribute("href")),e=$(a).offset().top;s?i.velocity("stop").velocity("scroll",{offset:e+"px",mobileHA:!1}):$("html, body").stop().animate({scrollTop:e},500)});var t=$(".post-toc-content"),a="post"===CONFIG.sidebar.display||"always"===CONFIG.sidebar.display,e=0<t.length&&0<t.html().trim().length;a&&e&&(CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar())});