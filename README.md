# Basic API server (Node.js + Express.js, TypeScript version)

## Abstract

A basic functional template for creating an API server using Node.js + Express.js using TypeScript. 

## Test

The template is functional and you can test it using HTTPie, curl or Postman.

### Start the API server

```
$>npm run dev
```

Response 

> api_srvr@1.0.0 dev<br>
> nodemon ./src/apisrvr.ts<br>
><br>
> [nodemon] 3.0.2<br>
> [nodemon] to restart at any time, enter `rs`<br>
> [nodemon] watching path(s): *.*<br>
> [nodemon] watching extensions: ts,json<br>
> [nodemon] starting `ts-node ./src/apisrvr.ts`<br>
> Basic API Server listening on Port:3000<br>
> TypeScript Version<br>
> Press Ctrl-C to exit<br>


### Test with HTTPie

Using another terminal, run the following wommand

```
$>http localhost:3000/
```

Response

> HTTP/1.1 200 OK<br>
> Connection: keep-alive<br>
> Content-Length: 16<br>
> Content-Type: text/html; charset=utf-8<br>
> Date: Sun, 24 Dec 2023 03:23:55 GMT<br>
> ETag: W/"10-bZZA7c+e/eSluV2PjdNck3t/8tA"<br>
> Keep-Alive: timeout=5<br>
> X-Powered-By: Express
> <br>
> Main page loaded
>
> $>

