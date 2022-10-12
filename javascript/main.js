
function moveRect(e){
    const div = document.getElementById("porten")
    var cs = window.getComputedStyle(div)
    var left = parseInt(cs.marginLeft)
    var top = parseInt(cs.marginTop)
    switch(e.key){
        case "a": 
            div.style.marginLeft = left - 10 + "px"; break;
        case "w":
                div.style.marginTop = top - 10 + "px"; break;
        case "d":
                div.style.marginLeft = left + 10 + "px"; break;
        case "s":
                div.style.marginTop = top + 10 + "px"; break;
    }
}

addEventListener("keydown",moveRect)

function click(e){
    console.log(e.screenX)
    console.log(e.screenY)
    console.log(e.clientX)
    console.log(e.clientY)
}

window.document.body.addEventListener("click", click)


const border = document.getElementById("porten")

let count = 1
function borderFunc(e){
    count++
    console.log(e.target)
    border.style.border = `${count}px solid red`
    if(5 === count) count = 1
}
border.addEventListener("click",borderFunc,{once: false})

const button = document.querySelectorAll("button")
console.log(button)

button.forEach(buttonItem => {
    buttonItem.addEventListener("click",function(e){
        console.log("Button")
        console.log(e.target)
    })
})

const portenTest = document.getElementById("portenTest")
console.log(portenTest)

var test = document.getElementById("blockTest")

portenTest.addEventListener("click",function(){
    test.classList.toggle("blockTest")
    console.log(test)
    test.innerHTML = "Hello"
})