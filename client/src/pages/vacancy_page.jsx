import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { vacancyService } from "../services/vacancy_service";
import './specific_page.css';
import { useTranslation } from "react-i18next";

export default function VacancyPage() {
    const {t} = useTranslation("global");
    const { vacancy_id } = useParams();
    const [vacancy, setVacancy] = useState();
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setVacancy(await vacancyService.getById(vacancy_id));
    }

    if (!vacancy) {
        return <p>No vacancy</p>
    }

    return (
        <div className="specific-page-container">
            <div className="specific-page-content">
                <img src={vacancy.image} alt={vacancy.title} />
                <h3>{vacancy.title}</h3>

                <span>{t("utils.employmenttype")}: {vacancy.employmentType}</span>
                <span>{t("utils.date")}: {vacancy.postedDate}</span>
                <span>{t("utils.salary")}: {vacancy.salary}</span>
                <span>{t("utils.location")}: {vacancy.location}</span>
                <span>{t("utils.department")}: {vacancy.department}</span>

                <div className="line"/>

                <p>{vacancy.description}</p>
            </div>
        </div>
    )
}