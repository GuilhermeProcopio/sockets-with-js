const { Socket } = require('dgram')
const net = require('net')

const handleConnection = socket => {
    console.log('Conectado')
    socket.on('end', () =>{
      console.log('Desconectou')
    })
    socket.on('data', data => {
      const str = data.toString()
      if(str == 'end'){
        socket.end()
      }
      console.log(str)
    })
}

const server = net.createServer(handleConnection)
server.listen(4000, '127.0.0.1')
