import { useTranslation } from "react-i18next";
import ESCard from "./es_card";
import "./sections.css";
import { useEffect, useState, useMemo } from "react";
import { employeeStoriesService } from "../services/empoyee_stories_service";
import { getRandomObjects } from "../services/utils";

export default function EmployeeStoriesSection({ profile }) {
    const { t } = useTranslation("global");
    const [employeeStories, setEmployeeStories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (profile?.employeeStories) {
            setEmployeeStories(profile.employeeStories);
            setLoading(false);
        }
    }, [profile]);

    useEffect(() => {
        if (profile) return;

        let cancelled = false;

        async function fetchData() {
            try {
                const all = await employeeStoriesService.getAll();
                if (!cancelled) {
                    setEmployeeStories(all);
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

    const randomEmployeeStories = useMemo(() => {
        return getRandomObjects(employeeStories);
    }, [employeeStories]);

    return (
        <div className="section-container" id="employeestories">
            <div className="section-content">
                <h3 className="section-title">{t("header.employeestories")}</h3>

                <p className="section-description">
                    {t("sections.employeestories.description")}{" "}
                    <a href="/employeestories">
                        {t("sections.employeestories.link")}{">"}
                    </a>
                </p>

                <div className="section-slider-container">
                    <div className="section-slider">
                        {loading ? (
                            <p>{t("homepage.loading")}</p>
                        ) : randomEmployeeStories.length > 0 ? (
                            randomEmployeeStories.map(employeeStory => (
                                <ESCard
                                    key={employeeStory.id}
                                    employeeStory={employeeStory}
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