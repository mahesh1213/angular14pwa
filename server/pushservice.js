const webpush = require('web-push');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('The server started on port 3000 !!!!!!');
});

app.get('/', (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Welcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
  );
});

app.post('/data', (req, res) => {
  console.log('request came');
  const userData = req.body;
  console.log(JSON.stringify(userData));
  res.send(userData);
});

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

webpush.setVapidDetails('mailto:example@yourdomain.org', publicKey, privateKey);

const payLoad = {
  notification: {
    data: { url: 'http://www.youtube.com/funofheuristic' },
    title: 'Fun Of Heuristic',
    vibrate: [100, 50, 100],
  },
};

webpush.sendNotification(sub, JSON.stringify(payLoad));