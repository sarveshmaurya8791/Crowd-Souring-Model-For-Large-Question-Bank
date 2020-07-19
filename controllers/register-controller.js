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
 


module.exports.register=function(req,res){
    var today = new Date();
  var encryptedString = cryptr.encrypt(req.body.password);
  if (!req.files)
		return res.status(400).send('No files were uploaded.');
	
	var file = req.files.image;
    var img_name=file.name;
  var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":encryptedString,
        "created_at":today,
        "updated_at":today,
		"dob":req.body.dob,
		"gender":req.body.gender,
		"mob":req.body.mob,
	    "image":img_name
    }
  
 
	if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                 
              file.mv("public/images/upload_images/"+file.name, function(err) {
                             
	              if (err)
 
	                return res.status(500).send(err);
	        	  
  
			  });

	}
	 else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
           // res.render({message: message});
          }
		
					
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.send('<script>alert("Error with database!")</script>')
	
      }else{
       
	 
		 res.redirect('/index2.html');
		
      }
    });
}
