import { useTranslation } from "react-i18next";
import INCard from "./in_card";
import './sections.css';
import { useEffect, useState } from "react";
import {customerCaseService} from "../services/customer_case_service";
import { getRandomObjects } from "../services/utils";
import CCcard from "./cc_card";

export default function CustomerCaseSection({ profile }) {
    const { t } = useTranslation("global");
    const [customerCases, setCustomerCases] = useState([]);

    useEffect(() => {
        if (profile !== undefined) {
            setCustomerCases(profile.customerCases);
        } else {
            fetchData();
        }
    }, [profile]);

    const fetchData = async () => {
        const all = await customerCaseService.getAll();
        setCustomerCases(all);
    };

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
                        {customerCases.length > 0 ?
                            getRandomObjects(customerCases).map((customerCase, i) => (
                                <CCcard customerCase={customerCase} key={i} />
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