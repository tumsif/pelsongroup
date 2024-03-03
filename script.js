/**toggle sidebar functionality */
const sidebar = document.querySelector(".sidebar");

function openSideBar() {
  sidebar.style.display = "flex";
}
function closeSideBar() {
  sidebar.style.display = "none";
}

/**This is the functionality for email submission */
function sendMail() {
  var params = {
    usr_name: document.getElementById("user_name").value,
    usr_email: document.getElementById("user_email").value,
    usr_phone: document.getElementById("user_phone").value,
    message: document.getElementById("message").value,
  };

  if (
    params.usr_email !== "" &&
    params.usr_name !== "" &&
    params.usr_phone !== ""
  ) {
    emailjs.send("service_pelson", "template_y6b4esk", params).then(
      (response) => {
        document.getElementById("user_name").value = "";
        document.getElementById("user_email").value = "";
        document.getElementById("user_phone").value = "";
        document.getElementById("message").value = "";
        console.log("SUCCESS!", response.status, response.text);
        alert("We will contact you shortly thank you!");
      },
      (error) => {
        console.log("FAILED", error);
      }
    );
  } else {
    throw Error("From not complete");
  }
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

// slider
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider-btn-left");
  const btnRight = document.querySelector(".slider-btn-right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button aria-label="Links" class="dots-dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots-dot")
      .forEach((dot) => dot.classList.remove("dots-dot-active"));

    document
      .querySelector(`.dots-dot[data-slide="${slide}"]`)
      .classList.add("dots-dot-active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots-dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
