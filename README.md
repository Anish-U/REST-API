# REST API

Built a simple REST API for user details using Node.JS, express, MongoDB

----

### Requests

##### POST users/
```
{
  "name": "Anish",
  "age": 18,
  "city": "Chennai"
}
```
```
{
  "_id": "60d43ceb2152682720e76b22",
  "name": "Anish",
  "age": 18,
  "city": "Chennai",
  "__v": 0
}
```

##### GET users/
```
[
  {
    "_id": "60d43ceb2152682720e76b22",
    "name": "Anish",
    "age": 18,
    "city": "Chennai",
    "__v": 0
  },
  {
    "_id": "60d43ea72152682720e76b2a",
    "name": "Suyash",
    "age": 15,
    "city": "Hyderabad",
    "__v": 0
  }
]
```

##### GET users/60d43ceb2152682720e76b22
```
{
  "_id": "60d43ceb2152682720e76b22",
  "name": "Anish",
  "age": 18,
  "city": "Chennai",
  "__v": 0
}
```

##### PATCH users/60d43ceb2152682720e76b22
```
{
  "name": "Ummenthala Anish",
  "married": false,
}
```
```
{
  "_id": "60d43ceb2152682720e76b22",
  "name": "Ummenthala Anish",
  "age": 18,
  "city": "Chennai",
  "__v": 0,
  "married": false
}
```

##### DELETE users/60d43ceb2152682720e76b22
```
{
  "message": "Deleted User"
}
```
----

### Built Using

- [Node.js](https://nodejs.org/en/about/) - Node.js, an asynchronous event-driven JavaScript runtime.
- [Express](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. 
- [mongoose](https://mongoosejs.com/) - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv loads environment variables from a .env file into process.env
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) - REST Client allows you to send HTTP request and view the response in Visual Studio Code directly.
