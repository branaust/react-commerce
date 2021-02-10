import './App.css';
import Navbar from './Navbar'
import Form from './Form'
import Display from './Display'
import PageContent from './PageContent'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { DisplayProvider } from './contexts/DisplayContext'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <DisplayProvider>
            <Display />
          </DisplayProvider>
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>

  );
}

export default App;
