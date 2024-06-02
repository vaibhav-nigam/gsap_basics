var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")
var image = document.querySelector(".image")


main.addEventListener("mousemove", function(deta){
    gsap.to(cursor,{
       
        x:deta.x,
        y: deta.y,
        
    })
})

image.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More"
   gsap.to(cursor,{
    scale: 4,
    backgroundColor: "#ffffff7e"
   })
})

image.addEventListener("mouseleave", function(){
    
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor: "white"
    })
})