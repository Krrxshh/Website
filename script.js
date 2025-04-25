var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    
})

var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"
    
})






gsap.to("#nav",{
    backgroubndColor: "#000",
    height: "110px",
    duratiion:0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub:1

    }
})

gsap.to("#main",{
    backgroubndColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub:1
    
    }
})