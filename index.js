import express from 'express'

const app = express()

const port = 8080

function greeting(req, res) {
    res.send('Hello World')
}

const greetingData = {
    greeting: 'Hello, machine'
}

app.get('/', greeting)

app.get('/special_greeting/:name', (req, res) => {
    res.send('Special greeting, ' + req.params.name)
})

app.get('/api/greeting', (req, res) => {
    res.send(greetingData)
})




app.listen(port, () => console.log('Server listening at ' + port))