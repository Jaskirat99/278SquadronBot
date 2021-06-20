module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        if(message.member.roles.cache.has('855212882303123466')){
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.reply("User has been kicked");
            }else{
                message.reply(`You coudn't kick that member!`);
            }
        }  else {
            message.reply("You do not have permission to use this command!")
        }
    }
}