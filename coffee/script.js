const navLinks=document.querySelectorAll(".nav-menu .nav-link");
    const menuOpenButton = document.querySelector("#menu-open-button");
    const menuCloseButton = document.querySelector("#menu-close-button");

    // Open mobile menu
    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });

    // Close mobile menu
    menuCloseButton.addEventListener("click", () => 
       menuOpenButton.click());

    navLinks.forEach(link=>
    {
      
        link.addEventListener("click",()=> menuOpenButton.click() );
    }
    );
    

//INITALIZE SWIPPER


    const swiper = new Swiper('.slider-wrapper', {
        spaceBetween:25,
        grabeCursor:true,
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  //responsive breakk points
breakpoints:{
    0:{
        slidesPerView:1
    },

     768:{
        slidesPerView:2
    },

     1024:{
        slidesPerView:3
    },
}
  
});