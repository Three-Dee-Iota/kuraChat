const express = require('express');
const router = express.Router();

const messages = [
    {
        uid: "tebrex",
        timestamp: "04:20pm",
        message: "Ovo je kao neki message valjda nez"
    },
    {
        uid: "uptar",
        timestamp: "09:23am",
        message: "eeee onjooo, zmo cmo 2 msoo"
    },
    {
        uid: "geerizzle",
        timestamp: "06:09pm",
        message: "uzmem zgranem"
    },
    {
        uid: "mama",
        timestamp: "04:20pm",
        message: "picko jedna dobis batina"
    },
    {
        uid: "geerizzle",
        timestamp: "06:09pm",
        message: "uzmem zgranem"
    },
    {
        uid: "geerizzle",
        timestamp: "06:09pm",
        message: "uzmem zgranem"
    },
    {
        uid: "geerizzle",
        timestamp: "06:09pm",
        message: "uzmem zgranem"
    },
    {
        uid: "geerizzle",
        timestamp: "06:09pm",
        message: "uzmem zgranem"
    }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
        res.render('chat', {messages});
});

module.exports = router;
