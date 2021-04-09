const express = require('express');
const multer = require('multer');
const cors = require('cors');
const csv = require('csvtojson')
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();

const Document = require('./models/Document');

const app = express();

app.use(express.json())

const corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));


const uploadFolder = "./uploads";
let fileName = '';

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, uploadFolder);
    },
    filename(req, file = {}, cb) {
        const {originalname: originalName} = file;

        let ogName = originalName.split('.')[0]

        let someNameToSet = 'document'

        const fileExtension = (originalName.match(/\.+[\S]+$/) || [])[0];

        cb(null, `${someNameToSet}${fileExtension}`);
    }
});

const upload = multer({storage});


app.post("/api/document", upload.array('file',1), async function(req, res) {
    const docFileName = req.files[0].filename;
    const docLocalUrl = req.files[0].path;
    fileName = './' + docLocalUrl;
    console.log(fileName);
    // const jsonArr = await csv().fromFile(fileName);
    // console.log(jsonArr);

    const result = await csv({
        noheader:true,
        output: "csv"
    })
    .fromFile(fileName)
    // const anw = result.map(arr => JSON.stringify(arr.filter(x=>x))).filter(item => item.toLowerCase().includes('корзина'))
    const answ = result.map(arr => JSON.stringify(arr.filter(x=>x)));
    // console.log(answ);

    const document  = new Document({data: answ});
    try{
        const savedDocument = await document.save();
        res.json(savedDocument);
    }catch(e){
        res.json({message: e.message});
    }
});

mongoose.connect(process.env.DB_CONNECTION, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }, () => {
        console.log('Connected to db');
    });


app.listen(process.env.PORT || 5002, function () {
    console.log("App listening on", 5002);
});