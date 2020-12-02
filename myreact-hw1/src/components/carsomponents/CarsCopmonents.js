import React, {Component} from 'react';



class CarsCopmonents extends Component {
    render() {

        const {item} = this.props;

        return (
            <div>
                <h4>
                    {item.model}-{item.country}-{item.year}-{item.status.toString()}
                </h4>
            </div>
        );
    }
}

export default CarsCopmonents;