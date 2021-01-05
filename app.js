import React, { Component } from "react";
import Weather from './components/Weather';
import Form from './components/Form';
import 'regenerator-runtime/runtime';


class App extends Component { 

    state={ 
        CityName:'',
        Country:'',
        Temperature:'',
        Humidity:'',
        Description:'',
        Error:''
    }



    changeState = (data) => {  // this date came from From.js
            console.log(data);
        
        
         if(data){                  // that might be also, if(city && country) {, if you can defined it here.
          this.setState({
                CityName:data.name,
                Country:data.sys.country,
                Temperature:data.main.temp,
                Humidity:data.main.humidity,
                Description:data.weather[0].description,
                Error:'' })
            } else { 
               this.setState({
                CityName:'',
                Country:'',
                Temperature:'',
                Humidity:'',
                Description:'',
                Error:'Please Enter a Valid Info.'
                })

            }  }

render () {
            
    return (
        <div className='App'>
            <Form changeState={this.changeState}/>
            <Weather 
                CityName={this.state.CityName}
                Country={this.state.Country}
                Temperature={this.state.Temperature}
                Humidity={this.state.Humidity}
                Description={this.state.Description}
                Error={this.state.Error}
                />
        </div>
        
     
    )
    }}


    
export default App




