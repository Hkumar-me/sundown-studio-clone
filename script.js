const scroll = new LocomotiveScroll({
    el: document.querySelector('#main '),
    smooth: true
});


let elemC = document.querySelector("#page3 .elemContainer");

let fixedImage = document.querySelector("#fixedImage");
elemC.addEventListener("mouseenter", ()=>{
    fixedImage.style.display ="block"
})
elemC.addEventListener("mouseleave", ()=>{
    fixedImage.style.display ="none"
})


let allElem = document.querySelectorAll(".elem");

allElem.forEach((el)=>{
    el.addEventListener("mouseenter", ()=>{
        let img = el.getAttribute("data-image");
        // console.log(img)
        fixedImage.style.backgroundImage = `url(${img})`;
    })
})



var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });






  let menuDrop = document.querySelector("#menu");
 let menu = document.querySelector("#main nav h3")
console.log(menuDrop)

  menu.addEventListener("click", ()=>{
    menuDrop.style.top = "100%"
  })