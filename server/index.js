const dogsDB = require("./dbs/dogs.db.js")
// const ownersDB = require("./dbs/owners.db.js")

const express = require('express')
const app = express()
const port = process.env.PORT || 5000


app.get('/api/dog/:id', (req, res) => {
    const dogId = parseInt(req.params.id)
    const dog = dogsDB.find((dog) => dog.id === dogId)
    if (dog) {
        res.send(dog)
    } else {
        res.status(404).send(`Sorry, we cannot find that dog id ${dogId}`)
    }
})

var path = require('path');
var fs = require('fs');
var dir = path.join(__dirname, 'public');


app.get('/api/image/:name', (req, res) => {
    const file = path.join(dir, req.path.replace('\/api','').replace(/\/$/, '/index.html'));
    // if (file.indexOf(dir + path.sep) !== 0) {
    //     return res.status(403).end('Forbidden');
    // }
    // var type = mime[path.extname(file).slice(1)] || 'text/plain';
    res.send(file)
    // const s = fs.createReadStream(file);
    // s.on('open', function () {
    //     res.set('Content-Type', 'image.jpeg');
    //     s.pipe(res);
    // });
    // s.on('error', function () {
    //     res.set('Content-Type', 'text/plain');
    //     res.status(404).end('Not found');
    // });
});



app.listen(port, '127.0.0.1', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
