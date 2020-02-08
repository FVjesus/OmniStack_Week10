import socketio from 'socket.io-client';

const socket = socketio('http://10.0.0.9:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subcribeFuncion) {
socket.on('new-dev',subcribeFuncion);
};

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
       latitude,
       longitude,
       techs, 
    };
    
    socket.connect();
};

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
};

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};