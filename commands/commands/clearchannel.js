module.exports = {
    commands: ['clearchannel', 'cc'],
    description: "Clear's all messages in a channel (ADMIN ONLY)",
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
      
    
                message.channel.messages.fetch().then((results) =>{
                message.channel.bulkDelete(results)
            })
            
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
  }