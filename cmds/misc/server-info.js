const Commando = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')

module.exports = class ServerInfoCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'serverinfo',
      group: 'misc',
      memberName: 'serverinfo',
      description: 'Provides server information',
      clientPermissions: [],
      userPermissions: [],
    })
  }
  async run(message) {
    const { guild } = message
    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()
    const embed = new MessageEmbed()
    
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

  }
  
}
