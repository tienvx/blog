---
title: "Exclude directory from grep search"
authors: tienvx
date: "2014-05-07"
---

1. If we want to exclude abc/ and xyz/ directory (in root directory) form grep's results we can do this: grep -rn --exclude-dir={abc,xyz} "text to find"
2. If we want to exclude abc/def/some\_thing\_special/ghi...: grep -rn --exclude-dir={some\_thing\_special} "text to find"
3. Do you know how to exclude the whole directory path?
