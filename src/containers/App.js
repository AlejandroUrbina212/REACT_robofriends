import React, {Component} from 'react';
/* connect method makes the component redux aware */
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { setSearchField, requestRobotsAction} from '../actions';
//import {robots} from './robots'; //destructure needed because it could be multiple variables in robots.js
// if there were multiple objects it would be import {robots, cats} from './robots'

// App.js inherits the state object provided by Provider in index.js this is implicit 
// in the call to mapStateProps in the bottom line of this file
const mapStateToProps = (state) => {
    return {
        searchField:  state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
// App.js inherits the dispatch provided by Provider in index.js due to the redux implementation
// this is implicit in the call to mapDispatchToProps in the bottom line of this file
// in this function we return the functions that contain the actions within them
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobotsAction(dispatch) 
    }
}
class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render(){
        const { searchField, onSearchChange, robots, isPending} = this.props;
        
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (isPending){
            return <h1>Loading Robots</h1>
        } else {
            return (
                <div className="tc">
                    <h2>Robofriends</h2>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);