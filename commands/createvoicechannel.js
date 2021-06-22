module.exports = {
    commands: 'createvoicechannel',
    expectedArgs: '<name>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {
        const name = message.content.replace('.createvoicechannel ', '')
    
         if(message.member.hasPermission('ADMINISTRATOR')) {
         message.guild.channels
           .create(name, {
             type: 'voice',
           })
           .then((channel) => {
             const categoryId = '855211234889564191'
             channel.setParent(categoryId)
           })
        }
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
  }