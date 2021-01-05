import React from "react";



const Form = (props) => {

   
    const getWeather  = async (e) => { 
        e.preventDefault(); 
        let city = e.target.city.value;  // i removed elements, it was e.target.elements.city.value;
        let country =  e.target.elements.country.value;
        console.log(city, country)
        let apiKey = 'get you own'
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`)
        const data = await response.json();
        props.changeState(data);
     
    }

    
    

    return ( 
        <form onSubmit={getWeather}>
            <input type="text" required name='city' placeholder='Enter a city name'/>
            <input type="text"  required name='country' placeholder='Enter a country name'/>
            <button>Get Weather</button>
        </form>

     );
}
 
export default Form;