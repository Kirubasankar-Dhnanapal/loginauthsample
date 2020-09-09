var MongoClient = require('mongodb').MongoClient;
var http = require('http');
var url = "mongodb+srv://kirubasankar:Kiruba1995@cluster0.ag5xd.mongodb.net/log_table?retryWrites=true&w=majority";
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3002
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(bodyParser.json())


const options = {
  keepAlive: 1,
  useUnifiedTopology: true,
  useNewUrlParser: true
};


app.get('/login', (req, res) => {
  MongoClient.connect(url, options, function (err, db) {
    if (err) throw err;
    var dbo = db.db("log_table");
    var user = { name : req.query.name,password : req.query.password}
    dbo.collection("user_details").find({}, { name:user.name, password:user.password }).toArray((err, result) => {
      if (err) throw err;
      var resultName = result.filter((re)=>re.name === user.name)
      var resultPassword = result.filter((re)=>re.password === user.password)
      if(resultName.length>0 && resultPassword.length>0){
        res.json({
          success : true
        })
      }else{
        res.status(413).json({
          success : false
        })
      }
    })
  })
})

app.post('/insertdata', (req, res) => {
  MongoClient.connect(url, options, function (err, db) {
    if (err) throw err;
    var dbo = db.db("log_table");
    var userDetails = {  
                   name: req.body.name, 
                   password: req.body.password,
                   email : req.body.email,
                  firstname : req.body.firstname,
                  lastname : req.body.lastname,
                   gender : req.body.gender,
                  country: req.body.country};
    dbo.collection("user_details").insertOne(userDetails, function (err, result) {
      if (err) {
        err;
      } else {
        dbo.collection("user_details").find({}).toArray((err, result) => {
          return res.status(200).json({
            success: true,
            message: "Successfully Registred"
          });
        })
      }
    })
  })
})


app.post('/checkrouting',(req,res,next)=>{
  return authAdmin(req,res,next)
})

function authAdmin(req,res,next){
  if(req.body.role === 'Admin'){
    console.log('U are an admin')
  }else{
    res.json({ isAdmin : 'Not Allowed'})
  }
}

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
