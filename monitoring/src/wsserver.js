
import WebSocket from 'ws';
import {emitter} from './data/json_rpc_status'
import {config} from './config'


export default async function start_wsserver()
{
    const wsServer = new WebSocket.Server({ port: config.PORT || 3000 });
    let lastData = {}

    wsServer.on('connection', function(ws) {

        console.log("New connection!");

        ws.send(JSON.stringify(lastData));

        ws.on('message', function(message) {});

        ws.on("error", (err) => {
            console.log(err.stack);
        });

        ws.on('close', function() {
            console.log('Connection closed');
        });
    });
    emitter.on('data_change',(data)=>{
        lastData = data
        for (const wsClient of wsServer.clients) {
            wsClient.send(JSON.stringify(data)) 
        }
    })
}