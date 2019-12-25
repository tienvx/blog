---
title: "Pass by reference trong module_invoke"
date: "2013-04-14"
---

Unfortunately [module_invoke_all()](http://api.drupal.org/api/drupal/includes!module.inc/function/module_invoke_all/7) and [module_invoke()](http://api.drupal.org/api/drupal/includes!module.inc/function/module_invoke/7) do not allow passing variables by reference.

To work around this, you can do something like this:

```
<?php foreach (module_implements('my_hook') as $module) {
  $function = $module . '_my_hook';
  $function($var1, $var2);
}
?>
```
