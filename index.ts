import { httpServer } from "./src/http_server/index.js";
import { createWebSocketStream, WebSocketServer }  from 'ws';
import { handleCommands } from "./src/handleCommands.js";

const HTTP_PORT = 8181;
const WSS_PORT = 8080;

httpServer.listen(HTTP_PORT);
console.log(`Start static http server on the ${HTTP_PORT} port!`);

export const wss = new WebSocketServer({ port: WSS_PORT});
console.log(`Start ws server on the ${WSS_PORT} port!`);


wss.on('connection', async ws => {
    const wsStream = createWebSocketStream(ws, { encoding: 'utf8' });
    
    wsStream.on('data', async (data) => {
        const response = handleCommands(data);
        ws.send(await response);
    });
})

wss.on('close', () => console.log('Connection is closed'));  
