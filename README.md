# HTTP Status Cats

This module provides an Express middleware that adds `X-Status-Cat` header, which contains the "HTTP Status Cat" of the current status code.

## Contributors

The pictures were collected by Tomomi Imura (GirlieMac):
https://www.flickr.com/photos/girliemac/sets/72157628409467125

Alex Kocharin built the middleware module for the amazing [Sinopia](https://github.com/rlidwka/sinopia) project.

## Example

### Middleware for Express

```js
var express = require('express');
var statusCat = require('http-status-cat');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use(statusCat());

app.listen(3000);
```

Output for Not Found responses:

```
$ curl -I localhost:3000/nonexisting
HTTP/1.1 404 Not Found
X-Powered-By: Express
X-Content-Type-Options: nosniff
Content-Type: text/html; charset=utf-8
Content-Length: 25
X-Status-Cat: http://flic.kr/p/aV6juR
Date: Mon, 27 Oct 2014 13:05:41 GMT
Connection: keep-alive
```

### Just the cats

This can also be used just like `http.STATUS_CODES`:

```js
var cats = require('http-status-cat').cats;

console.log(cats[403]);
```

## License

MIT
