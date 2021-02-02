const fs = require('fs');

// LÄSA FILER

// fs.readFile('./mapp/text.txt', 'utf8', (err, data) => {
//   if(err)
//     console.log(err)

//   // console.log(data.toString())
//   console.log(data)
// })
// console.log('Det här ligger efter')


// SKRIVA FILER

// skriver till en fil
// fs.writeFile('./mapp/text.txt', 'Ny text.', () => {
//   console.log('Ändrade på texten')
// })

// lägger till i en fil
// fs.appendFile('./mapp/text.txt', ' Det här är text som vi har lagt till', () => {
//   console.log('la till text')
// })

// skriva till en ny fil
// fs.writeFile('./mapp/text3.txt', 'En ny fil.', () => {
//   console.log('skrev till filen');
// })


// DÖPA OM EN FIL
/* fs.rename('./mapp/text3.txt', './mapp/text2.txt', err => {
  if(err)
    console.log(err);

  console.log('Bytte namn på filen');
}) */
/* if(!fs.existsSync('./nymapp')) {  //lägg till mapp
  fs.mkdir('./nymapp', (err) => {
    if (err)
    console.log(err)

  console.log('mapp skapad')
  })
} else {
  fs.rmdir('./nymapp', err => {  //ta bort mapp
    if (err) 
      console.log(err)
    
      console.log('mappen fanns redan, så jag tog bort den');
  })

} */
  

/* if(fs.existsSync('./mapp/text2.txt')) {

  fs.unlink('./mapp/text2.txt', err =>{
    if (err)
    console.log(err)

    console.log('Tar bort filen');
  })
} */


const path = require('path');
const { createBrotliCompress } = require('zlib');

/* fs.appendFile(path.join(__dirname, 'mapp', 'text.txt'), 'nu lägger vi till text..... igen.....', () =>{
  console.log('lade till text.... igen...')
}) */


                                      // LÄSA / SKRIVA STORA FILER / STREAMS

  // __dirname söker från grundmappen, alltså c:\user\larsj

const readStream = fs.createReadStream(path.join(__dirname, 'mapp', 'stor.txt'), {encoding: 'UTF8'});
const writeStream = fs.createWriteStream(path.join(__dirname, 'mapp', 'stor2.txt'))

// readStream.on('data', buffer => {
// /*   console.log('--------------------------------------------------------------- NY DATA ------------------------------------------------------------------');
//   // console.log(buffer.toString);
//   console.log(buffer); */

//   writeStream.write('\n --------------------------------------------------------------- NY DATA ------------------------------------------------------------- \n')
//   writeStream.write(buffer);
//   console.log('skrev en bit till filen');
// })

// readStream.pipe(writeStream);