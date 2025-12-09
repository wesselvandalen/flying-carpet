import "./home_screen.css";

export default function HomeScreen() {
  return (
    <div className="hero-container">
      <video
        className="hero-video"
        src="https://www.pexels.com/nb-no/download/video/25797541/"  
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Get the future you want</h1>
        <p>Your journey starts here</p>
      </div>
    </div>
  );
}