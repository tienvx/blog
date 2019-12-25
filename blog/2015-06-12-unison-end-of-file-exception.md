---
title: "Unison end of file exception"
date: "2015-06-12"
---

When your computer crash while a unison's profile is open, you will see this error: "End_of_file exception raised in loading archive" (this indicates a bug!)

You can run the command bellow to make it fix the profile, and then you can open the profile again without the error.

```
unison-gtk -ignorearchives
```
