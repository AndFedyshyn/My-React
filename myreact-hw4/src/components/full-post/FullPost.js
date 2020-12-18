import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import {withRouter} from "react-router-dom";

class FullPost extends Component {

    postService = new PostService()
    state = {post: null}

    async componentDidMount() {
        const {match: {params: {id}}} = this.props;
        const post = await this.postService.post(id)
        this.setState({post})
    }

    render() {
        let {post} = this.state;
        return (
            <div>
                {post && <div>
                    <p>{post.id}-{post.title}</p>
                    <p>{post.body}</p>
                </div>
                }
            </div>
        );
    }
}

export default withRouter(FullPost);