import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogout } from "react-google-login";
import {
    selectSignedIn,
    selectUserData,
    setInput,
    setSignedIn,
    setUserData,
} from "../features/userSlice";
import '../styling/navbar.scss';
import { Avatar } from "@material-ui/core";

const Navbar = () => {

    const [inputValue, setInputValue] = useState("");
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(setUserData);

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };

    const handleClick = (e) => { };

    return (
        <div className="navbar">

            {isSignedIn && (
                <div className="blog__search">
                    <h1 className="navbar__header">Tera 💬 Developers</h1>
                    <input className="search"
                        val placeholder="search"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="submit" onClick={handleClick} >Search</button>
                </div>
            )}

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
                                Logout
                            </button>
                        )}
                        onLogoutSuccess={logout}
                    />
                </div>
            ) : (
                <h1 className="notSignedIn"></h1>
            )}
        </div>
    )
}

export default Navbar
