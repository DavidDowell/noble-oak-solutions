import './App.css';
import './components/Nav';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Router>
        <div className="App">
          <div>
            <Nav />
            <Main />
            <Footer />
          </div>
        </div>
      </Router>
    </main>
  );
}

export default App;
