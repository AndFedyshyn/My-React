import React, {Component} from 'react';
import Post from "../one-post/Post";

class AllPosts extends Component {




    state = {allPosts: []};


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                this.setState({allPosts: value})
            })
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