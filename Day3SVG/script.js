var intialPath = `M 10 100 Q 250 100 990 100`;

var finalPath = `M 10 100 Q 250 100 990 100`;

document.querySelector("#string")

string.addEventListener("mousemove", function(deta){
    path = `M 10 100 Q ${deta.x} ${deta.y} 990 100`

    gsap.to("svg path", {
        attr: {d: path},
        duration: 0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration:2.5,
        ease: "elastic.out(1.5,0.2)"
        });
})

gsap.from(".ball", {
    x: 1147,
    borderRadius: "50%",
    color:"blue",
    yoyo: true,
    repeat: -1,
    duration: 4,
    scrub:4
})

gsap.to(".ball1", {
    x: 1147,
    borderRadius: "50%",
    color:"blue",
    yoyo: true,
    repeat: -1,
    duration: 4,
    scrub:4
})

gsap.from(".ball2", {
    y: 1000,
    borderRadius: "50%",
    color:"blue",
    yoyo: true,
    repeat: -1,
    duration: 4,
    scrub:4
})

gsap.to(".ball3", {
    y: -1000,
    borderRadius: "50%",
    color:"blue",
    yoyo: true,
    repeat: -1,
    duration: 4,
    scrub:4
})


