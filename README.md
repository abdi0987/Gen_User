#GenUser

GenUser is an Angular directive that generates random user with the following data

* User Data  
    + First Name
    + Last Name
    + Company Name
    + Address
    + City
    + County
    + State
    + Zip Code
    + Two phone number
    + email
    + web

the data file contains 500+ records

## Config

To use Gen-User directive you need to download it and add it as a dependency in your app

```javascript
angular.module('myApp',[
  'ngRoute',
  'GenUser'
])
```

Then use it in you HTML

```html
<div>
  <h3 gen-user='name'></h3>
  <ul>
    <li>My email is <span gen-user='email'></span></li>
    <li>My phone number is <span gen-user='phone1'></span></li>
    <li>I work at <span gen-user='company'></span></li>
  <ul>
</div>
```


# GenUserJS
Added support for basic javascript you can link the script and request random users.

## Config

Link the script 
```html
<script src="genUserJS/users.js"></script>
```

Then use it in your javascript
```javascript
var amountOfUsers = 3;
var users = new Users(amountOfUsers);
console.log(users);
```
This will return 3 objects with three unique users.


## Contribution
If you want to add a feature please feel free to do so i will review it and add it. If you have any suggestion open a issue.
