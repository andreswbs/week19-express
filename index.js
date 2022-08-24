import express from 'express'

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));

const port = 8080

function greeting(req, res) {
    res.send('Hello Galaxy')
}

const greetingData = {
    greeting: 'Hello, machine',
    details: 'it is fine evening',
}

app.get('/', greeting)
app.get('/special_greeting/:name', (req, res) => {
    res.render('greeting', {name: req.params.name})
})

app.get('/api/greeting', (req, res) => {
    res.send(greetingData)
})




app.listen(port, () => console.log('Server listening at ' + port))