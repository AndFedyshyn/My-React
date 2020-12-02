import React, {Component} from 'react';
import CarsCopmonents from "./components/carsomponents/CarsCopmonents";
import {cars} from "./data/cars/CarsData";
import UsersComponents from "./components/userscomponents/UsersComponents";
import {users} from "./data/users/UsersData";
import "./App.css"

class App extends Component {
    render() {

        return (
<div className={'allComponents'}>

    <div className={'allCars'}>
        {
            cars.map((item,i) =>{
                    return (<CarsCopmonents item={item} key={i} />)
                }
            )
        }
    </div>

    <div className={'allUsers'}>
        {
            users.map((item,i) =>{
                    return (<UsersComponents item={item} key={i} />)
                }
            )
        }
    </div>

</div>


        );
    }
}

export default App;