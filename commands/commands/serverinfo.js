const Discord = require('discord.js');

module.exports = {
    commands: 'serverinfo',
    description: "List's server info",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        const { guild } = message
        const { name, region, memberCount, owner, afkTimeout } = guild
        const icon = guild.iconURL()
        const embed = new Discord.MessageEmbed()
        
        .setTitle(`Server info for "${name}"`)
        .setThumbnail(icon)
        .setURL('https://www.surreycadets.ca/')
        .setColor('#FFD700')
        .setTimestamp()
        .setFooter('278 Cormorant Squadron')
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

    },

  }