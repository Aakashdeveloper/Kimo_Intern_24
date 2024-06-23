import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from './Footer';
import Home from './Home/Home';
import Main from './main';
import Listing from './listing/listingComponent';

const Routing = () => {
    return(
        <>
           
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="listing" element={<Listing/>}/>
                    </Route>
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}

export default Routing