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


// function to download resume

// function downloadResume() {
//     const link = document.createElement('a');
//     link.href = './resume/Farsan-Front-End-Resume.pdf'; 
//     link.download = 'Farsan-MHD-Resume.pdf'; 
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }

function handleAction(action) {
    if (action === 'resume') {
        const link = document.createElement('a');
        link.href = './resume/Farsan-Front-End-Resume.pdf';
        link.download = 'Farsan-MHD-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else if (action === 'project') {
        const projectSection = document.createElement('a');
        projectSection.href = '#project-section';
        document.body.appendChild(projectSection);
        projectSection.click();
        document.body.removeChild(projectSection);
    }
}