  
const Commando = require('discord.js-commando')

module.exports = class SimJoinCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'simjoin',
      group: 'testing',
      memberName: 'simjoin',
      userPermissions: ['ADMINISTRATOR'],
      description: 'Simulates a join',
    })
  }
 
  run(message) {
    console.log('Running Sim Join Command!')
		return message.reply('Simulating Join! Please wait a moment...    ');
	}
}