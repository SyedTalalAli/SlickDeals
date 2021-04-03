import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
const [{basket,user} , dispatch] = useStateValue();
// console.log("This is basket in Header ",basket.length);
const handleAuthentication = () =>{
    if (user){
auth.signOut();

    }
}
    return (
        <div className="row">
              <div class="col-sm-12 col-md-12">
        <div className="header">
            
            <Link to="/">

         <img  
        className="header_logo"
        src="https://slickdeals.net/blog/wp-content/uploads/2019/11/sd-20th-asset-hero-2.png" /> 
    </Link>
    <div class="col-sm-8 col-md-8">
            <div  className= "header_serach">
                <input class="form-control mr-lg-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class=" btn btn-warning btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
            </div></div>

            <div className="header_nav">
         
         <Link to ={!user && '/login'}>

                    <div onClick={handleAuthentication} className="header_option"> 
                                <span className="header_optionLineOne">
                                 Hello {!user ? 'Guest' : 
                                 user.email} 
                                </span> 
                                <span className="header_optionLineTwo">
                                {user ? 'Sign out': 'Sign in'} 
                                </span> 

                    </div>
                    </Link>

                    <div className="header_option"> 
                                    <span className="header_optionLineOne">
                                 Returns
                                </span> 
                                <span className="header_optionLineTwo">
                                Orders
                                </span>
                                

                    </div>
                             <div className="header_option"> 
                                 <span className="header_optionLineOne">  Your </span> 
                                <span className="header_optionLineTwo">Deals </span>    
                                </div>
                            <Link to="checkout">
                            <div className="header_optionBasket">
                                <ShoppingBasketIcon  />
                                <span className="header_optionLineTwo
                                 header_basketCount">
                                     {basket.length}
                                         </span>
                                </div>
                            </Link>
            </div>

</div>    </div>
    </div>
    )
}

export default Header
