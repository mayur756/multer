const multer=require('multer');

const storge=multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads');
    },
    filename: function(req, file, cb){
        cb(null, Date.now()  + file.originalname);
    }
})

const upload=multer({
    storge:storge
})

module.exports=upload;