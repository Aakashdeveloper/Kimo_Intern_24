import React from 'react';
import ReactDOM from 'react-dom';
import Abc from './container/App'


function App(){
    return(
        <div>
            <h1>React Application</h1>
            <h2>Code</h2> 
            <Abc/>

        </div>
        
    )
}


const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(<App/>)
