import './App.css';
import Bar from './AppBar'
import NavContent from './NavContent'
import { ThemeProvider } from './contexts/ThemeContext'
import CardList from './CardList'


function App() {
  return (
    <ThemeProvider>
      <NavContent>
        <Bar />
      </NavContent>
    </ThemeProvider>

  );
}

export default App;
