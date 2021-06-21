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

         if(message.member.hasPermission('ADMINISTRATOR')) {
         client.user.setPresence({
             activity: {
                 name: content,
                 type: 0,
             }
            })
        }
    })
        
     
    
    command(client, 'createtextchannel', (message) => {
        const name = message.content.replace('.createtextchannel ', '')
    
        if(message.member.hasPermission('ADMINISTRATOR')) {
        message.guild.channels
          .create(name, {
            type: 'text',
          })
          .then((channel) => {
            const categoryId = '855211234889564191'
            channel.setParent(categoryId)
          })
        }
      })
    
    command(client, 'createvoicechannel', (message) => {
        const name = message.content.replace('.createvoicechannel ', '')
    
        if(message.member.hasPermission('ADMINISTRATOR')) {
        message.guild.channels
          .create(name, {
            type: 'voice',
          })
          .then((channel) => {
            const categoryId = '855211234889564193'
            channel.setParent(categoryId)
            channel.setUserLimit(10)
          })
        }
      })

    

    command(client, 'serverinfo', (message) => {
        const { guild } = message
    
        const { name, region, memberCount, owner, afkTimeout } = guild
        const icon = guild.iconURL()
    
        const embed = new Discord.MessageEmbed()
          .setTitle(`Server info for "${name}"`)
          .setThumbnail(icon)
          .setURL('https://www.surreycadets.ca/')
          .setColor('#FFD700')
          .addFields(
            {name: 'Region', value: region,},
            {name: 'Members',value: memberCount,},
            {name: 'Owner', value: owner.user.tag,},
            {name: 'AFK Timeout', value: afkTimeout / 60,}
          )
        message.channel.send(embed)
      })

      command(client, 'help', (message) => {
        const { guild } = message
        const icon = guild.iconURL()  
        const embed = new Discord.MessageEmbed()

        .setTitle(`**Welcome To The Squadron Discord Bot\'s Help Menu!**`)
        .setThumbnail(icon)
        .setURL('https://www.surreycadets.ca/')
        .setColor('#FFD700')
        .setTimestamp()
        .setFooter('278 Cormorant Squadron')
        .addField("Prefix",'The Current Prefix For the Bot Is \'.\' ',)
        .addField('\u200B', '\u200B')
        .addField("Createtextchannel",'creates a text channel with the specified name (ADMIN ONLY)', )
        .addField('\u200B', '\u200B')
        .addField("Createvoicechannel",'creates a voice channel with the specified name (ADMIN ONLY)', )
        .addField('\u200B', '\u200B')
        .addField("Serverinfo",'Displays stats of the current server', )
        .addField('\u200B', '\u200B')
        .addField("Cc / clearchannel",'Clears all messages in a channel (ADMIN ONLY)', )
        .addField('\u200B', '\u200B')
        .addField("Status",'Clears all messages in a channel (ADMIN ONLY)', )
        .addField('\u200B', '\u200B')
        .addField("Servers",'Changes the Bot\'s status (ADMIN ONLY)', )
        .addField('\u200B', '\u200B')
        .addField("Help",'Displays this menu ', )           
    
        message.channel.send(embed)
    })
})
    

client.login(config.token);
