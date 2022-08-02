const timer = document.querySelector('p')

const btn = document.querySelectorAll('button')

let hour = 0
let min = 0
let sec = 0

let count

const Start = () => {
    count = setInterval(() => {
        if(sec === 10) {
            sec = 0

            ++min
        }

        if(min === 60) {
            min = 0

            ++hour
        }

        ++sec

        timer.innerText = `${ hour < 60 ? '0' : '' }${hour}:${ min < 10 ? '0' : '' }${min}:${ sec < 10 ? '0' : '' }${sec}`
    }, 1000)  

    timer.style.color = 'black'
}

const Stop = () => {
    if(sec !== 0 || min !== 0 || hour !== 0) timer.style.color = 'red'

    clearInterval(count)
}

const Reset = () => {
    hour = 0
    min = 0
    sec = 0

    timer.innerText = `00:00:00`

    timer.style.color = 'black'
}

btn[0].addEventListener('click', () => Start())
btn[1].addEventListener('click', () => Stop())
btn[2].addEventListener('click', () => Reset())