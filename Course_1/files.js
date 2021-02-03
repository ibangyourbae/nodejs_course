const fs = require('fs');

// reading files
fs.readFile('./docs/blog.txt', (error, data) => {
    if(error){
        console.log(error);
    }
    console.log(data.toString());
});
// console.log('last line');

// writing fils
fs.writeFile('./docs/blog.txt', 'Hello World',() => {
    console.log('file was written');
});
// fs.writeFile('./docs/blog1.txt', 'Hello World',() => {
//     console.log('file was written');
// });

// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (error) => {
        if(error){
            console.log('error');
        }
        console.log('folder created');
    });

}else {
    fs.rmdir('./assets', (error) => {
        if(error){
            console.log(error);
        }
        console.log('folder deleted');
    })
    
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (error) => {
        if(error){
            console.log(error);
        }
        console.log('file deleted');
    });
};
