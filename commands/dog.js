module.exports = {
    name: 'dog',
    description: "this is a command that allows you to automatically react to certain user messages!",
    execute(message, args){
        //message.channel.send('running');

        ;(async() => {
            const api = require('imageapi.js');
            let fetched = await api("dogpictures")
            message.channel.send(fetched); // logs the image;
            // let advanced = await api.advanced("dogpictures");
            // console.log(advanced);
        })();
        
    }
}