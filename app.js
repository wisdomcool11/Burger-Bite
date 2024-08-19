

// toggle bar 
const header = document.querySelector('header');
const toggleBar = document.querySelector('.toggle__bar');

// function that calls/add a style in the header
toggleBar.addEventListener('click', function(){
    header.classList.toggle('active');
})


// toggle accordion
const toggleMe = document.querySelectorAll('.toggle');

toggleMe.forEach((faq)=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('actived');
    })
})



// check email
const email = document.querySelector('#email');
const emailForm = document.querySelector('#emailForm');

emailForm.addEventListener("submit", e =>{
    e.preventDefault();

    validateEmail();
})

const setError = (element, message)=>{
    const inputError = element.parentElement;
    const displayError = inputError.querySelector(".error__msg");

    displayError.innerText = message;
    inputError.classList.add("error");
    inputError.classList.remove("success");
}

const setSuccess = element =>{
    const inputError = element.parentElement;
    const displayError = inputError.querySelector(".error__msg");

    displayError.innerText = " ";
    inputError.classList.remove("error");
    inputError.classList.add("success");
}

const isValidEmail = email =>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(String(email).toLowerCase());
}

const validateEmail= ()=>{

    const emailValue = email.value.trim();

    
    if(emailValue === ''){
        setError(email, "field is required")
    }else if(!isValidEmail(emailValue)){
        setError(email, "make sure it's a valid email")
    }else{
        setSuccess(email);   
    }

}



//### swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});





