module.exports = {
    name: 'react',
    description: "this is a command that allows you to automatically react to certain user messages!",
    execute(message, args, person){
        const taggedUser = message.mentions.users.first();
        command = message.content.split(" ")
        console.log(command)
        var emoji = '💩'
        
        //Checks if required arguements exist
        if(command[1] && command[2]){
            //Checks if first arguement uses User ID prefix
            if(command[1].startsWith("<@!")){
                emoji = command[2];
            } else{
                console.log('Error!')
                message.channel.send('Wrong Syntax! Use `-react @User emoji`');
            }
        } else{
            console.log('Errored!')
            message.channel.send('Wrong Syntax! Use `-react @User emoji`');
        }

        message.react(emoji);
    }
}