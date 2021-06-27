const { MessageEmbed } = require('discord.js')
module.exports = (client) => {

client.on('message', async(message) => {
  const { member, channel, content, guild } = message
  if(message.author.bot) return;
  if(!message.guild) return;

  const array = ['fuck', 'shit', "filtertest"]

  const embed = new MessageEmbed()
      .setTitle('278 Cormorant Squadron')
      .setColor('#FFD700')
      .setThumbnail('https://upload.wikimedia.org/wikipedia/en/6/65/RCACS_Crest.png')
      .setURL('https://www.surreycadets.ca/')
      .setTimestamp()
      .setFooter('278 Cormorant Squadron')
      .setDescription(`WARNING:\n\nThe Bot detected that you just said "${message.content}" in ${channel}\n\nYou can not use explicit language in the Squadron Discord. This incident has been logged and is a warning. Further violations will lead to disciplinary action`)
  
    if(array.some(word => ` ${message.content.toLowerCase()}`.includes(` ${word}`))){
      message.author.send(embed)
      message.delete()
 

    }
  
});
}