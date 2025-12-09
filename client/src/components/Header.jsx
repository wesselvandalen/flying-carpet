import "./header.css";
import capgemini_logo_white from "../assets/capgemini_logo_white.png";
import { useTranslation } from 'react-i18next';
import nlFlag from '../assets/flags/nl.png';
import enFlag from '../assets/flags/en.png';
import './language_menu.css';

export default function Header() {
    const { t, i18n } = useTranslation("global");

    const handleLanguageSwitch = (lang) => {
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    };

    const handleLangFlag = (lang) => {
        switch (lang) {
            case 'nl': return nlFlag;
            default: return enFlag;
        }
    };

    const handleLanguageChange = (e) => {
        handleLanguageSwitch(e.target.value);
    };

    return (
        <header className="header">

            <div className="header-left">

                <a href="/" className="logo">
                    <img src={capgemini_logo_white} alt="The logo of Capgemini." />
                </a>

                <nav className="nav-links">
                    <a href="/vacancies">{t("header.vacancies")}</a>
                    <a href="/customercases">{t("header.customercases")}</a>
                    <a href="/events">{t("header.events")}</a>
                    <a href="/internnetworks">{t("header.internnetworks")}</a>
                    <a href="/employmentconditions">{t("header.employmentconditions")}</a>
                    <a href="/employeestories">{t("header.employeestories")}</a>
                </nav>

            </div>

            <div className="header-right">

                <div className="language-menu nav-item">
                    <img
                        src={handleLangFlag(i18n.language)}
                        alt={i18n.language}
                        className="lang-icon"
                    />
                    <select
                        value={i18n.language}
                        onChange={handleLanguageChange}
                        aria-label="Select language"
                        className="language-select"
                        id='language-select'
                    >
                        <option value="nl">Nederlands</option>
                        <option value="en">English</option>
                    </select>
                </div>

            </div>
        </header>
    );
}