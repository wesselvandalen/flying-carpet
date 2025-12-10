import './ec_card.css';

export default function ECCard({ ec }) {
    return (
        <div className="employment-condition">
            <div className="ec-icon">{ec.icon}</div>
            <h3 className="ec-title">{ec.title}</h3>
            <p className="ec-description">{ec.description}</p>
        </div>
    )
}