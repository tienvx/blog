---
title: "Date time trong PHP"
date: "2013-04-07"
---

1. Một số expression:

```
$date = new DateTime('now');

// This week:
$date = new DateTime('last Monday');
$date = new DateTime('next Sunday');

// This time tomorrow:
$date = new DateTime('now +1 day');

// (This time) first day of This month:
$date = new DateTime('first day of this month');

// (This time) last day of This month:
$date = new DateTime('last day of this month');

// In this month:
$firstDayThisMonth = new DateTime('first day of this month');
$firstDayThisMonth->setTime(0, 0, 0);
$firstDayNextMonth = new DateTime('first day of next month');
$firstDayNextMonth->setTime(0, 0, 0);

$firstDayThisMonth->format('Y-m-d H:i:s');
$firstDayNextMonth->format('Y-m-d H:i:s');

// First day of this month, no time:
date('Y-m-01', time());

// Last day of this month, no time:
date('Y-m-t', time());

$first_minute = mktime(0, 0, 0, date("n"), 1);
$last_minute = mktime(23, 59, 0, date("n"), date("t"));
```

2. Modifier
```
$time = strtotime('modify', $timestamp);
// e.g.
$time = strtotime('+2 days', 12345567);
$time = strtotime("-1 week");
```

3. Time Zone php.ini:
```
timezone="Asia/SaiGon"
```
or
```
$date = new \\DateTime("", new \\DateTimeZone("Asia/Saigon")) ;
```

4. Format `$date_time = `$date->format('Y-m-d H:i:sP')`;`

5. Notes // Never use math like 60\*60\*24\*7 to add/subtract days (because of daylight time saving)
