import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { employeeStoriesService } from "../services/empoyee_stories_service";
import { useTranslation } from "react-i18next";

export default function EmployeeStoryPage() {
    const {t} = useTranslation("global");
    const { employeestory_id } = useParams();
    const [employeeStory, setEmployeeStory] = useState();
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setEmployeeStory(await employeeStoriesService.getById(employeestory_id));
    }

    if (!employeeStory) {
        return <p>No employee story</p>
    }

    return (
        <div className="specific-page-container">
            <div className="specific-page-content">
                <img src={employeeStory.image} alt={employeeStory.employeeName} />
                <h3>"{employeeStory.quote}" - {employeeStory.employeeName}, {employeeStory.jobTitle}</h3>

                <span>{t("utils.date")}: {new Date(employeeStory.publishDate).toLocaleDateString()}</span>

                <div className="line"/>

                <p>{employeeStory.description}</p>
            </div>
        </div>
    )
}