import React,{useState,useEffect} from 'react';
import Header from './Header';
import './App.css';

const App = () => {

    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);


    const handleClick = () => {
        setCount(count+1)
    }
    const handleClick1 = () => {
        setCount1(count1+1)
    }

    useEffect(() => {
        console.log('calling>>>>>>')
    },[count1])

    console.log("render>>>>>>")

    return(
        <div>
            <Header/>
            <div style={{height:'200px', width:'300px',backgroundColor:'skyblue',textAlign:'center'}}>
                <h1>Home Page</h1>
            </div>
            <div id="first">
                <h2>{count}</h2>
                <button onClick={handleClick}>Count</button>
                <h2>{count1}</h2>
                <button onClick={handleClick1}>Count</button>
            </div>
            <div className="second"></div>

            
        </div>
        
    )
}

export default App