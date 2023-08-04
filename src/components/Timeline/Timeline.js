import React, { useContext } from "react";
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

import { LanguageContext } from '../LanguageProvider/context';

import "./Timeline.css";

const Timeline = () => {
  const { language } = useContext(LanguageContext);
  const jobs = [
    {
      date: "Mar 2022",
      title: language.jusbrasilTitle,
      desc: language.jusbrasilDesc,
      tags:[
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
      title: language.consultaTitle,
      desc: language.consultaDesc,
      tags: ["REACT-NATIVE", "JEST", "TESTING LIBRARY", "FLOW TYPES", "ENZYME", "DETOX-E2E", "WERCKER", "FIREBASE"],
      image: consulta
    },
    {
      date: "Mar 2019",
      title: language.ooTitle,
      desc: language.ooDesc,
      tags: ["REACT-NATIVE", "JEST", "FLOW TYPES", "ENZYME", "DETOX-E2E", "WERCKER", "FIREBASE"],
      image: oo
    },
    {
      date: "Fev 2019",
      title: language.startsegTitle,
      desc: language.startsegDesc,
      tags: ["REACT", "NETLIFY", "PYTHON", "MATERIAL-UI"],
      image: startseg
    },
    {
      date: "Set 2018",
      title: language.semearTitle,
      desc: language.semearDesc,
      tags: ["REACT", "CSS", "NETLIFY"],
      image: semear
    },
    {
      date: "Jun 2018",
      title: language.bilheteriappTitle,
      desc: language.bilheteriappDesc,
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
      title: language.data4goodTitle,
      desc: language.data4goodDesc,
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
      title: language.portfolioTitle,
      desc: language.portfolioDesc,
      tags: ["REACT", "HTML", "CSS", "GITHUB PAGES"],
      image: portfolio
    },
    {
      date: "Set 2017",
      title: language.caetanoTitle,
      desc: language.caetanoDesc,
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
      title: language.cleanseaTitle,
      desc: language.cleanseaDesc,
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
      title: language.udacityTitle,
      desc: language.udacityDesc,
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
      title: language.congressoTitle,
      desc: language.congressoDesc,
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
      title: language.concirTitle,
      desc: language.concirDesc,
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
      title: language.pksTitle,
      desc: language.pksDesc,
      tags: ["HTML", "CSS", "SEO", "BOOTSTRAP3", "JQUERY"],
      image: pks
    }
  ];

  return (
    <div className="section-timeline">
      <h1 className="timeline-heading">{language.portfolio}</h1>
      <p className="timeline-subheading">
        {language.description}
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

export default Timeline;
