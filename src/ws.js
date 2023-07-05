import WebSocket, { WebSocketServer } from "ws"

/**
 * @param {object} options options for the websocket server (the first argument for WebSocketServer
 * @param {...string} addresses Websocket addresses to extend
 * @returns {WebSocketServer} the new websocket server that is extended
 */
export function extendWs(options, ...addresses) {
    const server = new WebSocketServer(options)
    for (const address of addresses) {
        const ws = new WebSocket(address)
        //websocket on any event
        ws.addEventListener("message", ev => {
            server.emit("message", ev.data)
        })
    }
}