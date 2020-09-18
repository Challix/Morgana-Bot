class Writer {
    constructor(num, emoji) {
        
    }
}
module.exports = {
    name: 'react',
    description: "this is a command that allows you to automatically react to certain user messages!",
    execute(message, args){
        const taggedUser = message.mentions.users.first();
        command = message.content.split(" ")
        console.log(command[1])
        if(command[1].startsWith("<@!")){
            console.log("It Does!!!!");
        } else{
            console.log('Error!')
            message.channel.send('Wrong Synatx! USe <-react @User emoji>');
        }
        message.channel.send(client.emojis.cache.find(emoji => emoji.name === command[2]))

        //console.log(message.content.charAt(message.content.length-1));
        //writ = new Writer(taggedUser.discriminator, ':poop:');
        //discrim.(taggedUser.discriminator) = '💩'
        //message.react('💩');
    }
}