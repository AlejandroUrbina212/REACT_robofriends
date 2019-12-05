import React from 'react';

// curly brackets stand for js expressions
// simplest way of destructuring (directly from the parameter)
function Card ({name, email, id}) {
    // simpler way of destructuring (review ES6)
    //const {name, email, id} = props;

    // Card function can only return one element
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;