import React from 'react';
import { useSelector } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { selectSignedIn } from '../features/userSlice';

const Homepage = () => {

    const login = (response) => {
        console.log(response);
    };

    const isSignedIn = useSelector(selectSignedIn);

    return (
        <div className='home__page' style={{ display: isSignedIn ? "none" : "" }} >
            {!isSignedIn ? <div className='login__message'>
                <h2></h2>
                <h1>A Readers favourite place</h1>
                <p>
                    We Provide high quality online resource for reading blogs.
                    Just sign up and start reading some quality blogs.
                </p>
                <GoogleLogin
                    // local:
                    // clientId='769220826705-q22p6f3bbjvm3s2r308don7tuh5qeg71.apps.googleusercontent.com'
                    // local & published
                    clientId='415904535276-idcsd2b3djvt3k4s34ijoq5u3qi1lptm.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className='login__button'
                        > Login with Google
                        </button>
                    )}
                    onSuccess={login}
                    onFailure={login}
                    isSignedIn={true}
                    cookiePolicy={'single_host_origin'}
                />
            </div> : ""}
        </div>
    )
}

export default Homepage

