var tl = gsap.timeline();

tl.from(".logo h1,#link ul li,#nav__btn",{
    y:-20,
    duration: 0.7,
    delay:0.5,
    opacity:0,
    stagger:0.15
})



tl.from(".header_content h1",{
    x:200,
    duration:1,
    opacity:0,
    stagger:0.15
})

tl.from(".header_logo img",{
    opacity:0,
    duration:0.5,
},"-=1")

tl.from(".design, .massage,.phone_no",{
    y:300,
    duration:1,
    opacity:0,
    stagger:0.15
},"-=1")

