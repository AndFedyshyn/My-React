import React, {Component} from 'react';
import './StylePost.css'
class Post extends Component {


    state = {
        isVisible: true,
        setIsVisible: () =>{
            this.setState({isVisible:!this.state.isVisible})
        }};



    render() {

        const {item}= this.props;
        const {isVisible,setIsVisible}= this.state;
        
        if (isVisible) {
            return <div className={'post'}>
                         {item.userId}-{item.id}-{item.title}-{item.body}
                         <button className={'btn'} onClick={
                             () => setIsVisible()
                         }>Delete</button>
            </div>
        }else{
            return null
        }

    }
}

export default Post;