require('module-alias/register')

const path = require('path')
const Commando = require('discord.js-commando')
const WOKCommands = require('wokcommands')

const config = require('@root/config.json')
const welcome = require('@features/welcome')
const mongo = require('./util/mongo')



const client = new Commando.CommandoClient({
  owner: '763867677256712205',
  commandPrefix: config.prefix,
})

client.on('ready', async () => {
  console.log('The client is ready!')
  client.user.setActivity('Official Squadron Bot')

  await mongo().then((mongoose) => {
    try {
      console.log('Connected to mongo!')
    } finally {
      mongoose.connection.close()
    }
  })

  client.registry
    .registerGroups([
      ['misc', 'Miscellaneous Commands'],
      ['moderation', 'Commands For Moderation'],
      ['games', 'Commands For Games'],
      ['testing', 'Commands For Testing Purposes'],
      ['setup', 'Commands For Setting Up The Bot In Your Server'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))

  welcome(client) 

})

client.login(config.token)
