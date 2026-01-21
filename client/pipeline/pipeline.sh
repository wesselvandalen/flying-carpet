#!/bin/bash
set -e

npm run dev &
APP_PID=$!

# Terweil localhost 3000 nog niet is opgestart, slaap 1 seconde en check dan of hij er wel is.
while ! nc -z localhost 3000; do
  sleep 1
done

echo "De applicatie wordt nu getest…"
npx @axe-core/cli http://localhost:3000 --save result.json

kill $APP_PID