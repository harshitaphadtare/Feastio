import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);

    const filteredFoodList = food_list.filter(
        (item) => category === "All" || item.category === category
    );

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {filteredFoodList.map((item,index)=>{
                   
                    return <FoodItem 
                    key = {index}
                    id = {item._id}
                    name = {item.name}
                    description = {item.description}
                    nutrients = {item.nutrients}
                    price = {item.price}
                    image = {item.image}
                    /> 
                    
                })}
            </div>
        </div>
    )
}

export default FoodDisplay;

