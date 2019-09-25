/* jQuery for the navigation animation */

$("#wrapper").click( function() {
	$(".menu").toggleClass("close");
});

/* Code for the toggling of the navbar */

/* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".mobile-wrapper");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");

    if (toggleNavStatus === false) {
        getSidebarUL.style.visibility = "visible";
        getSidebar.style.visibility = "visible";

         getSidebarLinks.forEach((item, index)=>{
          console.log(item);
          item.style.opacity = "1";
          item.style.right = "0px"
          item.style.top = "0"
         })
        getSidebar.style.height = "300px";
        

        toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {
        getSidebarUL.style.visibility = "hidden";

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.top = "-50px"
          item.style.right = "-40px"
         })
        getSidebar.style.height = "105px";

        toggleNavStatus = false;
    }
}
