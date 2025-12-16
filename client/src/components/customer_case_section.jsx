import { useTranslation } from "react-i18next";
import "./sections.css";
import { useEffect, useState, useMemo } from "react";
import { customerCaseService } from "../services/customer_case_service";
import CCcard from "./cc_card";
import { getRandomObjects } from "../services/utils";

export default function CustomerCaseSection({ profile }) {
    const { t } = useTranslation("global");
    const [customerCases, setCustomerCases] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (profile?.customerCases) {
            setCustomerCases(profile.customerCases);
            setLoading(false);
        }
    }, [profile]);

    useEffect(() => {
        if (profile) return;

        let cancelled = false;

        async function fetchData() {
            try {
                const all = await customerCaseService.getAll();
                if (!cancelled) {
                    setCustomerCases(all);
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

    const randomCustomerCases = useMemo(() => {
        return getRandomObjects(customerCases);
    }, [customerCases]);

    return (
        <div className="section-container" id="customercases">
            <div className="section-content">
                <h3 className="section-title">{t("header.customercases")}</h3>
                <p className="section-description">
                    {t("sections.customercases.description")}{" "}
                    <a href="/customercases">
                        {t("sections.customercases.link")}{">"}
                    </a>
                </p>

                <div className="section-slider-container">
                    <div className="section-slider">
                        {loading ? (
                            <p>{t("homepage.loading")}</p>
                        ) : randomCustomerCases.length > 0 ? (
                            randomCustomerCases.map(cc => (
                                <CCcard
                                    key={cc.id}
                                    customerCase={cc}
                                />
                            ))
                        ) : (
                            <p>{t("homepage.emptylist")}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}