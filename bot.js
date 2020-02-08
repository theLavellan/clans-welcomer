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
  if (msg.content === 'mudball') {
    msg.reply('mudball! :smirk:');
  }
});

client.on('message', msg => {
  if (msg.content === 'hello bot') {
    msg.reply('hello Clanner! :blush:');
  }
});

client.on('message', msg => {
  if (msg.content === 'I love you bot') {
    msg.reply(':flushed: *unknown error*... Lets be friends? :thinking:');
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
  if (msg.content === 'open the airlock Hal') {
    msg.reply('Im afraid I cant do that Dave');
  }
});

 client.on("guildMemberAdd", (member) => {

    let channel = client.channels.get('577144279353262109');

    channel.send(`Hi ${member.user}! Welcome to **Clan Ghilain**! Make sure to read <#592370870799040558> :book:, and if you feel like writing a bit about yourself (or knowing a bit more about us), take a look at <#586856347207729162> :wave:! Welcome and have fun :smile: :potato:`);

});


 // THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
