Repropedia Tooltip Loaders
==============
This is an integration tool meant to simplify the enabling of websites to use the Repropedia.js tooltip library.

Currently supported for Wordpress, with Drupal 6 and 7 coming very soon. A generic version is also available for websites not using a CMS.

##How to use
To use, add the following lines of code to the header of your website
```html
<script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'></script>
<script type='text/javascript' src='//www.repropedia.org/sites/repropedia/clients/js/jquery.tools.min.js'></script>
<script type='text/javascript' src='PATH TO YOUR repropedia-***.js'></script>
```

Be sure to change the last line to where ever you may be hosting this file. Additionally, within the file, please change the following parameters:

	'CONSUMER_KEY' : 'YOUR_OAUTH_KEY_HERE',
	'regions' : ['.element']

CONSUMER_KEY is the oauth key you obtained from repropedia.org. "regions", a space-seperated listing of CSS elements, must be changed if you are using the generic script or you wish for a more specialized function on your CMS. There is support for fields to be excluded that may be under other CSS classes. For example:
    
	'regions' : [':not(wp-admin) .post-data']

This will add tooltips to all elements with class "post-data" but not "wp-admin" should "wp-admin" fall under "post-data".