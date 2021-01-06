module.exports = {
    name: 'react',
    description: "this is a command that allows you to automatically react to certain user messages!",
    execute(message, args, spammed, person, emojis){
        if(args.length != 0){
            if(args[0].startsWith("<@!")){
                let target = args[0].substr(3,18);
                var react = emojis[Math.floor(Math.random() * emojis.length)];
// gives new dictionary keys an empty array
                if(!spammed[target]){
                    spammed[target] = [];
                }
// adds emojis to array
                //adds given emojis
                if(args.length > 1){
                    let reactions = "";
                    for(i = 1; i < args.length; i++){
                        react = args[i];
                        if( spammed[target].includes(react) ){
                            message.channel.send("Sorry, can't react with duplicate emojis.");
                            delete spammed[target];
                            return;
                        }
                        spammed[target].push(react);
                        reactions += (react + ' ');
                    }
                    message.channel.send("Will react to ".concat(args[0]," with ", reactions));
                // adds random emoji
                } else{
                    spammed[target].push(react);
                    message.channel.send("Will react to ".concat(args[0]," with a ", react));
                }

//-react instructions help command
            } else if(args[0] == 'help'){
                reactCommands = "\
                                \n`-react party`:\n  Have a reaction blast!\
                                \n`-react <@user>`:\n  Reacts to every single one of @user's messages with a random emoji!\
                                \n`-react <@user> <emoji>`:\n  Reacts to every single one of @user's messages with the given emoji!\
                                \n\
                                \n**[NEW]** `-react <@user> <emoji> <emoji> <emoji>`:\n Same as command above but you can provide as many emojis as you want!\
                                \n\
                                \n\
                                \n`-remove <@user>`:\n  To remove @user from react spam"
                
                message.channel.send({embed: {
                    color: '#0099ff',
                    author: {
                      name: 'Created by Challix',
                      icon_url: 'https://i.imgur.com/WCBoOM8.png'
                    },
                    title: "__React Command Arguements__",
                    description: reactCommands,
                  }
                });

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
                if(args.length > 1){
                    for(i = 0; i < args.length; i++){
                        react = args[i];
                        message.react(react);
                    }
                // adds random emoji
                } else{
                    message.react(args[0]);
                }

                // message.react(args[0])
            }
//default reaction
        } else {
            random_index = Math.floor(Math.random() * emojis.length);
            randomoji = emojis[random_index];
            message.react(randomoji);
        }
    }
}  