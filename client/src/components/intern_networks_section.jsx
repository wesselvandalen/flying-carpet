import { useTranslation } from "react-i18next";
import INCard from "./in_card";
import './sections.css';
import { useEffect, useState } from "react";
import {internNetworkService} from "../services/intern_networks_service";
import { getRandomObjects } from "../services/utils";

export default function InternNetworkSection({ profile }) {
    const { t } = useTranslation("global");
    const [internNetworks, setInternNetworks] = useState([]);

    useEffect(() => {
        if (profile !== undefined) {
            setInternNetworks(profile.internNetworks);
        } else {
            fetchData();
        }
    }, [profile]);

    const fetchData = async () => {
        const all = await internNetworkService.getAll();
        setInternNetworks(all);
    };

    return (
        <div className="section-container" id="internnetworks">
            <div className="section-content">
                <h3 className="section-title">{t("header.internnetworks")}</h3>
                <p className="section-description">
                    {t("sections.internnetworks.description")}{" "}
                    <a href="/internnetworks">
                        {t("sections.internnetworks.link")}{">"}
                    </a>
                </p>

                <div className="section-slider-container">
                    <div className="section-slider">
                        {internNetworks.length > 0 ?
                            getRandomObjects(internNetworks).map((internNetwork, i) => (
                                <INCard internNetwork={internNetwork} key={i} />
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