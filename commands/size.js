module.exports = {
    name: 'penis',
    description: "this shows the size of your penis!",
    execute(message, args){
        //message.channel.send('8===D');
        var size = Math.floor(Math.random() * 75) + 50;
        message.channel.send('8'.concat(('='.repeat(size)),'D\nYour penis is ',size,' Inches!'));
    }
}