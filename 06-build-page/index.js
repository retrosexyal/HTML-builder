const fs = require('fs');
const path = require('path');
const pathToFolder = path.join(__dirname, '/styles');
const pathToNewFolder = path.join(__dirname, '/project-dist');
const pathToAssets = path.join(__dirname, '/assets');

fs.mkdir(path.join(__dirname, 'project-dist'),{ recursive: true }, (err)=>{
    if (err) return console.log(err);
});

fs.open(path.join(__dirname , '/project-dist/style.css'), 'w', (err) => {
    if(err) throw err;
  });
  fs.readdir(pathToFolder,{ withFileTypes: true }, (err, files)=>{
      if (err)
      console.log(err);
    else {
      files.forEach(file => {
        if (path.extname(file.name) == '.css'){      
          fs.readFile(path.join(pathToFolder, file.name), 'utf-8', (err, data)=>{
            if (err){
              console.log(err);
              return;
            } else{
              fs.appendFile(path.join(__dirname , '/project-dist/style.css'), data, (err)=>{
                if(err) throw err;
            });
            };
          });      
        };
      });
      };
  });

  
fs.readdir(pathToAssets,{ withFileTypes: true }, (err, files)=>{
    if (err)
    console.log(err);
  else {
      
    files.forEach(file => {   
      if (file.isDirectory()){
              fs.mkdir(path.join(__dirname, '/project-dist', file.name),{ recursive: true }, (err)=>{
                if (err) return console.log(err);
            });
            const pathToAssetsFolder = path.join(pathToAssets, file.name);
            const folderName = file.name;

            fs.readdir(pathToAssetsFolder,{ withFileTypes: true }, (err, files)=>{
                this.files = files;
                if (err)
                console.log(err);
              else {
                files.forEach(file => {    
                  if (file.isFile()){      
                    fs.stat(path.join(pathToAssetsFolder, file.name), (error, stats)=>{
                      if (error) {
                        console.log(error);
                      } else {
                          fs.copyFile(path.join(pathToAssetsFolder, file.name), path.join(pathToNewFolder, folderName, file.name), (err)=>{
                            if (err)
                            console.log(err);
                          })           
                      }
                    });        
                  }
                });
                };
            });     
      }
    });
    };
});


