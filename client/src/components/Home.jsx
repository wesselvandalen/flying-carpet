import { useTranslation } from "react-i18next"
import "./Home.css";
import { useState } from "react";
import YouTube from 'react-youtube';

export default function Home() {
    const { t } = useTranslation("global");

    const opts = {
        playerVars: {
            height: '1920',
            width: '1080',
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const onReady = (event) => {
        // Access to player in all event handlers via event.target
        event.target.playVideo();
    };

    return (
        <div className="home-container">
            <div className="home-section">

                <div className="home-video">
                    <YouTube videoId="BFd92F5U8Xg" opts={opts} onReady={onReady} />
                </div>

                <div className="home-overlay">
                    <h3>Get the future you want</h3>
                    <p>{t("home.description")}</p>

                    <div className="home-btns">
                        <a href="/hytter" className='hytte-btn'>{t("home.learnmore")}</a>
                        <a href="/omoss" className='omoss-btn'>
                            {t("home.perks")}
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}