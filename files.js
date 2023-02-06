const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) console.log(err);
  console.log(data.toString());
});

console.log('last line');

// Writing Files
fs.writeFile('./docs/blog1.txt', 'Hey there', () => {
  console.log('FIle was written');
})

fs.writeFile('./docs/blog2.txt', 'Wassaaaaap', () => {
  console.log('FIle was written');
})

// Directories
if(!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) console.log(err);
    console.log('folder made');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if(err) console.log(err);
    console.log('folder deleted');
  })
}

// Deleting Files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) console.log(err);
    console.log('file deleted');
  })
}