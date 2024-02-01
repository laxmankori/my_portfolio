
function menuOpen(){
let nav = document.getElementById("nav");
let link = document.getElementById("link");

if (nav.style.height === "60vw") {
    nav.style.height = "5rem";
    nav.style.transition = "all ease 0.5s";
    link.style.display = "none"
    
}else{
    nav.style.height = "60vw";
    nav.style.transition = "all ease 0.5s";
    // link.style.display = "block"

}

setTimeout(() => {
    if (nav.style.height === "60vw") {
        link.style.display = "block"
        
    }
    
}, 450);
// nav.style.height = "60vw";
nav.style.alignItems = "baseline";
nav.style.paddingTop = "5vw";
// nav.style.height = "15vw"

}

function changeIcon(x) {
    x.classList.toggle("fa-xmark");
    // document.getElementById("nav").style.height = "15vw";
}

// Stciky navbar

const section_hero = document.querySelector(".container");

const observer = new IntersectionObserver((entries) => 
{
    const ent = entries[0];
    console.log(ent);
    ent.isIntersecting === false ? nav.classList.add('sticky_navbar'): nav.classList.remove('sticky_navbar')
},
{
    root: null,
    rootMargin: "-80px",
    threshold: 0.5,
}
);

observer.observe(section_hero);