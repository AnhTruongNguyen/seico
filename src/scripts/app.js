const classToogle = document.querySelector(".menu__toggle");
const classMenu = document.querySelector(".menu");
const classShow = "show";   
const classOpen = "open";
classToogle.addEventListener("click", function(){
    if (window.innerWidth <= 800) {
        classMenu.classList.toggle(classShow);
        classToogle.classList.toggle(classOpen);
    }
});
  

    

    

    

