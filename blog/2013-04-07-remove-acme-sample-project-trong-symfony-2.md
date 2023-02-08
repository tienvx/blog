---
title: "Remove ACME sample project trong Symfony 2"
authors: tienvx
date: "2013-04-07"
---

* delete the \`src/Acme\` directory;

* remove the routing entries referencing AcmeBundle in \`app/config/routing_dev.yml\`;

* remove the AcmeBundle from the registered bundles in \`app/AppKernel.php\`;

* remove the \`web/bundles/acmedemo\` directory;

* remove the \`security.providers\`, \`security.firewalls.login\` and \`security.firewalls.secured_area\` entries in the \`security.yml\` file or tweak the security configuration to fit your needs.
