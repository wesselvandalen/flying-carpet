import { useTranslation } from "react-i18next";
import "./Homepage.css";
import Home from "../components/Home";
import Conditions from "../components/Conditions";

export default function Homepage() {
    const {t} = useTranslation("global");

    return (
        <div className="homepage-container">
            <Home/>
            <Conditions/>
        </div>
    )
}