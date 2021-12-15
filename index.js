const { Client, intents, Intents } = require('discord.js');
const path = require('path')
const { token } = require('./config.json');
const client = new Client({ intents: 32511 });
const myIntents = new Intents();
//adds permissions for bot to type in guild.
myIntents.add(Intents.FLAGS.GUILD_MESSAGE_TYPING);
// prefix
const prefix = '!'
//console stuff aka terminal
client.once('ready', () => {
    console.log('Bot is online!');

});

client.once('ready', ( )=> {
    client.user.setActivity('press !HELP for help!',{type: 'PLAYING'});
})

//to be able to do !(word)space(word) commands
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot)return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
// ping 
     if (command === 'ping'){
        message.channel.send('pong~!')
        
    }
// about the bot
    if (command === 'cloudy'){
        message.channel.send('Cloudy is a discord bot used to keep track of frequently asked questions in communities. \n Please use `!github` for more information about upcoming changes.')
    }
// github 
    else if (command === 'github'){
        message.channel.send('come back later for the link!')
    }




// help1 command
    if (command === 'help'){
        message.channel.send('list of commands you can do with grubbot. \n !ping , you get a pong! \n !cloudy , tells you about the bot \n !github , gives you the link to the github')
    }



})


client.login(token);