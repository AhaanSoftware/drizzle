//for search bar menu bar
const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[trigger-close]');
const overlay = document.querySelectorAll('[data-overlay]');

for(let i =0; i<triggerOpen.length; i++){
    let currentId = triggerOpen[i].dataset.target,
    targetEl = document.querySelector(`#${currentId}`)

    const openData = function(){
        targetEl.classList.remove('active');
        
    };
    triggerOpen[i].addEventListener('click', function(){
        targetEl.classList.add('active');
        
    });
    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    
}
// overlay.classList.remove('active');
// overlay.classList.add('active');
// overlay.addEventListener('click', openData);
//for mobile-menu submenu
const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click', function(e){
    e.preventDefault();
    submenu.forEach((item)=>item!=this?item.closest('.has-child').classList.remove('active'):null);
        if(this.closest('.has-child').classList != 'active') {
            this.closest('.has-child').classList.toggle('active');
        }
}))


//new arrival carousel
const swiper = new Swiper('.carousel-box',{
    spaceBetween:30,
    slidesPerView:'auto',
    centeredSlides:true,

//if we need pagination
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
breakpoints:{
    481:{
        slidesPerView:2,
        slidesPerGroup:1,
        centeredSlides:false,
    },
    640:{
        slidesPerView:3,
        slidesPerGroup:3,
        centeredSlides:false,
    },
    992:{
        slidesPerView:4,
        slidesPerGroup:4,
        centeredSlides:false,
    },
    
},
});

// product-single page
const thumbImg = new Swiper('.thumbnail-image',{
    //loop:true,
    direction:'vertical',
    spaceBetween:15,
    slidesPerView:1,
    freeMode:true,
    watchSlidesProgress:true,
});

const mainImg = new Swiper('.main-image',{
    loop:true,
    autoHeight:true,
    pagination: {
        el: '.swiper-pagination',
      },
      thumbs:{
        swiper: thumbImg,
      },
});




