import { useTranslation } from "react-i18next";
import "./sections.css";
import { useEffect, useState } from "react";
import { employmentConditionsService } from "../services/employment_conditions_service";
import ECCard from "./ec_card";

export default function EmploymentConditionsSection({ profile }) {
    const { t } = useTranslation("global");
    const [employmentConditions, setEmploymentConditions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (profile?.employmentConditions) {
            setEmploymentConditions(profile.employmentConditions);
            setLoading(false);
        }
    }, [profile]);

    useEffect(() => {
        if (profile) return;

        let cancelled = false;

        async function fetchData() {
            try {
                const all = await employmentConditionsService.getAll();
                if (!cancelled) {
                    setEmploymentConditions(all);
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

    return (
        <div className="section-container" id="employmentconditions">
            <div className="section-content">
                <h3 className="section-title">
                    {t("header.employmentconditions")}
                </h3>

                <p className="section-description">
                    {t("sections.employmentconditions.description")}
                </p>

                <div className="section-slider-container">
                    {loading ? (
                        <p>{t("homepage.loading")}</p>
                    ) : employmentConditions.length > 0 ? (
                        <div className="section-grid">
                            {employmentConditions.map(ec => (
                                <ECCard
                                    key={ec.id}
                                    ec={ec}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="no-content">
                            {t("homepage.emptylist")}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}