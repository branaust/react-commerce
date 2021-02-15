import '../styles/App.css';
import Navbar from './Navbar'
import PageContent from './PageContent'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'
import Dashboard from '../components/Dashboard'
import ForgotPassword from '../components/ForgotPassword'
import UpdateProfile from '../components/UpdateProfile'
import { ThemeProvider } from '../contexts/ThemeContext'
import { LanguageProvider } from '../contexts/LanguageContext'
import { AuthProvider } from '../contexts/AuthContext'
import { UserProvider } from '../contexts/UserContext'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'


function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  <Route path="/signup" component={SignUpForm} />
                  <Route path="/login" component={SignInForm} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
              </AuthProvider>
            </Router>
          </PageContent>
        </LanguageProvider>
      </ThemeProvider >
    </UserProvider >

  );
}

export default App;
