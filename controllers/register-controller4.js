var Cryptr = require('cryptr');
var express=require("express");
var app = express();
var path=require('path');
var busboy = require("then-busboy");
var fileUpload = require('express-fileupload');
var connection = require('./../config');

app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
// cryptr = new Cryptr('myTotalySecretKey');
 


module.exports.register4=function(req,res){
    var today = new Date();
  
	var id1=req.body.id1;
    var expert_id=req.body.expert_id;	
	var user_id = req.body.user_id;
	var choice=req.body.choice;
    var img_name=req.body.image1;
  var users_final={
	   "question":req.body.question,
        "created_at":today,
        "updated_at":today,
		"user_id":user_id,
		"expert_id":expert_id,
		"image1":img_name,
		"o1":req.body.o1,
		"o2":req.body.o2,
        "o3":req.body.o3,
        "o4":req.body.o4,
        "correct":req.body.correct 
		 
    }
  
 
	
		  
		  if(choice!=1)
		  {
	var sql1="DELETE FROM users_question WHERE users_question.id1='"+id1+"'";		
	connection.query(sql1, function (error, results) {
      if (error) {
        res.send('<script>alert("Error with database!")</script>')
	 }else{
       
	
		 res.redirect('/chiefexpertprofile1/'+expert_id);
		
      }
    });
	}
	if(choice==1)
	{
		var sql1="DELETE FROM users_question WHERE users_question.id1='"+id1+"'";		
	connection.query(sql1, function (error, results) {
      if (error) {
        res.send('<script>alert("Error with database!")</script>')
	 }
    });
    connection.query('INSERT INTO users_final SET ?',users_final, function (error, results, fields) {
      if (error) {
        res.send('<script>alert("Error with database!")</script>')
	
      }else{
       
	
		 res.redirect('/chiefexpertprofile1/'+expert_id);
		
      }
    });
}
}
