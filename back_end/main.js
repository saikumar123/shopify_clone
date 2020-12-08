const cors = require("cors");
const express = require('express')
const app = express()
const connection = require('./database_connection');
const user_schema = require("./user_schema");
const mongoose = require("mongoose");

const port = 4000
app.use(cors())
connection();

app.get('/', (req, res) => {
  
    res.send('Hello World!')

})

app.post('/api/login',cors(), (req, res) => {
    
  
    

    const schema = user_schema();
    const contract = mongoose.model('users', schema);
    console.log(contract);
    var users = new contract();
    users.save({
        "email":"xyz",
        "password":"123"
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