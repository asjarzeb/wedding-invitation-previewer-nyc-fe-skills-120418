const template = document.getElementById('container-right')
const classicButton = document.getElementById('classic')
const floralButton = document.getElementById('floral')
const whimsicalButton = document.getElementById('whimsical')
// const pTag = document.getElementById('first-name')

const first = document.getElementById('first-name')
const second = document.getElementById('second-name')
const last = document.getElementById('last-name')
const date = document.getElementById('wed-date')
const time = document.getElementById('time-ampm')
const loc = document.getElementById('wed-location')


function onKeyUpFirstName(event) {
    const text = (first.value) 
    const firstLine = document.getElementById('first')
    firstLine.innerHTML = first.value
}

first.addEventListener('keyup', onKeyUpFirstName)


function onKeyUpSecondName(event) {
    const text = (second.value) 
    const secondLine = document.getElementById('second')
    secondLine.innerHTML = second.value
}

second.addEventListener('keyup', onKeyUpSecondName)


function onKeyUpLastName(event) {
    const text = (last.value) 
    const lastLine = document.getElementById('last')
    lastLine.innerHTML = last.value
}

last.addEventListener('keyup', onKeyUpLastName)


function onKeyUpWedDate(event) {
    const text = (date.value) 
    const dateLine = document.getElementById('date')
    dateLine.innerHTML = date.value
}

date.addEventListener('keyup', onKeyUpWedDate)


function onKeyUpTime(event) {
    const text = (time.value) 
    const timeLine = document.getElementById('time')
    timeLine.innerHTML = time.value
}

time.addEventListener('keyup', onKeyUpTime)


function onKeyUpWedLocation(event) {
    const text = (loc.value) 
    const locLine = document.getElementById('loc')
    locLine.innerHTML = loc.value
}

loc.addEventListener('keyup', onKeyUpWedLocation)

//////////////////////////



function onClassicClick() {
template.classList.remove('floral')
template.classList.remove('whimsical')
template.classList.add('classic')
}

function onFloralClick() {
template.classList.remove('classic')
template.classList.remove('whimsical')
template.classList.add('floral')
}

function onWhimsicalClick() {
template.classList.remove('classic')
template.classList.remove('floral')
template.classList.add('whimsical')
}


// function onClearClick() {
// template.classList.remove('classic')
// template.classList.remove('floral')
// template.classList.remove('whimsical')

classicButton.addEventListener('click', onClassicClick)
floralButton.addEventListener('click', onFloralClick)
whimsicalButton.addEventListener('click', onWhimsicalClick)
