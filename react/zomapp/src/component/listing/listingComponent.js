import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './listing.css';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter'

const base_url = "https://nodebackend-xprf.onrender.com/"

const Listing = () => {

    let params =useParams();

    const [restList,setRestList] = useState()

    let mealId = params.mealId;

    useEffect(() => {
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
        .then((res) => {
            setRestList(res.data)
        })
    },[])

    const setDataPerFilter = (data) => {
        setRestList(data)
    }

    return(
        <>
            <div className='row'>
                <div id="mainListing">
                    <div id="filter">
                        <CuisineFilter mealId={mealId}
                        restPerCuisine={(data) => {setDataPerFilter(data)}}/>
                        <hr/>
                        <CostFilter mealId={mealId}
                        restPerCost={(data) => {setDataPerFilter(data)}}/>
                    </div>
                    <ListingDisplay listData={restList}/>
                </div>
            </div>
        </>
    )
}

export default Listing