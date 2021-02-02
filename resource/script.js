function navfunc(){
    const menu = document.querySelector('.burgur');
    const navItems = document.querySelector('.nav__items');
    const navlinks = document.querySelectorAll('.nav__items li');

    menu.addEventListener('click', ()=>{
        navItems.classList.toggle('active');
    })
     navlinks.forEach(function(link){
      link.addEventListener('click',()=>{
        navItems.classList.remove('active');
      })
     })
  }
navfunc();

mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// developed by Raj