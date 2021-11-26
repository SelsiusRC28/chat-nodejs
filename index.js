const express = require('express')
const app = express();
const path = require('path');

//Port
app.set('port', 4000)

const server = app.listen(app.get('port'), function(){
	console.log("server on port")
})


// Web Socketos
const SocketIO = require('socket.io')
const io = SocketIO(server)

// Escuchar la conexion
io.on('connection', function(socket){
	console.log('new connection')

	// Escucha el mensaje y emite el mensagge en todos los navegadores 
	socket.on('chat:message', (data) => {
		io.sockets.emit('chat:message', data)
	})
})




// Static
app.use(express.static(path.join(__dirname, 'public')))


