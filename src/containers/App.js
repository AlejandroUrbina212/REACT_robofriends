import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import {robots} from './robots'; //destructure needed because it could be multiple variables in robots.js
// if there were multiple objects it would be import {robots, cats} from './robots'

// App has the state object, this will be useful to communicate multiple
// pure components that are childs of app, in order to use state, we have
// to edit APP component as a class, also, render should be present
class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        // fetch is a method of the window object AJAX
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users=>{
            this.setState({robots: users})
        });
    }
    // every self-build function should use arrow function like sintax
    onSearchChange = (event) => {
        // apropiate way to change state, of super
        this.setState({searchField: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0){
            return <h1>Loading Robots</h1>
        } else {
            return (
                <div className="tc">
                    <h2>Robofriends</h2>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
        
    }
}
export default App;