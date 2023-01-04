import { httpServer } from "./src/http_server/index.js";
import { mouse } from "@nut-tree/nut-js";
import { WebSocketServer}  from 'ws';
import path from 'path';
import fs from 'fs';

const HTTP_PORT = 8181;
const WSS_PORT = 8080;

httpServer.listen(HTTP_PORT);
console.log(`Start static http server on the ${HTTP_PORT} port!`);

export const wss = new WebSocketServer({ port: WSS_PORT});
console.log(`Start ws server on the ${WSS_PORT} port!`);


wss.on('connection', ws => {
    ws.on('message', data => {
        console.log('received: %s', data);
      });
    
    ws.send('something');
})
wss.on('close', () => console.log('Connection is closed'));  
