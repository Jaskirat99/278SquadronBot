const path = require('path')
const fs = require('fs')
const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');


client.on('ready', async() => {
    console.log('Client ready!');

    const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('commands')





   

    //   command(client, 'help', (message) => {
    //     const { guild } = message
    //     const icon = guild.iconURL()  
    //     const embed = new Discord.MessageEmbed()

    //     .setTitle(`**Welcome To The Squadron Discord Bot\'s Help Menu!**`)
    //     .setThumbnail(icon)
    //     .setURL('https://www.surreycadets.ca/')
    //     .setColor('#FFD70')
    //     .setTimestamp()
    //     .setFooter('278 Cormorant Squadron')
    //     .addField("Prefix",'The Current Prefix For the Bot Is \'.\' ',)
    //     .addField('\u200B', '\u200B')
    //     .addField("Createtextchannel",'creates a text channel with the specified name (ADMIN ONLY)', )
    //     .addField('\u200B', '\u200B')
    //     .addField("Createvoicechannel",'creates a voice channel with the specified name (ADMIN ONLY)', )
    //     .addField('\u200B', '\u200B')
    //     .addField("Serverinfo",'Displays stats of the current server', )
    //     .addField('\u200B', '\u200B')
    //     .addField("Cc / clearchannel",'Clears all messages in a channel (ADMIN ONLY)', )
    //     .addField('\u200B', '\u200B')
    //     .addField("Status",'Clears all messages in a channel (ADMIN ONLY)', )
    //     .addField('\u200B', '\u200B')
    //     .addField("Servers",'Changes the Bot\'s status (ADMIN ONLY)', )
    //     .addField('\u200B', '\u200B')
    //     .addField("Help",'Displays this menu ', )           
    
    //     message.channel.send(embed)
    // })


})
    

client.login(config.token);
