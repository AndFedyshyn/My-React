import React, {Component} from 'react';
import Post from "../one-post/Post";
import {PostService} from "../services/PostService";

class AllPosts extends Component {

    postService= new PostService();



    state = {allPosts: []};


    componentDidMount() {
        this.postService.getAllPosts().then(value => this.setState({allPosts: value}))
    }

    render() {
        const {allPosts} =this.state;

        return (
            <div>
                {
                    allPosts.map(value => (<Post item={value} key={value.id}/>))
                }

            </div>
        );
    }
}

export default AllPosts;