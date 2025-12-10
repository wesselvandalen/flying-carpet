import { useTranslation } from "react-i18next";
import VacancyCard from "./vacancy_card";
import './sections.css';
import { useEffect, useState, useMemo } from "react";
import {vacancyService} from "../services/vacancy_service";
import { getRandomObjects } from "../services/utils";

export default function VacancySection({ profile }) {
    const { t } = useTranslation("global");
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        if (profile !== undefined) {
            setVacancies(profile.vacancies);
        } else {
            fetchVacancies();
        }
    }, [profile]);

    const fetchVacancies = async () => {
        const all = await vacancyService.getAll();
        setVacancies(all);
    };

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
                        {vacancies.length > 0 ?
                            getRandomObjects(vacancies).map((vacancy, i) => (
                                <VacancyCard vacancy={vacancy} key={i} />
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