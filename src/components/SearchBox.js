import React from 'react';

const SearchBox = ({ options, searchChange, onSubmit }) => {
    return (
        <div className = 'center pa2'>
            <div className='center pa4 br3'>
                <input 
                    className = 'db center pa3 ba b--green bg-lightest-blue' 
                    type = 'search' 
                    placeholder = 'Search City'
                    onChange = { searchChange }
                    list = "city-list" 
                />
                <button 
                    className='w-30 grow f4 link ph3 pv2 dib white bg-red' 
                    onClick={onSubmit}
                >
                    Check Weather
                </button>
                </div>
            <datalist id="city-list">
                {
                    options.map((opt) => <option key={opt.id} value={opt.name} name={opt.name}></option>)
                }
            </datalist>
        </div>
    );
}

export default SearchBox;

