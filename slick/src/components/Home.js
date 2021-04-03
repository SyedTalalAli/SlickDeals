import React  from 'react'
 import './Home.css'
 import Product from './Product'
 import {productData} from './../assets/data'
import {Carousel} from "react-bootstrap"
 function Home() {


    const [data,setData]=React.useState(productData);

// const element = data.sort(() => Math.random() - Math.random())
//                      .find(() => true);

//console.log(element);
  
return (

  
        <div className="home">
	<div class="col-sm-12 col-md-12">
  
            <div className="home_container">
            
                  
           <Carousel>
  <Carousel.Item>
    <div className="home_image">
    <img
      className="home_image"
      src="https://slickdeals.net/blog/wp-content/uploads/2020/02/20-best-anytime-fitness-membership-deal-gym-exterior-hero-1.jpg"
      alt="First slide"
    /></div>

  </Carousel.Item>
  <Carousel.Item>
    <div className="home_image">
    <img
      className="d-block w-100"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
      alt="Second slide"
    />
    </div>

    
  </Carousel.Item>
  <Carousel.Item>
    <div className="home_image">
    <img
      className="d-block w-100"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
      alt="Third slide"
    />
    </div>

    
  </Carousel.Item>

  <Carousel.Item>
    <div className="home_image">
    <img
      className="d-block w-100"
      src="https://www.practicalecommerce.com/wp-content/uploads/2017/03/Savings.com_2-570x261.jpg"
      alt="Third slide"
    />
    </div>

    
  </Carousel.Item>

</Carousel>





              
      
            <div className="row">
            <div class="col-sm-6 col-md-6">
            <Product 
            id="0"
            title="Sony Tv"
            price={3400}
            rating={2}
            image="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/1/1191975-2.jpg"
            // id={data[1].id}
            // title={data[1].title}
            // price={data[1].price}
            // rating={data[1].rating}
            // image={data[1].image}
            
            />
</div>            

            <div class="col-sm-6 col-md-6">
           
              <Product
              id="1"
            title="Hp Laptop"
            price={1294.50}
            rating={4}
            image="https://www.junglescout.com/wp-content/uploads/2020/06/homepage-laptop-floating-mockup.png"
              
        //    id={data[2].id}
        //     title={data[2].title}
        //     price={data[2].price}
        //     rating={data[2].rating}
        //     image={data[2].image}
            
            />
        
 </div>                  </div>
            <div className="row">
            <div class="col-sm-4 col-md-4">

                        <Product
            //  id={data[3].id}
            // title={data[3].title}
            // price={data[3].price}
            // rating={data[3].rating}
            // image={data[3].image}
            id="3"
            title="Dell Laptop  "
            price={436.5}
            rating={4}
            image="https://www.sourcemogul.com/wp-content/uploads/2020/11/devices-results-494x400.png"
            
            />
        </div>
            <div class="col-sm-4 col-md-4">

            <Product 
            id="4"
            title="Two in one Deal "
            price={53.8}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img15/rcx-events/AurDikhaoStore/400x400_Vodoo_1.jpg"
            

            // id={data[4].id}
            // title={data[4].title}
            // price={data[4].price}
            // rating={data[4].rating}
            // image={data[4].image}
            
            /></div>
            <div class="col-sm-4 col-md-4">

            <Product
            


            id="5"
            title="Head Phones "
            price={358}
            rating={5}
            image="https://lh3.googleusercontent.com/DaeHJ1cE8YmvDBsBfBOxacn27nsLy35yHgxW41xMHbQbgmCrEd6GAMYWBY9ucReiZDyh6hHJOFQ6RDFx3ByAX0G40D56DDMsDzlZLQ=w262-l90-sg-rj"
        /></div>
            </div>
                {/* 
                {data.map((item,index)=>{
                    return             <div className="home_row">
 
                    <Product 
                   
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}/>
           </div>
                   })} */}
                   


        
            

                    <div className="row">
            <div class="col-sm-2 col-md-2">
            <Product 
            id="7"
            title="E-Remote"
            price={3.3}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL320_SR320,320_.jpg"
            /></div>
            <div class="col-sm-3 col-md-3">

<Product 
            id="8"
            title="Dell Laptop"
            price={323}
            rating={2}
            image="data:image/jpeg;base64,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"
            /></div>
           
            <div class="col-sm-4 col-md-4">

<Product 
            id="10"
            title="Honda Car"
            price={500000}
            rating={5}
            image="data:image/jpeg;base64,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"
            />
            </div>
            <div class="col-sm-3 col-md-3">

<Product 
            id="9"
            title="Daraz Iphone"
            price={1000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71UlTDLC1cL._AC_SX425_.jpg"
            /></div>
           

            </div>
                        





	
	<section id="footer">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-sm-12 col-sm-4 col-md-4">
					<h5>Get to Know Us</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Careers</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>About us</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Investor Relations</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i> Devices</a></li>
						
					</ul>
				</div>
				<div class="col-sm-12 col-sm-4 col-md-4">
					<h5>Make Money with Us</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Sell </a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Sell Your Services on SlickDeals</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Sell on SlickDeals Business</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Sell Your Apps on SlickDeals</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Become an Affiliate</a></li>
            <li><a href="#"><i class="fa fa-angle-double-right"></i>Advertise Your Products</a></li>
            <li><a href="#"><i class="fa fa-angle-double-right"></i>Self-Publish with Us</a></li>
            <li><a href="#"><i class="fa fa-angle-double-right"></i>Become an SlickDeals Vendor</a></li>
            <li><a href="#"><i class="fa fa-angle-double-right"></i>Sell Your Subscription on SlickDeals
</a></li>
					</ul>
				</div>
				<div class="col-sm-12 col-sm-4 col-md-4">
					<h5>SlickDeals Payment Products</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="#"><i class="fa fa-angle-double-right"></i>          SlickDeals Rewards Visa Signature Cards
</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>SlickDeals.com Store Card
</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>SlickDeals.com Corporate Credit Line
</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i>Shop with Points
</a></li>

<li><a href="#"><i class="fa fa-angle-double-right"></i>Credit Card Marketplace

</a></li>
<li><a href="#"><i class="fa fa-angle-double-right"></i>Reload Your Balance

</a></li>
<li><a href="#"><i class="fa fa-angle-double-right"></i>SlickDeals Currency Converter

</a></li>
						</ul>
				</div>
			</div>
<div class="row_button">
        <div class="col-sm-12 col-sm-12 col-md-12 mt-6 mt-sm-6">
          <a class="select">
               <button>     <i class="fa fa-globe"> English</i></button> </a>
<a class="select">
<i class="flag-icon-us"></i>
<button>United States </button>
</a>
        </div>
        </div>
			
			
			<div class="row">
				<div class="col-sm-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="#" ><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div class="row">
				<div class="col-sm-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p class="h6">© 1996-2017, SlickDeals.com, Inc. or its affiliates<a class="text-green ml-2" href="#" >SlickDeals</a></p>
                   <p><u><a href="#">Conditions of Use          </a></u>  <u><a href="#">Privacy</a></u> <u><a href="#">Interest-Based Ads</a></u></p>
        </div>
				<hr/>
			</div>	

	</section>


            </div>






</div>

	
        </div>
    )
}

export default Home

