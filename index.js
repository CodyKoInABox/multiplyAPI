const app = require('express')()
const PORT = 8080


app.get('/multiply', (req, res) =>{
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)

    res.status(200).send(num1 * num2)
})

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
})

module.exports = app;
