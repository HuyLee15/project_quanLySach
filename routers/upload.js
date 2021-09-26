const express = require('express');
const multer = require('multer');
const path = require("path");
const uploadController = require('../controllers/uploadController');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
        const userId = 'Felix';
        cb(null, userId + "_" + file.originalname);
    },
});

const upload = multer({ storage: storage }).single('file');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('upload');
})

router.route('/uploads').post(upload, uploadController.upload), uploadController.upload;


module.exports = router;