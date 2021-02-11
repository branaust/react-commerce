import '../styles/App.css';
import Navbar from './Navbar'
import PageContent from './PageContent'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'
import Dashboard from '../components/Dashboard'
import { ThemeProvider } from '../contexts/ThemeContext'
import { LanguageProvider } from '../contexts/LanguageContext'
import { AuthProvider } from '../contexts/AuthContext'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/signup" component={SignUpForm} />
                <Route path="/login" component={SignInForm} />
              </Switch>
            </AuthProvider>
          </Router>
        </PageContent>
      </LanguageProvider>
    </ThemeProvider >

  );
}

export default App;
