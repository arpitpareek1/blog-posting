const ThemedButton = () => {
    let isDarkTheme = false
    const toggleTheme = () => {
        // Apply theme-specific styles when the component mounts or when the theme changes
        const root = document.documentElement;
        root.style.setProperty('--foreground-rgb', isDarkTheme ? '255, 255, 255' : '254, 254, 254');
        root.style.setProperty('--background-start-rgb', isDarkTheme ? '0, 0, 0' : '214, 219, 220');
        root.style.setProperty('--background-end-rgb', isDarkTheme ? '0, 0, 0' : '255, 255, 255');
        // Add other theme-specific styles here
        isDarkTheme = !isDarkTheme
    };


    return (
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
};

export default ThemedButton