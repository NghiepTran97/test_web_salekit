//dropdownLanguage
var button = document.getElementById("dropdownLanguage");
var dropdownContent = document.getElementById("dropdownContent");

button.addEventListener("click", function() {
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
});

var languages = document.getElementsByClassName("language");
console.log(languages);
for (var i = 0; i < languages.length; i++) {
  languages[i].addEventListener("click", function() {
    var selectedValue = this.getAttribute("data-value");
    button.innerText = selectedValue;
    dropdownContent.style.display = "none";
  });
}
//scoll
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var body = document.querySelector('.body-wrapper');
  
    if (window.scrollY > body.offsetTop) {
      header.classList.add('header-fixed');
    } else {
      header.classList.remove('header-fixed');
    }
  });
  //dropdownMenu
var menuBtn = document.getElementById("dropdownMenu");
var dropdownMenu = document.getElementById("dropdownMenu");
menuBtn.addEventListener("click", function() {
    dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
});
menuBtn.addEventListener("click", function(event) { 
    dropdownMenu.classList.add('show-menu');
});