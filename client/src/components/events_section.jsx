import { useTranslation } from "react-i18next";
import "./sections.css";
import { useEffect, useState, useMemo } from "react";
import { eventsService } from "../services/events_service";
import EventCard from "./event_card";
import { getRandomObjects } from "../services/utils";

export default function EventsSection({ profile }) {
    const { t } = useTranslation("global");
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (profile?.events) {
            setEvents(profile.events);
            setLoading(false);
        }
    }, [profile]);

    useEffect(() => {
        if (profile) return;

        let cancelled = false;

        async function fetchData() {
            try {
                const all = await eventsService.getAll();
                if (!cancelled) {
                    setEvents(all);
                }
            } catch (e) {
                console.error(e);
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        fetchData();

        return () => {
            cancelled = true;
        };
    }, [profile]);

    const randomEvents = useMemo(() => {
        return getRandomObjects(events);
    }, [events]);

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
                        {loading ? (
                            <p>{t("homepage.loading")}</p>
                        ) : randomEvents.length > 0 ? (
                            randomEvents.map(event => (
                                <EventCard
                                    key={event.id}
                                    event={event}
                                />
                            ))
                        ) : (
                            <p>{t("homepage.emptylist")}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}