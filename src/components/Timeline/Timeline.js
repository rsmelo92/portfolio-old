import React, { Component } from "react";
import translations from './translations_en.json';
import "./Timeline.css";
import Timeitem from "../../components/Timeitem/Timeitem.js";

import jusbrasil from "./jobImages/jusbrasil.png";
import oo from "./jobImages/oo.jpeg";
import consulta from "./jobImages/consulta.jpeg";
import data4good from "./jobImages/data4good.png";
import bilheteriapp from "./jobImages/bilheteriapp.png";
import startseg from "./jobImages/startseg.png";
import semear from "./jobImages/semear.png";
import pks from "./jobImages/pks.png";
import concir from "./jobImages/concir.png";
import congresso from "./jobImages/congresso.png";
import caetano from "./jobImages/caetano.png";
import cleansea from "./jobImages/cleansea.png";
import udacity from "./jobImages/udacity.png";
import portfolio from "./jobImages/portfolio.png";

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
          jobs: [
            {
              date: translations.today,
              title: translations.jusbrasilTitle,
              desc: translations.jusbrasilDesc,
              ...
            },
            ...
          ]
        };
            "NODEJS",
            "GO",
            "FLOW",
            "TEST DRIVEN DEVELOPMENT",
            "REACT",
            "JAVASCRIPT",
            "HTML",
            "CSS",
            "PERFORMANCE",
            "GCLOUD",
            "KUBERNETES",
            "DOCKER",
            "..."
          ],
          image: jusbrasil
        },
        {
          date: "Jan 2020",
          title: translations.consultaTitle,
          desc: translations.consultaDesc,
          tags: ["REACT-NATIVE", "JEST", "TESTING LIBRARY", "FLOW TYPES", "ENZYME", "DETOX-E2E", "WERCKER", "FIREBASE"],
          image: consulta
        },
        {
          date: "Mar 2019",
          title: translations.ooTitle,
          desc: translations.ooDesc,
          tags: ["REACT-NATIVE", "JEST", "FLOW TYPES", "ENZYME", "DETOX-E2E", "WERCKER", "FIREBASE"],
          image: oo
        },
        {
          date: "Fev 2019",
          title: translations.startsegTitle,
          desc: translations.startsegDesc,
          tags: ["REACT", "NETLIFY", "PYTHON", "MATERIAL-UI"],
          image: startseg
        },
        {
          date: "Set 2018",
          title: translations.semearTitle,
          desc: translations.semearDesc,
          tags: ["REACT", "CSS", "NETLIFY"],
          image: semear
        },
        {
          date: "Jun 2018",
          title: translations.bilheteriappTitle,
          desc: translations.bilheteriappDesc,
          tags: [
            "SCRUM",
            "METEORJS",
            "CORDOVA",
            "BLAZE",
            "NODEJS",
            "MONGODB",
            "HEROKU",
            "API",
            "JAVASCRIPT",
            "BOOTSTRAP3",
            "JQUERY",
            "HTML",
            "CSS"
          ],
          image: bilheteriapp
        },
        {
          date: "Mai 2018",
          title: translations.data4goodTitle,
          desc: translations.data4goodDesc,
          tags: [
            "DATA SCIENCE",
            "BIG DATA",
            "METEORJS",
            "CORDOVA",
            "BLAZE",
            "NODEJS",
            "MONGODB",
            "HEROKU",
            "JAVASCRIPT",
            "BOOTSTRAP3",
            "JQUERY",
            "HTML",
            "CSS"
          ],
          image: data4good
        },
        {
          date: "Abr 2018",
          title: translations.portfolioTitle,
          desc: translations.portfolioDesc,
          tags: ["REACT", "HTML", "CSS", "GITHUB PAGES"],
          image: portfolio
        },
        {
          date: "Set 2017",
          title: translations.caetanoTitle,
          desc: translations.caetanoDesc,
          tags: [
            "IBM WATSON",
            "METEORJS",
            "CORDOVA",
            "BLAZE",
            "NODEJS",
            "MONGODB",
            "HEROKU",
            "JAVASCRIPT",
            "BOOTSTRAP3",
            "JQUERY",
            "HTML",
            "CSS"
          ],
          image: caetano
        },
        {
          date: "Jul 2017",
          title: translations.cleanseaTitle,
          desc: translations.cleanseaDesc,
          tags: [
            "METEORJS",
            "CORDOVA",
            "BLAZE",
            "NODEJS",
            "MONGODB",
            "WEBSCRAPER",
            "HEROKU",
            "JAVASCRIPT",
            "BOOTSTRAP3",
            "JQUERY",
            "HTML",
            "CSS"
          ],
          image: cleansea
        },
        {
          date: "Mar 2017",
          title: translations.udacityTitle,
          desc: translations.udacityDesc,
          tags: [
            "JAVASCRIPT",
            "JASMINE",
            "TEST DRIVEN DEVELOPMENT",
            "HTML",
            "CSS",
            "PERFORMANCE"
          ],
          image: udacity
        },
        {
          date: "Out 2016",
          title: translations.congressoTitle,
          desc: translations.congressoDesc,
          tags: [
            "PHP",
            "SEO",
            "API SYMPLA",
            "BOOTSTRAP3",
            "JAVASCRIPT",
            "JQUERY",
            "CSS",
            "HTML"
          ],
          image: congresso
        },
        {
          date: "Ago 2016",
          title: translations.concirTitle,
          desc: translations.concirDesc,
          tags: [
            "PHP",
            "CSS",
            "HTML",
            "SEO",
            "API FACEBOOK",
            "API INSTAGRAM",
            "BOOTSTRAP3",
            "JAVASCRIPT",
            "JQUERY"
          ],
          image: concir
        },
        {
          date: "Jun 2016",
          title: translations.pksTitle,
          desc: translations.pksDesc,
          tags: ["HTML", "CSS", "SEO", "BOOTSTRAP3", "JQUERY"],
          image: pks
        }
      ]
    };
  }
  render() {
    const jobs = this.state.jobs;
    return (
      <div className="section-timeline">
        <h1 className="timeline-heading">{translations.portfolio}</h1>
        <p className="timeline-subheading">
          {translations.description}
        </p>
        <ul>
          {jobs.map((item, index) => (
            <Timeitem
              key={index}
              title={item.title}
              description={item.desc}
              date={item.date}
              tags={item.tags}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Timeline;
