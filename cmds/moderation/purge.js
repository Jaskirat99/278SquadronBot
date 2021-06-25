const Commando = require('discord.js-commando')

module.exports = class KickCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'purge',
      group: 'moderation',
      memberName: 'purge',
      description: 'Purges a specified amount of messages in current channel',
      clientPermissions: ['ADMINISTRATOR'],
      userPermissions: ['ADMINISTRATOR'],
    })
  }

  async run(message, args) {
    console.log('Running Purge Command!')

      if(!args[0]) return message.reply("Please enter the amount of messages that you want to purge!")
      if(isNaN(args[0])) return message.reply("Please enter a real number!")

      if(args[0] > 100) return message.reply("You can not delete more than 100 messages!")
      if(args[0] < 1) return message.reply("You must delete atleast one messasge!")

      await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
          message.channel.bulkDelete(messages);
          message.reply(`Purged Messages!`)
      });
  }
}
