
document.addEventListener("DOMContentLoaded", () => {
  // --- Fade in <main> (safe) ---
  const main = document.querySelector("main");
  if (main) setTimeout(() => main.classList.add("visible"), 300);

  // --- Form validation + popup ---
  const form = document.getElementById("myForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return;
      }
      e.preventDefault();                 // remove this if you really want to submit
      alert("Your form has been submitted!");
      form.reset();
    });
  }

  // --- Image slider (no inline onclick) ---
  const sliderImg = document.getElementById("slider");
  const prevBtn   = document.getElementById("prevBtn");
  const nextBtn   = document.getElementById("nextBtn");

  if (sliderImg && prevBtn && nextBtn) {
    const images = [
      "week-3-images/slider1.png",
      "week-3-images/slider2.png",
      "week-3-images/slider3.png",
      "week-3-images/slider4.png",
      "week-3-images/slider5.png"

    ];

    let i = 0;
    const show = (n) => {
      i = (n + images.length) % images.length;  // wrap around
      sliderImg.src = images[i];
    };

    prevBtn.addEventListener("click", () => show(i - 1));
    nextBtn.addEventListener("click", () => show(i + 1));
    show(0); // ensure first image is shown
  }
});