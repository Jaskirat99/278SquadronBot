const mongoose = require('mongoose')
//const { mongoPath } = require('./config.json')

const mongoPath = 'mongodb+srv://jaskirat:dv9kkKD3do8XC1fX@cluster0.jf1od.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}