import './App.css';
import Navbar from './Navbar'
import Form from './Form'
import NavContent from './NavContent'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'



function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NavContent>
          <Navbar />
          <Form />
        </NavContent>
      </LanguageProvider>
    </ThemeProvider>

  );
}

export default App;
