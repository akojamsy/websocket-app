const { config } = require('dotenv')
const express = require('express')
const path = require('path')
const { WebSocketServer, WebSocket } = require('ws')

config()

const app = express()

// Start Express server
app.listen(process.env.APP_PORT || 3000, () => {
  console.log(`Express Server on port ${process.env.APP_PORT || 3000}`)
})

// Initialize WebSocket server
const wss = new WebSocketServer({ port: process.env.WS_PORT || 8080 })

wss.on('listening', () => {
  console.log(`WebSocket Server on port ${process.env.WS_PORT || 8080}`)
})

wss.on('connection', function (ws) {
  ws.on('error', (error) => {
    console.error(error)
  })

  ws.on('message', async function (data) {
    try {
      let message = JSON.parse(data)

      if (message.name) {
        console.log(`${message.name} has connected`)
        ws.name = message.name

        // Broadcast announcement to all clients that a new user has joined
        wss.clients.forEach(async function (client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(
              JSON.stringify({
                announcement: `${ws.name} has joined.`,
              })
            )
          }
        })
      } else if (message.message && ws.name) {
        // Only broadcast messages if we have a name and a message
        console.log(`${ws.name}: ${message.message}`)

        wss.clients.forEach(function (client) {
          if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(
              JSON.stringify({ name: ws.name, message: message.message })
            )
          }
        })
      } else {
        console.log('Received invalid message format')
      }
    } catch (error) {
      console.error('Error processing message:', error)
    }
  })

  ws.on('close', function () {
    if (ws.name) {
      console.log(`${ws.name} has left.`)
      wss.clients.forEach(function (client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ announcement: `${ws.name} has left.` }))
        }
      })
    } else {
      console.log('Unnamed connection closed')
    }
  })
})
