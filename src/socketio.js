import { Server } from 'socket.io';
import { io } from 'socket.io-client';

/**
 * Extends a socket.io server to listen to other socket.io servers. Default port is 8002.
 *
 * @param {Object} options socket.io server options object.
 * @param {...string} addresses socket.io addresses to extend
 * @returns {Server} the new socket.io server that is extended
 */
export function extendIO(options = {port: 8002}, ...addresses) {
    const server = new Server(options)
    server.listen(options.port)
    for (const address of addresses) {
        const ws = io(address)
        ws.onAny((event, ...args) => {
            server.emit(event, ...args)
        })
    }
    return server
}