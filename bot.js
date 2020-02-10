const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong! :ping_pong:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Ping') {
    msg.reply('pong! :ping_pong:');
  }
});

client.on('message', msg => {
  if (msg.content === 'mudball') {
    msg.reply('mudball! :smirk:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Mudball') {
    msg.reply('mudball! :smirk:');
  }
});

client.on('message', msg => {
  if (msg.content === 'hello bot') {
    msg.reply('hello Clanner! :blush:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hello, bot!') {
    msg.reply('hello Clanner! :blush:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hello, bot') {
    msg.reply('hello Clanner! :blush:');
  }
});

client.on('message', msg => {
  if (msg.content === 'I love you bot') {
    msg.reply(':flushed: *unknown error*... Lets be friends? :thinking:');
  }
});

client.on('message', msg => {
  if (msg.content === 'I love you, bot!') {
    msg.reply(':blue_heart: :smile:');
  }
});

client.on('message', msg => {
  if (msg.content === 'CHEESE') {
    msg.reply(':cheese: :cheese: :cheese: **CHEESE FOR ALL!** :cheese: :cheese: :cheese:');
  }
});

client.on('message', msg => {
  if (msg.content === 'I want a fish') {
    msg.reply('here you go! :fish: :tropical_fish: :blowfish:');
  }
});

client.on('message', msg => {
  if (msg.content === 'I want fish') {
    msg.reply('here you go! :fish: :tropical_fish: :blowfish:');
  }
});

client.on('message', msg => {
  if (msg.content === 'open the airlock Hal') {
    msg.reply('Im afraid I cant do that Dave');
  }
});

client.on('message', msg => {
  if (msg.content === 'Coffee, please!') {
    msg.reply(':coffee: :coffee: :coffee:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Tea, earl grey, hot') {
    msg.reply(':tea: :tea: :tea: :vulcan:');
  }
});


client.on('message', msg => {
  if (msg.content === 'Tea, please!') {
    msg.reply('Tea, Earl Grey. Hot. :tea: :vulcan:');
  }
});

function randomMessage(){
    var randomNumber = Math.round(Math.random()*20); // 0, 1 or 2
    switch(randomNumber){
        case 0: return 'The heart of a shrimp is located in its head.';
        case 1: return 'A snail can sleep for three years.';
        case 2: return 'Elephants are the only animal that cannot jump.';
        case 3: return 'Kangaroos cannot fart.';
        case 4: return 'Around 50 percent of orangutans have fractured bones, due to falling out of trees on a regular basis.';
        case 5: return 'Otters are very cute, but have very dark and disturbing secrets.';
        case 6: return 'Turtles can breathe through their butts.';
        case 7: return 'Some tarantulas can make sounds';
        case 8: return 'Japanese Macaques make snowballs for fun. They would probably like mudball fights. Probably.';
        case 9: return 'A sheep, a duck and a rooster were the first passengers in a hot air balloon.';
        case 10: return 'Ketchup was a medicine in the early 1800s.';
        case 11: return 'Crows can hold grudges against specific individual people.';
        case 12: return 'Penguings used to be about 2 meters (6 feet) tall.';
        case 13: return 'Fact 3';
        case 14: return 'Fact 3';
        case 15: return 'Fact 3';
        case 16: return 'Fact 3';
        case 17: return 'Fact 3';
        case 18: return 'Fact 3';
        case 19: return 'Fact 3';
        case 20: return 'Fact 3';
    }
}

client.on('message', (message)=>{ 
    if(message.content == "Fact!"){
        message.reply(randomMessage());
    }
});

function randomMessage2(){
    var randomNumber = Math.round(Math.random()*2); // 0, 1 or 2
    switch(randomNumber){
        case 0: return 'What is brown and sticky? A stick.';
        case 1: return 'What do you call a fly without wins? A walk!';
        case 2: return 'Do you know how long Ive been looking for you?!';
    }
}

client.on('message', (message)=>{ 
    if(message.content == "Joke!"){
        message.reply(randomMessage2());
    }
});

 client.on("guildMemberAdd", (member) => {

    let channel = client.channels.get('577144279353262109');

    channel.send(`Hi ${member.user}! Welcome to **Clan Ghilain**! Make sure to read <#592370870799040558> :book:, and if you feel like writing a bit about yourself (or knowing a bit more about us), take a look at <#586856347207729162> :wave:! Welcome and have fun :smile: :potato:`);

});


 // THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
