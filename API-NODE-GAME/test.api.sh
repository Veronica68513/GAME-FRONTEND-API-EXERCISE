#!/bin/bash

IPADDR='127.0.0.1'
PORT='8089'

# GET ALL GAMES
curl --location --request GET "$IPADDR:$PORT/api/games" \
--header "Content-Type: application/json" \




