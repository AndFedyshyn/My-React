import React, {Component} from 'react';
import FullUsers from "./FullUsers";

class Users extends Component {


    render() {

        let {items:users} = this.props;

        return (
            <div>
                <FullUsers items={users}/>
            </div>
        );
    }
}

export default Users;