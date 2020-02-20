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
    };

    deletePesonHanlder = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        })
    };

    togglePesonHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    };

    render() {
        let personsDiv = null
        if (this.state.showPersons) {
            personsDiv = (
                <div>
                    {this.state.persons.map((person, index) =>
                        <Person
                            name={person.name}
                            age={person.age}
                            click={() => this.deletePesonHanlder(index)}
                            changed={this.nameChangeHandler}
                        />
                    )}

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
