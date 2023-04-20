# FRONTEND NODE GAME

This Fronted Game has build with Angular v15, HttpClient, Router and Bootstrap. 
This Frontend connect with API Game.

## Setup 

Configuration Frontend:

1- Configure the API endpoint.

file: src/app/services/game.service.ts

```
const baseUrl = 'http://localhost:8089/api/games';

```

## Project API setup
```
npm install
```

### Run Frontend App
```
npm start
```

You can change your application port by entering the following command:
```
ng serve --port 80
```