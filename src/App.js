import './App.css';
import Navbar from './Navbar'
import NavContent from './NavContent'
import { ThemeProvider } from './contexts/ThemeContext'
import CardList from './CardList'


function App() {
  return (
    <ThemeProvider>
      <NavContent>
        <Navbar />
      </NavContent>
    </ThemeProvider>

  );
}

export default App;
