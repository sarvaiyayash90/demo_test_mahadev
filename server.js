var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
const path = require('path');


var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
require("dotenv").config();

app.get('/',(req,res)=>{
    res.send("backend site host")
})

app.post('/Login', (req, res) => {
    //console.log(req.body);
    data_email_id = "yash@gmail.com"
    data_password = "yash"

    if(req.body.email_id && req.body.password)
    {
        if(data_email_id == req.body.email_id && data_password == req.body.password)
        {
            res.status(200).send({
                session:req.body.email_id,
                message:"Login successfully"
            })
        }
        else
        {
            res.status(404).send({err_msg:"Incorrect Username and/or Password!"})
        }
        res.end()
    }
    else{
        console.log("user not found");
    }
})

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','build','index.html'));
  });
}

app.listen(process.env.PORT || 3200, () => { console.log("\n \t\t\t < Server Started At Port : (3200) > \n ") });
