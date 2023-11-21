import { ReducerExample } from "./components/ReducerExample";
import { Box } from './components/context/Box';
import { ThemeContextProvider } from "./components/context/ThemeContext.tsx";
import { User } from "./components/context/User.tsx";
import { UserContextProvider } from './components/context/UserContext';

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <h1>Hi mars</h1>
      <ReducerExample />

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </>
  );
};

export default App;
