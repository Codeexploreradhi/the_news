const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://godgun1507:1504Appu1504@newsapp.vgyx1qx.mongodb.net/Data',{
  useUnifiedTopology : true,
  useNewUrlParser: true,
}).then(console.log('connected to mongo db!'))