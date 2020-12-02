const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '%';

client.once('ready', () => {
    console.log('Bot is online :)');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'info'){
        message.channel.send('Deze bot is nu nog in ontwerping en zou later beter worden.');
        
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        message.channel.send('Deze bot heeft nu nog geen verdere commands');
        
    }
});

client.login(process.env.token)