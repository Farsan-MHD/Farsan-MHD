const toggle = document.getElementById('toggle');
const body = document.querySelector('body');
toggleMenu = document.getElementById('toggle-menu')
navList = document.getElementById('nav-list')

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-sun')){
        body.classList.remove("theme-active")
    }else{
        body.classList.add('theme-active')
    }
})

navList.style.maxHeight = '0px'
toggleMenu.addEventListener('click', function(){
    if(navList.style.maxHeight == '0px'){
        navList.style.maxHeight = '300px'
    }else{
        navList.style.maxHeight = '0px'
    }
})