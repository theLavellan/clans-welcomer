const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


const Discord = require("discord.js");
const client = new Discord.Client();

const newUsers = [];

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 10) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.cache.find(channel => channel.name === "general").send("Hi ${member.user}! Welcome to **Clan Ghilain**! Make sure to read <#592370870799040558> :book:, and if you feel like writing a bit about yourself (or knowing a bit more about us), take a look at <#586856347207729162> :wave:! Welcome and have fun :smile: :potato:`\n" + userlist);
    newUsers[guild.id].clear();
  }
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});

client.login("SuperSecretBotTokenHere");



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
    msg.reply(':heart: I love you more! :blush:');
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
        case 7: return 'Some tarantulas can make sounds. :mega: :spider:';
        case 8: return 'Japanese Macaques make snowballs for fun. They would probably like mudball fights. Probably.';
        case 9: return 'A sheep, a duck and a rooster were the first passengers in a hot air balloon.';
        case 10: return 'Ketchup was a medicine in the early 1800s.';
        case 11: return 'Crows can hold grudges against specific individual people.';
        case 12: return 'Penguings used to be about 2 meters (6 feet) tall.';
        case 13: return 'During hibernation a hamsters heart beats only 6 times per minute.';
        case 14: return 'There is a city in Alaska that had a cat as its mayor. His name was Stubbs and he liked to drink water and catnip from margarita glasses.';
        case 15: return 'Bolivia has 2 capital cities, La Paz and Sucre.';
        case 16: return 'Elephants purr like cats do, as a means of communication.';
        case 17: return 'Earths longest mountain range is under the sea.';
        case 18: return '97% of water on earth is undrinkable.';
        case 19: return 'The human brain can detect more than 10000 different smells.';
        case 20: return 'Apples are one quarter air.';
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

function randomMessage3(){
    var randomNumber = Math.round(Math.random()*2); // 0, 1 or 2
    switch(randomNumber){
     case 0: return 'hi there! :smile:';
     case 1: return 'hello hello hellooo!';
     case 2: return 'good morning! :sunny:';
    }
}

client.on('message', (message)=>{ 
    if(message.content == "Hello!"){
        message.reply(randomMessage3());
    }
});

function randomMessage4(){
    var randomNumber = Math.round(Math.random()*1); // 0, 1 or 2
    switch(randomNumber){
     case 0: return 'here you go! :cake: :cake: :cake:';
     case 1: return 'the cake is a lie. :x:';
     case 2: return 'all you need is cake! :cake:';
    }
}

client.on('message', (message)=>{ 
    if(message.content == "Cake, please!"){
        message.reply(randomMessage4());
    }
});


 // THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
