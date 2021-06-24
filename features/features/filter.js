module.exports = (client) => {

client.on('message', async(msg) => {
  if(msg.author.bot) return;
  if(!msg.guild) return;

  const array = ['fuck', 'shit']

    if(array.some(word => ` ${msg.content.toLowerCase()}`.includes(` ${word}`))){
      msg.author.send('You can not use explicit language in the Squadron Discord. This incident has been logged and is a warning. Further violations will lead to disciplinary action')
      msg.delete();

    }
  
});
}