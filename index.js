const app = require('express')()
const PORT = 8080


app.get('/multiply', (req, res) =>{
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)

    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });


    res.status(200).send({
        'result': (num1 * num2).toString()
    })
})

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
})

module.exports = app;
