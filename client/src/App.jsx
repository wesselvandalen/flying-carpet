import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ReactLenis } from 'lenis/react'

export default function App() {
  return (
    <Router>
      <ReactLenis root /> {/* Makes sure that the entire application has smooth scroll. */}
      <div className="app-container">
        <div className="app-wrapper">

          <div className="app-innhold">
            <Header />

            <div className="main-content">
              <Routes>
                <Route path="/" element={<Homepage />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </Router>
  )
}