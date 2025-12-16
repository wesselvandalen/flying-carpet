import { shortenText } from "../services/utils";

export default function ESCard({ employeeStory }) {
    return (
        <div className="card section-block">
            <img src={employeeStory.image} alt={employeeStory.title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">"{employeeStory.quote}"</h2>
                <div className="card-details">
                    <span className="card-atr">- {employeeStory.employeeName}, {employeeStory.jobTitle}</span>
                </div>
                <p className="card-description">{shortenText(employeeStory.description)}</p>
            </div>
            <div className="card-button-container">
                <a className='card-button' href={`/employeestories/${employeeStory.id}`} target='_blank'>Visit employee story</a>
            </div>
        </div>
    )
}