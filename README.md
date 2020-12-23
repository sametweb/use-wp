# useWp

To remove the read more link in `excerpt`, add this to the end of your `functions.php` file in your theme files:

```php
function new_excerpt_more($more) {
   global $post;
   return '...';
}
add_filter('excerpt_more', 'new_excerpt_more');
```
