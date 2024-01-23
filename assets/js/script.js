
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Cria um elemento <a> (link)
    var downloadLink = document.createElement('a');

    // Define o atributo 'href' para o link direto do seu arquivo no Google Drive
    downloadLink.href = 'https://drive.google.com/file/d/1pMNjybfLyUut8GVjjZl5JDNzLjb_sCnp/view';

    // Define o atributo 'download' com o nome do arquivo que será baixado
    downloadLink.download = 'seu-cv.pdf';

    // Simula um clique no link para iniciar o download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove o link temporário do DOM
    document.body.removeChild(downloadLink);
});



function getProjects() {
  const urlGitHub = "https://api.github.com/users/SergioBerge/repos";
  var loadingElement = document.getElementById("loading");

  fetch(urlGitHub, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      showProjects(response);
      loadingElement.style.display = "none";
    })
    .catch((e) => {
      console.log(`Error -> ${e}`);
    });
}
function showProjects(data) {
  var listElement = document.getElementById("my-projects-list");
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    let a = document.createElement("a");
    a.href = data[i]["clone_url"];
    a.target = "_blank";
    a.title = data[i]["description"];
    let linkText = document.createTextNode(data[i]["name"]);
    a.appendChild(linkText);
    div.appendChild(a);
    listElement.appendChild(div);
  }
}
getProjects();



'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}