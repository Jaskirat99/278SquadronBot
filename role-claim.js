module.exports =  {
      async execute(client, message, args, Discord) {
      const channel = '855228212561051658';
      const avenger = message.guild.roles.cache.find(role => role.name === "Avenger Flight");
      const griffon = message.guild.roles.cache.find(role => role.name === "Griffon Flight");
      const cyclone = message.guild.roles.cache.find(role => role.name === "Cyclone Flight");
      const polaris = message.guild.roles.cache.find(role => role.name === "Polaris Flight");
      const phantom = message.guild.roles.cache.find(role => role.name === "Phantom Flight");

      const avengerEmoji = '1️⃣';
      const griffonEmoji = '2️⃣';
      const cycloneEmoji = '3️⃣';
      const polarisEmoji = '4️⃣';
      const phantomEmoji = '5️⃣';

      let embed = new Discord.MessageEmbed()
          .setColor('#FFD700')
          .setTitle('Select your Flight!')
          .setDescription('Selecting a flight will allow you to gain access to your flight rooms!\n\n'
              + `${avengerEmoji} for Avenger Flight\n`
              + `${griffonEmoji} for Griffon Flight\n`
              + `${cycloneEmoji} for Cyclone Flight\n`
              + `${polarisEmoji} for Polaris Flight\n`
              + `${phantomEmoji} for Phantom Flight`);

      let messageEmbed = await message.channel.send(embed);
      messageEmbed.react(avengerEmoji);
      messageEmbed.react(griffonEmoji);
      messageEmbed.react(cycloneEmoji);
      messageEmbed.react(polarisEmoji);
      messageEmbed.react(phantomEmoji);

      client.on('messageReactionAdd', async (reaction, user) => {
          if (reaction.message.partial) await reaction.message.fetch();
          if (reaction.partial) await reaction.fetch();
          if (user.bot) return;
          if (!reaction.message.guild) return;

          if (reaction.message.channel.id == channel) {
              if (reaction.emoji.name === avengerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(avenger);
              }
              if (reaction.emoji.name === griffonEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.add(griffon);
              }
              if (reaction.emoji.name === cycloneEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.add(cyclone);
              }
              if (reaction.emoji.name === polarisEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(polaris);
              }
              if (reaction.emoji.name === phantomEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(phantom);
        }
          } else {
              return;
          }

      });

      client.on('messageReactionRemove', async (reaction, user) => {

          if (reaction.message.partial) await reaction.message.fetch();
          if (reaction.partial) await reaction.fetch();
          if (user.bot) return;
          if (!reaction.message.guild) return;


          if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === avengerEmoji) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(avenger);
            }
            if (reaction.emoji.name === griffonEmoji) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(griffon);
            }
            if (reaction.emoji.name === cycloneEmoji) {
               await reaction.message.guild.members.cache.get(user.id).roles.remove(cyclone);
            }
            if (reaction.emoji.name === polarisEmoji) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(polaris);
            }
            if (reaction.emoji.name === phantomEmoji) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(phantom);
    }
          } else {
              return;
          }
      });
  }

}