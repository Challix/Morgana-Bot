module.exports = {
    name: 'size',
    description: "this shows the size of your penis!",
    execute(message, args, person){
        //Creates a random number from 0 to 100
        var chance = Math.random()*100;
        var phrase = " ";

        console.log(chance);

        if(person == 5474){
            chance = 100;
        }

        if (chance <= 0.1){
            message.channel.send("Yo, you're transgender! Only God knows what's in those trousers.");

        } else if (chance > 0.1 && chance <= 0.5){
            message.channel.send("Bruh, you're a woman. You don't have a dick.");

        } else if (chance > 0.5 && chance <= 40){
            var size = Math.floor(Math.random() * 7);
            if (size == 0){
                phrase = "Yikes. That's a micro dick, my guy.";
                size = "less than an";
                message.channel.send('8~D\nYour penis is '.concat(size," Inch! ", phrase));
            } else if(chance == 1){
                phrase = "Use that one inch destroyer to the MAX!"
                message.channel.send('8=D\n'.concat('Your penis is only ',size," Inch! ", phrase));
            } else{
                message.channel.send('8'.concat(('='.repeat(size)),'D\nYour penis is ',size," Inches! ", phrase));
            }

        } else if (chance > 40 && chance <= 70){
            var size = Math.floor(Math.random() * 7) + 6;
            phrase = "Nice cock. 😏"
            message.channel.send('8'.concat(('='.repeat(size)),'D\nYour penis is ',size," Inches! ", phrase));

        } else if (chance > 70 && chance <= 90){
            var size = Math.floor(Math.random() * 5) + 12;
            phrase = "Truly a king amongst men!"
            message.channel.send('8'.concat(('='.repeat(size)),'D\nYour penis is ',size," Inches! ", phrase));

        } else if (chance > 90 && chance <= 100){
            var size = Math.floor(Math.random() * 85) + 16;
            phrase = "Holy shit, that's a MASSIVE schlong!"
            message.channel.send('8'.concat(('='.repeat(size)),'D\nYour penis is ',size," Inches! ", phrase));
        }
        
    }
}