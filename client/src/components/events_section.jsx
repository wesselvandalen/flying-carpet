import { useTranslation } from "react-i18next";
import INCard from "./in_card";
import './sections.css';
import { useEffect, useState } from "react";
import {eventsService} from "../services/events_service";
import { getRandomObjects } from "../services/utils";
import EventCard from "./event_card";

export default function EventsSection({ profile }) {
    const { t } = useTranslation("global");
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (profile !== undefined) {
            setEvents(profile.events);
        } else {
            fetchData();
        }
    }, [profile]);

    const fetchData = async () => {
        const all = await eventsService.getAll();
        setEvents(all);
    };

    return (
        <div className="section-container" id="events">
            <div className="section-content">
                <h3 className="section-title">{t("header.events")}</h3>
                <p className="section-description">
                    {t("sections.events.description")}{" "}
                    <a href="/events">
                        {t("sections.events.link")}{">"}
                    </a>
                </p>

                <div className="section-slider-container">
                    <div className="section-slider">
                        {events.length > 0 ?
                            getRandomObjects(events).map((event, i) => (
                                <EventCard event={event} key={i} />
                            ))
                        :
                            <p>{t("homepage.emptylist")}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}