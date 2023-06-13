// cara Header Berubah Warna
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",this.window.scrollY>0);
});

// membuat nav mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navMenu.addEventListener("click",() => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
})

