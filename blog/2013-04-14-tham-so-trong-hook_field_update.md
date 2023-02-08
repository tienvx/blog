---
title: "Tham số trong hook_field_update"
authors: tienvx
date: "2013-04-14"
---

Đây là api của [hook\_field\_update](http://api.drupal.org/api/drupal/modules%21field%21field.api.php/function/hook_field_update/7). Hàm này nhận 6 tham số, trong đó có 2 tham số khó hiểu là $field và $instance. Thực ra $field và $instance là kết quả trả về của hàm field\_info\_field và field\_info\_instance.

```
$field = field\_info\_field();

$instance = field\_info\_instance();
```

[Đây](http://api.drupal.org/api/drupal/modules!field!field.module/group/field/7) là cấu trúc chi tiết của $field và $instance.
