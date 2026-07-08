#!/bin/bash

git pull origin main

docker compose down

docker cmpose up -d --build



