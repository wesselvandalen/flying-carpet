import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { internNetworkService } from "../services/intern_networks_service";
import { useTranslation } from "react-i18next";

export default function InternNetworkPage() {
    const {t} = useTranslation("global");
    const { internnetwork_id } = useParams();
    const [internNetwork, setInternNetwork] = useState();
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setInternNetwork(await internNetworkService.getById(internnetwork_id));
    }

    if (!internNetwork) {
        return <p>No intern network</p>
    }

    return (
        <div className="specific-page-container">
            <div className="specific-page-content">
                <img src={internNetwork.image} alt={internNetwork.name} />
                <h3>{internNetwork.name}</h3>

                <span>{t("utils.focusarea")}: {internNetwork.focusArea}</span>

                <div className="line"/>

                <p>{internNetwork.description}</p>
            </div>
        </div>
    )
}