module.exports = {
commands: 'ban',
description: "Ban's a specified member (ADMIN ONLY)",
expectedArgs: '<user>',
permissionError: 'You need admin permissions to run this command',
minArgs: 1,
maxArgs: 1,
callback: (message, Discord) => {
  const { member, mentions } = message

  const tag = `<@${member.id}>`

  if (
    member.hasPermission('ADMINISTRATOR') ||
    member.hasPermission('BAN_MEMBERS')
  ) {
    const target = mentions.users.first()
    if (target) {
      const targetMember = message.guild.members.cache.get(target.id)
      targetMember.ban()
      message.channel.send(`${tag} That user has been banned`)
    } else {
      message.channel.send(`${tag} Please specify someone to ban.`)
    }
  } else {
    message.channel.send(
      `${tag} You do not have permission to use this command.`
    )
  }

},
permissions: 'ADMINISTRATOR',
requiredRoles: [],
}