import { FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/About.css";

const About = () => {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/vonnie._h/profilecard/?igsh=eXZ1YW4yeDdkdjd2",
      label: "Instagram",
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com/@yvonneho4112?si=w7M-gM1PU7Ll-QnZ",
      label: "YouTube",
    },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>Hi! I'm Yvonne</h2>
            <p>
              喜歡記錄生活、分享創作。
            </p>
            <p>
              平常熱愛<strong>設計</strong>、<strong>插畫</strong>，也經營著自己的 <strong>YouTube 頻道</strong>和 Instagram，
              分享日常、作品和各種靈感。
            </p>
            <p>
              我擅長<strong>UI/UX設計</strong>、<strong>網站製作</strong>，也正在持續累積更多作品和經驗。
            </p>
            <p>
              喜歡挑戰新的東西，享受把想法變成實際作品的過程。
              希望透過設計和內容創作，讓更多人感受到溫度和故事。
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="social-icon"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a
              href="https://portaly.cc/vonnie"
              target="_blank"
              rel="noopener noreferrer"
              className="portaly-button"
            >
              我的Portaly.cc
            </a>
          </div>

          <div className="about-image">
            <div className="image-container">
              <img 
                src="/images/profile.png" 
                alt="Yvonne Ho" 
                className="profile-image"
              />
              <div className="decoration-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
