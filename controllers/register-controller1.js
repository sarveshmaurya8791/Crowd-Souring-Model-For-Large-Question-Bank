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
 


module.exports.register1=function(req,res){
    var today = new Date();
  
  if (!req.files)
		return res.status(400).send('No files were uploaded.');
    var id1=req.body.id1;	
	var file = req.files.image1;
    var img_name=file.name;
  var users_question={
	   "question":req.body.question,
        "created_at":today,
        "updated_at":today,
		"user_id":id1,
		"image1":img_name,
		"o1":req.body.o1,
		"o2":req.body.o2,
        "o3":req.body.o3,
        "o4":req.body.o4,
        "correct":req.body.correct 
		 
    }
  
 
	if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                 
              file.mv("public/images/upload_images1/"+file.name, function(err) {
                             
	              if (err)
 
	                return res.status(500).send(err);
	        	  
  
			  });

	}
	 else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
            res.render({message: message});
          }
		
					
    connection.query('INSERT INTO users_question SET ?',users_question, function (error, results, fields) {
      if (error) {
        res.send('<script>alert("Error with database!")</script>')
	
      }else{
       
	
		 res.redirect('/profile/'+id1);
		
      }
    });
}
