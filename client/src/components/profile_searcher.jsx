import { useEffect, useState } from "react";
import "./profile_searcher.css";
import {profileService} from "../services/profile_service";
import { useTranslation } from "react-i18next";

export default function ProfileSearcher({ triggerHide, onSelectProfile }) {
    const { t } = useTranslation("global");
    const [profiles, setProfiles] = useState([]);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = async () => {
        const data = await profileService.getAll();
        setProfiles(data);
        const stored = sessionStorage.getItem("selected-profile");

        if (stored && data.some(p => p.id === stored)) {
            setSelected(stored);
            onSelectProfile(stored);
        } else if (data.length > 0) {
            setSelected(data[0].id);
        }
    };

    if (profiles.length === 0) {
        return <></>;
    }

    const handleSearch = () => {
        let profileObj = null;

        for (let i = 0; i < profiles.length; i++) {
            if (profiles[i].id === Number(selected)) {
                profileObj = profiles[i];
            }
        }

        sessionStorage.setItem("profile", JSON.stringify(profileObj));
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
                        <option key={index} value={profile.id}>
                            {profile.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="profile-right">
                <button className="ps-button" onClick={handleSearch}>
                    {t("profilesearcher.search")}
                </button>
                <button className="ps-btn ps-hide" onClick={handleClose}>X</button>
            </div>
        </div>
    );
}
