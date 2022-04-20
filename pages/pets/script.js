window.onload = function () {
     const menuBtn = document.querySelector('.header__menu_btn')
    const menuBtnIcon = document.querySelector('.header__menu_btn i')
    const menuList = document.querySelector('.nav__list')
  
    menuBtn.addEventListener('click', function () {
      menuList.classList.toggle('active')
      menuBtnIcon.classList.toggle('active')
    })
  
    const navLinks = document.querySelectorAll('.nav__list li a')
  
      for(let i = 0; i < navLinks.length; i++){
        navLinks[i].addEventListener('click', function() {
          navLinks.forEach(link => {
            link.classList.remove('active')
          })
          if(!navLinks[i].classList.contains('active')){
            navLinks[i].classList.add('active')
          } 
        })
      }
    
  
  }