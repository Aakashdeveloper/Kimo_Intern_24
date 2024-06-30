import React from 'react';
import {Link} from 'react-router-dom'

const QuickDisplay = (props) => {

    console.log("props",props)

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`} className="tileContainer">
                        <div >
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt={item.mealtype}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="compHeading">
                                    {item.mealtype}
                                </div>
                                <div className="compSubHeading">
                                {item.content}
                                </div>
                            </div>
                            
                        </div>
                        </Link>
          
              
                )
            })
        }
    }


    return(
       <>
       <div id="tileBox">
        {listMeal(props)}
       </div>
       
        </>
    )
}

export default QuickDisplay