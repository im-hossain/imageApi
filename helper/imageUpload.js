const path = require('path')
const multer = require("multer");

//storage gives us options to state the destination path and also modify the filename
const storage = multer.diskStorage({
    // destination path
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    // filename
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf() +
            '_' +
            file.originalname);
    }
});

//here we are passing the storage that is already created, the limits of the filesize, and the desired filetypes
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }, //1000000=1MB
    fileFilter: function fileFilter(req, file, cb) {
        // Allowed ext
        const filetypes = /jpeg|jpg|png|gif/;
        // Check ext
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        // Check mime
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    }
}).single("file");//params in the single represents 

module.exports = upload