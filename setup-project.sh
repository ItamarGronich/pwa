#!/bin/bash

if command -v nvm &> /dev/null
then
  nvm install 16.1.0
  nvm use 16.1.0
fi

if command -v n &> /dev/null
then
  sudo n use "$(< .nvmrc)"
fi

cd ./client && npm ci &
cd ./server && npm ci

wait
echo "Done!"
