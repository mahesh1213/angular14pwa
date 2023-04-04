const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const http =  require("http")
const app = express();
const fs = require('fs');
const todoRouter = require('./routes/posts');

app.use(cors({origin:'*'}))
app.use(bodyParser);


const server = http.createServer( (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });
    res.end("Hello, World!")
})

const PORT = process.env.PORT || 3000

server.listen(PORT, console.log(`listening on PORT ${PORT}`));

const io = socket(server, {
    cors: {
      origin: '*',
    }
});

io.on('connection',(socket)=>{
    console.log('new connection id:',socket.id);
    sendData(socket);
});

function sendData(socket){
    socket.emit('data1',Array.from({length:8},()=>Math.floor(Math.random() * 590) + 10));

    setTimeout(()=>{
      sendData(socket);
    },5000)
}

const router = express.Router();

app.use('/api/posts',todoRouter);

app.get('/getposts',(req,res)=>{
    fs.readFile(__dirname + '/assets' + 'posts.json','utf-8',function(err,data){
        res.end(data)
    })
})

