require('module-alias/register')

const Discord = require('discord.js')
const client = new Discord.Client()



const config = require('@root/config.json')
const welcome = require('@features/welcome')
const loadCommands = require('@root/commands/load-commands')
const commandBase = require('@root/commands/command-Base')



client.on('ready', async () => {
  console.log('The client is ready!')

  welcome(client, Discord)
  loadCommands(client)

})

client.login(config.token)
