const Text = document.getElementById("text")
const Texttl = gsap.timeline({
    repeat:-1
})

const words = ["Cupcakes","Birthday Cakes","Pastries"]

let mainTl = gsap.timeline({
    repeat:-1
})

words.forEach(word => {
    let textTl = gsap.timeline({
        repeat:1,
        yoyo:true,
        repeatDelay:6
    })
    textTl.to(Text,{
        text:word,
        duration:3
    })
    mainTl.add(textTl)
})