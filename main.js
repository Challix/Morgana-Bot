const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//array of users for react command
var target_user = [];
var target_emoji = [];

//Bot initiation sequence
client.once('ready', () => {
    console.log('Morgana is Online!');
});

//Creating object
var discrim = new Object();

//Allows interaction for each message sent
client.on('message', message =>{

//Looks at individual message authors and reacts to one
    var person = (message.author.discriminator);
    var user_id = (message.author.id);
    //console.log(target_user.toString());
    //console.log(user_id);

//reacts whenever target user sends a message
    if(target_user.includes(user_id)){
        var ind = target_user.indexOf(user_id);
        message.react(target_emoji[ind]);
    }    

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        //message.channel.send('pong!');
        client.commands.get('ping').execute(message, args);
    } else if(command === 'penis'){
        client.commands.get('size').execute(message, args, person);
//react command
    } else if(command === 'react'){
        //client.commands.get('react').execute(message, args, person);

        //console.log(args.length);
        if(args.length != 0){
            if(args[0].startsWith("<@!")){
                if(!(target_user.includes(args[0].substr(3,18))) ){
                    var react = '💩';
                    if(args.length == 2){
                        react = args[1].match(/(\d+)/)
                        //react = args[1];
                    }
                    target_emoji.push(react);
                    target_user.push(args[0].substr(3,18));
                    message.channel.send("Will react to ".concat(args[0]," with a ", react));
                } else {
                    message.channel.send("Cannot react to this person");
                }    
            } else if( args[0] == 'party'){
                message.react('👯‍♀️');
                message.react('🥳');
                message.react('🤯');

            } else if( args[0] == 'help'){
                message.channel.send("The `-react` command has multiple possible arguements:\
                \n`-react <@user>` - Reacts to every single one of @user's messages with a poop emoji!\
                \n`-react <@user> <emoji>` - Reacts to every single one of @user's messages with the given emoji!\
                \n`-react party` - Have a reaction blast!\
                \n`-remove <@user>` - To remove @user from react spam")

            } else {
                message.react(args[0]);
            }
        } else {
            /*
            var bean = message.guild.emojis.cache.find(emoji => emoji.name == 'smile');
            console.log(bean);*/
            message.react("💩");
        }
//remove command
    } else if(command === 'remove'){
        if(args.length != 0){
            if(args[0].startsWith("<@!")){
                if((target_user.includes(args[0].substr(3,18))) ){
                    var removed = target_user.indexOf(args[0].substr(3,18));
                    delete target_user[removed];
                    delete target_emoji[removed];
                    message.channel.send(args[0].concat(" Removed!"));
                }
            }
        } else {
            message.channel.send("Invalid command:\nUse: `-remove @user`")
        }
    } else if(command == "help"){

        message.channel.send("The avaliable commands are:\
        \n`-ping` - To get Ponged!\
        \n`-penis` - To see the size of your penis!\
        \n`-react <emoji>` - Will react to your message with the given emoji!\
        \n\t\tUse `-react help` for more info.")
    }
});


client.login(process.env.BOT_TOKEN);
