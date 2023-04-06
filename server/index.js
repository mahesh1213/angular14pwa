const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const http =  require("http")
const app = express();
const fs = require('fs');
const todoRouter = require('./routes/posts');
const webpush = require('web-push');

app.use(cors({origin:'*'}))
app.use(bodyParser);
console.log(webpush.generateVAPIDKeys());

const publicKey = webpush.generateVAPIDKeys().publicKey;
const privateKey= webpush.generateVAPIDKeys().privateKey;



  const sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/c61ot6-NMp0:APA91bFT0wVFiTQC2vvCIJ1Rxq0ke7xamLs42XlLr8-qfNUYHIKMtwcB3ntIH_2OLQdJY-pZQkaq-bJQ4-_xfQshBedwoTLpsN2KJsXLdz-9xjw5rTEx5Cc44vnoC-CzeoLlI0VK1wlo",
    "expirationTime": null,
    "keys": {
        "p256dh": "BKayLg4xLA2AC9Rri7EM2KYaT3T-JYRHaOKKmF0tnKu3tYd6cYT7naYNQMh0zJE0ML9OYjVdZ_-nHEQV-RloNzo",
        "auth": "F90DcpyxDi26JiKhizlkUg"
    }
}

webpush.setVapidDetails('mailto:abc@gmail.com',publicKey,privateKey);

const payLoad = {
    notification:{
        data: {url:'https://www.google.com/'},
        title:'Mahesh sended',
        vibrate:[100,50,100]
    }
}

webpush.sendNotification(sub,JSON.stringify(payLoad))
.then(function (res) {
    console.log('notification response: ', res);
})
.catch(function (err) {
    console.error('failed to send notification', err);
});;

// const server = http.createServer( (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain',
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
//     });
//     res.end("Hello, World!")
// })

// const PORT = process.env.PORT || 3000

// server.listen(PORT, console.log(`listening on PORT ${PORT}`));

const server = app.listen(3000,()=>{
    console.log(`listening on PORT 3000 !!!!!`)
})

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

