// for slide navbar items

function menuToggle(){
    const toggleMenu = document.querySelector('.shop__content');
    toggleMenu.classList.toggle('active');
}

function categorToggleslide(){
    const toggleMenu = document.querySelector('.categor__slide');
    toggleMenu.classList.toggle('active');
}

window.addEventListener("scroll", () =>{
    let slidecategor = document.querySelector(".categor__slide");

    slidecategor.classList.toggle("active", window.scrollY > 0) 
    slidecategor.classList.toggle("remove", window.scrollY < 0) 
})


// for fixing navbar

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})