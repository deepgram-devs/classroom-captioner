require('dotenv').config()
const http = require('http')
const express = require('express')
const Socket = require("socket.io").Server
const { Deepgram } = require('@deepgram/sdk')

const app = express()
const server = http.createServer(app)
const io = new Socket(server)
const deepgram = new Deepgram(process.env.DEEPGRAM_KEY)

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => { res.sendFile(__dirname + '/views/index.html') })
app.get('/student', (req, res) => { res.sendFile(__dirname + '/views/student.html') })
app.get('/lecturer', (req, res) => { res.sendFile(__dirname + '/views/lecturer.html') })

app.post('/auth', async (req, res) => {
  try {
    const { id, key } = req.body
    if(req.body.key != process.env.LECTURE_KEY) return res.json({ error: 'Key is missing or incorrect' })
    const newKey = await deepgram.keys.create(
        process.env.DEEPGRAM_PROJECT,
        'Temporary key - works for 10 secs',
        [ 'usage:write' ],
        { timeToLive: 10 }
    )
    res.json({ deepgramToken: newKey.key })
  } catch(error) {
    res.json({ error })
  }
})

io.on('connection', socket => {
  socket.on('join', roomId => {
      socket.join(roomId)
      console.log(`${socket.id} joins ${roomId}`)
  })
  socket.on('transcriptReady', message => {
    for(let room of socket.rooms) {
      socket.to(room).emit('transcriptComplete', message)
    }
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`listening on ${PORT} at ${new Date().toISOString()}`)
})
