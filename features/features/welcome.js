const mongo = require('@util/mongo')
const command = require('@util/command')
const welcomeSchema = require('@schemas/welcome-schema')
const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
  //!setwelcome <message>
  const cache = {} // guildId: [channelId, text]

  command(client, 'setwelcome', async (message) => {
    const { member, channel, content, guild } = message

    if (!member.hasPermission('ADMINISTRATOR')) {
      channel.send('You do not have permission to run this command.')
      return
    }

    let text = content

    const split = text.split(' ')

    if (split.length < 2) {
      channel.send('Please provide a welcome message')
      return
    }

    split.shift()
    text = split.join(' ')

    cache[guild.id] = [channel.id, text]

    await mongo().then(async (mongoose) => {
      try {
        await welcomeSchema.findOneAndUpdate(
          {
            _id: guild.id,
          },
          {
            _id: guild.id,
            channelId: channel.id,
            text,
          },
          {
            upsert: true,
          }
        )
      } finally {
        mongoose.connection.close()
      }
    })
  })

  const onJoin = async (member) => {
    const { guild } = member

    let data = cache[guild.id]

    if (!data) {
      console.log('FETCHING FROM DATABASE')

      await mongo().then(async (mongoose) => {
        try {
          const result = await welcomeSchema.findOne({ _id: guild.id })

          cache[guild.id] = data = [result.channelId, result.text]
        } finally {
          mongoose.connection.close()
        }
      })
    }

    const channelId = data[0]
    const text = data[1]

    const channel = guild.channels.cache.get(channelId)
    const icon = guild.iconURL()
    const embed = new MessageEmbed()
      .setTitle(`278 Cormorant Squadron`,)
      .setTimestamp()
      .setThumbnail(icon)
      .setFooter('278 Cormorant Squadron')
      .setURL('https://www.surreycadets.ca/')
      .setColor('#FFD700')
      .setDescription(`${text.replace(/<@>/g, `<@${member.id}>`)}`)
    channel.send(embed)
  }

  command(client, 'simjoin', (message) => {
    onJoin(message.member)
  })

  client.on('guildMemberAdd', (member) => {
    onJoin(member)
  })
}





// module.exports = (client, Discord, message) => {
//   const channelId = '856962081986576464' // welcome channel
//   const targetChannelId = '855223086180990987' // rules and info

//   client.on('guildMemberAdd', (member) => {
//      const message = `Welcome <@${
//        member.id
//      }> to the Squadron Discord! Please check out ${member.guild.channels.cache
//        .get(targetChannelId)
//        .toString()}`

//      const channel = member.guild.channels.cache.get(channelId)
//      channel.send(message)
//   })
// }