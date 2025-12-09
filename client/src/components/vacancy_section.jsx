import { useTranslation } from "react-i18next";
import VacancyCard from "./vacancy_card";
import './sections.css';
import { useEffect, useState } from "react";
import VacancyService from "../services/vacancy_service";
import { getRandomObjects } from "../services/utils";

export default function VacancySection({ profile }) {
    const service = new VacancyService();
    const [vacancies, setVacancies] = useState(profile ==! undefined ? profile.vacancies : []);
    const { t } = useTranslation("global");

    useEffect(() => {
        fetchVacancies();
    }, []);

    const fetchVacancies = async () => {
        setVacancies(await service.getAll());
    }

    return (
        <div className="section-container" id="vacancies">
            <div className="section-content">

                <h3 className="section-title">{t("header.vacancies")}</h3>
                <p className="section-description">{t("sections.vacancies.description")} <a href="/vacancies">{t("sections.vacancies.link")}{">"}</a></p>

                <div className="section-slider-container">
                    <div className="section-slider">
                        {getRandomObjects(vacancies).map((vacancy, i) => {
                            return <VacancyCard vacancy={vacancy} key={i} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}