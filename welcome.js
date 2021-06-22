module.exports = (client, Discord, message) => {
    const channelId = '855223086180990987' // welcome channel
  
    client.on('guildMemberAdd', member => {
        const embed = new Discord.MessageEmbed()

        .setTitle(`Welcome To The Squadron Discord!`)
        .setURL('https://www.surreycadets.ca/')
        .setDescription(`<@${member.id}> Please check out Rules and Info!`)
        .setColor('#FFD700')
        .setTimestamp()
        .setFooter('278 Cormorant Squadron')

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(embed)
    })
  }