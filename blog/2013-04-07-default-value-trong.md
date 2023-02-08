---
title: "Default value trong twig"
authors: tienvx
date: "2013-04-07"
---

```
{% set value = value|default('now +1 day'|datetimelocal()) %}
```
