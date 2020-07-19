var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
var path=require('path');
 
//var routes = require('./routes');
var http = require('http');
var busboy = require("then-busboy");
var fileUpload = require('express-fileupload');

 
 
 

var authenticateController=require('./controllers/authenticate-controller');
var authenticateController1=require('./controllers/authenticate-controller1');
var authenticateController2=require('./controllers/authenticate-controller2');
var registerController=require('./controllers/register-controller');
var registerController1=require('./controllers/register-controller1');
var registerController2=require('./controllers/register-controller2');
var registerController3=require('./controllers/register-controller3');
var registerController4=require('./controllers/register-controller4');
var registerController5=require('./controllers/register-controller5');
var registerController6=require('./controllers/register-controller6');
var registerController7=require('./controllers/register-controller7');
var registerController8=require('./controllers/register-controller8');

 app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 8012);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());


app.use(bodyParser.urlencoded({ extended: true }));
app.get('/index2.html',function (req, res){  
   res.sendFile( __dirname + "/" + "index2.html" );  
})  
app.get('/public/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "public/index.html" );  
})  
 
app.get('/public/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "public/login.html" );  
})  
app.get('/public/login1.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "public/login1.html" );  
})  
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/profile/:id',authenticateController.profile); 
app.get('/expertprofile/:id',authenticateController1.expert); 
app.get('/expertprofile1/:id',authenticateController1.expert1);
app.get('/chiefexpertprofile/:id',authenticateController2.chiefexpert); 
app.get('/chiefexpertprofile1/:id',authenticateController2.chiefexpert1); 
app.get('/chiefexpertprofile2/:id',authenticateController2.chiefexpert2); 
app.get('/chiefexpertprofile3/:id',authenticateController2.chiefexpert3); 
// res.render('profile',{name:profile[req.params.id]});
//}) 
 
/* route to handle login and registration */
//app.post('/api/register',registerController.register);
//app.post('/api/register1',registerController1.register1);
//app.post('/api/authenticate',authenticateController.authenticate);
 
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/register-controller1', registerController1.register1);
app.post('/controllers/register-controller2', registerController2.register2);
app.post('/controllers/register-controller3', registerController3.register3);
app.post('/controllers/register-controller4', registerController4.register4);
app.post('/controllers/register-controller5', registerController5.register5);
app.post('/controllers/register-controller6', registerController6.register6);
app.post('/controllers/register-controller7', registerController7.register7);
app.post('/controllers/register-controller8', registerController8.register8);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.post('/controllers/authenticate-controller1', authenticateController1.authenticate1);
app.post('/controllers/authenticate-controller2', authenticateController2.authenticate2);


//app.get('/', routes.index);//call for main index page

//app.post('/', routes.index);//call for signup post
// app.get('/profile/:id',authenticateController.profile);//to render users profile
 
 
app.listen(8012);
