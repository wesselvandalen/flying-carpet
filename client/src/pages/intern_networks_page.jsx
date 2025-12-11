import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { internNetworkService } from '../services/intern_networks_service';
import INCard from '../components/in_card';

export default function InternNetworksPage() {
    const {t} = useTranslation("global");
    const [internNetworks, setInternNetworks] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setInternNetworks(await internNetworkService.getAll());
    }

    return (
        <div className="content-page-container">
            <div className="content-page-content">

                <h1 className='content-page-title'>{t("header.internnetworks")}</h1>
                <p className='content-page-description'>{t("sections.internnetworks.descriptionpage")}</p>

                <div className="content-page-grid">
                    {internNetworks.map((internNetwork, i) => {
                        return <INCard internNetwork={internNetwork} key={i} />
                    })}
                </div>

            </div>
        </div>
    )
}