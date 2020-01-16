const express = require('express');
const app = express();
const fs = require('fs');
const unzipper = require('unzipper');
const multer = require('multer');
const archiver = require('archiver');


const upload = multer({
  limits: {
    fieldSize: 25 * 1024 * 1024
  }
});

const zipfiles = async () => new Promise((resolve, reject) => {
  const output = fs.createWriteStream('public/output/studio-template.studio');
  const archive = archiver('zip', { store: true });

  output.on('close', () => resolve()
    // .then(() => {
    // var url = "http://i.imgur.com/G9bDaPH.jpg"

    // var options = {
    //   directory: "./images/cats/",
    //   filename: "cat.gif"
    // }

    // download(url, options, function (err) {
    //   if (err) throw err
    //   console.log("meow")
    // })
    // })
  );
  
  archive.on('error', (e) => reject(e));
  archive.pipe(output);
  archive.directory('public/creationDir', '/');
  archive.finalize();

});


const writeFiles = (req, state) => {
  const psd = JSON.parse(req.body.ori);
  // const tempData = JSON.parse(req.body.template);
  fs.writeFileSync('public/creationDir/studio-template.psd', Buffer.from(psd));
  // comment deze line uit om de originele state.json te behouden
  fs.writeFileSync('public/creationDir/state.json', Buffer.from(state));

  let metaData = {
    "PSD": "studio-template.psd",
    "studioFileVersion": 1,
    "name": "template"
  }

  let data = JSON.stringify(metaData);
  fs.writeFileSync('public/creationDir/meta.json', data);
  
  zipfiles();
}

const readFiles = (path, req) => {
  const fileReader = fs.createReadStream(path)
    .pipe(unzipper.Extract({ path: 'public/input/' }));

  fileReader.on('finish', () => {
    const template = req.body.template;
    let statePath = '';
    if (template === 'Frame') {
      statePath = 'public/input/stateFrame.json';
    } else if (template === 'Product') {
      statePath = 'public/input/stateProduct.json';
    } else {
      statePath = 'public/input/stateMessage.json';
    }
    const rawStateData = fs.readFileSync(statePath);
    writeFiles(req, rawStateData);
  })
}

app.post('/readOriPsd', (req, res) => {
  res.connection.setTimeout(0);
  const readPSD = () => {
    const buffer = fs.readFileSync('public/originalPSD.psd');
    res.json(buffer);
  }
  readPSD();
});

app.post('/writeNewFile', upload.none(), function (req, res, next) {
  res.connection.setTimeout(0);
  readFiles('public/input/studioFile.studio', req);
})

app.get('/downloadFile/', (req, res) => {
  res.download('./public/output/studio-template.studio');
})

app.use(express.static('readOriPsd'));
app.use(express.static('writeNewFile'));
app.use(express.static('build'));
app.use(express.static('tmp'));

const server = app.listen(process.env.PORT || 3000, () => {
  console.info(`Server listening at ${server.address().port}`);
});
