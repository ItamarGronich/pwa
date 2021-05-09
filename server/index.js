const express = require('express')
const app = express()
const port = 5000


const fakeDogDb = [
    { id: 1, name: 'fluff', image: "n02107683_5751.jpeg" },
]

const ownersDb = [
    
]


app.get('/api/dog/:id', (req, res) => {
    const dogId = req.params.id
    const dog = fakeDogDb[dogId]
    if (dog) {
        res.send(dog)
    } else {
        res.status(404).send('Sorry, we cannot find that!')
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
