function toogleMenu() {
  //get all elements with the class of nav
  const navElements = document.querySelectorAll(".header--nav");
  //loop through the elements
  navElements.forEach(function (element) {
    if (element.classList.contains("contents--expanded")) {
      //remove the class if present
      element.classList.remove("contents--expanded");
    } else {
      //if the class is not present add it
      element.classList.add("contents--expanded");
    }
  });
}

// var slideIndex = 0;
// carousel();
// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("slideshow");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {
//     slideIndex = 1;
//   }
//   x[slideIndex - 1].style.display = "block";
//   setTimeout(carousel, 5000);
//   //change after every 2 seconds
// }
