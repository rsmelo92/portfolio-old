import React, { useContext } from "react";
import { LanguageContext } from '../LanguageProvider/context';

import "./Timeitem.css";

export const Timeitem = (props) => {
  const { language } = useContext(LanguageContext);
  return (
    <li className="section-time-item">
      <div className="date-area">
        <p className="date-show">{props.date}</p>
      </div>
      <div className="job-area">
        <div className="job-holder">
          <div className="job-info">
            <h2 className="job-title">{props.title}</h2>
            <h5 className="job-subtitle">{props.description}</h5>
            <div className="job-tags-holder">
              <p className="job-tags-title">{language.techs}</p>
              {props.tags.map((item, index) => (
                <span className="job-tag" key={index}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="job-image-holder">
            <img className="job-image" src={props.image} alt="Job" />
          </div>
        </div>
      </div>
    </li>
  )
}

export default Timeitem;
