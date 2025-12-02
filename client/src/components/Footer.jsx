import "./Footer.css";
import capgeminiLogo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const {t} = useTranslation("global");

    const links = [
        { name: t("header.home"), url: "/" }
    ];

    return (
        <footer className="footer-container">
            <div className="footer-content">

                <div className="footer-top">
                    <a href="/" className="logo">
                        <img src={capgeminiLogo} alt="Capgemini logo" />
                    </a>
                    <ul className="footer-links">
                        {links.map((link, index) => {
                            return <li key={index}>
                            <a href={link.url}>{link.name}</a>
                        </li>
                        })}
                    </ul>
                </div>

                <hr className="line" />
                <span className="rights-footer">Copyright © {new Date().getFullYear()} <a href="/" className="rights-footer-link">Capgemini</a>. {t("footer.rightsreserved")}</span>
            </div>
        </footer>
    )
}