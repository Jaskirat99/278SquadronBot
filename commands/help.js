const Discord = require('discord.js');

module.exports = {
    commands: 'help',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
      
        const { guild } = message
             const icon = guild.iconURL()  
             const embed = new Discord.MessageEmbed()
    
             .setTitle(`**Welcome To The Squadron Discord Bot\'s Help Menu!**`)
             .setThumbnail(icon)
             .setURL('https://www.surreycadets.ca/')
             .setColor('#FFD700')
             .setTimestamp()
             .setFooter('278 Cormorant Squadron')
             .addField("Prefix",'The Current Prefix For the Bot Is \'.\' ',)
             .addField('\u200B', '\u200B')
             .addField("Createtextchannel",'creates a text channel with the specified name (ADMIN ONLY)', )
             .addField('\u200B', '\u200B')
             .addField("Createvoicechannel",'creates a voice channel with the specified name (ADMIN ONLY)', )
             .addField('\u200B', '\u200B')
             .addField("Serverinfo",'Displays stats of the current server', )
             .addField('\u200B', '\u200B')
             .addField("Cc / clearchannel",'Clears all messages in a channel (ADMIN ONLY)', )
             .addField('\u200B', '\u200B')
             .addField("Add / addition",'Adds any two numbers', )
             .addField('\u200B', '\u200B')
             .addField("Help",'Displays this menu ', )           
        
             message.channel.send(embed)
    },
    
  }