const dateTag = document.getElementById("date")
const date = new Date()

dateTag.innerText += " " + date.getFullYear()

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)