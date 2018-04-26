import React, { Component } from 'react';
import './Timeline.css';
import Timeitem from '../../components/Timeitem/Timeitem.js';

import bilheteriapp from './jobImages/bilheteriapp.png';
import pks from './jobImages/pks.png';
import concir from './jobImages/concir.png';
import congresso from './jobImages/congresso.png';
import caetano from './jobImages/caetano.png';
import cleansea from './jobImages/cleansea.png';
import udacity from './jobImages/udacity.png';
import portfolio from './jobImages/portfolio.png';

class Timeline extends Component {
    constructor(){
        super();
        this.state = {
            jobs:[
                {
                    date: "Hoje",
                    title:'Bilheteriapp',
                    desc:"Faço parte do time de desenvolvimento da startup Bilheteriapp. Atuo no Back-end e no Front-end juntamente com a equipe.",
                    tags:['SCRUM', 'METEORJS','CORDOVA', 'BLAZE', 'NODEJS', 'MONGODB', 'HEROKU', 'API', 'JAVASCRIPT', 'BOOTSTRAP3', 'JQUERY', 'HTML', 'CSS',],
                    image: bilheteriapp,
                },
                {
                    date: "Abr 2018",
                    title:'Portfolio',
                    desc:"Construído este portfólio para praticar React e mostrar em que tenho trabalhado ultimamente",
                    tags:[ 'REACT', 'HTML', 'CSS', 'GITHUB PAGES'],
                    image:portfolio,
                },
                {
                    date: "Set 2017",
                    title:'Chatbot Caetano',
                    desc:"Chatbot construído para o I Hackathon da UNIFACS pela minha equipe HackaTI. Ficou em primeiro lugar na competição",
                    tags:[ 'IBM WATSON', 'METEORJS','CORDOVA', 'BLAZE', 'NODEJS', 'MONGODB', 'HEROKU', 'JAVASCRIPT', 'BOOTSTRAP3', 'JQUERY', 'HTML', 'CSS'],
                    image:caetano,
                },
                {
                    date: "Jul 2017",
                    title:'CleanSea',
                    desc:"Aplicativo construído para o concurso IEEEMadc2017 no qual fiquei em terceiro lugar sozinho concorrendo com 40+ equipes do mundo todo",
                    tags:['METEORJS','CORDOVA', 'BLAZE', 'NODEJS', 'MONGODB', 'WEBSCRAPER', 'HEROKU', 'JAVASCRIPT', 'BOOTSTRAP3', 'JQUERY', 'HTML', 'CSS'],
                    image:cleansea,
                },
                {
                    date: "Mar 2017",
                    title:'Udacity Front End Nanodegree',
                    desc:"Construção de 6 projetos para obter o certificado de Front End Nanodegree",
                    tags:['JAVASCRIPT', 'JASMINE', 'TEST DRIVEN DEVELOPMENT', 'HTML', 'CSS', 'PERFORMANCE'],
                    image:udacity,
                },
                {
                    date: "Out 2016",
                    title:'Congresso de TI UNIFACS',
                    desc:"Site para o congresso de TI da Unifacs com cerca de 500 inscritos e constate atualização durante o evento",
                    tags:['PHP', 'SEO', 'API SYMPLA', 'BOOTSTRAP3', 'JAVASCRIPT', 'JQUERY','CSS', 'HTML'],
                    image:congresso,
                },
                {
                    date: "Ago 2016",
                    title:'Concir',
                    desc:"Site feito para a clínica odontológica Concir visando a comunicação com clientes e apresentação dos serviços. Constatemente atualizado com Redes Sociais",
                    tags:['PHP','CSS', 'HTML', 'SEO', 'API FACEBOOK', 'API INSTAGRAM', 'BOOTSTRAP3', 'JAVASCRIPT', 'JQUERY'],
                    image:concir,
                },
                {
                    date: "Jun 2016",
                    title:'PKS Arquitetura',
                    desc:"Site construído para empresa de avaliações e perícias de engenharia",
                    tags:['HTML','CSS', 'SEO','BOOTSTRAP3', 'JQUERY'],
                    image:pks,
                },
            ]
        }
    }
    render(){
        const jobs = this.state.jobs;
        return(
            <div className="section-timeline">
                <h1 className="timeline-heading">Portfólio</h1>
                <p className="timeline-subheading">Todos os trabalhos abaixo tiveram o back-end e front-end feitos por mim, a menos que indicado o contrário</p>
                <ul>
                    {jobs.map((item,index)=>(
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