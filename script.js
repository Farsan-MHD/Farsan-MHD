toggleMenu = document.getElementById("toggle-menu");
activeNav = document.getElementById("nav-links");

toggleMenu.addEventListener("click", function() {
    if(activeNav.style.height === "0px" ){ 
        activeNav.style.height = "350px";
    }else{
        activeNav.style.height = "0px";
    }
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim()
    };
    console.log(formData); // You can replace this with your own logic (e.g., AJAX)
    alert('Thank you for contacting! (Check the console for submitted data)');
    this.reset();
});

document.getElementById('ressume').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '/pdf-folder/Farsan-Front-End-Resume.pdf'; // Change to your actual PDF file name
    link.download = 'Farsan-MHD-Resume.pdf';  // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});