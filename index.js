require('module-alias/register')

//const Discord = require('discord.js')
//const client = new Discord.Client()

const path = require('path')
const Commando = require('discord.js-commando')

const config = require('@root/config.json')
const welcome = require('@features/welcome')
const loadCommands = require('@root/commands/load-commands')
const commandBase = require('@root/commands/command-Base')


const client = new Commando.CommandoClient({
  owner: '763867677256712205',
  commandPrefix: config.prefix,
})

client.on('ready', async () => {
  console.log('The client is ready!')

  client.registry
    .registerGroups([
      ['misc', 'misc commands'],
      ['moderation', 'moderation commands'],
      ['economy', 'Commands for the economy system'],
      ['giveaway', 'Commands to manage giveaways'],
      ['games', 'Commands to handle games'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))

  welcome(client)
  loadCommands(client)

})

client.login(config.token)
