const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('#display')
const qton = document.querySelector('#ton')
const tlimpar = document.querySelector('#tlimpar')
const tcpy = document.querySelector('#tcpy')
const pegandoCorpo = document.querySelector('body')


let sinal = false
let decimal = false

teclasNum.map((element) => {
  element.addEventListener('click', (event) => {
    sinal = false
    if (event.target.innerHTML == ",") {
      if (!decimal) {
        decimal = true
        if (display.innerHTML == "0") {
          display.innerHTML += ","
        } else {
          display.innerHTML += event.target.innerHTML
        }
      }
    } else {
      if (display.innerHTML == "0") {
        display.innerHTML = ""
      }
      display.innerHTML += event.target.innerHTML
    }
  })
})

teclasOp.map((item) => {
  item.addEventListener('click', (event) => {
    if (!sinal) {
      sinal = true
      if (event.target.innerHTML == "x") {
        display.innerHTML += "*"
      } else {
        display.innerHTML += event.target.innerHTML
      }
    }
  })
})

tlimpar.addEventListener('click', () => {
  sinal = false
  decimal = false
  display.innerHTML = "0"
})

teclaRes.addEventListener('click', () => {
  sinal = false
  decimal = false
  const res = eval(display.innerHTML)
  display.innerHTML = res
})

tcpy.addEventListener('click', (evt) => {
  navigator.clipboard.writeText(display.innerHTML)  // ESTAMOS COPIANDO UM TEXTO DO DISPLAY
})

const mudandoaCor = pegandoCorpo.style.background = '#dcdcdc'
const mudandoaFont = pegandoCorpo.style.color = 'black'
// CALCULADORA COMPLETA


