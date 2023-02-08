---
title: "Unison End_of_file exception raised in loading archive"
authors: tienvx
date: "2016-03-08"
---

Solution:

1. Go to ~/.unison on your local and delete all cache files. e.g. ar82caecb482c04a8d000cc5f562acde60 and fp82caecb482c04a8d000cc5f562acde60
2. Go to ~/.unison on your server and delete all cache files, just like above
3. Delete unison.log if you want (This file is big)
