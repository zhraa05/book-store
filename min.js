 serchForm = document.querySelector('.serch-form');
 document.querySelector('#search-btn').onclick = () => {
     serchForm.classList.toggle('active');
 }
 let loinform = document.querySelector('.login-form-container')

 document.querySelector('#login-btn').onclick = () =>{
     loinform.classList.toggle('active')
 }
 document.querySelector('#login-form-container').onclick = () =>{
     loinform.classList.remove('active')
 }







window.onscroll = () =>{
         serchForm.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector(".header .headeer-2").classList.add('active')
    }
    else{
               document.querySelector(".header .headeer-2").classList.remove('active') 
    }
}
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector(".header .headeer-2").classList.add('active')
    }
    else{
               document.querySelector(".header .headeer-2").classList.remove('active') 
    }
}




 var swiper = new Swiper(".book-slid", {
        
        loop:true,
        centeredSlides:true,
        autoplay:{
            delay :9500,
            disableOnInteraction:false,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
           
          },
          768: {
            slidesPerView: 2,

          },
          1024: {
            slidesPerView: 3,
            // spaceBetween: 40,
          },
        },
      });
 var swiper = new Swiper(".featured-slid", {
        spaceBetween: 10,
        loop:true,
        centeredSlides:true,
        autoplay:{
            delay :9500,
            disableOnInteraction:false,
        },
         navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
           
          },
          450: {
            slidesPerView: 2,
           
          },
          768: {
            slidesPerView: 3,

          },
          1024: {
            slidesPerView: 4,
            // spaceBetween: 40,
          },
        },
      });
 var swiper = new Swiper(".arrivals-slid", {
        spaceBetween: 10,
        loop:true,
        centeredSlides:true,
        autoplay:{
            delay :9500,
            disableOnInteraction:false,
        },
        

        breakpoints: {
          0: {
            slidesPerView: 1,
           
          },
         
          768: {
            slidesPerView: 2,

          },
          1024: {
            slidesPerView: 3
            // spaceBetween: 40,
          },
        },
      });
 var swiper = new Swiper(".reviews-slid", {
        spaceBetween: 10,
        gradCrsor:true,
        loop:true,
        centeredSlides:true,
        autoplay:{
            delay :9500,
            disableOnInteraction:false,
        },
        

        breakpoints: {
          0: {
            slidesPerView: 1,
           
          },
         
          768: {
            slidesPerView: 2,

          },
          1024: {
            slidesPerView: 3
            // spaceBetween: 40,
          },
        },
      });
 var swiper = new Swiper(".bloges-slid", {
        spaceBetween: 10,
        gradCrsor:true,
        loop:true,
        centeredSlides:true,
        autoplay:{
            delay :9500,
            disableOnInteraction:false,
        },
        

        breakpoints: {
          0: {
            slidesPerView: 1,
           
          },
         
          768: {
            slidesPerView: 2,

          },
          1024: {
            slidesPerView: 3
            // spaceBetween: 40,
          },
        },
      });








  