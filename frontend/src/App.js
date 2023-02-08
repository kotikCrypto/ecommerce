import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"
import Contact from './pages/Contact';

function App() {
  return (
    <div className="mainWrapper">
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
