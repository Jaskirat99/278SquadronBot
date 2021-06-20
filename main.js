const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config()

const client = new Discord.Client();

const prefix = '.';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Client ready!');
    client.user.setActivity('Official Squadron Bot');
    });


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
    }else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }else if(command === 'purge'){
        client.commands.get('purge').execute(message, args);
    }
    
});

client.login(process.env.DISCORD_TOKEN);
