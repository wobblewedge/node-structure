const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res)=>res.send('App is working.'))

app.use('/api', routes)

app.listen(3000, ()=>console.log('Port 3000'))

module.exports={
    app
}