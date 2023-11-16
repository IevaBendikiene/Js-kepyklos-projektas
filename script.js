let calculateBtn = document.getElementById('calculate')
calculateBtn.addEventListener('click',function(){
    console.log('clicked')
    let employeeCount = document.getElementById('employee-count').valueAsNumber
    let loavesPerEmployee =document.getElementById('loaves-per-employee').valueAsNumber
    let orderedCount = document.getElementById('order-count').valueAsNumber
    let kepyklaTotal = employeeCount * loavesPerEmployee
    let  arPavyks = kepyklaTotal >= orderedCount
    let loginfo ={
        employeeCount,
        loavesPerEmployee,
        orderedCount,
        kepyklaTotal,
        arPavyks
    }

    console.log(loginfo)

    let results = document.getElementById('results')
    results.innerHTML =`<p><strong>Kepykla per diena spes pagaminti:</strong> ${kepyklaTotal} kepalu </p>`
    results.innerHTML +=`<p><strong> Reikia pagaminti: </strong> ${orderedCount} kepalu </p>`
    results.innerHTML +=`<p><strong> Ar spes pagaminti: </strong> ${arPavyks ?'Taip' : 'Ne'} </p>`
    if(arPavyks == false){
        results.innerHTML += `<p><strong>Jums pritruks: </strong> ${orderedCount-kepyklaTotal} kepalu </p>`
    }
})

document.getElementById('employee-count').addEventListener('keyup',function(event){
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0){
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')


    } else{
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})
document.getElementById('loaves-per-employee').addEventListener('keyup',function(event){
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0){
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')

    } else{
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})
document.getElementById('order-count').addEventListener('keyup',function(event){
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0){
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')


    } else{
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})
document.getElementById("emplyee-info").addEventListener('mouseover',function(){
        document.getElementById("dezute1").style.display = "block"
    setTimeout(function(){
        document.getElementById("dezute1").style.display = "none"
    },2500)
})
document.getElementById("loaf-info").addEventListener('mouseover',function(){
    document.getElementById("dezute2").style.display = "block"
    setTimeout(function(){
        document.getElementById("dezute2").style.display = "none"
    },2500)
})
document.getElementById("order-info").addEventListener('mouseover',function(){
    document.getElementById("dezute3").style.display = "block"
    setTimeout(function(){
        document.getElementById("dezute3").style.display = "none"
    },2500)
})
document.getElementById('reset').addEventListener('click',function(){
    document.getElementById('employee-count').valueAsNumber = 0
    document.getElementById('loaves-per-employee').valueAsNumber = 0
    document.getElementById('order-count').valueAsNumber = 0
    document.getElementById('results').innerHTML = '<p>Kol kas duomenu nera</p>'
})

let bandymas = document.getElementsByClassName('input-wrapper')
console.log(bandymas)
/* INSTRUKCIJOS:
Papildykite projektą:
- Šiame projekte atliktas tik pradinis stiliavimas, tačiau galima padaryti ir daugiau dalykų. Pagalvokite ar galima kaip nors atnaujinti dizainą, jo nesudarkant. Pavyzdžiui, gal gali įvesties laukeliai reaguoti į pelės užvedimą, ar patvarkyti gal kokius tarpus, gal įnešti kokių spalvų įvairiose vietose, dar gal ką nors padaryti su įvesties laukeliais, mygtukų stiliai, ir pan.
- Iki galo padaryti validacijas su įvesties laukeliais (dabar yra atlikta tik su vienu).
- Pridėti daugiau įvesties laukelių ir/ar skaičiavimų iš duotos informacijos.
- Pridėti informacinių tekstų, kurie paaiškintų ką kuris laukelis ar skaičiavimas reiškia ir pan.
*/
