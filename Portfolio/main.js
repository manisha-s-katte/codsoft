let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

const typed=new Typed('.multiple',{
    strings:['Frontend Developer ','Full Stack Developer','Web Designer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
})
