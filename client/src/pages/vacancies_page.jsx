import { useTranslation } from 'react-i18next';
import './content_page.css';
import { useEffect, useState } from 'react';
import VacancyService from '../services/vacancy_service';
import VacancyCard from '../components/vacancy_card';

export default function VacanciesPage() {
    const {t} = useTranslation("global");
    const [vacancies, setVacancies] = useState([]);
    const service = new VacancyService();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setVacancies(await service.getAll());
    }

    return (
        <div className="content-page-container">
            <div className="content-page-content">

                <h1 className='content-page-title'>{t("header.vacancies")}</h1>
                <p className='content-page-description'>{t("sections.vacancies.descriptionpage")}</p>

                <div className="content-page-grid">
                    {vacancies.map((vacancy, i) => {
                        return <VacancyCard vacancy={vacancy} key={i} />
                    })}
                </div>

            </div>
        </div>
    )
}