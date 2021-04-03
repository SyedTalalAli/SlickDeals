import React from 'react'
import  './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title,price,rating,image}) {
    
    const [{basket} ,dispath] = useStateValue();
    // console.log("This is basket in Product ==>",basket)
    const addToBasket =() =>{
        //dispatch the item into the datalayer
        dispath ({
        type: "ADD_TO_BASKET",
        item:{
            id: id,
            title: title,
            image : image,
            price : price,
            rating : rating,
},

        });
    };

    return (
        <div class="product">
            <div class="product_info">
            <p> {title}</p>
            <p class="product_price">
            <small>$</small>
            <strong>{price} </strong></p>
<div class="product_rating">
   
   { Array (rating).fill().map((_,i) => (
            <p>⭐</p>

   ))}
    
    
</div>
 </div>
    
    
    
       <img 
       src={image} 
    alt="" />
    <div>
    <button id="likebtn" > <i className="fa fa-thumbs-up"></i></button>
    
    <button id="likebtn"> <i className="fa fa-thumbs-down"></i></button>
    
    </div><button class="btn btn-warning" onClick={addToBasket }>Add to Basket</button>
        </div>
    
    )
}

export default Product



