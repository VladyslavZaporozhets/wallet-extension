import React from 'react';

//===========Load Theme lib===================//
import ThemeContext from './providers/ThemeProvider';
import { ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme } from './styles/themes';
import useThemeMode from './hooks/useTheme';

// ==========Load Custom Css=====================//
import './App.css';

//===========Load Routes=======================//
import { Route,Routes } from 'react-router-dom';

//===========Load Views========================//
import { PageController } from './pages/PageController';

function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div className="App">
       <ThemeContext>
          <ThemeProvider theme = {themeMode}>
             <>
                <PageController />
             </>
          </ThemeProvider>
       </ThemeContext>
    </div>
  );
}

export default App;
