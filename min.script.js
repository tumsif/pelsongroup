const sidebar = document.querySelector(".sidebar");
function openSideBar() {
  sidebar.style.display = "flex";
}
function closeSideBar() {
  sidebar.style.display = "none";
}
function showOnScroll() {
  document.body.scrollTop > 40 || document.documentElement.scrollTop > 40
    ? (document.getElementById("up-arrow").style.display = "flex")
    : (document.getElementById("up-arrow").style.display = "none");
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.onscroll = function () {
  showOnScroll();
};
const slider = function () {
  let e = document.querySelectorAll(".slide"),
    t = document.querySelector(".slider-btn-left"),
    o = document.querySelector(".slider-btn-right"),
    n = document.querySelector(".dots"),
    l = 0,
    s = e.length,
    r = function (e) {
      document
        .querySelectorAll(".dots-dot")
        .forEach((e) => e.classList.remove("dots-dot-active")),
        document
          .querySelector(`.dots-dot[data-slide="${e}"]`)
          .classList.add("dots-dot-active");
    },
    d = function (t) {
      e.forEach(
        (e, o) => (e.style.transform = `translateX(${100 * (o - t)}%)`)
      );
    },
    i = function () {
      l === s - 1 ? (l = 0) : l++, d(l), r(l);
    },
    c = function () {
      0 === l ? (l = s - 1) : l--, d(l), r(l);
    };
  d(0),
    e.forEach(function (e, t) {
      n.insertAdjacentHTML(
        "beforeend",
        `<button aria-label="Links" class="dots-dot" data-slide="${t}"></button>`
      );
    }),
    r(0),
    o.addEventListener("click", i),
    t.addEventListener("click", c),
    document.addEventListener("keydown", function (e) {
      "ArrowLeft" === e.key && c(), "ArrowRight" === e.key && i();
    }),
    n.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots-dot")) {
        let { slide: t } = e.target.dataset;
        d(t), r(t);
      }
    });
};
slider();
