/*
 * Wordpress Repropedia Tooltip Loader
 *
 * Written for Northwestern University by gmazin (github.com/gmazin)
 *
 */

(function($){
  $(document).ready(function(){
    var $ = document; 
    var cssId = 'repropediaCss';  
    if (!$.getElementById(cssId))
    {
        var head  = $.getElementsByTagName('head')[0];
        var link  = $.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://raw.github.com/nuamps/RepropediaJS/master/css/repropedia.css';
        link.media = 'all';
        head.appendChild(link);
    }
    var jsId = 'repropediaJsf';  
    if (!$.getElementById(jsId))
    {
        var head  = $.getElementsByTagName('head')[0];
        var link  = $.createElement('script');
        link.id   = jsId;
        link.type = 'text/javascript';
        link.src = 'https://raw.github.com/nuamps/RepropediaJS/master/js/repropedia.js';
        head.appendChild(link);
    }

    });
})(jQuery);

function addLoadEvent(func) { 
      var oldonload = window.onload; 
      if (typeof window.onload != 'function') { 
        window.onload = func; 
      } else { 
        window.onload = function() { 
          if (oldonload) { 
            oldonload(); 
          } 
          func(); 
        } 
    } 
} 

addLoadEvent( function() {
    Repropedia.init({
        'CONSUMER_KEY' : 'YOUR_OAUTH_KEY_HERE',
        'field_css_class' : 'post-data',
        'regions' : [':not(wp-admin) .post-data']
    }); 
});