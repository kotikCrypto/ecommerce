import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"

function App() {
  return (
    <div className="mainWrapper">
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
