const dogsDB = require("./dbs/dogs.db.js")
var path = require('path');
var fs = require('fs');

const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static("../client/dist"))
app.use('/images', express.static("images"))

app.get('/', (req, res) => {
    res.send("hello world")
})



app.get('/api/dog/:id?', (req, res) => {
    const dogId = parseInt(req.params.id)
    if (dogId) {
        const dog = dogsDB.find((dog) => dog.id === dogId)
        if (dog) {
            res.send(dog)
        } else {
            res.status(404).send(`Sorry, we cannot find that dog id ${dogId}`)
        }
    } else {
        res.send(dogsDB)
    }
})


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



app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
