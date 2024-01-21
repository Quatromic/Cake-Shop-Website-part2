//Date 
const dateTag = document.getElementById("date")
const date = new Date()
dateTag.innerText += " " + date.getFullYear()

//Slider
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  //console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//Image

const image1 = document.getElementById("img1"),image2 = document.getElementById("img2"),pInfo = document.getElementById("imginfo")
let Index = 0
const urls = ['./Images/one.jpg','./Images/two.jpg','./Images/three.jpg','./Images/four.jpg','./Images/five.jpg','./Images/six.jpg','./Images/seven.jpg','./Images/eight.jpg','./Images/nine.jpg']
const tags = ['Cupcakes','BDay Cakes','Pastries','Queen Cake','Apple Pies','Small Cakes','Road Cake','Junkies','lorem']

const next = () => {
    if(Index >= 0){
        Index += 1
        image1.src = urls[Index]
        image2.src = urls[Index + 1]
    }
    else if(Index >= 7){
        Index = 0
        image1.src = urls[Index]
        image2.src = urls[0]
    }
    pInfo.innerText = tags[Index]
    console.log(Index)
}

const previous = () => {
    if(Index >= 0){
        Index -= 1
        image1.src = urls[Index]
        image2.src = urls[Index - 1]
    }
    pInfo.innerText = tags[Index]
    console.log(Index)
}

//Slight issue on reaching the last image,will fix later