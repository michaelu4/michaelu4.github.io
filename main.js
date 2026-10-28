// Hero background photo + parallax: the photo moves slower than the page as you scroll.
// Skipped for users who prefer reduced motion.
(function () {
  var img = document.querySelector(".hero-bg-img");
  if (!img) return;

  // Only switch the photo on (and show its credit) once the file actually loads.
  var probe = new Image();
  probe.onload = function () { img.closest(".hero").classList.add("has-photo"); };
  probe.src = "assets/columbia.jpg";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var ticking = false;
  function update() {
    var y = Math.min(window.scrollY, window.innerHeight);
    img.style.transform = "translate3d(0," + (y * 0.3).toFixed(1) + "px,0)";
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
})();
