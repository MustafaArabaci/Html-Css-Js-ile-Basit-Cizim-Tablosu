const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const clearBtn = document.getElementById('clear')
const colorInput = document.getElementById('color')
const sizeRange = document.getElementById('size')

let size = 8
let color = 'black'
let x
let y
let isPressed = false

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

canvas.addEventListener('mousedown', (e) => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY

})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false
  x = undefined
  y = undefined

})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

colorInput.addEventListener('change', (e) => (color = e.target.value))

increaseBtn.addEventListener('click', () => {
  size += 2

  if (size > 64) {
    size = 64
  }

  updateSizeOnScreen()
})

function updateSizeOnScreen() {
  sizeRange.innerText = size
}

decreaseBtn.addEventListener('click', () => {
  size -= 2

  if (size < 2) {
    size = 2
  }

  updateSizeOnScreen()
})

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})
