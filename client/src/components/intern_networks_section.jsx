import { useTranslation } from "react-i18next";
import INCard from "./in_card";
import "./sections.css";
import { useEffect, useState, useMemo } from "react";
import { internNetworkService } from "../services/intern_networks_service";
import { getRandomObjects } from "../services/utils";

export default function InternNetworkSection({ profile }) {
    const { t } = useTranslation("global");
    const [internNetworks, setInternNetworks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (profile?.internNetworks) {
            setInternNetworks(profile.internNetworks);
            setLoading(false);
        }
    }, [profile]);

    useEffect(() => {
        if (profile) return;

        let cancelled = false;

        async function fetchData() {
            try {
                const all = await internNetworkService.getAll();
                if (!cancelled) {
                    setInternNetworks(all);
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

    const randomInternNetworks = useMemo(() => {
        return getRandomObjects(internNetworks);
    }, [internNetworks]);

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
                        {loading ? (
                            <p>{t("homepage.loading")}</p>
                        ) : randomInternNetworks.length > 0 ? (
                            randomInternNetworks.map(internNetwork => (
                                <INCard
                                    key={internNetwork.id}
                                    internNetwork={internNetwork}
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