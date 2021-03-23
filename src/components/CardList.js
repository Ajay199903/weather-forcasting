import React from 'react';
import Card from './Card';
const CardList = ({ cityWeather }) => {
    return (

        <Card 
            temp = {cityWeather.main.temp}
            weather = {cityWeather.weather[0].main}
            country = {cityWeather.sys.country}
            name = {cityWeather.name} 
        />
    );
}
export default CardList;