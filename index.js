// data storage
var peopleArr = []

// peopleArr functions
function addNew(person) {
  peopleArr.push(person)
}

function clearArr() {
  while(peopleArr.length > 0){
    peopleArr.pop()
  }
}

// HTML handle
const nameInput = document.querySelector('#name-input')
const ageInput = document.querySelector('#age-input')

const btnClear = document.querySelector('#btn-clear')
const btnSave = document.querySelector('#btn-save')
const btnShow = document.querySelector('#btn-show')
const btnSaveLocalStorage = document.querySelector('#btn-save-ls')
const btnLoadLocalStorage = document.querySelector('#btn-load-ls')

// Events
btnClear.addEventListener('click', function(){
  while(peopleArr.length > 0){
    peopleArr.pop()
  }
});

btnSave.addEventListener('click', function(){
  const person = {
    name: nameInput.value,
    age: ageInput.value
  }

  peopleArr.push(person)

  nameInput.value = ''
  ageInput.value = ''
});

btnShow.addEventListener('click', function(){
  peopleArr.forEach((element) => {
    console.log(element)
  })
});

btnSaveLocalStorage.addEventListener('click', function(){
  localStorage.setItem('data', JSON.stringify(peopleArr))
});

btnLoadLocalStorage.addEventListener('click', function(){
  for(let i = peopleArr.length; i > 0; i--){
    delete peopleArr[i]
  }

  JSON.parse(localStorage.getItem('data') || '[]').forEach(element => {
    addNew(element)
  })
});



