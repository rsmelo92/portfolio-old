import React, { Component } from "react";
import "./Timeitem.css";

import translations from '../../../translations_en.json';

class Timeitem extends Component {
  render() {
    const props = this.props;
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
                <p className="job-tags-title">{translations.techs}</p>
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
    );
  }
}

export default Timeitem;
