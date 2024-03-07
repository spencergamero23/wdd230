
const baseURL = "https://spencergamero23.github.io/wdd230/";
const linksURL= "./data/links.json";
const links = document.querySelector('#activities')

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let listItem = document.createElement('li');
        listItem.textContent = "Lesson " + week.lesson + ": ";
        week.links.forEach((link) => {
            let linkElement = document.createElement('a');
            linkElement.textContent = link.title + " | ";
            linkElement.setAttribute('href', link.url);
            listItem.appendChild(linkElement);
            links.appendChild(listItem);
        });
    });
}

getLinks();