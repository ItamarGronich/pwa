#!/bin/bash

if command -v nvm &> /dev/null
then
  nvm use
fi

if command -v n &> /dev/null
then
  sudo n use "$(< .nvmrc)"
fi

cd ./client && npm ci &
cd ./server && npm ci

wait
echo "Done!"
