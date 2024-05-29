gsap.to(".box",{
    x:1200,
    //y:200,
    delay:1,
    rotate:360,
    yoyo:true,
    repeat:-1, // for infinte use -1
    duration:4, 
    borderRadius: "50%",
    scale:0.5,
    backgroundColor: "green",
})

gsap.from(".box2",{
    //y:-100,  
    //duration: 3,
    //delay:1
    x:1200,
    //y:200,
    delay:1,
    rotate:360,
    backgroundColor: "blue",
    yoyo:true,
    repeat:-1,
    duration:3, 
    borderRadius: "50%",
    scale:0.5
})

gsap.to(".box3",{
    x:1200,
    delay:1,
    rotate:360,
    backgroundColor: "yellow",
    yoyo:true,
    repeat:-1,
    duration:4, 
    borderRadius: "50%",
    scale:1.4
})

gsap.from(".box4",{
    
    x:1200,
    delay:1,
    rotate:360,
    backgroundColor: "pink",
    yoyo:true,
    repeat:-1,
    duration:3, 
    borderRadius: "50%",
    scale:0.5
})

gsap.to(".box5",{
    
    x:1200,
    delay:1,
    rotate:360,
    backgroundColor: "white",
    yoyo:true,
    repeat:-1,
    duration:4, 
    borderRadius: "50%",
    scale:0.5
})

var tl = gsap.timeline()

tl.from(".name", {
    opacity:0.5,
    color: "white",
    y:-50
})

tl.from(".side",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3
})