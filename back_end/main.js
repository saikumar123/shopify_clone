const cors = require("cors");
const express = require('express')
const app = express()
const connection = require('./database_connection');
const user_schema = require("./user_schema");
var mongoose = require('mongoose');
var User = require('./user_model.js');
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()

const port = 4000
app.use(cors())
connection();

app.get('/', (req, res) => {
  
    res.send('Hello World!')

})

app.post('/api/login',cors(), jsonParser, (req, res) => {


  //console.log("this is log -- " , req.body);
 // mongoose.connect('mongodb://localhost:27017/shopify_db');
  var new_user = new User({
      name:req.body.name
    , email: req.body.email
    , password: req.body.password
    , phone: req.body.phone
    , _enabled:false 
  });

  new_user.save(function(err){
    if(err) console.log(err); 
  });


   // if(req.body.email == 'hello_world@gmail.com' && req.body.password == '123456') {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Connecting to Login-mongodb!')
  //  } else {
    //    console.log("userid/password doesnt match");
   // }
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})