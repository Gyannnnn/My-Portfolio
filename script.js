

gsap.to("#page2 h1", {
    transform: "translateX(-90%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0",
        end: "top -100%",
        scrub: 10,
        pin: true
    }
})

var p2 = gsap.timeline()

p2.from("#page3 h1", {
    opacity: 0,
    duratrion: 2,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "body",
        scrub: 5,
        markers: true,
        start: "top 50%",
        end: "top 70%"


    }
})

