// rafce + tab is the shortcut for App.js Startup 
import React from 'react';
import Homepage from './components/Homepage';

const App = () => {
    return (
        <div className='app'>
            <Homepage />
            {/* <h1>This is App</h1> */}
        </div>
    )
}

export default App;
