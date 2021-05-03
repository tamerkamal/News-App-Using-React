import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    selectUserData,
    setInput,
    setSignedIn,
    setUserData,
} from "../features/userSlice";

import "../styling/navbar.scss";

const Navbar = () => {
    const [inputValue, setInputValue] = useState("tech");
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch();

    const login = (response) => {
        console.log('google Logged In Response: ', response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue));
    };

    return (
        <div className="navbar">
            <h1 className="navbar__header">Tera Developers 💬</h1>
            {/* {isSignedIn && ( */}
            <div className="blog__search">
                <input
                    className="search"
                    placeholder="Search for a blog"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="submit" onClick={handleClick}>
                    Search
          </button>
            </div>
            {/* )} */}

            {isSignedIn ? (
                <div className="navbar__user__data">
                    <Avatar
                        className="user"
                        src={userData?.imageUrl}
                        alt={userData?.name}
                    />
                    <h1 className="signedIn">{userData?.givenName}</h1>
                    <GoogleLogout
                        clientId='415904535276-idcsd2b3djvt3k4s34ijoq5u3qi1lptm.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="logout__button"
                            >
                                Logout 😦
                            </button>
                        )}
                        onLogoutSuccess={logout}
                    />
                </div>
            ) : (
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
            )}
        </div>
    );
};

export default Navbar;