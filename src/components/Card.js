import React from 'react'

const Card = ({ name, country, temp, weather }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <h2>{name}</h2>
                <p>{country}</p>
                <p>{temp}</p>
                <p>{weather}</p>
            </div>
        </div>
    );
}

export default Card;