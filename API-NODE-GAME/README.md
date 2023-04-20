
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

1- Revise and configure the port of the aplication. By default the app will be run on 8080.

Run terminal: 
```
export PORT=8085

```

## Project Install libraries
```
npm install
```

### Run API
```
node server.js
```