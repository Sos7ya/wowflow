import Lose from "../models/lose.js";
import Promocode from "../models/promocode.js";
import UserData from "../models/userData.js";
import Win from "../models/win.js";
import Counter from "../models/counter.js";

import * as dotenv from 'dotenv'
dotenv.config();

const idPattern = /^\/id=/;

export const onPost = async (req, res) => {
    console.log("===post recieved===");
    var id = '';
    var ip = req.clientIp;

    if (idPattern.test(req.url)) {
        id = req.url.replace(idPattern, '');
    }

    var user = await UserData.findOne({ip: ip});

    if(id != '' && user == null)
    {
        user = await UserData.findOne({id: id});
    }

    if (user == null) {
        user = new UserData({
            id: id,
            ip: ip
        });

        try { await user.save(); }
        catch (error) { console.error(error); }
        console.log("User is null O_o? Then allways return fact");
        await sendLose(res, 0);
    }
    else {
        if (new Date() - user.playedAt < process.env.DAY) 
        {
            console.log(`Date Lose!IP:${ip} LAST_PLAY:${user.playedAt.toLocaleString()} DIFF:${new Date()-user.playedAt}`);
            await sendLose(res, 0);
        }
        else 
        {

            user.playedAt = new Date();
            const randomValue = Math.random() * 100;

            console.log(randomValue);

            var amount = await Promocode.countDocuments({ chance: { $gte: randomValue } });

            if (amount == 0) 
            {
                await sendLose(res, randomValue);
            }
            else 
            {
                const randomIndex = Math.floor(Math.random() * amount);

                var promocode = await Promocode.findOne({ chance: { $gte: randomValue } }).skip(randomIndex);

                if (promocode == null) 
                {
                    await sendLose(res, randomValue);
                }
                else {
                    var counter = await Counter.findOne({});

                    switch (promocode.type) {
                        case "percent15first":
                            if (counter.percent15first > 0 && user.id == '') {
                                await sendWin(res, randomValue, promocode);
                                counter.percent15first--;
                                await counter.save();
                            }
                            else {
                                await sendLose(res, randomValue);
                            }
                            break;

                        case "percent10second":
                            if (counter.percent10second > 0 && user.id !== '') {
                                await sendWin(res, randomValue, promocode);
                                counter.percent10second--;
                                await counter.save();
                            }
                            else {
                                await sendLose(res, randomValue);
                            }
                            break;

                        case "percent15second":
                            if (counter.percent15second > 0 && user.id !== '') {
                                await sendWin(res, randomValue, promocode);
                                counter.percent15second--;
                                await counter.save();
                            }
                            else {
                                await sendLose(res, randomValue);
                            }
                            break;

                        case "percent1210":
                            if (counter.percent1210 > 0 && user.id !== '') {
                                await sendWin(res, randomValue, promocode);
                                counter.percent1210--;
                                await counter.save();
                            }
                            else {
                                await sendLose(res, randomValue);
                            }
                            break;

                        case "promo1000":
                            if (counter.promo1000 > 0 && user.id !== '') {
                                await sendWin(res, randomValue, promocode);
                                counter.promo1000--;
                                await counter.save();
                            }
                            else {
                                await sendLose(res, randomValue);
                            }
                            break;

                        case "promo2000":
                            if (counter.promo2000 > 0 && user.id !== '') {
                                await sendWin(res, randomValue, promocode);
                                counter.promo2000--;
                                await counter.save();
                            }
                            else {
                                await sendLose(res, randomValue);
                            }
                            break;

                        case "promo3000":
                            if (counter.promo3000 > 0 && user.id !== '') {
                                await sendWin(res, randomValue, promocode);
                                counter.promo3000--;
                                await counter.save();
                            }
                            else {
                                await sendLose(res, randomValue);
                            }
                            break;

                        case "promo4000":
                            if (counter.promo4000 > 0 && user.id !== '') {
                                await sendWin(res, randomValue, promocode);
                                counter.promo4000--;
                                await counter.save();
                            }
                            else {
                                await sendLose(res, randomValue);
                            }
                            break;
                        case "102030":
                            if (new Date().getDate() % 10 == 0 && user.id !== '') {
                                await sendWin(res, randomValue, promocode);
                            }
                            else {
                                await sendLose(res, randomValue);
                            }
                        case "super":
                            if(user.id !== ''){
                            await sendWin(res, randomValue, promocode);
                            }
                            else{
                                await sendLose(res, randomValue);
                            }
                            break;
                        default:
                            await sendLose(res, randomValue);
                            break;
                    }
                }
            }
        }
    }
    await user.save();
    console.log("===post done===");
}

async function sendLose(res, chance) {
    var result = {
        "isFact": true,
        "title": "мимо :(",
        "text": "Твой подарок еще не расцвел.\nДавай заглянем сюда завтра?",
        "text1": "Раньше корни пиона считались\nталисманами удачи.\n\nСейчас они считаются просто корнями.\nО времена, о нравы.",
        "chance": chance
    };

    await Lose.aggregate([{ $sample: { size: 1 } }])
        .then((randomLose) => {
            result = {
                "isFact": true,
                "title": randomLose[0].title,
                "text": randomLose[0].text,
                "text1": randomLose[0].text1,
                "chance": chance
            };
        }).catch((error) => { console.error(error); });
    console.log("Fact response");
    res.send(result);
}

async function sendWin(res, chance, promocode) {
    var win = {
        "title": "успешный \n успех в успехе!",
        "text": "Держи приз, красавчик.\nИли красотка, мы же не знаем,\nкто вы."
    };

    await Win.aggregate([{ $sample: { size: 1 } }])
        .then((randomWin) => {
            win = {
                "title": randomWin[0].title,
                "text": randomWin[0].text,
            };
        })
        .catch((error) => { console.error(error); });

    var result = {
        "isFact": false,
        "promocode": promocode.promocode,
        "discription": promocode.discription,
        "title": win.title === undefined ? "успешный \n успех в успехе!" : win.title,
        "text": win.text === undefined ? "Держи приз, красавчик.\nИли красотка, мы же не знаем,\nкто вы." : win.text,
        "chance": chance
    };

    await Promocode.deleteOne({ promocode: promocode.promocode });

    console.log(`Promo respone :${result.promocode} Promo discription:${result.discription}`);
    res.send(result);
}