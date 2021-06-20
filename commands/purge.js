module.exports = {
    name: 'purge',
    description: "This command clears specified number of messages!",
    async execute(message, args){
        if(message.member.roles.cache.has('855212882303123466')){
            if(!args[0]) return message.reply("Please enter the amount of messages that you want to purge!");
            if(isNaN(args[0])) return message.reply("Please enter a real number!");

            if(args[0] > 100) return message.reply("You cannot delete nore than 100 messages!");
            if(args[0] < 1) return message.reply("You must delete atleast one message!");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            });
        } else {
            message.reply("You do not have permission to use this command!")
        }
    }
}