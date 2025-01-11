const io = require('socket.io-client');
const { createServer } = require('http');
const { Server } = require('socket.io');

let ioServer, httpServer, httpServerAddr;

beforeAll((done) => {
    httpServer = createServer();
    ioServer = new Server(httpServer);
    ioServer.on('connection', (socket) => {
        socket.on('message', (msg) => {
            socket.broadcast.emit('message', msg);
        });
    });
    httpServer.listen(() => {
        httpServerAddr = httpServer.address();
        done();
    });
});

afterAll((done) => {
    ioServer.close();
    httpServer.close(done);
});

test('Should broadcast messages to all clients', (done) => {
    const client1 = io.connect(`http://localhost:${httpServerAddr.port}`);
    const client2 = io.connect(`http://localhost:${httpServerAddr.port}`);

    client2.on('message', (msg) => {
        expect(msg).toBe('Hello, World!');
        client1.disconnect();
        client2.disconnect();
        done();
    });

    client1.emit('message', 'Hello, World!');
});


