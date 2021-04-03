import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal"

function Checkout() {

    const [{basket, user}, dispath]= useStateValue();
    return (
        <div className="row">

                      <div class="col-sm-12 col-md-12">

        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad"
            src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
            alt=""/>
            <div>
                <h3>Hello,{user?.email}</h3>
            <h2 className="checkout_title">
                Your Shopping Basket</h2>
                {basket.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    
                    />

                ))}
                {/* BasketItem */}
                {/* BasketItem */}
            </div>  
            </div>



            <div className="checkout_right">
          <Subtotal />


            </div>
            
</div>            </div>

        </div>
            
    )
}

export default Checkout
