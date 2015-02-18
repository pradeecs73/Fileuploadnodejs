var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('winedb', server);
 
var fs=require('fs');

 
exports.addWine = function(request, response) {
  
   

    var wine = request.body;
    console.log("file name", request.files.file.name);                                           
    console.log("file path", request.files.file.path);  
    console.log("file path", request.files.file); 

    fs.readFile(request.files.file.path, function (err, data) {
        var newPath = "./public/uploads/"+request.files.file.name;
        fs.writeFile(newPath, data, function (err) {
          response.send(newPath);  
        });
    });   


}
 


 

