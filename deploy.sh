#!/bin/bash
cd ~/microservices

git pull origin main

docker compose down

docker cmpose up -d --build



