import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { eventsService } from "../services/events_service";
import { useTranslation } from "react-i18next";

export default function EventPage() {
    const {t} = useTranslation("global");
    const { event_id } = useParams();
    const [event, setEvent] = useState();
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setEvent(await eventsService.getById(event_id));
    }

    if (!event) {
        return <p>No event</p>
    }

    return (
        <div className="specific-page-container">
            <div className="specific-page-content">
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>

                <span>{t("utils.location")}: {event.location}</span>
                <span>{t("utils.date")}: {new Date(event.date).toLocaleDateString()}</span>

                <div className="line"/>

                <p>{event.description}</p>
            </div>
        </div>
    )
}