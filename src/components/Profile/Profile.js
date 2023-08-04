import React, { useContext, useState } from 'react';

import eu from "./assets/Me.jpg";
import git from "./assets/git.png";
import linkedin from "./assets/linkedin.png";
import codepen from "./assets/codepen.png";
import TT from "./assets/TT.png";

import { LanguageContext } from '../LanguageProvider/context';

import './Profile.css';

export const Profile = () => {
  const getLang = () => {
    const lang = navigator.language
    if(lang.includes("fr")) return "FR"
    if(lang.includes("pt")) return "PT"
    return "EN"
  }
  const { language, updateLanguage } = useContext(LanguageContext);
  const [activeLang, setActiveLang] = useState(getLang())
  return (
    <aside className="section-profile">
      <div className="profile-holder">
        <div className="first-profile">
          <div className="profile-info">
            <figure className="img-holder">
              <img src={eu} alt="Page Author"/>
            </figure>
            <h1>RAFAEL MELO</h1>
            <p>FULLSTACK WEB DEVELOPER</p>
          </div>
        </div>
        <div className="second-profile">
          <div className="profile-description">
            <p>{language.profileDesc}</p>
          </div>
        </div>
        <div className="third-profile">
          <h5>{language.contact}</h5>
          <div className="profile-icons">
            <a className="icon-link" href="https://github.com/rsmelo92"><img src={git} alt="social network icon"/></a>
            <a className="icon-link" href="https://www.linkedin.com/in/rafael-melo-info/"><img src={linkedin} alt="social network icon"/></a>
            <a className="icon-link" href="https://twitter.com/rsmelo_"><img src={TT} alt="social network icon"/></a>
            <a className="icon-link" href="https://codepen.io/rsmelo92/"><img src={codepen} alt="social network icon"/></a>
          </div>
        </div>
        <div className="fourth-profile">
          <div className="profile-langs">
            <button
              className={`${activeLang === "PT" ? "active" : ""}`}
              onClick={() => {
                updateLanguage("PT");
                setActiveLang("PT");
              }}
            >
              <span role="img" aria-label="Brazil">
                🇧🇷
              </span>
            </button>
            <button
              className={`${activeLang === "FR" ? "active" : ""}`}
              onClick={() => {
                updateLanguage("FR");
                setActiveLang("FR");
              }}
            >
              <span role="img" aria-label="France">
                🇫🇷
              </span>
            </button>
            <button
              className={`${activeLang === "EN" ? "active" : ""}`}
              onClick={() => {
                updateLanguage("EN");
                setActiveLang("EN");
              }}
            >
              <span role="img" aria-label="England">
                🇬🇧
              </span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Profile;
