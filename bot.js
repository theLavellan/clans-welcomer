const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'mudball') {
    msg.reply('mudball! :mudball:');
  }
});

client.on('message', msg => {
  if (msg.content === 'hello bot') {
    msg.reply('hello Clanner! :blush: :potato:');
  }
});

client.on('message', msg => {
  if (msg.content === 'I love you bot') {
    msg.reply(':flushed: *unknown error*');
  }
});


 client.on("guildMemberAdd", (member) => {

    let channel = client.channels.get('675432997654233140');

    channel.send(`Hi ${member.user}! Welcome to **Clan Ghilain**! Make sure to read <#592370870799040558> :book:, and if you feel like writing a bit about yourself (or knowing a bit more about us), take a look at <#586856347207729162> :wave:! Welcome and have fun :smile: :potato:`);

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
