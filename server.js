var express = require('express'),
    wine = require('./routes/wines');
    register = require('./routes/register');
    scope = require('./routes/scopeofwork');
    tools = require('./routes/tools');
    industry=require('./routes/industry');
    functionality = require('./routes/functionality');
    profile = require('./routes/postprofile');
    beducation = require('./routes/beducation');
    peducation = require('./routes/peducation');
    resume = require('./routes/resume');
    upload= require('./routes/upload');
    tech= require('./routes/tech');
    company= require('./routes/company');
    

var app = express();
app.set("jsonp callback", true);

var mongo=require('mongodb');
var gridstore=mongo.GridStore;
var fs=require('fs');
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 

app.post('/wines', wine.addWine);
app.get('/wines', wine.findAll);

app.post('/register', register.addWine);
app.get('/register', register.findAll);

app.post('/scopeofwork', scope.addWine);
app.get('/scopeofwork', scope.findAll);

app.post('/tools', tools.addWine);
app.get('/tools', tools.findAll);

app.post('/industry', industry.addWine);
app.get('/industry', industry.findAll);

app.post('/functionality', functionality.addWine);
app.get('/functionality', functionality.findAll);


app.post('/postprofile', profile.addWine);
app.get('/postprofile', profile.findAll);

app.post('/beducation', beducation.addWine);
app.get('/beducation', beducation.findAll);


app.post('/peducation', peducation.addWine);
app.get('/peducation', peducation.findAll);


app.post('/technology', tech.addWine);
app.get('/technology', tech.findAll);

app.post('/resume', resume.addWine);


app.post('/company', company.addWine);
app.get('/company', company.findAll);



app.use(express.bodyParser({uploadDir:'./public/uploads/'}));


app.post("/upload", function (request, response) { 
                                                                                                           
    console.log("file name", request.files.file.name);                                           
    console.log("file path", request.files.file.path);  
     console.log("file path", request.files.file);  
      console.log(request.files.file.size);

   var tmp_path = request.files.file.path;

 

  //  var target_path = './public/uploads/' + request.files.file.name;

  
      fs.readFile(request.files.file.path, function (err, data) {
        var newPath = "./public/uploads/"+request.files.file.name;
        fs.writeFile(newPath, data, function (err) {
          response.send("hi");  
        });
    });


   /*fs.rename(tmp_path, target_path, function(err) {
        if (err) throw err;
        fs.unlink(tmp_path, function() {
            if (err) throw err;
            response.send(target_path);
            
        });
    });*/
                                           

     console.log("file path new", request.files.file.path);  

  
                                                                 
});





app.get('/upload', upload.findAll);



 
app.listen(3000);
console.log('Listening on port 3000...');
