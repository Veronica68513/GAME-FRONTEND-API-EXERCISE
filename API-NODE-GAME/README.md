
# API NODE GAME

This API Game has build with express, nodejs and mongodb (mongoose)

## Setup 

Configuration API:

1- Configure the endpoint of the frontend.

file: server.js
```
// CORS: define url frontend app (permit cors)
var corsOptions = {
  origin: "http://localhost:4200"
};
```

2- Revise and configure the port of the aplication. By default the app will be run on 8080.

Run terminal: 
```
export PORT=8085

```


3- Connection to MongoDB.

Currently is connected to a MongoDB Atlas Cluster. 
Configure to local MongoDB:

file: app/config/db.config.js
```
module.exports = {
    url: "mongodb://localhost:27017/veronica"
  };

```

## Project Install libraries
```
npm install
```

### Run API
```
node server.js
```

### Test
```
Test in terminal:

sh test.api.sh
```