const botaoSubmit = document.getElementById('btn-submit')
const campoA = document.getElementById('campo-A')
const campoB = document.getElementById('campo-B')
const message = document.getElementById('message')

botaoSubmit.addEventListener('click', function(e){
    e.preventDefault()

    if(campoA.value < campoB.value) {
        message.innerHTML = `Válido! ${campoB.value} é maior que ${campoA.value}`
        message.style.display = 'block'
        message.style.color = 'darkolivegreen'
    } else {
        message.innerHTML = `Inválido! ${campoB.value} é menor que ${campoA.value}`
        message.style.display = 'block'
        message.style.color = 'red'
    }
})