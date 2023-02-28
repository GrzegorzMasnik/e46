console.log("Hello world!");

let buttonThemeChangeElement = document.querySelector(".js-buttonThemeChange");
let bodyDarkElement = document.querySelector(".js-bodyDark");
let themeNameElement = document.querySelector(".js-themeName")

buttonThemeChangeElement.addEventListener("click", () => {
  bodyDarkElement.classList.toggle("body--darker");

  themeNameElement.innerText = bodyDarkElement.classList.contains("body--darker") ? "jaśniejszy" : "ciemniejszy";
});


let buttonPhotoElement = document.querySelector(".js-buttonPhoto");
let photoElement = document.querySelector(".js-photo");
let photoVisibilityElement = document.querySelector(".js-PhotoVisibility");

buttonPhotoElement.addEventListener("click", () => {
  photoElement.classList.toggle("section__photo--hide");

  if(photoElement.classList.contains("section__photo--hide")) {
    photoVisibilityElement.innerText = "Pokaż";
  } else {
    photoVisibilityElement.innerText = "Ukryj";
  }
});