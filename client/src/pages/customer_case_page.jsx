import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { customerCaseService } from "../services/customer_case_service";
import { useTranslation } from "react-i18next";

export default function CustomerCasePage() {
    const {t} = useTranslation("global");
    const { customercase_id } = useParams();
    const [customerCase, setCustomerCase] = useState();
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setCustomerCase(await customerCaseService.getById(customercase_id));
    }

    if (!customerCase) {
        return <p>No customer case</p>
    }

    return (
        <div className="specific-page-container">
            <div className="specific-page-content">
                <img src={customerCase.image} alt={customerCase.title} />
                <h3>{customerCase.title}</h3>

                <span>{t("utils.clientname")}: {customerCase.clientName}</span>

                <div className="line"/>

                <p>{customerCase.description}</p>
            </div>
        </div>
    )
}