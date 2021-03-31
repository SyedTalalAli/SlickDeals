import React from 'react'
import "./nav.css"
function nav() {
    return (
        <div className="row">
<div className="col-sm-12 col-md-12">
    <div className="header">
        
    <img  
        className="header_logo"
        src="https://img.favpng.com/22/19/9/logo-slickdeals-brand-banner-product-png-favpng-pEKBm1jWVMAFKsXpsV5EXcdWv.jpg" /> 
        
<div className="col-sm-8 col-md-8">
    <div className="header_serach">
    <input class="form-control mr-lg-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class=" btn btn-warning btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search"></i>Click</button>
    </div>
</div>
<div className="header_nav">
<button class=" btn btn-warning btn-outline-success my-2 my-sm-0" type="submit"> Login</button>
<button class=" btn btn-warning btn-outline-success my-2 my-sm-0" type="submit"> SingUp</button>


</div>


    </div>
</div>

        </div>
    )
}

export default nav
