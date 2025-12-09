import { shortenText } from '../services/utils';
import './vacancy_card.css';

export default function VacancyCard({vacancy}) {
    return (
        <div className="vacancy-card section-block">
            <img src={vacancy.image} alt={vacancy.title} className="vacancy-image" />
            <div className="vacancy-content">
                <h2 className="vacancy-title">{vacancy.title}</h2>
                <p className="vacancy-description">{shortenText(vacancy.description)}</p>
                <div className="vacancy-details">
                    <span className="vacancy-location">{vacancy.employmentType}, {vacancy.location}</span>
                    <span className="vacancy-salary">{vacancy.salary}</span>
                </div>
            </div>
            <div className="card-button-container">
                <a className='card-button' href={`/vacancies/${vacancy.id}`} target='_blank'>Visit vacancy</a>
            </div>
        </div>
    )
}