import '../styles/App.css';
import Navbar from './Navbar'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'
import Dashboard from '../components/Dashboard'
import ForgotPassword from '../components/ForgotPassword'
import UpdateProfile from '../components/UpdateProfile'
import MySlabs from '../components/MySlabs'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import { DisplayProvider } from '../contexts/DisplayContext'


function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <DisplayProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/my-slabs" component={MySlabs} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/login" component={SignInForm} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </DisplayProvider>
      </AuthProvider>
    </Router >

  );
}

export default App;
