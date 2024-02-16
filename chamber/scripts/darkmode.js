
function toggleTheme() {
    var body = document.body;
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');
    var main = document.querySelector('main');
    var divp = document.querySelectorAll('div p');
    var nava = document.querySelectorAll('a');
    var nav = document.querySelector('nav');
    nava.forEach((x)=>{
        x.classList.toggle('dark-mode')
    });
    console.log(divp);
    divp.forEach((x)=>{
        x.classList.toggle('dark-mode')
    });

    nav.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    
}