const fetch = require('node-fetch');
// var GetImage = function ()
module.exports = {
    name: 'subreddit',
    description: "used for fetching subreddit images!",
    execute(message, args, Discord){
        let subreddit = args[0];
        random = Math.floor(Math.random()*100);
        let url = 'https://www.reddit.com/r/'+ subreddit +'/.json?limit=' + random;

        fetch(url, { method: 'Get' })
        .then(res => res.json())
        .then(json => {
            if( json.data.children[random].data.over_18 === true ){
                let censor = "Ew gross! Did you really think you could send some cringe NSFW shit? \nNOT ON MY WATCH!";
                const reactEmbed = new Discord.MessageEmbed()
                    .setColor('#990000')
                    .setTitle('**[CENSORED]**')
                    .setThumbnail('https://static.wikia.nocookie.net/megamitensei/images/3/33/MorganaPQ2.png/revision/latest?cb=20180901210700')
                    .setDescription(censor);
                message.channel.send(reactEmbed)
            } else {
                message.channel.send(json.data.children[random].data.url);
            }
        })
        .catch(err => {
            console.log(err);
            message.channel.send("Sorry, something went wrong! Try Again");
        });
        console.log(subreddit, random);
    }
}