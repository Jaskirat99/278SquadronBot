require('module-alias/register')

const path = require('path')
const Commando = require('discord.js-commando')

const config = require('@root/config.json')
const welcome = require('@features/welcome')



const client = new Commando.CommandoClient({
  owner: '763867677256712205',
  commandPrefix: config.prefix,
})

client.on('ready', async () => {
  console.log('The client is ready!')
  client.user.setActivity('Official Squadron Bot')

  client.registry
    .registerGroups([
      ['misc', 'Miscellaneous Commands'],
      ['moderation', 'Commands For Moderation'],
      ['games', 'Commands For Games'],
      ['testing', 'Commands For Testing Purposes'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))

  welcome(client) 
})

client.login(config.token)
