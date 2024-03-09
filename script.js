gsap.from("#page1 img,nav h1",{
    y:-80,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.3
})

gsap.to("#page2 h1", {
    transform: "translateX(-90%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0",
        end: "top -100%",
        scrub: 5,
        pin: true
    }
})

var p2 = gsap.timeline()

p2.from("#page3 h1", {
    opacity: 0,
    duratrion: 2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "body",
        scrub: 10,
        start: "top 50%",
        end: "top 70%"


    }
})


