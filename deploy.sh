#!/bin/bash

git pull origin main

docker compose down

<<<<<<< HEAD
docker compose build

docker compose up -d 
=======
docker compose down

docker compose up 
>>>>>>> fc699ae3e18734383e822e70d6ae1fd61d0fac47



