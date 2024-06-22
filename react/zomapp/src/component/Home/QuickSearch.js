import React from 'react';
import './QuickSearch.css';

const QuickSearch = () => {
    return(
        <>
           <div id="quickSearch">
            <span class="quickHeading">Quick Search</span>
            <span class="quickSubHeading">Find Restaurants By MealType</span>
            <div id="tileBox">
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/8rPxkWP/lunch.jpg" alt="drinks"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="compHeading">
                            <a href="#">BreakFast</a>
                        </div>
                        <div class="compSubHeading">
                            Best Deal For BreakFast
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/XjzPqYv/dinner.jpg" alt="drinks"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="compHeading">
                            <a href="#">BreakFast</a>
                        </div>
                        <div class="compSubHeading">
                            Best Deal For BreakFast
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="image/nightlife.png" alt="drinks"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="compHeading">
                            <a href="#">BreakFast</a>
                        </div>
                        <div class="compSubHeading">
                            Best Deal For BreakFast
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="image/lunch.png" alt="drinks"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="compHeading">
                            <a href="#">BreakFast</a>
                        </div>
                        <div class="compSubHeading">
                            Best Deal For BreakFast
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="image/drinks.png" alt="drinks"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="compHeading">
                            <a href="#">BreakFast</a>
                        </div>
                        <div class="compSubHeading">
                            Best Deal For BreakFast
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="image/sacks.png" alt="drinks"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="compHeading">
                            <a href="#">BreakFast</a>
                        </div>
                        <div class="compSubHeading">
                            Best Deal For BreakFast
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        </>
    )
}

export default QuickSearch;