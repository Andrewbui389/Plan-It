let time = document.querySelector('#time')

function getCurrentTime() { 
    let current = new Date().toLocaleString()
    hour.textContent = current
}

window.setInterval(getCurrentTime , 1)





