import HomeScreen from "../components/home_screen";
import './home_page.css';
import VacancySection from "../components/vacancy_section";
import { useEffect, useState } from "react";
import InternNetworkSection from "../components/intern_networks_section";
import ProfileSearcher from "../components/profile_searcher";
import {profileService} from "../services/profile_service";
import EmploymentConditionsSection from "../components/employment_conditions_section";
import CustomerCaseSection from "../components/customer_case_section";

export default function HomePage() {
    const [showProfileSearcher, setShowProfileSearcher] = useState(sessionStorage.getItem("close-ps") !== "true");
    const [profile, setProfile] = useState();

    useEffect(() => {
        // Fetch profile from sessionStorage.
        const foundProfile = sessionStorage.getItem("profile");

        if (foundProfile !== null && foundProfile !== undefined && foundProfile !== "undefined") {
            const parsedProfile = JSON.parse(foundProfile);
            setProfile(parsedProfile);
        }
    }, []);

    const hideProfileSearcher = () => setShowProfileSearcher(false);

    async function fetchProfileById(profileId) {
        const profile = await profileService.getById(profileId);
        setProfile(profile);
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
            <EmploymentConditionsSection profile={profile} />
            <InternNetworkSection profile={profile} />
            <CustomerCaseSection profile={profile} />
        </div>
    );
}
