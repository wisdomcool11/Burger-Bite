

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



