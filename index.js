import express from 'express'

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.json())

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
    res.render('public/greeting', {name: req.params.name})
})

app.get('/register', (req, res) => {
    console.log(req.query)
    res.send('User added. Hello ' + req.query.name)
})

app.get('/api/greeting', (req, res) => {
    res.send(greetingData)
})

app.post('/api/user', (req, res) => {
    console.log(req.body)
    res.status(201).send({status: 'ok'})
})






app.listen(port, () => console.log('Server listening at ' + port))