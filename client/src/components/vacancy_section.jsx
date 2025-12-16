import { useTranslation } from "react-i18next";
import VacancyCard from "./vacancy_card";
import "./sections.css";
import { useEffect, useState, useMemo } from "react";
import { vacancyService } from "../services/vacancy_service";
import { getRandomObjects } from "../services/utils";

export default function VacancySection({ profile }) {
    const { t } = useTranslation("global");
    const [vacancies, setVacancies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (profile?.vacancies) {
            setVacancies(profile.vacancies);
            setLoading(false);
        }
    }, [profile]);

    useEffect(() => {
        if (profile) return;

        let cancelled = false;

        async function fetchData() {
            try {
                const all = await vacancyService.getAll();
                if (!cancelled) {
                    setVacancies(all);
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

    const randomVacancies = useMemo(() => {
        return getRandomObjects(vacancies);
    }, [vacancies]);

    return (
        <div className="section-container" id="vacancies">
            <div className="section-content">
                <h3 className="section-title">{t("header.vacancies")}</h3>

                <p className="section-description">
                    {t("sections.vacancies.description")}{" "}
                    <a href="/vacancies">
                        {t("sections.vacancies.link")}{">"}
                    </a>
                </p>

                <div className="section-slider-container">
                    <div className="section-slider">
                        {loading ? (
                            <p>{t("homepage.loading")}</p>
                        ) : randomVacancies.length > 0 ? (
                            randomVacancies.map(vacancy => (
                                <VacancyCard
                                    key={vacancy.id}
                                    vacancy={vacancy}
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