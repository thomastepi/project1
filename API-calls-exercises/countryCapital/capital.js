const div = document.querySelector('.my-div');


const url = 'https://restcountries.com/v2/all';

async function getAllCountriesApi() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


    data.forEach(element => {
        const newTag = document.createElement('li');
        newTag.innerHTML = element.name + ': ' + element.capital;
        div.appendChild(newTag);
    });
}
getAllCountriesApi();

