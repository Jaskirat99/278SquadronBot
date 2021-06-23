

module.exports = (client, Discord, message) => {
  const channelId = '856962081986576464' // welcome channel
  const targetChannelId = '855223086180990987' // rules and info

  client.on('guildMemberAdd', (member) => {
     const message = `Welcome <@${
       member.id
     }> to the Squadron Discord! Please check out ${member.guild.channels.cache
       .get(targetChannelId)
       .toString()}`

     const channel = member.guild.channels.cache.get(channelId)
     channel.send(message)
  })
}