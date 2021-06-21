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

    command(client, 'embed', (message) => {
   
      const embed = new Discord.MessageEmbed()
      .setTitle('Example text embed')
      .setURL('https://www.surreycadets.ca/')
      .setFooter('This is a footer')
      .setColor('#FFD700')
      .addFields(
        {
          name: 'Field 1',
          value: 'Hello world',
          inline: false,
        },
        {
          name: 'Field 2',
          value: 'Hello world',
          inline: false,
        },
        {
          name: 'Field 3',
          value: 'Hello world',
          inline: false,
        },
        {
          name: 'Field 4',
          value: 'Hello world',
        }
      )

    message.channel.send(embed)
    });

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
            {
              name: 'Region',
              value: region,
            },
            {
              name: 'Members',
              value: memberCount,
            },
            {
              name: 'Owner',
              value: owner.user.tag,
            },
            {
              name: 'AFK Timeout',
              value: afkTimeout / 60,
            }
          )
    
        message.channel.send(embed)
      })
})
    

client.login(config.token);
