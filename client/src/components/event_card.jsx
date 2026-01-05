import { shortenText } from "../services/utils";

export default function EventCard({ event }) {
    return (
        <div className="card section-block">
            <img src={event.image} alt={`Image of ${event.title}`} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{event.title}</h2>
                <p className="card-description">{shortenText(event.description)}</p>
                <div className="card-details">
                    <span className="card-atr">{event.location} ({new Date(event.date).toLocaleDateString()})</span>
                </div>
            </div>
            <div className="card-button-container">
                <a className='card-button' href={`/events/${event.id}`} target='_blank'>Visit event</a>
            </div>
        </div>
    )
}