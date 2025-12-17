window.addEventListener("scroll", () => {
  const middleNav = document.querySelector(".middle-nav");

  if (window.scrollY > 50) {
    middleNav.classList.add("sticky");
  } else {
    middleNav.classList.remove("sticky");
  }
});

const popupButtons = [
  ".small-box",
  ".banner-box",
  ".explore-btn",
  ".ethos-btn",
];

popupButtons.forEach((selector) => {
  document.querySelectorAll(selector).forEach((btn) => {
    btn.addEventListener("click", () => {
      Swal.fire({
        icon: "info",
        title: "Welcome!",
        text: "Please login for more details.",
        confirmButtonText: "OK",
        timer: 3000,
      });
    });
  });
});

document.querySelectorAll(".gift-card button").forEach((btn) => {
  btn.addEventListener("click", () => {
    Swal.fire({
      icon: "success",
      title: "WelCome Users!",
      text: "Sign in to unlock exclusive gift options!",
      confirmButtonText: "OK",
      timer: 3500,
    });
  });
});
