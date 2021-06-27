const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
    client.on('messageDelete', message => {
        if(!message.partial){
            const channel = client.channels.cache.get('855224012413075482')
            if(channel){
                const embed = new MessageEmbed()
                    .setTitle('Deleted Message Detected')
                    .setDescription(`The message: "${message.content}" was just deleted. Below are the details:\n\n Deleted by: ${message.author}\n\n Channel: ${message.channel} \n\n Timestamp is provided at the bottom of this message`)
                    .addField('No immediate action required','This message is for reference purposes')
                    .setColor('#FFD700')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/en/6/65/RCACS_Crest.png')
                    .setURL('https://www.surreycadets.ca/')
                    .setTimestamp()
                    .setFooter('278 Cormorant Squadron')
                    channel.send(embed)
            }
        }    
    })


   client.on('messageUpdate', async(oldMessage, NewMessage) => {
            const channel = client.channels.cache.get('855224012413075482')
            const Editembed = new MessageEmbed()
                    .setTitle('Edited Message Detected')
                    .setDescription(`${oldMessage.author} just edited a message. Below are the details:\n\n Original Message: ${oldMessage.content}\n\n New Message: ${NewMessage.content} \n\n Channel: ${oldMessage.channel}\n\n Timestamp is provided at the bottom of this message`)
                    .addField('No immediate action required','This message is for reference purposes')
                    .setColor('#FFD700')
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/en/6/65/RCACS_Crest.png')
                    .setURL('https://www.surreycadets.ca/')
                    .setTimestamp()
                    .setFooter('278 Cormorant Squadron')
                    await channel.send(Editembed)
            
        
   }) 
}
