const fs = require('fs');
const path = require('path');
const pathToFolder = path.join(__dirname, '/files');
fs.mkdir(path.join(__dirname, 'files-copy'),{ recursive: true }, (err)=>{
    if (err) return console.log(err);
});
const pathToNewFolder = path.join(__dirname, '/files-copy');


fs.readdir(pathToNewFolder,{ withFileTypes: true }, (err, files)=>{
    if (err)
    console.log(err);
  else {
    files.forEach(file => {    
      if (file.isFile()){      
        fs.stat(path.join(pathToNewFolder, file.name), (error, stats)=>{
          if (error) {
            console.log(error);
          } else {
            fs.unlink(path.join(pathToNewFolder, file.name), (err)=>{
                if (err) {
                    console.log(err);
                    }
            })          
          }
        });        
      }
    });
    };
});

fs.readdir(pathToFolder,{ withFileTypes: true }, (err, files)=>{
    if (err)
    console.log(err);
  else {
    files.forEach(file => {    
      if (file.isFile()){      
        fs.stat(path.join(pathToFolder, file.name), (error, stats)=>{
          if (error) {
            console.log(error);
          } else {
              fs.copyFile(path.join(pathToFolder, file.name), path.join(pathToNewFolder, file.name), (err)=>{
                if (err)
                console.log(err);
              })           
          }
        });        
      }
    });
    };
});