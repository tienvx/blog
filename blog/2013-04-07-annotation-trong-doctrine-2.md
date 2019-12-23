---
title: "Annotation trong Doctrine 2"
date: "2013-04-07"
---

/\*\* \* @Assert\\NotBlank() \*/

/\*\* \* @Assert\\Choice( \*     choices = { "male", "female" }, \*     message = "Choose a valid gender." \* ) \*/

/\*\* \* @Assert\\Choice({"male", "female"}) \*/

/\*\* \* @Assert\\NotBlank() \* @Assert\\Length(min = "3") \*/

/\*\* \* @Assert\\True(message = "The password cannot match your first name") \*/ public function isPasswordLegal() { // return true or false }

/\*\* \* @Assert\\Email(groups={"registration"}) \*/ private $email;

/\*\* \* @Assert\\NotBlank(groups={"registration"}) \* @Assert\\Length(min=7, groups={"registration"}) \*/ private $password;

/\*\* \* @Assert\\Length(min = "2") \*/ private $city;
