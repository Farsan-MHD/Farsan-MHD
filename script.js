const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");{
        if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
        }
      }

// toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
// keep user selected mode even page resresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// toggle Search Box
      searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active")
      });

// toggle siderbar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active")
});

body.addEventListener("click" , e =>{
    let clickedEIm = e.target;

    if(!clickedEIm.classList.contains("sidebarOpen") && !clickedEIm.classList.contains("menu")){
        nav.classList.remove("active")
    }
})
