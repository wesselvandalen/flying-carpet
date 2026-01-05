import { shortenText } from '../services/utils';
import './card.css';

export default function VacancyCard({vacancy}) {
    return (
        <div className="card section-block">
            <img src={vacancy.image} alt={`Image of ${vacancy.title}`} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{vacancy.title}</h2>
                <p className="card-description">{shortenText(vacancy.description)}</p>
                <div className="card-details">
                    <span className="card-atr">{vacancy.employmentType}, {vacancy.location}</span>
                    <span className="card-atr">€ {vacancy.salary},-*</span>
                </div>
            </div>
            <div className="card-button-container">
                <a className='card-button' href={`/vacancies/${vacancy.id}`} target='_blank'>Visit vacancy</a>
            </div>
        </div>
    )
}