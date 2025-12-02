import "./Header.css";
import capgeminiLogo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

import nlFlag from "../assets/flags/nl.png";
import enFlag from "../assets/flags/en.png";

export default function Header() {
    const { t, i18n } = useTranslation("global");

    const links = [
        { name: t("header.home"), url: "/" },
        { name: t("header.employmentconditions"), url: "#employment-conditions" },
        { name: t("Contact"), url: "#contact" },
        { name: t("Faq"), url: "#faq" },
        { name: t("About"), url: "#about" }
    ];

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
        <nav className="header-container">
            <div className="header-content">
                <a href="/">
                    <img className="header-logo" src={capgeminiLogo} alt="Capgemini logo" />
                </a>

                <ul className="header-links">
                    {links.map((link, index) => {
                        return <li className="header-link" key={index}>
                            <a href={link.url}>{link.name}</a>
                        </li>
                    })}
                </ul>

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
                        <option value="en">English</option>
                        <option value="nl">Nederlands</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}