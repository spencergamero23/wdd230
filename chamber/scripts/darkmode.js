const darkModeButton = document.querySelector("#DarkModeButton");
const body = document.body;

// Check for saved 'darkMode' in localStorage
const darkMode = localStorage.getItem('darkMode');

if (darkMode === 'true') {
    body.classList.add('darkMode');
}

darkModeButton.addEventListener('click', () => {
    body.classList.toggle("darkMode");

    // Save the current preference to localStorage
    localStorage.setItem('darkMode', body.classList.contains('darkMode'));
});
