import UserData from "../models/userData.js";

const idPattern = /^\/id=/;

export const onGet = async(req,res) => 
{
    var id = '';
    var ip = req.clientIp;

    if(idPattern.test(req.url))
    {
        id = req.url.replace(idPattern,'');
    }

    await checkUser(id,ip,res);

}

async function checkUser(id,ip,res)
{
    var user = await UserData.findOne({ip: ip});

    if(id != '' && user == null)
    {
        user = await UserData.findOne({id: id});
    }

    var lastTimePlayed = new Date(0);

    if(user != null)
    {
        lastTimePlayed = user.playedAt;
    }
    else
    {
        console.log(`New user ip:${ip} id:${id}`);
        const newUser = new UserData({
            id: id,
            ip: ip
        });

        try{
            await newUser.save();
        }
        catch(error){
            console.error(error);
        }
    }

    var result = {
        "ip" : ip,
        "id" : id,
        "lastTimePlayed": lastTimePlayed
    };

    res.send(result);
}

