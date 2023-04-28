function callApi(){

    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    let option = document.getElementById('options').value

    let stringAPI = 'https://multiply-api.vercel.app/' + option + '?num1=' + num1 + '&num2=' + num2

    fetch(stringAPI)
    .then(response => response.json())
    .then(data => document.getElementById('output').innerHTML = data.result)
    
}

const operations = {
    'add': '+',
    'subtract': '-',
    'multiply': '*',
    'divide': '/'
}

function optionChange(){   
    document.getElementById('operation').innerHTML = operations[document.getElementById('options').value]
}