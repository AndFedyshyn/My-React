import React, {Component} from 'react';
import Users from "./components/Users";
import Form from "./components/Form";
import customContext from "./components/ContextService";

export const Context = React.createContext();
class App extends Component {

    state = {users: []};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                this.setState({users: value})
            });
    }

    render() {
        const {users} = this.state;
        return (
            <Context.Provider value={'isContext'} >
                <div>
                    <Users items={users}/>
                    <Form/>
                </div>
            </Context.Provider>

        );
    }
}


export default App;