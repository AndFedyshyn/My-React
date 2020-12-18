import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import './StyleSheetPost.css'

class Post extends Component {
    render() {

        let {item,match:{url}} = this.props;
        return (
            <div className={'post'}>
                {item.id}-{item.title}-{item.body}
                <Link to={`${url}/${item.id}`}>
                <button>info</button>
            </Link>
            </div>
        );
    }
}

export default withRouter(Post);