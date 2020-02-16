import React from 'react';
import "./weather.style.css";
const Weather=props=>{
    return(
        <div className="container text-light">
        <div className="Card pt-4">
            <h1>{props.city}</h1>
            <h5 className="py-4">
                <i className={`wi ${props.weatherIcon} display-1`}/>           
            </h5>
            {props.temp_celcius?(<h1 className="py-2">{props.temp_celcius}&deg;</h1>):null}

            {/* show max and min temp */}
            {minmaxTemp(props.temp_min, props.temp_max)}

            <h1 className="py-3">{props.description}</h1>
            </div>
        </div>
    );
};

function minmaxTemp(min, max){
    if (min && max){
        return (
            <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
        );
    }
}
export default Weather;