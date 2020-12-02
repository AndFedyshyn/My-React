import React, {Component} from 'react';

class UsersComponents extends Component {
    render() {

        const {item} = this.props;

        return (
            <div>
                <h4>
                    {item.name}-{item.age}-{item.status.toString()}
                </h4>
            </div>
        );
    }
}
export default UsersComponents;