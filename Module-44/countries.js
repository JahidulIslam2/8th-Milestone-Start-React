
const restCountries =()=>{

    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data=>displayData(data))
};

restCountries()

const displayData=(countries)=>{
    const allCountriesHTML=countries.map(country => getCountryHTML(country))
    const getDiv=document.getElementById('div-id');
    getDiv.innerHTML=allCountriesHTML.join('');

};



const getCountryHTML=country=>{
    // console.log(country.flags.png)
    return `
            <div class="innerContainer">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}" alt="">
            </div>
    `
}



