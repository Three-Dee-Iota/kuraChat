const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

function getUserMessageData(dirname, onFileContent, onError) {
    fs.readdir(dirname, (err, filenames) => {
        if (err) {
            onError(err)
            return
        }
        filenames.forEach((filename) => {
            fs.readFile(dirname + filename, "utf-8", (err, content) => {
                if (err) {
                    return
                }
                onFileContent(filename, content)
            })
        })
    })    
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* POST for sign in */
router.post('/signin', function(req, res) {
    // Reading from user file
    console.log(req.headers.cookie)
    fs.readFile(path.resolve(__dirname, `../ufs/${req.body.username}`), "utf-8", (err, data) => {
        // User does not exist
        if (err) {
            console.log("User", req.body.username, "not found")
            res.send("User not found")
            return
        }

        // User exists, checking if passwords match
        const pom = JSON.parse(data)
        if (req.body.password === pom.password) {
            // Passwords match, rendering user page
            res.send('Successful signin')
            return
            getUserMessageData(path.resolve(__dirname, `../mfs/${req.body.username}/`), (filename, content) => {
                msgData.push(JSON.parse(content))
            }, (err) => {
                throw err
            })
            res.render("chat", {msgData})
        }
        else {
            // Passwords don't match, sending error
            res.send('Incorrect username or password')
        }
    })
})

/* POST for sign up */
router.post('/signup', function (req, res) {
    // Open a new file for writing new user information
    // If it exists, fail
    fs.open(path.resolve(__dirname, `../ufs/${req.body.username}`), 'wx', (err, fd) => {
        if (err) {
            // User already exists
            if (err.code === 'EEXIST') {
                console.log("User", req.body.username, "already exists")
                res.send('User already exists')
                return
            } 
            // Unknown error
            else throw err
        }

        // Writing user information to file
        fs.write(fd, JSON.stringify(req.body), (err, written, string) => {
            console.log("Writing to file", req.body.username)
            if (err) throw err
        })

        // Closing file
        fs.close(fd, (err) => {
            console.log("Closing file", req.body.username)
            if (err) throw err
        })

        // Successful signup
        res.send('Signup successful')
    })
})

// router.get('/sw.js', function (req, res) {
//     console.log("Trazi bata sw.js")
//     res.send("mrs")
// })

module.exports = router;
