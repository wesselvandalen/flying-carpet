import { useTranslation } from "react-i18next";
import INCard from "./in_card";
import './sections.css';
import { useEffect, useState } from "react";
import {employeeStoriesService} from "../services/empoyee_stories_service";
import { getRandomObjects } from "../services/utils";
import CCcard from "./cc_card";
import ESCard from "./es_card";

export default function EmployeeStoriesSection({ profile }) {
    const { t } = useTranslation("global");
    const [employeeStories, setEmployeeStories] = useState([]);

    useEffect(() => {
        if (profile !== undefined) {
            setEmployeeStories(profile.employeeStories);
        } else {
            fetchData();
        }
    }, [profile]);

    const fetchData = async () => {
        const all = await employeeStoriesService.getAll();
        setEmployeeStories(all);
    };

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
                        {employeeStories.length > 0 ?
                            getRandomObjects(employeeStories).map((employeeStory, i) => (
                                <ESCard employeeStory={employeeStory} key={i} />
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