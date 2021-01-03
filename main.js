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

//dictionary of users for react command
var spammed = {};

//Bot initiation sequence
client.once('ready', () => {
    console.log('Morgana V0.86 is Online!');
});

//Allows interaction for each message sent
client.on('message', message =>{

//Looks at individual message authors and reacts to one
    var person = (message.author.discriminator);
    var user_id = (message.author.id);

//Reacts whenever target user sends a message
// console.log("spammed: ", spammed);
    if(spammed[user_id]){
        // console.log("emojis being used: ", spammed[user_id]);
        
        for(var i=0; i < spammed[user_id].length; i++) {
            reaction = spammed[user_id][i];
            message.react(reaction);
         }
    }    

//Command handler
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//Beginning of Command Conditionals
//Ping Command
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);

//size command
    } else if(command === 'penis'){
        client.commands.get('size').execute(message, args, person);

//react command
    } else if(command === 'react'){
        client.commands.get('react').execute(message, args, spammed, person, emojis);

//custom subreddit image command
    } else if(command === 'subreddit' || command === 'sr'){
        client.commands.get('subreddit').execute(message, args, Discord);

//cat subreddit image command
    } else if(command === 'cat'){
        let chance = Math.floor(Math.random()*4);

        if(chance == 0 || chance == 1){
            args[0] = 'CatGifs';
        }/* else if(chance == 1){
            args[0] = 'cats';
        }*/ else if(chance == 2){
            args[0] = 'kittens';
        } else if(chance == 3){
            args[0] = 'IllegallySmolCats';
        }
        client.commands.get('subreddit').execute(message, args, Discord);

//dog subreddit image command
    } else if(command === 'dog'){
        let chance = Math.floor(Math.random()*2);

        if(chance == 0){
            args[0] = 'rarepuppers';
        } else if(chance == 1){
            args[0] = 'WhatsWrongWithYourDog'
        }/*
         else if(chance == 1){
            args[0] = 'Zoomies';
        } else if(chance == 2){
            args[0] = 'WhatsWrongWithYourDog';
        } else if(chance == 3){
            args[0] = 'dogpictures';
        } else if(chance == 4){
            args[0] = 'puppies';
        }
        */
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
    } else if(command === 'chat'){
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
                delete spammed[args[0].substr(3,18)];
                message.channel.send(args[0].concat(" Removed!"));
                }
        } else {
            message.channel.send("Invalid command:\nUse: `-remove @user`")
        }
//suggestion command
    } else if(command === 'suggest'){
        suggestion = message.content.substr(9);
        message.delete();
        
        client.users.cache.get("260546613410398218").send({embed: {
            color: '#0e6b0e',
            title: "__Annonymous Suggestion:__",
            description: ('**' + suggestion + '**')
          }
        });
        
        const suggestEmbed = new Discord.MessageEmbed()
        .setAuthor('Created by Challix', 'https://i.imgur.com/WCBoOM8.png')
        .setColor('#0e6b0e')
        .setTitle('Thank you! Your annonymous suggestion was sent!')
        .setThumbnail('https://static.wikia.nocookie.net/megamitensei/images/3/33/MorganaPQ2.png/revision/latest?cb=20180901210700');

        client.users.cache.get(user_id).send(suggestEmbed);

//remove command
    } else if(command === 'changelog' || command === 'cl'){
        change_logs = "\
        \n**__Morgana V0.86__**\
        \n+ Reworked react command to handle multiple emojis\
        \n+ Made `-cat` and `-dog` more consistent\
        \n\
        \n**__Future Features__**\
        \n- Rework subreddit image scrapper to be more consistent through Reddit API instead of JSON\
        \n- Implement a voice command feature"
        
        const changes = new Discord.MessageEmbed()
        .setAuthor('Created by Challix', 'https://i.imgur.com/WCBoOM8.png')
        .setColor('#008E44')
        .setTitle('__ChangeLog__')
        .setThumbnail('https://static.wikia.nocookie.net/megamitensei/images/3/33/MorganaPQ2.png/revision/latest?cb=20180901210700')
        .setDescription(change_logs)
        .setFooter("Feel free to send any ideas with `-suggest <idea>`!");

        message.channel.send(changes);

//Official help command
    } else if(command == "help"){
        helpCommands = "\
        \n**[NEW]**\
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
        \n**[NEW]**\
        \n`-suggest`:  Sends an annonymous suggestion!\
        \n`-changelog`:  Sends the latest changes to the bot!\
        \n->`-cl`\
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
