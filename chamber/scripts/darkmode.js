
const darkModeButton = document.querySelector("#DarkModeButton");
const body = document.querySelector("body");

darkModeButton.addEventListener('click', () => {
    body.classList.toggle("darkMode");
});