import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import NightModeToggle from './components/NightModeToggle';

function App() {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NightModeToggle />
      <h1>Testing </h1>
      <p>Testing </p>
      {/* <Home /> */}
    </ThemeProvider>
  );
}

export default App;
