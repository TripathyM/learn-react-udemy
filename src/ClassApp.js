import React, {Component} from "react";
import './App.css';
import Person from "./Person/Person";

class ClassApp extends Component {
    state = {
        persons: [
            {name: "Mama", age: 29},
            {name: "Papa", age: 28},
        ],
        otherState: "someOtherState",
        showPersons: true
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: "Sasu", age: 29},
                {name: newName, age: 28},
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: "Mama", age: 29},
                {name: event.target.value, age: 28},
            ]
        })
    }

    togglePesonHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    }

    render() {
        let personsDiv = null
        if (this.state.showPersons) {
            personsDiv = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        click={this.switchNameHandler.bind(this, "Haladi")}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={() => this.switchNameHandler("Basanta")}
                        changed={this.nameChangeHandler}
                    />
                    {/*The above can be a convenient syntax but is not recommended
                    as react might end up re-rendering a log. TODO: Google this to find more*/}

                    <button onClick={this.switchNameHandler.bind(this, "Sasur")}>Change Names</button>
                </div>
            )
        }
        return (
            <div>
                <button onClick={this.togglePesonHandler}>Show/Hide Persons</button>
                {personsDiv}
            </div>
        )
    }
}

export default ClassApp;
