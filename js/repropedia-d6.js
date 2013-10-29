/*
 * Drupal6 Repropedia Tooltip Loader
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
        link.href = '//www.repropedia.org/sites/repropedia/clients/css/repropedia.css';
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
        link.addEventListener("load",function(){
          Repropedia.init({
            'CONSUMER_KEY' : 'your_oauth_key_here',
            'regions' : ['.content p']
          });
        })
        link.src = '//www.repropedia.org/sites/repropedia/clients/js/repropedia.js';
        head.appendChild(link);
    }

    });
})(jQuery);
