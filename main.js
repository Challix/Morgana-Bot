const alexa = require('alexa-bot-api');
let chatbot = new alexa("aw2plm");

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

//emoji array
var emojis = [
    '😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠',
    '😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩',
    '👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀',
    '👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋',
    '💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚',
    '❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑',
    '🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁',
    '🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑',
    '🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆',
    '🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇',
    '🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉',
    '💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾',
    '🎮','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟',
    '🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇',
    '🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓',
    '🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡',
    '🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','🆗','🎦','🈁','🚻','🚹','🚺','♿','❎','✅','✴','💟','🆚','📳','📴','🅰','🅱',
    '🆎','🅾','💠','➿','♻','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','💲'
];

//array of users for react command
var target_user = [];
var target_emoji = [];

//Bot initiation sequence
client.once('ready', () => {
    console.log('Morgana V0.85 is Online!');
});

//Allows interaction for each message sent
client.on('message', message =>{

//Looks at individual message authors and reacts to one
    var person = (message.author.discriminator);
    var user_id = (message.author.id);

//reacts whenever target user sends a message
    if(target_user.includes(user_id)){
        var ind = target_user.indexOf(user_id);
        message.react(target_emoji[ind]);
    }    

//Command handler
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//Beginning of Command Conditionals
//Ping Command
    if(command === 'ping'){
        console.log(message.author.bot)
        client.commands.get('ping').execute(message, args);
//size command
    } else if(command === 'penis'){
        client.commands.get('size').execute(message, args, person);

//react command
    } else if(command === 'react'){
        // console.log(args[0]);

        if(args.length != 0){
            if(args[0].startsWith("<@!")){
                if(!(target_user.includes(args[0].substr(3,18))) ){
                    var react = emojis[Math.floor(Math.random() * emojis.length)];
                    if(args.length == 2){
                        react = args[1]
                    }
                    target_emoji.push(react);
                    target_user.push(args[0].substr(3,18));
                    message.channel.send("Will react to ".concat(args[0]," with a ", react));
                } else {
                    message.channel.send("Cannot react to this person");
                }
//-react instructions help command
            } else if(args[0] == 'help'){
                reactCommands = "\
                                \n`-react <@user>`:\n  Reacts to every single one of @user's messages with a random emoji!\
                                \n`-react <@user> <emoji>`:\n  Reacts to every single one of @user's messages with the given emoji!\
                                \n`-react party`:\n  Have a reaction blast!\
                                \n`-remove <@user>`:\n  To remove @user from react spam"
    
                const reactEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('__React Command Arguements__')
                    .setAuthor('Created by Challix', 'https://i.imgur.com/WCBoOM8.png')
                    .setDescription(reactCommands);
        
                message.channel.send(reactEmbed);  
//emoji party command
            } else if( args[0] === 'party'){
                for (var i = 0; i < ((Math.floor(Math.random() * 10))+3); i++) {
                    message.react(emojis[Math.floor(Math.random() * emojis.length)])
                  }
                //message.react('👯‍♀️');
                //message.react('🥳');
                //message.react('🤯');
//custom emoji reaction
            } else {
                message.react(args[0])
            }
//default reaction
        } else {
            message.react(emojis[Math.floor(Math.random() * emojis.length)]);
        }  

//custom subreddit image command
    } else if(command === 'subreddit' || command === 'sr'){
        client.commands.get('subreddit').execute(message, args, Discord);

//cat subreddit image command
    } else if(command === 'cat'){
        let chance = Math.floor(Math.random()*4);

        if(chance == 0){
            args[0] = 'cats';
        } else if(chance == 1){
            args[0] = 'CatGifs';
        } else if(chance == 2){
            args[0] = 'kittens';
        } else if(chance == 3){
            args[0] = 'IllegallySmolCats';
        }
        client.commands.get('subreddit').execute(message, args, Discord);

//dog subreddit image command
    } else if(command === 'dog'){
        let chance = Math.floor(Math.random()*5);

        if(chance == 0){
            args[0] = 'rarepuppers';
        } else if(chance == 1){
            args[0] = 'Zoomies';
        } else if(chance == 2){
            args[0] = 'WhatsWrongWithYourDog';
        } else if(chance == 3){
            args[0] = 'dogpictures';
        } else if(chance == 4){
            args[0] = 'puppies';
        }
        client.commands.get('subreddit').execute(message, args, Discord);

//memes subreddit image command
    } else if(command === 'meme'){
        let chance = Math.floor(Math.random()*2);

        if(chance == 0){
            args[0] = 'dankmemes'
        } else if(chance == 1){
            args[0] = 'memes'
        }
        client.commands.get('subreddit').execute(message, args, Discord);

//Morgana command
    } else if(command === 'morgana'){
        const morganaEmbed = new Discord.MessageEmbed()
            .setImage('https://static.wikia.nocookie.net/megamitensei/images/3/33/MorganaPQ2.png/revision/latest?cb=20180901210700')
            .setDescription("Hiya!")
            .setColor('#00000');

        message.channel.send(morganaEmbed);

//roast command
    }  else if(command === 'roast'){
        const insulter = require('insult');
        message.channel.send(insulter.Insult());

//chat bot command
    }  else if(command === 'chat'){
        var content = "";
        
        for (var i = 0; i < args.length; i++){
            content += args[i];
            content += ' ';
        }
        chatbot.getReply(content).then(r => message.channel.send( '<@!'.concat(user_id,'> ',r) ));

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
// cyberpunk command
    } else if (command == 'cyberpunk'){
        message.channel.send("cyberpunk out");
//Official help command
    } else if(command == "help"){
        helpCommands = "\
        \n[NEW]\
        \n`-subreddit <subreddit>`: Sends an image from any subreddit!\
        \n->`-sr <subreddit>`\
        \n\
        \n`-dog`:  Sends a dog picture!\
        \n`-cat`:  Sends a cat picture!\
        \n`-meme`:  Sends a meme!\
        \n\
        \n`-ping`:  To get Ponged!\
        \n`-morgana`: Hey! that's me!\
        \n`-chat`:  Talk with Morgana!\
        \n`-roast`:  Get roasted! \
        \n`-penis`:  To see the size of your member!\
        \n\
        \n`-react`:  Will react to your message with a random emoji!\
        \n\t->  Use `-react help` for more info.\
        \n\
        \n`-github`:  Sends my Github link!"

        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor('Created by Challix', 'https://i.imgur.com/WCBoOM8.png')
        .setColor('#FFFF00')
        .setTitle('__Morgana Help Page__')
        .setThumbnail('https://static.wikia.nocookie.net/megamitensei/images/3/33/MorganaPQ2.png/revision/latest?cb=20180901210700')
        .setDescription(helpCommands);

        message.channel.send(helpEmbed);
        //client.users.cache.get(user_id).send(helpEmbed)
        
    } else if(command === 'github'){
        message.channel.send('https://github.com/Challix/Morgana-Bot');
    }
});

client.login( process.env.BOT_TOKEN );
