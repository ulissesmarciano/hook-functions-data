import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, ToggleContainer } from './styles'
import { lightTheme, darkTheme } from '../../styles/themes';

const DarkMode = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <ToggleContainer>
                <Button onClick={toggleTheme}>
                    {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </Button>
            </ToggleContainer>
        </ThemeProvider>
    );
}

export default DarkMode
