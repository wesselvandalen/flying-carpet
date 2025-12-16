import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/home_page';
import NotFoundPage from './pages/not_found_page';
import Header from './components/header';
import Footer from './components/footer';
import VacanciesPage from './pages/vacancies_page';
import VacancyPage from './pages/vacancy_page';
import InternNetworksPage from './pages/intern_networks_page';
import InternNetworkPage from './pages/intern_network_page';
import CustomerCasesPage from './pages/customer_cases_page';
import CustomerCasePage from './pages/customer_case_page';
import EventsPage from './pages/events_page';
import EventPage from './pages/event_page';
import EmployeeStoriesPage from './pages/employee_stories_page';
import EmployeeStoryPage from './pages/employee_story_page';

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
            <Route path="/internnetworks" element={<InternNetworksPage />} />
            <Route path="/internnetworks/:internnetwork_id" element={<InternNetworkPage />} />
            <Route path="/customercases" element={<CustomerCasesPage />} />
            <Route path="/customercases/:customercase_id" element={<CustomerCasePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:event_id" element={<EventPage />} />
            <Route path="/employeestories" element={<EmployeeStoriesPage />} />
            <Route path="/employeestories/:employeestory_id" element={<EmployeeStoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}