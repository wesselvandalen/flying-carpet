import { useEffect, useState } from "react";
import "./profile_searcher.css";
import ProfileService from "../services/profile_service";
import { useTranslation } from "react-i18next";

export default function ProfileSearcher({ triggerHide, onSelectProfile }) {
    const { t } = useTranslation("global");
    const [profiles, setProfiles] = useState([]);
    const [selected, setSelected] = useState(t("profilesearcher.pick"));
    const service = new ProfileService();

    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = async () => {
        setProfiles(await service.getAll());
    }

    if (profiles.length === 0) {
        return <></>
    }

    const handleSearch = () => {
        onSelectProfile(selected);
        handleClose();
    };

    const handleClose = () => {
        sessionStorage.setItem("close-ps", "true");
        triggerHide();
    };

    return (
        <div className="profile-searcher">
            <div className="profile-left">
                <select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className="ps-dropdown"
                >
                    {profiles.map((profile, index) => (
                        <option key={index} value={profile.id}>{profile.name}</option>
                    ))}
                </select>
            </div>

            <div className="profile-right">
                <button className="ps-button" onClick={handleSearch}>{t("profilesearcher.search")}</button>
                <button className="ps-btn ps-hide" onClick={handleClose}>X</button>
            </div>
        </div>
    );
}