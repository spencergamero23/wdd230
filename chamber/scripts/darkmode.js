
function toggleTheme() {
    var body = document.body;
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');
    var main = document.querySelector('main');
    var divp = document.querySelectorAll('p');
    console.log(divp);
    divp.forEach((x)=>{
        x.classList.toggle('dark-mode')
    });

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    
}