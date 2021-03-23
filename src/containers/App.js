import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import cityInfo from './city_list.json';

const API_KEY = "Past your API key here";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cityList: cityInfo.map(city => { 
                return { id: city.id, name: city.name }; 
            } ),
            id: null,
            cityWeather: {},
            searchfield: '',
            options: []
        }
    }
    onSubmit = () => {
        if(this.state.id !== null)
        {
            fetch(`https://api.openweathermap.org/data/2.5/weather?id=${this.state.id}&appid=${API_KEY}`)
            .then(resp => resp.json())
            .then(city => this.setState({cityWeather: city}))
            .catch(err => console.log("Unable to use API"));
        }

    }
    onSearchChange = (event) => {
        let option = this.state.cityList.filter(city =>  
            city.name.toLowerCase().startsWith(event.target.value.toLowerCase())
        );
        option = option.slice(0,Math.min(10,option.length));
        let id = null;
        for(let i = 0; i < option.length; i++)
        {
            if(option[i].name.toLowerCase() === event.target.value.toLowerCase())
            {
                id = option[i].id;
                break;
            }
        }
        this.setState({
            options: option,
            searchfield: event.target.value,
            id: id
        });
    }
    render() {
        const { searchfield, cityWeather } = this.state;
        return (
            <div className = 'tc'>
                <h1 className = 'f1'>Weather Forcasting</h1>
                <SearchBox searchChange = {this.onSearchChange} options = {this.state.options} onSubmit = {this.onSubmit}/>
                {
                    JSON.stringify(cityWeather) === '{}'
                    ? <h1 className = 'f1'>{ searchfield } City Not Found</h1>
                    : <CardList cityWeather = { cityWeather } />
                }
            </div>
        );
    }
}
export default App;