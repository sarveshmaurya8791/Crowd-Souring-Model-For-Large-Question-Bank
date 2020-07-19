var Cryptr = require('cryptr');
//var express=require("express");
//var app = express();
cryptr = new Cryptr('myTotalySecretKey');
 //app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
   
   connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
				 
			//var query = connection.query(sql, function(err, result) {
    	res.redirect('/profile/'+results[0].id);
    	//});
			//res.render('profile',{email:results[0].email});	
       //res.redirect('/profile/'+results[0].id);
 

  
    	
		 //res.json({
               //   status:true,
                //  message:"Login Successfully"
                // });
            
    	          
    	
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}
module.exports.profile = function(req, res){
	var message = '';
	var id = req.params.id;
    var sql="SELECT * FROM `users` WHERE `id`='"+id+"'"; 
    connection.query(sql, function(err, result){
	  if(result.length <= 0)
	  message = "Profile not found!";
	  
      res.render('profile.ejs',{data:result, message: message});
   }); 
}

