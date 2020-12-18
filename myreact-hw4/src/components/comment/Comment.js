import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import './StyleSheetComment.css'

class Comment extends Component {
    render() {
        let {item, match:{url}}=this.props;
        return (
            <div className={'comment'}>
                {item.id}-{item.name}
                <Link to={url + `/${item.id}`}><button>info</button></Link>
            </div>
        );
    }
}

export default withRouter(Comment);