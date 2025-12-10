import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/home_page';
import NotFoundPage from './pages/not_found_page';
import Header from './components/header';
import Footer from './components/footer';
import VacanciesPage from './pages/vacancies_page';
import VacancyPage from './pages/vacancy_page';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header/>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vacancies" element={<VacanciesPage />} />
            <Route path="/vacancies/:vacancy_id" element={<VacancyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}