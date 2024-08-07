import React,{useState,useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay'

const url = "https://nodebackend-xprf.onrender.com/quicksearch"

const QuickSearch = () => {

    const [mealType,setMealType] = useState([])

    useEffect(() => {
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMealType(data)
        })
    },[])

    return(
        <>
            <div id="quickSearch">
            <span className="quickHeading">Quick Search</span>
            <span className="quickSubHeading">Find Restaurants By MealType</span>
            <QuickDisplay mealData={mealType}/>
            </div>
        </>
    )
}

export default QuickSearch;