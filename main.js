const express = require('express')

const app = express()

app.get('/', (req, res) => {
    const test = 'asdasd'
    const test2 = 'qweqwe'
    debugger;
    res.send('hello, world!')
})

app.listen(3000, () => console.log('app started'))
