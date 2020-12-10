import React, { Component } from "react";
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
          date: "Hoje",
          title: "Jusbrasil",
          desc:
            "Faço parte do time de desenvolvimento da Jusbrasil a maior startup Jurídica do Brasil com um stack diverso e variado de tecnologias. Atuo no back-end, infra-estrutura, com aplicativos e front-end.",
          tags: [
            "REACT NATIVE",
            "PYTHON",
            "SCALA",
            "JAVA",
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
          title: "Consulta Processual",
          desc:
            "Junto com a equipe de mobile, desenvolvi do zero o app principal de consulta processual do Brasil. Com mais de 50.000 downloads e crescendo, foi um trabalho em conjunto com os designers, time de de dev e Product Manager para utilizar as melhores tecnicas e tecnologias.",
          tags: ["REACT-NATIVE", "JEST", "TESTING LIBRARY", "FLOW TYPES", "ENZYME", "DETOX-E2E", "WERCKER", "FIREBASE"],
          image: consulta
        },
        {
          date: "Mar 2019",
          title: "Escritório Online",
          desc:
            "Desenvolvi junto com o time de app da Jusbrasil, o aplicativo Escritório Online lançado para iOS e Android, com mais de 10.000 instalações. Além de ajudar a desenvolver o app, fiz parte do time de manutenção e de novas features, trabalhando ao lado dos designers e dos devs",
          tags: ["REACT-NATIVE", "JEST", "FLOW TYPES", "ENZYME", "DETOX-E2E", "WERCKER", "FIREBASE"],
          image: oo
        },
        {
          date: "Fev 2019",
          title: "StartSeg",
          desc:
            "Minha equipe ficou em terceiro lugar no Hackathon da Campus Party Brasil 12, patrocinado pela Liberty Seguros com um app de marketplace e treinamento para corretores de seguro em início de carreira.",
          tags: ["REACT", "NETLIFY", "PYTHON", "MATERIAL-UI"],
          image: startseg
        },
        {
          date: "Set 2018",
          title: "Semear",
          desc:
            "Em um hackathon com foco no pequeno agricultor minha equipe ficou em terceiro lugar com um app de melhoria de gestão de recursos e educação do desenvolvimento sustentável do pequeno agricultor.",
          tags: ["REACT", "CSS", "NETLIFY"],
          image: semear
        },
        {
          date: "Jun 2018",
          title: "Bilheteriapp",
          desc:
            "Fiz parte do time de desenvolvimento da startup Bilheteriapp por 1 ano e 10 meses. Atuei no Back-end e no Front-end juntamente com a equipe.",
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
          title: "Data4Good",
          desc:
            "App campeão do Hackathon da Campus Party Bahia 2018 Data4Good realizado pela Campus Party em parceria com o CappraLab, um Hackathon de análise de dados focado em Data Science.",
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
          title: "Portfolio",
          desc:
            "Construído este portfólio para praticar React e mostrar em que tenho trabalhado ultimamente",
          tags: ["REACT", "HTML", "CSS", "GITHUB PAGES"],
          image: portfolio
        },
        {
          date: "Set 2017",
          title: "Chatbot Caetano",
          desc:
            "Chatbot construído para o I Hackathon da UNIFACS pela minha equipe HackaTI. Ficou em primeiro lugar na competição",
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
          title: "CleanSea",
          desc:
            "Aplicativo construído para o concurso IEEEMadc2017 no qual fiquei em terceiro lugar sozinho concorrendo com 40+ equipes do mundo todo",
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
          title: "Udacity Front End Nanodegree",
          desc:
            "Construção de 6 projetos para obter o certificado de Front End Nanodegree",
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
          title: "Congresso de TI UNIFACS",
          desc:
            "Site para o congresso de TI da Unifacs com cerca de 500 inscritos e constante atualização durante o evento",
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
          title: "Concir",
          desc:
            "Site feito para a clínica odontológica Concir visando a comunicação com clientes e apresentação dos serviços. Constantemente atualizado com Redes Sociais",
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
          title: "PKS Arquitetura",
          desc:
            "Site construído para empresa de avaliações e perícias de engenharia",
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
        <h1 className="timeline-heading">Portfólio</h1>
        <p className="timeline-subheading">
          Todos os trabalhos abaixo tiveram o back-end e front-end feitos por
          mim, a menos que indicado o contrário
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
