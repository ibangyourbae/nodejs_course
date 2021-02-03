const fs = require('fs');

// readstream
const readstream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
// write stream
const writeStream = fs.createWriteStream('./docs/blog4.txt');


// readstream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk)
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// piping
readstream.pipe(writeStream);

