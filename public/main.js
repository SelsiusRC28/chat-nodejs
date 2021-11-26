const socket = io()

// Elementos del DOM
let message = document.getElementById('message')
let username = document.getElementById('username')
let chat = document.getElementById('chat')
let btn = document.getElementById('send')

// SI se hace click se envia al servidor los datos del user y msg
btn.addEventListener('click', () => {
	socket.emit('chat:message', {
		message: message.value,
		username: username.value
	})
})

socket.on('chat:message', (data) => {
	chat.innerHTML += `<p>
		<strong>${data.username}</strong>: ${data.message}
	</p>`
})