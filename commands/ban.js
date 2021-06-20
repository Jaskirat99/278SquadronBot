module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        if(message.member.roles.cache.has('855212882303123466')){
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.bans();
                message.reply("User has been banned");
            }else{
                message.reply(`You coudn't ban that member!`);
            } 
        }  else {
            message.reply("You do not have permission to use this command!")
        }
    }
}