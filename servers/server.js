const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const route = require('./routes/index');

// DB setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once('open', function(){
  console.log('DB connected');
});
db.on('error', function(err){
  console.log('DB ERROR : ', err);
});

// app.use(cors());
// Because of body parser, we can use => res.json({'example': example})
app.use(bodyParser.json());
app.use('/api', route);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
})
