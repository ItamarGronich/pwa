const dogsDB = require("./dbs/dogs.db.js")
const ownersDB = require("./dbs/dogs.db.js")

const express = require('express')
const app = express()
const port = 5000


app.get('/api/dog/:id', (req, res) => {
    const dogId = parseInt(req.params.id)
    const dog = dogsDB.find((dog) => dog.id === dogId)
    if (dog) {
        res.send(dog)
    } else {
        res.status(404).send(`Sorry, we cannot find that dog id ${dogId}`)
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
