const Commando = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')


module.exports = class BanCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'embed',
      group: 'misc',
      memberName: 'emed',
      description: 'Sends a custom Embed from provided details. Usage: .embed {channel} *{title} *{description}',
      clientPermissions: ['ADMINISTRATOR'],
      userPermissions: ['ADMINISTRATOR'],
    })
  }

  async run(message, text) {
    console.log('Running Embed Command!')

  // Send Message In Channel You Want To 
  const channel = message.mentions.channels.first()
  if(!channel) return message.reply('Provide A Channel To Send Embed') // If No Channel Is Provided

  // Embed Options
  const title = text.split('*')[1] // [1] Because args[0] Is Channel // You Can Keep Anything Instead Of >
  if(!title) return message.reply('Provide Title For Embed.') // If No Title Is Provided
  const description = text.split('*')[2] // [1] Because args[0] Is Channel // You Can Keep Anything Instead Of >
  if(!description) return message.reply('Provide Description For Embed.') // If No Description Is Provided
 


  // Send Embed
  const embed = new MessageEmbed()
  .setTitle(title)
  .setDescription(description)
  .setColor('#FFD700')
  .setFooter('278 Cormorant Squadron')
  channel.send(embed) // Send Embed

  }
}
