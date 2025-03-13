import './App.css';
import Nonveg from '../components/Nonveg';
import Veg from '../components/Veg';
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';


import Login from '../pages/Login';  
import Cart from '../pages/Cart';   

function App() {
    const [mcart, setMcart] = useState([]);
    const updateCart = (callback) => {
        setMcart(prevCart => {
            const updatedCart = callback(prevCart);
            console.log("Updated Cart:", updatedCart);
            return updatedCart;
        });
    };


    const totalItems = mcart.length; 

    return (
        <div>
            <div className="head">
                <img className='m-2 ms-4 ' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto/f_auto/gigs/263641943/original/1fe346bd71e507cee93859c43d0241d9d801ef7c/do-creative-restaurant-company-coffee-food-custom-maker-logo-design.jpg" height={70} width={160} />
                <input className='h-50 m-3 ps-3 ' type="text" placeholder="🔍 Search for Biryani, Chinese, Soft Drinks, Desserts and More" />
                
                <Link to="/login" className="btn btn-dark h-50 m-3"><b>📝 Add Address</b></Link>
                
                <Link to="/cart" className="btn btn-dark h-50 m-3"><b>Go to 🛒 {totalItems}</b></Link>  
            </div>

            <Routes>
                <Route path="/" element={
                    <>
                        <div className='body1'>
                            <Nonveg updateCart={updateCart} cart={mcart} />
                        </div>
                        <div className='bg-dark p-2 text-white ps-5'><b>Veg Items</b></div>
                        <div className='body1'>
                            <Veg updateCart={updateCart} cart={mcart} />
                        </div>
                    </>
                } />
               <Route path="/login" element={<Login />} /> 
               <Route path="/cart" element={<Cart />} />  
            </Routes>

            <div className='bg-dark p-1 text-white ps-5 pt-5'><b><u>ABOUT</u></b></div>

            <div className='row bg-dark p-2 text-white ps-5 '>
                <p className='col-3'><h6>Contact Us</h6> mail : myhotel11@gmail.com <br />Ph.No : 9876543210 <br />FB : MyHotel_fb.com <br />Instagram : MyHotel_@tasty</p>
                <p className='col-3'><h6>Partner Apps</h6> @Swiggy <br />@Zomato <br />@Eat_sure <br /></p>
                <p className='col-3'><h6>Office Address</h6>H.NO : 2-22-11/34 <br />Chilkanagar, Uppal <br />Hyderabad<br />500039 <br />Telangana</p>
                <p className='col-3'><h6>Services</h6> @_help<br />@_complaint <br />@_refund <br /></p>
            </div>
        </div>
    );
}

export default App;
