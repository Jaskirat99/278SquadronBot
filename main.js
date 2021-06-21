const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const command = require('./command');


client.on('ready', () => {
    console.log('Client ready!');

    command(client, ['ping', 'test'], (message) => {
        message.channel.send('Pong!')
    })

    command(client, 'servers', (message) =>{
        client.guilds.cache.forEach((guild) => {
            message.channel.send(
                `${guild.name} has a total of ${guild.memberCount} members! `)
        })
    })
    command(client, ['cc', 'clearchannel'], message =>{
         if(message.member.hasPermission('ADMINISTRATOR')) {
             message.channel.messages.fetch().then((results) =>{
                 message.channel.bulkDelete(results)
             })
         }
     })

    command(client, 'status', message =>{
         const content = message.content.replace('.status ', '')

         client.user.setPresence({
             activity: {
                 name: content,
                 type: 0,
             },
         })
     })     
    
    command(client, 'createtextchannel', (message) => {
        const name = message.content.replace('.createtextchannel ', '')
    
        message.guild.channels
          .create(name, {
            type: 'text',
          })
          .then((channel) => {
            const categoryId = '855211234889564191'
            channel.setParent(categoryId)
          })
      })
    
    command(client, 'createvoicechannel', (message) => {
        const name = message.content.replace('.createvoicechannel ', '')
    
        message.guild.channels
          .create(name, {
            type: 'voice',
          })
          .then((channel) => {
            const categoryId = '855211234889564193'
            channel.setParent(categoryId)
            channel.setUserLimit(10)
          })
      })
    });

    

client.login(config.token);
