const { MessageEmbed } = require('discord.js')
const DiscordJS = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class SimJoinCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'verify',
      group: 'setup',
      memberName: 'verify',
      description: 'Simulates a join',
    })
  }
 
  async run(message) {
    console.log('Running Verify Command!')

    const questions = [
        'Hello, are you an Officer or Cadet?',
        'Perfect! Before you can gain access to the rest of the server you must agree to the rules. \n\n**Rules**\n1. All normal cadet and squadron rules apply.\n2. No profanity, or otherwise explicit language.\n3. To be continued... \n\nPlease type "understood" to acknowledge',
        'Great! Firstly a quick tour of the server. \n\n The Squadron Website Posts channel posts updates directly from cadet related social media platforms (Facebook, Website etc)\n\nPlease type "next" to move forward',
        'Next, The Squadron Annoucements channel  is where all important annoucements regarding the squadron are made\n\nPlease type "next" to move forward',
        'Next, The Team Channel Access Channel is where you can gain access to flight and team rooms\n\nPlease type "next" to move forward',
        'Lastly, Please enter your name in the following format (Rank, Last Name, First Initial. Ex. WO2 Gill, J) ',

      ]
      let counter = 0
  
      const filter = (m) => {
        return m.author.id === message.author.id
      }
  
      const collector = new DiscordJS.MessageCollector(message.channel, filter, {
        max: questions.length,
        time: 1000 * 300, // 15s
      })
      const embed = new MessageEmbed()
      .setTitle('278 Cormorant Squadron')
      .setColor('#FFD700')
      .setURL('https://www.surreycadets.ca/')
      .setTimestamp()
      .setFooter('278 Cormorant Squadron')
      .setDescription(`${questions[counter++]}`)

      message.channel.send(embed)

      collector.on('collect', (m) => {
        if (counter < questions.length) {
          const embed = new MessageEmbed()
          .setTitle('278 Cormorant Squadron')
          .setColor('#FFD700')
          .setURL('https://www.surreycadets.ca/')
          .setTimestamp()
          .setFooter('278 Cormorant Squadron')
          .setDescription(`${questions[counter++]}`)
          m.channel.send(embed)
        }
      })
  
      collector.on('end', (collected) => {
        console.log(`Collected ${collected.size} messages`)
  
        if (collected.size < questions.length) {
          message.reply('You did not answer the questions in time')
          return
        }
  
        collected.forEach((value) => {
          message.member.setNickname(value.content)
        })

        const roleName = 'verified'
        const { guild } = message
        const role = guild.roles.cache.find((role) => role.name === roleName)
        const member = guild.members.cache.find((member) => member.id === message.author.id)

    message.member.roles.add(role)

       const embed2 = new MessageEmbed()
      .setTitle('278 Cormorant Squadron')
      .setColor('#FFD700')
      .setURL('https://www.surreycadets.ca/')
      .setTimestamp()
      .setFooter('278 Cormorant Squadron')
      .setDescription('Perfect! Your name has been set, and you have been given access to the rest of the squadron discord!')
        message.reply(embed2)
      })
  
    //   const yes = ['cadet', 'y']
    //   const no = ['officer', 'n']

    //   const filter = x => {
    //       return(x.author.id === message.author.id);
    //   };

    //   const msg = await message.channel.send("are you a cadet or officer?")
    //   const verify = await message.channel.awaitMessages(filter, {max: 1, time:30000000000});

    //   if(!verify.size) return message.channel.send("Timed out, you must reply to gain access to the server. Please leave and try again.")

    //   let choice = verify.first().content.toLowerCase();
    //   if (yes.includes(choice)) return message.reply("Welcome Cadet! Please input your rank")
    //   if (no.includes(choice)) return message.reply("Welcome officer! Please input your name in the following structure: (Rank, Last Name, First Initial)")
    //   if (!yes.includes(choice) || !no.includes(choice)) return message.reply("Please reply with either 'cadet' or 'officer")


		
	}
}