# wsextend
quick utility for extending an already existing websocket server

## usage
`npm i wsextend`
```js
import { extendWs, extendIO } from 'wsextend';

const socket = extendIO("wss://bsfdf", {port: 8003}) //returns socket.io server, listens on port 8003
const server = extendWs("wss://bsfdf", {port: 8002}) //returns WebSocketServer, listens on port 8002
```