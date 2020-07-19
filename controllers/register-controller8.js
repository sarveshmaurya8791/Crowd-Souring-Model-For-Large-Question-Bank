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
 


module.exports.register8=function(req,res){
   // var today = new Date();
  
	var id=req.body.id;
  //  var expert_id=req.body.expert_id;	
	//var user_id = req.body.user_id;
	var n=req.body.n;
	var aq=req.body.aq;
   // var img_name=req.body.image;
  //var users_submit={
	  // "question":req.body.question,
      //  "created_at":today,
      //  "updated_at":today,
		//"user_id":user_id,
		//"expert_id":expert_id,
		//"image":img_name,
		//"o1":req.body.o1,
		//"o2":req.body.o2,
       // "o3":req.body.o3,
       // "o4":req.body.o4,
       // "correct":req.body.correct 
		 
   // }
  
 
 var message = '';
 var message1 = '';
 var arr = [];
      for(var i = 0;i<n;i++)
	  {
           arr[i] = Math.floor(Math.random() * aq) + 0;
		    for(var j = 0;j<i;j++)
	  {
		  if(arr[i]==arr[j])
		  {
			  i--;
		  }
	  }
		   
	  }   
	 var sql1="SELECT users_submit.*, users.* FROM users_submit, users WHERE  users.id='"+id+"'";
		//var sql1="SELECT * FROM `users_submit` WHERE id >= (SELECT FLOOR( MAX(id) * RAND()) FROM `users_submit` ) ORDER BY id LIMIT 1";
		//var i=7;
	//var sql1="SELECT * from users_submit";
	 //var sql="SELECT * FROM `users` WHERE `id`='"+id+"'"; 
//var sql1=	"SELECT * FROM 'users_submit' ORDER BY rand()  LIMIT 5" ;
	//var sql1="SELECT * FROM users_submit  ORDER BY RAND ( )  LIMIT='"+n+"'";

	
	connection.query(sql1, function (error, results) {
      if (error) {
        res.send('<script>alert("Error with database!")</script>')
	 }else{
		 if(results.length <= 0)
          message="  No Freezed Questions Are  Available For Setting Question Paper!";
	     if(n>results.length)
			 message1=" Given no. of questions are not available in the Question Bank!";
		
	
	 // results[0].n=n;
	   
      res.render('chiefexpert4.ejs',{data:results,arr:arr,message: message,message1: message1});
	//res.render('chiefexpert4.ejs',{data:results});
		 //res.redirect('/chiefexpertprofile4/'+id);
		
      }
    });
	
	
}

