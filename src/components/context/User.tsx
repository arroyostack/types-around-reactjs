import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
    const userContext = useContext( UserContext );

    const handleLoging = () => {
        userContext?.setUser( {
            name: "Alayi",
            email: "alayi@gmail.com"
        } );
    };
    const handleLogout = () => {
        userContext?.setUser( null );

    };

    return (
        <div>
            <button onClick={ handleLoging }>Login</button>
            <button onClick={ handleLogout }>Logout</button>
            <div>Username is { userContext?.user?.name }</div>
            <div>Useremail is { userContext?.user?.email }</div>
        </div>
    );
};
