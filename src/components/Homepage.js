import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';
import '../styling/home.scss';

const Homepage = () => {

    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();

    const login = (response) => {
        console.log('google Logged In Response: ', response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    return (
        <div className='home__page'
        // style={{ display: isSignedIn ? "none" : "" }}
        >
            { <div className='entry__message'>
                <h2> Tera Developers</h2>
                <h4>(House of Developers)</h4>
            </div>
            }
        </div>
    )
}

export default Homepage

