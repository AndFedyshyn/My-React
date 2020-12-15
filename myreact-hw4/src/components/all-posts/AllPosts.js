import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import {Route, Switch, withRouter} from "react-router-dom";
import Post from "../post/Post";
import FullPost from "../full-post/FullPost";


class AllPosts extends Component {
    state = {posts: []};
    postService = new PostService();

    async componentDidMount() {

        let posts = await this.postService.getAllPosts();
        this.setState({posts});
    }

    render() {
        let {posts} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {posts.map(value => <Post item={value} key={value.id}/>)}

                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        const {match: {params: {id}}} = props
                        return <FullPost {...props} key={id}/>
                    }}/>
                </Switch>

            </div>
        );
    }
}

export default withRouter(AllPosts);