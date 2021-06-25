const DiscordJS = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class SimJoinCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'verify',
      group: 'testing',
      memberName: 'verify',
      description: 'Simulates a join',
    })
  }
 
  async run(message) {
    const questions = [
        'Hello, are you an Officer or Cadet?',
        'Perfect! Before you can gain access to the rest of the server we must set up your server nickname to meet the squadron standard. Please type "understood" to acknowledge',
        'Great! Firstly a quick tour of the server. \n The Squadron Website Posts channel posts updates directly from cadet related social media platforms (Facebook, Website etc)\n Please type "next" to move forward',
        'Next, The Squadron Annoucements channel  is where all important annoucements regarding the squadron are made\n Please type "next" to move forward',
        'Next, The Team Channel Access Channel is where you can gain access to flight and team rooms\n Please type "next" to move forward',
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
  
      message.channel.send(questions[counter++])
      collector.on('collect', (m) => {
        if (counter < questions.length) {
          m.channel.send(questions[counter++])
        }
      })
  
      collector.on('end', (collected) => {
        console.log(`Collected ${collected.size} messages`)
  
        if (collected.size < questions.length) {
          message.reply('You did not answer the questions in time')
          return
        }
  
        let counter = 0
        collected.forEach((value) => {
        console.log(questions[counter++], value.content)
          message.member.setNickname(value.content)
        })
        message.reply('Perfect! Your name has been set, and you have been given access to the rest of the squadron discord!')
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