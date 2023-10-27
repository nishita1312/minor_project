let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');



window.onscroll= () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});

formBtn.addEventListener('click',()=>{
    loginform.classList.add('active');

});

formclose.addEventListener('click',()=>{
    loginform.classList.remove('active');

});
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById('menu-bar');
    const navLinks = document.querySelector('.nav-bar');
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


const animateOnScroll = () => {
    const boxes = document.querySelectorAll('.box-content');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        boxes.forEach((box) => {
            if (isInViewport(box)) {
                box.style.animation = 'slideIn 1s ease-out';
            } else {
               
                box.style.animation = 'none';
            }
        });
    };

   
    window.addEventListener('scroll', handleScroll);
};

animateOnScroll();

document.addEventListener("DOMContentLoaded", function () {
    // Get all the location buttons.
    const locationButtons = document.querySelectorAll('.location button');
  
    // Define the corresponding location links.
    const locationLinks = [
      'https://maps.app.goo.gl/WJBNuMMgRHsaQHJv8',
      'https://maps.app.goo.gl/E89yuxXPLExCjM4T6',
      'https://maps.app.goo.gl/pxTZDkxJVSkPkbF37',
      'https://maps.app.goo.gl/WMCbGQ53ULCtcJwj6',
      'https://maps.app.goo.gl/H6zAaBYA166WY68F9',
      'https://maps.app.goo.gl/qDtj4x3Q49wQ9dTN7'
    ];
  
    // Add a click event to each button.
    locationButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Redirect to the respective location link when the button is clicked.
        window.location.href = locationLinks[index];
      });
    });
  });
  

  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slider");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 2 seconds (adjust as needed)
  }


// let slideIndex = 1;
//   showSlides(slideIndex);

//   function changeSlide(n) {
//     showSlides((slideIndex += n));
//   }

//   function showSlides(n) {
//     let i;
//     const slides = document.getElementsByClassName("slider-content");
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//     if (n < 1) {
//       slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
//   }

//   // Automatic slide change every 5 seconds (adjust as needed)
//   setInterval(() => {
//     changeSlide(1);
//   }, 5000);
