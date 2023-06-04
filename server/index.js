import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import requestIp from 'request-ip';

import {onGet} from './controllers/get.js';
import {onPost} from './controllers/post.js';

import Counter from './models/counter.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use(requestIp.mw());

app.get('*',onGet);
app.post('*',onPost);

const CONNECTION_URL = 'mongodb://gen_user:xujemqkxm9@188.225.85.64:27017/default_db?authSource=admin&directConnection=true';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

async function performTask() {
    var counter = await Counter.findOne({});
    counter.percent15first = 100;
    counter.percent10second = 150;
    counter.percent15second = 50;
    counter.percent1210 = 2;
    counter.promo1000 = 7;
    counter.promo2000 = 5;
    counter.promo3000 = 2;
    counter.promo4000 = 1;
    await counter.save();
}
      
function scheduleTask() {
    const now = new Date();
    const next24Hours = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilNext24Hours = next24Hours - now;
      
    setTimeout(async() => {
        await performTask();
        scheduleTask();
    }, timeUntilNext24Hours);
}
      

scheduleTask();