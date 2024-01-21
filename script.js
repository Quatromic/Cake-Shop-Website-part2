//not working

const front = document.getElementById("front"),back = document.getElementById("back")
const image1 = document.getElementById("img1"),image2 = document.getElementById("img2")
const imgUrls = ['./Images/one.jpg','./Images/two.jpg','./Images/three.jpg','./Images/four.jpg','./Images/five.jpg','./Images/six.jpg','./Images/seven.jpg','./Images/eight.jpg','./Images/nine.jpg']

const Front = () => {
    let currentUrl
    for(let i = 0;i < imgUrls.length;i++){
        if(image1.src === imgUrls[i]){
            currentUrl = i
        }
    }
    console.log(currentUrl)
    image1.src = imgUrls[currentUrl + 1]
    image2.src = imgUrls[currentUrl]
}

const Back = () => {
    let currentUrl
    for(let i = 0;i < imgUrls.length;i++){
        if(image1.src === imgUrls[i]){
            currentUrl = i
        }
    }
    console.log(currentUrl)
    image1.src = './Images' + imgUrls[currentUrl - 1]
    image2.src = './Images' + imgUrls[currentUrl]
}

back.addEventListener("click",Front)
front.addEventListener("click",Back)