import { Login } from "./Login";

interface PrivateProps {
    isLogedIn: boolean;
    Component: () => JSX.Element;
}

export const Private = ( { isLogedIn, Component }: PrivateProps ) => {
    if ( isLogedIn ) {
        return <Component />;
    }
    else {
        return <Login />;
    };
};
