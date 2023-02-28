const result = document.querySelector('.result')
const calculate = document.querySelector('.calculate')
const weightvalue = document.querySelector('.inputweight')
const measurevalue = document.querySelector('.inputmeasure')
const cleanbutton = document.querySelector('.clean')
const primarypage = document.querySelector('.objects')
const secondpage = document.querySelector('.results')
const situation = document.querySelector('.situation')


measurevalue.addEventListener('input', (measuremask) =>{
    measuremask = measurevalue
    if(measuremask.value.length == 1){
        measuremask.value = measuremask.value += '.'
    }
})





cleanbutton.addEventListener('click', () =>{
    weightvalue.value = ''
    measurevalue.value = ''
})



calculate.addEventListener('click', (weight, measure) => {
    weight = weightvalue.value
    measure = measurevalue.value

    const resultscalculate = Number.parseFloat(weight / (measure * measure))
    const results = resultscalculate.toFixed(2)

    primarypage.classList.add('d-none')
    secondpage.classList.remove('d-none')
    result.innerHTML = results

    if(results < 18.5){
        situation.innerHTML = 'Magreza'
     }if(results > 18.5 && results < 24.9){
        situation.innerHTML = 'NORMAL'
     }if(results > 25.0 && results < 29.9){
        situation.innerHTML = 'SOBREPESO'
     }if(results > 30.0 && results < 39.9){
        situation.innerHTML = 'OBESIDADE'
     }if(results > 40){
        situation.innerHTML = 'OBESIDADE GRAVE'
     }
    
})





