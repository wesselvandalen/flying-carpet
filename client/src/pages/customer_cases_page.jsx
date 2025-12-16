import { useTranslation } from 'react-i18next';
import './content_page.css';
import { useEffect, useState } from 'react';
import {customerCaseService} from '../services/customer_case_service';
import CCcard from "../components/cc_card";

export default function CustomerCasesPage() {
    const {t} = useTranslation("global");
    const [customerCases, setCustomerCases] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setCustomerCases(await customerCaseService.getAll());
    }

    return (
        <div className="content-page-container">
            <div className="content-page-content">

                <h1 className='content-page-title'>{t("header.customercases")}</h1>
                <p className='content-page-description'>{t("sections.customercases.descriptionpage")}</p>

                <div className="content-page-grid">
                    {customerCases.map((customerCase, i) => {
                        return <CCcard customerCase={customerCase} key={i} />
                    })}
                </div>

            </div>
        </div>
    )
}