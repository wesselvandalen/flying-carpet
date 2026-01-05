import { shortenText } from "../services/utils";

export default function INCard({ internNetwork }) {
    return (
        <div className="card section-block">
            <img src={internNetwork.image} alt={`Image of ${internNetwork.name}`} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{internNetwork.name}</h2>
                <p className="card-description">{shortenText(internNetwork.description)}</p>
                <div className="card-details">
                    <span className="card-atr">{internNetwork.focusArea}</span>
                </div>
            </div>
            <div className="card-button-container">
                <a className='card-button' href={`/internnetworks/${internNetwork.id}`} target='_blank'>Visit intern network</a>
            </div>
        </div>
    )
}