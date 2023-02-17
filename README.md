# Request forwarding

[![Docker](https://github.com/nexys-system/fwd-request/actions/workflows/publish.yml/badge.svg)](https://github.com/nexys-system/fwd-request/actions/workflows/publish.yml)

based on https://stackoverflow.com/a/52859434/1659569

## Run

`TARGET=https://xxx.com node src/index.js`

Docker is published too

## Env Var

* `TARGET`: target host
* `PORT`: port on which the server runs, default 3000

