import { useTranslation } from "react-i18next";
import VacancyCard from "./vacancy_card";
import './sections.css';
import { useEffect, useState } from "react";
import { employmentConditionsService } from "../services/employment_conditions_service";
import ECCard from "./ec_card";

export default function EmploymentConditionsSection({ profile }) {
    const { t } = useTranslation("global");
    const [employmentConditions, setEmploymentConditions] = useState([]);

    useEffect(() => {
        if (profile !== undefined) {
            setEmploymentConditions(profile.employmentConditions);
        } else {
            fetchData();
        }
    }, [profile]);

    const fetchData = async () => {
        const all = await employmentConditionsService.getAll();
        setEmploymentConditions(all);
    };

    if (!employmentConditions) {
        return <></>
    }

    return (
        <div className="section-container" id="employmentconditions">
            <div className="section-content">
                <h3 className="section-title">{t("header.employmentconditions")}</h3>
                <p className="section-description">
                    {t("sections.employmentconditions.description")}
                </p>

                <div className="section-slider-container">
                    {employmentConditions.length > 0 ?
                        <div className="section-grid">
                            {employmentConditions.map((employmentCondition, i) => {
                                return <ECCard ec={employmentCondition} key={i} />
                            })}
                        </div>
                        :
                        <p className="no-content">{t("homepage.emptylist")}</p>
                    }
                </div>
            </div>
        </div>
    );
}