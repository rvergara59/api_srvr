# Basic API server (Node.js + Express.js and TypeScript)

## Abstract

A basic functional template for creating an API server using Node.js + Express.js and TypeScript. 

## Test

The template is functional and you can test it using HTTPie, curl or Postman.

### Start the API server

```
$>npm run dev

> api_srvr@1.0.0 dev
> nodemon ./src/apisrvr.ts

[nodemon] 3.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node ./src/apisrvr.ts`
Basic API Server listening on Port:3000
TypeScript Version
Press Ctrl-C to exit

```

### Test with HTTPie

Using another terminal, run the following wommand

```
$>http localhost:3000/
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 16
Content-Type: text/html; charset=utf-8
Date: Sun, 24 Dec 2023 03:23:55 GMT
ETag: W/"10-bZZA7c+e/eSluV2PjdNck3t/8tA"
Keep-Alive: timeout=5
X-Powered-By: Express

Main page loaded

$>
```
