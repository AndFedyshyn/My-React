import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import User from "../user/User";
import {Route, Switch, withRouter} from "react-router-dom";
import './StyleSheetUsers.css';
import FullUser from "../full-user/FullUser";

class AllUsers extends Component {

    state = {users: []};
    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users});
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div className={'style'}>
                {users.map(value => <User key={value.id} item={value}/>)}

                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        const {match: {params: {id}}} = props;
                        return <FullUser {...props} key={id}/>;
                    }}/>
                </Switch>

            </div>
        );
    }
}

export default withRouter(AllUsers);