const h1El = document.querySelector('h1')
const btn = document.getElementById('btn')
const ism = document.getElementById('ism')
const vazin = document.getElementById('vazin')
const boy = document.getElementById('boy')


btn.addEventListener('click', btnEl)

function btnEl() {
  let bmi = Math.floor(vazin.value / boy.value ** 2)

  if (bmi <= 18) {
    h1El.textContent = `Siz ozginsiz: ${ism.value}`
  } else if (bmi > 18 && bmi <= 25) {
    h1El.textContent = `Siz narmalnisiz: ${ism.value}`
  } else {
    h1El.textContent = `Siz semizsiz ! kamroq yeng... ${ism.value}`
  }
}