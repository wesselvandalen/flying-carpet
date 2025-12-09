import { useTranslation } from "react-i18next";
import './not_found_page.css';

export default function NotFoundPage() {
    const {t} = useTranslation("global");

    return (
        <div className="not-found-container">
            <h1>Not found 404</h1>
            <p>{t("notfound.description")}</p>
        </div>
    )   
}