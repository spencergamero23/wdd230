
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

 async function getProphetData(){

    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) =>{
    prophets.foreach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        fullName.textContent = '${prophet.name} ${prophet.lastname}';
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', 'Prophet of ${prohet.name} ${prophet.lastname}');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('src', prophet.imageurl);
    });
}

getProphetData();