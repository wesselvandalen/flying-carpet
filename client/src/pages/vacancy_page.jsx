import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { vacancyService } from "../services/vacancy_service";
import './specific_page.css';

export default function VacancyPage() {
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
                <span>{vacancy.employmentType}</span>
                <span>{vacancy.postedDate}</span>
                <span>{vacancy.salary}</span>
                <span>{vacancy.location}</span>
                <span>{vacancy.department}</span>

                <hr />

                <p>{vacancy.description}</p>
            </div>
        </div>
    )
}