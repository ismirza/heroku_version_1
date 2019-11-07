const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello Worlds'))
app.listen(port, () => console.log('Testing this out on port 5000'))
