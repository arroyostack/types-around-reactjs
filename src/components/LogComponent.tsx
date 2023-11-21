import { useState } from 'react';

interface AuthUser {
    name: string;
    email: string;
}

export const LogComponent = () => {
    const [user, setUser] = useState<AuthUser | null>( null );

    const handleLogin = () => {
        setUser( {
            name: "Zack",
            email: "zack@gmail.com"
        } );
    };
    const handleLogout = () => {
        setUser( null );
    };
    return (
        <div>
            <button onClick={ handleLogin }>Login</button>
            <button onClick={ handleLogout }>Logout</button>
            <div>Name: { user?.name }</div>
            <div>Email: { user?.email }</div>
        </div>
    );
};
