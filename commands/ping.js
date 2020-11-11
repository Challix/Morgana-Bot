async function getRandomDog() {
    let url ="https://dog.ceo/api/breeds/image/random";
    try{
        let res = await fetch(url);
        return await res.json();
    }
    catch(error){
        console.log(error);
    }
}

async function renderDogs() {
    let dogs = await getRandomDog();
    var dog =[];
    dog = new Image();//created the image object
    dog.src=dogs.message;///taking the image path
    dog.width="620";
    dog.height="320";
    var images = document.getElementsByTagName('img');
    ///limit the image display on screen
    var l=images.length;
    if(l>3)
    {
        for(var p=0;p<l;p++)
        {
            images[0].parentNode.removeChild(images[0]);
        }
    }
    ///end of limit the image
    document.body.appendChild(dog);
}

module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('pong!');
        //message.channel.send(args);
    }
}