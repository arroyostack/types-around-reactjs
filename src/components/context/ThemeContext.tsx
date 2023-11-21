import { createContext } from "react";
import { theme } from "./ThemeContext.ts";

export interface ContextProps {
    children: React.ReactElement | React.ReactElement[];
}

export const ThemeContext = createContext( theme );
export const { Provider } = ThemeContext;

export const ThemeContextProvider = ( { children }: ContextProps ) => {
    return (
        <Provider value={ theme }>
            { children }
        </Provider >
    );

};