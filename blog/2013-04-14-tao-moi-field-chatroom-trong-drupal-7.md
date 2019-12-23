---
title: "Tạo mới field chatroom trong drupal 7"
date: "2013-04-14"
---

if (!field\_info\_field('field\_chatroom')) { $field = array( 'field\_name' => 'field\_chatroom', 'type' => 'chatroom', ); field\_create\_field($field);

// Create the instance on the bundle. $instance = array( 'field\_name' => 'field\_chatroom', 'entity\_type' => 'node', 'label' => 'ChatRoom', 'bundle' => 'project', 'required' => TRUE, 'widget' => array( 'type' => 'chatroom\_chatroom', ), );

field\_create\_instance($instance);
