import React, {Component} from 'react';

class UserNumber extends Component {
    render() {
        const {userId} =this.props;
        return (
            <div>
                {<h2><i>User Post №</i>{userId}</h2>}
            </div>
        );
    }
}

export default UserNumber;