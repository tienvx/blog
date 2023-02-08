---
title: "Show error messages in drupal 8"
authors: tienvx
date: "2013-10-27"
---

Same as drupal 7, we put this into sites/default/settings.php:
```
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
```
