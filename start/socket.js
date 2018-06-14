'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/

const Ws = use('Ws')

Ws.channel('chat', ({ socket }) => {

  socket.on('message:added', (data) => {
    socket.broadcast('new:message', data)
    console.log('user: new message was sent')
    console.log(data)
  })

  console.log('user: joined with %s socket id', socket.id)
})
