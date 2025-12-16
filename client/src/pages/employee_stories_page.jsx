import { useTranslation } from 'react-i18next';
import './content_page.css';
import { useEffect, useState } from 'react';
import {employeeStoriesService} from '../services/empoyee_stories_service';
import ESCard from "../components/es_card";

export default function EmployeeStoriesPage() {
    const {t} = useTranslation("global");
    const [employeeStories, setEmployeeStories] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setEmployeeStories(await employeeStoriesService.getAll());
    }

    return (
        <div className="content-page-container">
            <div className="content-page-content">

                <h1 className='content-page-title'>{t("header.employeestories")}</h1>
                <p className='content-page-description'>{t("sections.employeestories.descriptionpage")}</p>

                <div className="content-page-grid">
                    {employeeStories.map((es, i) => {
                        return <ESCard employeeStory={es} key={i} />
                    })}
                </div>

            </div>
        </div>
    )
}