const Commando = require('discord.js-commando')

module.exports = class ClearChannelCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'cc',
      group: 'moderation',
      memberName: 'cc',
      description: 'Clears all messages in a channel',
      clientPermissions: ['ADMINISTRATOR'],
      userPermissions: ['ADMINISTRATOR'],
    })
  }
  async run(message) {
    console.log('Running ClearChannel Command!')

    message.channel.messages.fetch().then((results) =>{
        message.channel.bulkDelete(results)
    })
  }
  
}
