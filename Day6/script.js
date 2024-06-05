function BreakText() {
    var h1 = document.querySelector("h1");
    var h = h1.textContent;
    
    var splittedText = h.split("");
    
    var clutter = "";
    splittedText.forEach(function(ele) {
      clutter += `<span class="a">${ele}</span>`;
    });
    
    h1.innerHTML = clutter;
  }
  
  BreakText();
  
  gsap.from("h1 .a", {
    y: 100,
    delay: 1,
    duration: 2,
    stagger: 0.3,
    repeat:-1,
    yoyo: true
  });
  