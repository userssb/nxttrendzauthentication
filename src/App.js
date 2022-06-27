import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <h1>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route component={NotFound} />
    </Switch>
  </h1>
)

export default App
