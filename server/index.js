import server from './server.js'

server.listen(4001)
.on('listening', () => console.log("Server running!"))