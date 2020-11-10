const axios = require("axios");
const cheerio = require("cheerio");

const mainUrl = `https://reddit.com/r/dankmemes`;

const randNo = (limit) => {
    const thatNo = Math.floor(Math.random() * limit);
    return thatNo;
};
/*
const dealWithData = (html) => {
    const $ = cheerio.load(html);
    const urlMeme = $("._2_tDEnGMLxpM6uOa2kaDB3.ImageBox-image.media-element._1XWObl-3b9tPy64oaG6fax");
    const indexValue = randNo(urlMeme.length);
    console.log(`Source is:\n${urlMeme[indexValue].attribs.src}`);
};*/
/*
axios
    .get(mainUrl)
    .then((response) => {
        dealWithData(response.data);
    })
    .catch((err) => {
        console.log(err);
    });*/

/*
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}*/

module.exports = {
    name: 'react',
    description: "this is a command that allows you to automatically react to certain user messages!",
    execute(message, args, person){

        axios
            .get(mainUrl)
            .then((response) => {
                dealWithData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });

        const dealWithData = (html) => {
            const $ = cheerio.load(html);
            const urlMeme = $("._2_tDEnGMLxpM6uOa2kaDB3.ImageBox-image.media-element._1XWObl-3b9tPy64oaG6fax");
            const indexValue = randNo(urlMeme.length);
            message.channel.send(`Source is:\n${urlMeme[indexValue].attribs.src}`);
        };

        const indexValue = randNo(urlMeme.length);
        console.log(indexValue)

        //var json_obj = JSON.parse(Get(yourUrl));
        //console.log("this is the author name: "+json_obj.author_name);

    }
}