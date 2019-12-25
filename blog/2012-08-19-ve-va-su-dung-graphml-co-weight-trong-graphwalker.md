---
title: "Graphml có weight trong graphwalker"
date: "2012-08-19"
---

1. Để vẽ graphml, ta sử dụng yEd. Cách cài yEd hơi rắc rối tí, tương tự như Virtualbox, bạn vào category Linux để biết thêm cách cài.

trong yEd, ở mỗi nhánh (edge), ta chọn properties, rồi thêm dòng weight=0,7

![Edit weight in yEd](/img/blog/screenshot-properties.png)

weight chạy từ 0 -> 1. 1 là cao nhất, tức là xác suất chạy qua cạnh này luôn là 100%. ở trên xác suất chạy qua cạnh e_SearchBooks chỉ là 70%.

chú ý là ta không cần edit tất cả các cạnh (edge), mà chỉ edit một số cạnh thôi, các cạnh còn lại share nhau số % còn lại.

2. để sử dụng weight hiệu quả nhất, ta nên test offline.

```
java -jar graphwalker.jar offline -f model-with-weight.graphml -g RANDOM -s TEST_LENGTH:100 -w
```

Tuy nhiên có vẻ như graphwalker không thân thiện lắm khi xuất log cho weight. Ta không biết tỉ lệ chạy thực tế qua từng cạnh như thế nào.

Bạn nên cho TEST_LENGTH lớn để tỉ lệ chạy qua các cạnh sát hơn.

Chú ý tham số -w, tham số này nói rằng sử dụng weight khi generate testcase. Trong trang chủ của graphwalker không có nói tới vấn đề nay.
