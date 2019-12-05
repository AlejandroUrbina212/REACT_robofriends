// CardList is a component that contains all the cards
import React from 'react';
import Card from './Card';


// dumb/pure components dont need to know anything other than the fact
// that they are pure functions that receive something and return something
const CardList = ({robots}) => {
    const cardArray = robots.map((user, i) =>{
        return (<Card 
            // every time a loop is executed there must be a key for the component
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} />
            );
    })
    return (
        <div>
            {cardArray}
        </div>
    );
}
export default CardList;