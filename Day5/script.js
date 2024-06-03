var menu = document.querySelector("#nav i")
var cross = document.querySelector(".full")
var tl = gsap.timeline()

tl.to(".full ", {
    right:"0",
    delay:0.6,
    scrub:3
})

tl.from(".full h4",{
    x:150,
    scrub:4,
    duration:1,
    stagger:0.3,
    opacity:0
})

tl.from(".full i",{
    opacity:0,
    delay:0.3
})

tl.pause()

menu.addEventListener("click", function(){
    tl.play()
})

cross.addEventListener("click", function(){
    tl.reverse()
})