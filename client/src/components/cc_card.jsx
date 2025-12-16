import { shortenText } from "../services/utils";

export default function CCcard({ customerCase }) {
    return (
        <div className="card section-block">
            <img src={customerCase.image} alt={customerCase.title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{customerCase.title} ({customerCase.clientName})</h2>
                <p className="card-description">{shortenText(customerCase.description)}</p>
                <div className="card-details">
                    <span className="card-atr">{customerCase.sector}</span>
                </div>
            </div>
            <div className="card-button-container">
                <a className='card-button' href={`/customercases/${customerCase.id}`} target='_blank'>Visit customer case</a>
            </div>
        </div>
    )
}