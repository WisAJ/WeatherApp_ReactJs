import React from "react";

const Weather = (props) => {

  
    return ( 
        <div className='App'>
            {props.CityName && <p>City Name: {props.CityName}</p>}           
            {props.Country && <p>Country: {props.Country}</p>   }          
            {props.Temperature && <p>Temps: {props.Temperature}</p>}
            {props.Humidity && <p>Humidity: {props.Humidity}</p>  }           
            {props.Description &&<p> Description: {props.Description}</p>}
            {props.Error &&  <p>{props.Error}</p>   }       
        </div>
    );
}
 
export default Weather;