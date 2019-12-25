---
title: "Cài bundle cho Symfony 2 một cách thủ công"
date: "2013-04-07"
---

1.
  * Copy doctrine-fixtures, doctrine-fixtures-bundle, doctrine-migrations, doctrine-migrations-bundle to folder ./vender/doctrine/
  * Copy knp-menu, knp-menu-bundle to folder ./vender/knp/

2. Registry bundle in AppKernel

```
$bundles = array( new Knp\\Bundle\\MenuBundle\\KnpMenuBundle(), );

if (in_array($this->getEnvironment(), array('dev', 'test'))) {
  $bundles[] = new Doctrine\\Bundle\\FixturesBundle\\DoctrineFixturesBundle();
  $bundles[] = new Doctrine\\Bundle\\MigrationsBundle\\DoctrineMigrationsBundle();
}
return $bundles;
```

3. Update namespace (file ./vender/composer/autoload_namespaces.php)

```
'Doctrine\\\\DBAL' => $vendorDir . '/doctrine/dbal/lib/', add =>    'Doctrine\\\\Common\\\\DataFixtures'    => $vendorDir . '/doctrine/doctrine-fixtures/lib', add =>    'Doctrine\\\\DBAL\\\\Migrations'    => $vendorDir . '/doctrine/doctrine-migrations/lib', 'Doctrine\\\\Common' => $vendorDir . '/doctrine/common/lib/', add =>    'Doctrine\\\\Bundle\\\\FixturesBundle' => $vendorDir . '/doctrine/doctrine-fixtures-bundle/', add =>   'Doctrine\\\\Bundle\\\\MigrationsBundle' => $vendorDir . '/doctrine/doctrine-migrations-bundle/', 'Doctrine\\\\Bundle\\\\DoctrineBundle' => $vendorDir . '/doctrine/doctrine-bundle/', ... add =>   'Knp\\Menu'   => $vendorDir . '/knp/knp-menu/src', add =>   'Knp\\\\Bundle\\\\MenuBundle' => $vendorDir . '/knp/knp-menu-bundle/', '' => $baseDir . '/src/',
```

4. Use

```
php app/console doctrine:fixtures:load
php app/console doctrine:migrations:diff
php app/console doctrine:migrations:migrate
```

5. Config menu (options) file /app/config.yml

```
knp_menu: twig:
# use "twig: false" to disable the Twig extension and the TwigRenderer template: knp_menu.html.twig templating: false
# if true, enables the helper for PHP templates default_renderer: twig
# The renderer to use, list is also available by default_renderer
```

6. link download bundles https://drive.google.com/folderview?id=0B44zRG-ekXoMRVpVNXFDSVh1WUU&usp=sharing
