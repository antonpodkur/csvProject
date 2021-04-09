const express = require('express');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json())

// var corsMiddleware = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

//     next();
// }

// app.use(corsMiddleware);

// app.use(express.json());

// app.use(cors());

// const allowedOrigins = ["http://localhost:5002", "http://localhost:8080"];
// const allowedOrigins = ["*"];


// app.use(
//     cors({
//         origin: function (origin, callback) {
//             // allow requests with no origin
//             // (like mobile apps or curl requests)
//             if (!origin) return callback(null, true);
//             if (allowedOrigins.indexOf(origin) === -1) {
//                 let msg =
//                     "The CORS policy for this site does not " +
//                     "allow access from the specified Origin.";
//                 return callback(new Error(msg), false);
//             }
//             return callback(null, true);
//         }
//     })
// );


// app.use(function (req, res, next) {
//     let origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//         res.header("Access-Control-Allow-Origin", origin); // restrict it to the required domain
//     }

//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

// app.use((req,res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if(req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         res.status(200).json({});
//     }
//     next();
// });

const corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));


const uploadFolder = "./uploads";

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, uploadFolder);
    },
    filename(req, file = {}, cb) {
        const {originalname: originalName} = file;

        let ogName = originalName.split('.')[0]

        let someNameToSet = JSON.parse(req.body.storeName)

        const fileExtension = (originalName.match(/\.+[\S]+$/) || [])[0];

        cb(null, `${someNameToSet}${fileExtension}`);
    }
});

const upload = multer({storage});


// app.get("/document", (req,res) => {
//     res.send("<h2>Привет Express!</h2>");
// });


app.post("/document", upload.array('file',1), async function(req, res) {
    const docFileName = req.files[0].filename;
    const docLocalUrl = req.files[0].path;
})

app.post("/document", (req, res) => {
    res.send("<h2>Sucess</h2>")
})



app.listen(process.env.PORT || 5002, function () {
    console.log("App listening on", 5002);
});