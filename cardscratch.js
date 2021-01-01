const canvasIn = document.querySelector("canvas.in")
const canvasOut = document.querySelector("canvas.out")

let isMouseDown = false

const setupCanvas = function (canvas) {
    const scratchContainer = document.querySelector("section.scratch")
    const w = scratchContainer.offsetWidth
    const h = scratchContainer.offsetHeight
    const dpi = window.devicePixelRatio

    canvas.width = w * dpi
    canvas.height = h * dpi
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"

    const context = canvas.getContext("2d")
    context.scale(dpi, dpi)

    if (canvas.classList.contains("in")) {
        context.fillStyle = "black"
        context.strokeStyle = "white"
    } else {
        context.fillStyle = "white"
        context.strokeStyle = "black"
    }

    
    context.lineWidth = 45
    context.lineCap = "round"
    context.lineJoin = "round"

    context.rect(0, 0, w, h)
    context.fill()
}

const startDraw = function (canvas, x, y) {
    const context = canvas.getContext("2d")
    context.moveTo(x, y)
    context.beginPath()
}

const moveDraw = function (canvas, x, y) {
    const context = canvas.getContext("2d")
    if (isMouseDown) {
        context.lineTo(x, y)
        context.stroke()
    }
    
}


// fortune randomizer
const fortunes = [
    "Hydration is key. Try to drink more water ✦",
    "Forget work hard play hard. Make sure to take breaks ✦",
    "Why not try a new hobby? It's never too late ✦",
    "Rearrange a part of your space for a fresh view ✦",
    "Share a playlist with a friend ✦",
    "Don't bottle up your feelings. Journal them out ✦",
    "Social media is stressful. Take some time away from it more often ✦",
    "Make reminders to stretch more often ✦"]
  
  const randomItem = fortunes[Math.floor(Math.random()*fortunes.length)]
  const fortuneSpace = document.querySelector("h3.fortune")
  fortuneSpace.innerHTML = randomItem;




setupCanvas(canvasIn)
setupCanvas(canvasOut)



document.addEventListener("mousedown", function (event) {
    isMouseDown = true

    const rect = canvasIn.getBoundingClientRect()
    const x = event.pageX - rect.left
    const y = event.pageY - rect.top
    startDraw(canvasIn, x, y)
    startDraw(canvasOut, x, y)
})

document.addEventListener("mouseup", function () {
    isMouseDown = false
})

document.addEventListener("mousemove", function (event) {
    const rect = canvasIn.getBoundingClientRect()
    const x = event.pageX - rect.left
    const y = event.pageY - rect.top
    moveDraw(canvasIn, x, y)
    moveDraw(canvasOut, x, y)
})


// touchscreen scratch
document.addEventListener("touchstart", function (event) {
    isMouseDown = true

    const rect = canvasIn.getBoundingClientRect()
    const x = event.changedTouches[0].pageX - rect.left
    const y = event.changedTouches[0].pageY - rect.top
    startDraw(canvasIn, x, y)
    startDraw(canvasOut, x, y)
})

document.addEventListener("touchend", function () {
    isMouseDown = false
})

document.addEventListener("touchmove", function (event) {
    const rect = canvasIn.getBoundingClientRect()
    const x = event.changedTouches[0].pageX - rect.left
    const y = event.changedTouches[0].pageY - rect.top
    moveDraw(canvasIn, x, y)
    moveDraw(canvasOut, x, y)
})


// hover scratch text 
const scratchHover = document.querySelector("span.hover")
const hoverText = document.querySelector("p.hoverText")
scratchHover.addEventListener("mouseover", function (event) {
    hoverText.classList.remove("hide")
})
scratchHover.addEventListener("mouseout", function (event) {
    hoverText.classList.add("hide")
})

scratchHover.addEventListener("mousedown", function (event) {
    hoverText.classList.toggle("hide")
})







