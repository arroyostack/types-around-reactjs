import { createContext, useState } from "react";

interface AuthUser {
    name: string;
    email: string;
}

interface UserContextProviderProps {
    children: React.ReactNode | React.ReactNode[];
}

interface UserContextProps {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

export const UserContext = createContext<UserContextProps | null>( {} as UserContextProps );

export const UserContextProvider = ( { children }: UserContextProviderProps ) => {
    const [user, setUser] = useState<AuthUser | null>( null );

    return (
        <UserContext.Provider value={ { user, setUser } }>
            { children }
        </UserContext.Provider>
    );
};