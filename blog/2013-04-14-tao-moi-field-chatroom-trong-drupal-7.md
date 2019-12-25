---
title: "Tạo mới field chatroom trong drupal 7"
date: "2013-04-14"
---

```
if (!field_info_field('field_chatroom')) {
  $field = array( 'field_name' => 'field_chatroom', 'type' => 'chatroom', );
  field_create_field($field);

  // Create the instance on the bundle.
  $instance = array( 'field_name' => 'field_chatroom', 'entity_type' => 'node', 'label' => 'ChatRoom', 'bundle' => 'project', 'required' => TRUE, 'widget' => array( 'type' => 'chatroom_chatroom', ), );


  field_create_instance($instance);
}
```
