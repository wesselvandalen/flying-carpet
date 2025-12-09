import HomeScreen from "../components/home_screen";
import './home_page.css';
import VacancySection from "../components/vacancy_section";
import { useState } from "react";
import ProfileSearcher from "../components/profile_searcher";
import ProfileService from "../services/profile_service";

export default function HomePage() {
    const [showProfileSearcher, setShowProfileSearcher] = useState(sessionStorage.getItem("close-ps") !== "true");
    const [profile, setProfile] = useState();
    const service = new ProfileService();

    const hideProfileSearcher = () => setShowProfileSearcher(false);

    async function fetchProfileById(profileId) {
        const profile = await service.getById(profileId);
        setProfile(profile);
        console.log(profile);
    }

    return (
        <div className="home-page-container">
            <HomeScreen />
            {showProfileSearcher && (
                <ProfileSearcher
                    triggerHide={hideProfileSearcher}
                    onSelectProfile={fetchProfileById}
                />
            )}
            <VacancySection profile={profile} />
        </div>
    );
}
