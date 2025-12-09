import './footer.css';
import capgemini_logo from "../assets/capgemini_logo.png";
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const {t} = useTranslation("global");

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-logo">
                    <img
                        src={capgemini_logo}
                        alt="The logo of Capgemini."
                    />
                </div>

                <div className="footer-section">
                    <h4>{t("footer.followus")}</h4>
                    <ul>
                        <a href='https://x.com/Capgemini' target='_blank'>X</a>
                        <a href='https://www.facebook.com/capgemininederland/' >Facebook</a>
                        <a href='https://www.instagram.com/capgemini/' >Instagram</a>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>{t("footer.pages")}</h4>
                    <ul>
                        <a href='/vacancies'>{t("header.vacancies")}</a>
                        <a href='/events'>{t("header.events")}</a>
                        <a href='/customercases'>{t("header.customercases")}</a>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>&nbsp;</h4>
                    <ul>
                        <a href='/internnetworks'>{t("header.internnetworks")}</a>
                        <a href='#employmentconditions'>{t("header.employmentconditions")}</a>
                        <a href='/employeestories'>{t("header.employeestories")}</a>
                    </ul>
                </div>

            </div>
        </footer>
    );
}