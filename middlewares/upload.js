const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const uploadFile = (req, res, next) => {
    var fileName = uuidv4();
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'public/files')
        },
        filename: function (req, file, cb) {
            cb(null, fileName + file.originalname)
        }
    })
    var upload = multer({ storage: storage });
    console.log(req.body)
    return upload.any()(req, res, next)
}


module.exports = {
    uploadFile
}