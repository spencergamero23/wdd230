
const url = "./data/members.json";
const cards = document.querySelector('#cards');
const main = document.querySelector('main');

async function getBusinessData(){

    const response = await fetch(url);
    const data = await response.json();
    displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) =>{
    businesses.forEach((business) =>{
        let card = document.createElement('section');
        card.classList.add('card');
        let name = document.createElement('h2');
        let picture = document.createElement('img');
        let address = document.createElement('p');
        let number = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('p');

        name.textContent = `${business.name}`;
        picture.setAttribute('src',business.image);
        picture.setAttribute('alt',`Image of ${business.name}`);
        picture.setAttribute('loading','lazy');
        picture.setAttribute('width', '340');
        picture.setAttribute('height', '440');
        address.textContent = `${business.address}`;
        number.textContent = `${business.number}`;
        website.textContent = `${business.name}`;
        website.setAttribute('href',business.url);
        membership.textContent = `${business.membership}`;

        card.appendChild(name);
        card.appendChild(picture);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);
        card.appendChild(membership);

        cards.appendChild(card);
    });

}

getBusinessData();

document.querySelector('#GridButton').addEventListener('click', () => {
    main.classList.remove('list');
    main.classList.add('grid');
});

document.querySelector('#LineItemButton').addEventListener('click', () => {
    main.classList.remove('grid');
    main.classList.add('list');
})