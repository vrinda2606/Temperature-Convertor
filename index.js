let cInput = document.querySelector('#celsius > input')
let fInput = document.querySelector('#fahrenheit > input')
let kInput = document.querySelector('#kelvin > input')

let button = document.querySelector('.button button')

function roundFunc(number){
     return Math.round(number*100)/100;
}

cInput.addEventListener('input',function(){
    let tempCelsius=parseFloat(cInput.value)
    let ftemp = (tempCelsius*(9/5))+32
    let ktemp = (tempCelsius) + 273.15

    fInput.value = roundFunc(ftemp)
    kInput.value = roundFunc(ktemp)
})

fInput.addEventListener('input',function(){
    let tempFahrenheit=parseFloat(fInput.value)
    let ctemp = (tempFahrenheit-32)*5/9
    let ktemp = ((tempFahrenheit-32)*5/9)+273.15

    cInput.value = roundFunc(ctemp)
    kInput.value = roundFunc(ktemp)
})

kInput.addEventListener('input',function(){
    let tempKelvin=parseFloat(kInput.value)
    let ctemp = tempKelvin - 273.15 
    let ftemp = (tempKelvin-273.15) * (9/5) +32 

    fInput.value = roundFunc(ftemp)
    cInput.value = roundFunc(ctemp)
})

button.addEventListener('click',()=>{
    cInput.value = ""
    fInput.value = ""
    kInput.value = ""
})