import React from 'react';
import { ReactNode } from 'react';
import { useThemeMode } from "../../hooks/useTheme";
import { lightTheme, darkTheme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';

interface BaseLayoutProps {
    children?: ReactNode;
  }

const ThemeContext: React.FC<BaseLayoutProps> = ({ children}) => {
 const { theme } = useThemeMode();
const themeMode = theme === 'dark' ? darkTheme : lightTheme;
return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};
export default ThemeContext;