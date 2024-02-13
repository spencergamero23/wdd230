
function toggleTheme() {
    var body = document.body;
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');
    var main = document.querySelector('main');
    
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    divp.classList.toggle('dark-mode');
    
}