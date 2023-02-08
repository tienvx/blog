---
title: "Một số command trong Symfony 2"
authors: tienvx
date: "2013-04-07"
---

1. cache logs

```
rm -rf app/cache/\*
rm -rf app/logs/\*
sudo chmod 777 -R app/cache app/logs
```

2. config visual http://website.com/web/app_dev.php/_configurator/step/0

3. parameters.yml:

```
parameters:
  database_driver: pdo_mysql
  database_host: 127.0.0.1
  database_port: null
  database_name: db_name
  database_user: root
  database_password: null
  mailer_transport: smtp
  mailer_host: 127.0.0.1
  mailer_user: null
  mailer_password: null
  locale: en
  secret: b998a210c4981883d4447fa4a6bea331d
  database_path: null
```

4. bundle php

```
app/console generate:bundle --namespace=NameSpace/Bundle --dir=yml --format=yml
```

5. doctrine
```
doctrine:schema:drop --force doctrine:schema:create
```

6. entities:
```
doctrine:generate:entity --entity="NameSpaceBundle:Entity" --fields="title:string body:text tags:text created:datetime updated:datetime"
doctrine:generate:entities NameSpace
```

7. fixtures and migrations

```
php app/console doctrine:migrations:diff
php app/console doctrine:migrations:migrate
php app/console doctrine:fixtures:load
```

8. assests

```
php app/console assets:install web --symlink
```

9. đánh dấu

http://symfony2admingenerator.org/installation.html
