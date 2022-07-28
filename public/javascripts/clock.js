let time = document.querySelector('#time')
let staffCheck = document.querySelector('#staff')

function getCurrentTime() { 
    let current = new Date().toLocaleString()
    time.textContent = current
}


if(time){
    window.setInterval(getCurrentTime , 1)
}









