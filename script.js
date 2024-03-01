/**toggle sidebar functionality */
const sidebar = document.querySelector(".sidebar");

function openSideBar() {
  sidebar.style.display = "flex";
}
function closeSideBar() {
  sidebar.style.display = "none";
}

/**Visibilty for up arrow upon scrolling */
window.onscroll = function () {
  showOnScroll();
};

function showOnScroll() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("up-arrow").style.display = "flex";
  } else {
    document.getElementById("up-arrow").style.display = "none";
  }
}
/**The scroll to top functionality */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
