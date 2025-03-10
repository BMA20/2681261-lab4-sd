async function getData(CountryName) {
    const url = "https://restcountries.com/v3.1/name/"+CountryName;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new error('Response status: ${response.status}');
      }
     
      const countries = await response.json(); 

      countries.forEach(information => {
        const Capital =  information.capital[0];
        const population =  information.population;
        const region  = information.region;
        const Flag   =  information.flags.png;

       
        const country = document.getElementById("country-info");
        
        country.innerHTML = `
        <p><strong>Capital:</strong> ${Capital}</p>
        <p><strong>Population</strong> ${population}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Flag:</strong> <img src ="${Flag}" alt ="Flag"> </p>`;

        const borders = document.getElementById("bordering-countries");
        
        borders.innerHTML = `
        <p><strong>Capital:</strong> ${Capital}</p>
        <p><strong>Population</strong> ${population}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Flag:</strong> <img src ="${Flag}" alt ="Flag"> </p>`;
   
      });
      console.log(country);

    

    } catch (error) {
      console.error(error.message);
    }
  }
    document.getElementById('Submit_Country').addEventListener('click', function(){
    const input_F = document.getElementById('inputbox');
    const Country_Name = input_F.value.trim();

    if(Country_Name){
        getData(Country_Name)
    }else{
        alert('Please enter a country');
    }
});
