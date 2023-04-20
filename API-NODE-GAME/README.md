
# API NODE GAME

This API Game has build with express, nodejs and mongodb (mongoose)

## Setup 

Configuration API:

1- Configure the endpoint of the frontend.

file: .env
```
// CORS: define url frontend app (permit cors)
CORS_ORIGIN="http://localhost:4200"
```


2- Connection to MongoDB.

Currently is connected to a MongoDB Atlas Cluster. 
Configure connection to MongoDB:

file: .env
```
MONGODB_URI="mongodb://localhost:27017/veronica"

```

3- Revise and configure the port of the aplication. By default the app will be run on 8080.

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

### Test
Test in terminal:
```
sh test.api.sh
```