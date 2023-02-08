---
title: "Routing Auth"
authors: tienvx
date: "2013-04-07"
---

```
namespace_bundle_homepage:
  pattern:  /
  defaults: {
    _controller: NameSpaceBundle:Default:index
  }
namespace_bundle_login:
  pattern:  /
  login defaults: {
    _controller: NameSpaceBundle:Security:login
  }
namespace_bundle_check:
  pattern:  /login_check
namespace_bundle_logout:
  pattern:  /logout
```
