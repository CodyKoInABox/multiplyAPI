const app = require('express')()
const PORT = 8080

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


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
