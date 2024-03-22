
const link = "./data/members.json";
const spotlight = document.querySelector("#Spotlight");

const randomNumber = Math.floor(Math.random() * 9);

async function getBusinessData(){

    const response = await fetch(link);
    const data = await response.json();
    displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) =>{

    businesses.sort(() => Math.random() - 0.5);

    let count = 0;

    businesses.forEach((business) =>{
        if(count < 3){
            let div = document.createElement('div');
            div.classList.add('spotlight-div');
            let name = document.createElement('h2');
            let address = document.createElement('p');
            let number = document.createElement('p');
            let website = document.createElement('a');

            name.textContent = `${business.name}`;
            address.textContent = `${business.address}`;
            number.textContent = `${business.number}`;
            website.textContent = `${business.name}`;
            website.setAttribute('href',business.url);

            div.appendChild(name);
            div.appendChild(address);
            div.appendChild(number);
            div.appendChild(website);

            spotlight.appendChild(div);

            count++;
        } else{
            return;
        }
    });
}

getBusinessData();