function callApi(){

    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    let stringAPI = 'https://multiply-api.vercel.app/multiply?num1=' + num1 + '&num2=' + num2

    fetch(stringAPI)
    .then(response => response.json())
    .then(data => document.getElementById('output').innerHTML = data.result)
    
}