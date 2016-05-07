Basic chat application based on websockets
==========================================

## About

A proof concept for the chat application based on websockets.

It's just a tech stack for the small specification:
- Client must request a username from the user
- Client must make a websocket connection to the server
- Client must show messages sent by the user
- Client must show messages coming from the server
- Client must be able to disconnect from the server

## How to run
Preparation is as usual: clone & install dependencies. After that, static files should be assembled.
```
npm run build
```
then serve project directory via some tool, e.g.

```
python -m SimpleHTTPServer 7777
```
and open `localhost:7777` in browser.

Development mode
```
npm run webpack
```

## App is very basic

So it can't be used in production.

One should consider at least the next issues for production-ready code:
- Test coverage for maintanability
- Separate Webpack config for prod environment
- Extended browsers support (autoprefixer etc.)
- Websocket auto-reconnection

## Tech stack
Babel, React, Webpack, Redux, Stylus, Lodash
