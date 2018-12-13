// Variable nav bar, barnd, menu
var navbarTarget = document.getElementsByTagName("nav")[0];
var brandTarget = document.getElementsByClassName("nav-brand");
var menuTarget = document.getElementsByClassName("nav-menu");
// ================================================================================

// Menambah EventListener (SCROLL)
// addEventListener("scroll", () => {});
// yang akan dijalankan ketika window di scroll
window.addEventListener("scroll", () => {
  // Mengecek posisi window saat di scroll
  if (window.pageYOffset > 0) {
    // Menambah class pada element di bawah
    navbarTarget.classList.add("dark");
    brandTarget[0].classList.add("white");
    menuTarget[0].classList.add("icon-light");
    // ================================================================================
  } else {
    // Menghapus class pada element di bawah
    navbarTarget.classList.remove("dark");
    brandTarget[0].classList.remove("white");
    menuTarget[0].classList.remove("icon-light");
    // ================================================================================
  }
  // ================================================================================
});
// ================================================================================

// Variable menu, nav-hide
var menuTarget = document.getElementsByClassName("nav-menu");
var navHideTarget = document.getElementsByClassName("nav-hide");
// ================================================================================

// Menambah EventListener (CLICK)
// addEventListener("click", () => {});
menuTarget[0].addEventListener("click", () => {
  navHideTarget[0].style.transform = "translateX(0)";
});

navHideTarget[0].addEventListener("click", () => {
  navHideTarget[0].style.transform = "translateX(100%)";
});
// ================================================================================
