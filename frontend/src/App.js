import './App.css';
import HomeScreen from './screens/HomeScreen'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer  from './components/Footer'

function App() {
  return (
    <Router>
    <Header />
    <main className='py-0'>
      <Container className='container-xl'>
        <Route path='/' component={HomeScreen} exact />
      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
