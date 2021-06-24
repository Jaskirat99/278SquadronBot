
const Commando = require('discord.js-commando')

module.exports = class SimJoinCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'setwelcome',
      group: 'setup',
      memberName: 'setwelcome',
      userPermissions: ['ADMINISTRATOR'],
      description: 'Sets the welcome channel and message for the server',
    })
  }
 
  run(message) {
		return message.reply('Welcome message has been set ');
	}
}