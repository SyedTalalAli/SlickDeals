 import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from  "react-currency-format";
import { useStateValue} from "./StateProvider";
import {getBasketTotal} from './reducer';
function Subtotal() {

const [{basket} , dispath] = useStateValue();
    
    return (
        <div className="Subtotal">
            <CurrencyFormat 
            
            renderText={(value)=>(
                    <>
                    <p>
                     
                    {/* Part  of the Homework    */}
                    Subtotal ({basket.length}):<strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" /> This Order contains a gift 
                    </small>
                    </>
                    )}
                decinalScale={2}
                value={getBasketTotal(basket)} //part of homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
