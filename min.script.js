const sidebar = document.querySelector(".sidebar");
function openSideBar() {
  sidebar.style.display = "flex";
}
function closeSideBar() {
  sidebar.style.display = "none";
}
function sendMail() {
  var e = {
    usr_name: document.getElementById("user_name").value,
    usr_email: document.getElementById("user_email").value,
    usr_phone: document.getElementById("user_phone").value,
    usr_message: document.getElementById("message").value,
  };
  if ("" !== e.usr_email && "" !== e.usr_name && "" !== e.usr_phone)
    emailjs.send("service_pelson", "template_y6b4esk", e).then(
      (e) => {
        (document.getElementById("user_name").value = ""),
          (document.getElementById("user_email").value = ""),
          (document.getElementById("user_phone").value = ""),
          (document.getElementById("message").value = ""),
          console.log("SUCCESS!", e.status, e.text),
          alert("We will contact you shortly thank you!");
      },
      (e) => {
        console.log("FAILED", e);
      }
    );
  else throw Error("From not complete");
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
    l = document.querySelector(".slider-btn-right"),
    o = document.querySelector(".dots"),
    n = 0,
    s = e.length,
    r = function (e) {
      document
        .querySelectorAll(".dots-dot")
        .forEach((e) => e.classList.remove("dots-dot-active")),
        document
          .querySelector(`.dots-dot[data-slide="${e}"]`)
          .classList.add("dots-dot-active");
    },
    a = function (t) {
      e.forEach(
        (e, l) => (e.style.transform = `translateX(${100 * (l - t)}%)`)
      );
    },
    d = function () {
      n === s - 1 ? (n = 0) : n++, a(n), r(n);
    },
    i = function () {
      0 === n ? (n = s - 1) : n--, a(n), r(n);
    };
  a(0),
    e.forEach(function (e, t) {
      o.insertAdjacentHTML(
        "beforeend",
        `<button aria-label="Links" class="dots-dot" data-slide="${t}"></button>`
      );
    }),
    r(0),
    l.addEventListener("click", d),
    t.addEventListener("click", i),
    document.addEventListener("keydown", function (e) {
      "ArrowLeft" === e.key && i(), "ArrowRight" === e.key && d();
    }),
    o.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots-dot")) {
        let { slide: t } = e.target.dataset;
        a(t), r(t);
      }
    });
};
slider();
