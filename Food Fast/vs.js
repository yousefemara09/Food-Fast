document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumb");
  const mainImg = document.querySelector(".main-img");
  const sliderNumber = document.querySelector(".slider-number");
  const dots = document.querySelectorAll(".dot");

  thumbnails.forEach((ele, index) => {
    ele.addEventListener("click", function () {
      thumbnails.forEach((ele) => ele.classList.remove("active"));
      ele.classList.add("active");
      mainImg.src = ele.getAttribute("data-image");
      sliderNumber.textContent = ele.getAttribute("data-slide");
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[index].classList.add("active");
    });
  });
});
