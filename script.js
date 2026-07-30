document.documentElement.style.scrollBehavior = "smooth";
let year = new Date().getFullYear();
document.getElementById("age-text").innerText = year - 2013 + " years old";
document.getElementById("current-year").innerText = year;
