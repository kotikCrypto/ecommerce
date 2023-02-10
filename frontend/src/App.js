import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <div className="mainWrapper">
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
