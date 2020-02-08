import socketio from 'socket.io-client';

const socket = socketio('http://10.0.0.9:3333',{
    autoConnect: false,
});

function connect(){
    socket.connect();
}

function disconnect(){
    if (socket.connected){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
};