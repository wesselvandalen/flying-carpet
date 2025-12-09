import "./home_screen.css";
import { useTranslation } from 'react-i18next';
import video from "../assets/background.mp4";

export default function HomeScreen() {
  const { t } = useTranslation("global");
  const contents = ["vacancies", "events", "customercases", "employeestories", "employmentconditions", "internnetworks"];
  const randomIndex = Math.floor(Math.random() * contents.length);

  return (
    <div className="hero-container">
      <video
        className="hero-video"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Get the future you want</h1>
        <p>{t("homepage.description")}</p>
        <a href={`#${contents[randomIndex]}`}>{t("homepage.cta")} {t(`header.${contents[randomIndex]}`).toLowerCase()}{">"}</a>
      </div>
      
    </div>
  );
}