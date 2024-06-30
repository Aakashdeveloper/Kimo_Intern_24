import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from './Footer';
import Home from './Home/Home';
import Main from './main';
import Listing from './listing/listingComponent';
import DetailDisplay from './details/detailLogic';
import PlaceOrder from './Orders/PlaceOrder';

const Routing = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="listing/:mealId" element={<Listing/>}/>
                        <Route path="details" element={<DetailDisplay/>}/>
                        <Route path="placeOrder/:restName" element={<PlaceOrder/>}/>
                    </Route>
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}

export default Routing