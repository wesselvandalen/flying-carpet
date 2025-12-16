import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { eventsService } from '../services/events_service';
import EventCard from '../components/event_card';

export default function EventsPage() {
    const {t} = useTranslation("global");
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setEvents(await eventsService.getAll());
    }

    return (
        <div className="content-page-container">
            <div className="content-page-content">

                <h1 className='content-page-title'>{t("header.event")}</h1>
                <p className='content-page-description'>{t("sections.event.descriptionpage")}</p>

                <div className="content-page-grid">
                    {events.map((event, i) => {
                        return <EventCard event={event} key={i} />
                    })}
                </div>

            </div>
        </div>
    )
}