const dogsDB = require("./dbs/dogs.db.js")
const ownersDB = require("./dbs/owners.db.js")

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
app.get('/api/owner/:id', (req, res) => {
    const ownerId = parseInt(req.params.id)
    const owner = ownersDB.find((owner) => owner.id === ownerId)
    if (owner) {
        res.send(owner)
    } else {
        res.status(404).send(`Sorry, we cannot find that dog id ${ownerId}`)
    }
})
app.get('/api/image/:name', (req, res) => {
    const dogName = req.params.name;
    res.send(`${dogName}.jpg`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
