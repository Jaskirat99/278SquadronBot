module.exports = {
commands: 'kick',
expectedArgs: '<user>',
permissionError: 'You need admin permissions to run this command',
minArgs: 1,
maxArgs: 1,
callback: (message, Discord) => {
  const { member, mentions } = message

  const tag = `<@${member.id}>`

  if (
    member.hasPermission('ADMINISTRATOR') ||
    member.hasPermission('KICK_MEMBERS')
  ) {
    const target = mentions.users.first()
    if (target) {
      const targetMember = message.guild.members.cache.get(target.id)
      targetMember.kick()
      message.channel.send(`${tag} That user has kicked`)
    } else {
      message.channel.send(`${tag} Please specify someone to kick.`)
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