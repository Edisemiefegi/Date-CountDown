const button = document.getElementById("reduce")
const button2 = document.getElementById("add")
const text = document.getElementById("num")
const button3 = document.getElementById("btn2")

button.addEventListener("click", decrease)

function decrease(){
    if(text.innerHTML != 0){
        text.innerHTML = text.innerHTML - 1

    }
}


button2.addEventListener("click", increase)
function increase(){
    text.innerHTML = parseInt( text.innerHTML) + 1
}

button3.addEventListener("click", count)

function count(){
    var number = 20 
    setInterval(() => {
        if(number != -1){
            text.innerHTML =  number 
            number -= 1
        }
    }, 1000)
}

// date

// const hour = document.getElementById("hour")
// const minute = document.getElementById("min")
// const seconds = document.getElementById("sec")
// const startBtn = document.getElementById("button")

// startBtn.addEventListener("click", countdown)

// function countdown(){
//     setInterval(() => {
//         const date = new Date()
//         hour.innerHTML = date.getHours()
//         minute.innerHTML = date.getMinutes()
//         seconds.innerHTML = date.getSeconds()
//     }, 1000)
// }