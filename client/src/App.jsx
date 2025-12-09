import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/home_page';
import NotFoundPage from './pages/not_found_page';
import Header from './components/header';
import Footer from './components/footer';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header/>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}