import React, {useState} from 'react';
import Person from './Person/Person'

const App = props => {
    const [personsState, setPersonState] = useState({
        persons: [
            {name: "Manish", age: 29},
            {name: "Guddi", age: 28},
        ],
        otherState: "someOtherState"
    });

    const [otherState, setOtherState] = useState("the state need not be an object");

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                {name: "Nana", age: 29},
                {name: "Bhauja", age: 28},
            ]
        })
        //After this call the otherState in our state object is removed, as unlike class components where setState merges the state, here
        //in react hooks, the state is replaced. So you either have to manually merge the other states, or the best practice is
        //to have separate useState calls for different states.
    }

    return (
        <div>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
            <button onClick={switchNameHandler}>Change Names</button>
        </div>
    )
};

export default App