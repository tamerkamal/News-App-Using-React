// rafce + tab is the shortcut for App.js Startup 
import React from 'react';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Homepage />
        </div>
    )
}

export default App;
