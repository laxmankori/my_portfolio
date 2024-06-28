function page1Animation() {
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
    y:50,
    duration:1,
    opacity:0,
    stagger:0.15
},"-=1")


}


function page2Animation() {
    var tl2 = gsap.timeline({scrollTrigger:{
        trigger:".experties",
        scroller:"body",
        start:"top 50%",
        end:"top 0%",
        scrub:2,
    }});
    
    tl2.from(".experties_heading h3",{
        y:30,
        duration:0.5,
        opacity:0
    })
    
    tl2.from(".pro1__left",{
        x:-50,
        duration:1,
        opacity:0
    },"pro1")
    tl2.from(".pro2__right",{
        x:50,
        duration:1,
        opacity:0
    },"pro1")
    tl2.from(".pro3__left",{
        x:-50,
        duration:1,
        opacity:0
    },"pro2")
    tl2.from(".pro4__right",{
        x:50,
        duration:1,
        opacity:0
    },"pro2")
}

page1Animation();
page2Animation();
