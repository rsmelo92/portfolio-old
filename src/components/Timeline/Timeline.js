import React, { Component } from 'react';
import './Timeline.css';
import Timeitem from '../../components/Timeitem/Timeitem.js';

class Timeline extends Component {
    constructor(){
        super();
        this.state = {
            jobs:[
                {
                    date: "Hoje",
                    title:'Bilheteriapp',
                    desc:"Faço parte do time de desenvolvimento da startup Bilheteriapp. Atuo no Back-end e no Front-end juntamente com a equipe.",
                    tags:['SCRUM', 'METEORJS','CORDOVA', 'BLAZE', 'NODEJS', 'MONGODB', 'API', 'JAVASCRIPT', 'BOOTSTRAP3', 'JQUERY', 'HTML', 'CSS',]
                },
                {
                    date: "Jul 2017",
                    title:'CleanSea',
                    desc:"Aplicativo construído para o concurso IEEEMadc2017 no qual fiquei em terceiro lugar sozinho concorrendo com 40+ equipes do mundo todo",
                    tags:['METEORJS','CORDOVA', 'BLAZE', 'NODEJS', 'MONGODB', 'WEBSCRAPER', 'JAVASCRIPT', 'BOOTSTRAP3', 'JQUERY', 'HTML', 'CSS']
                },
                {
                    date: "Mar 2017",
                    title:'Udacity Front End Nanodegree',
                    desc:"Construção de 6 projetos para obter o certificado de Front End Nanodegree",
                    tags:['JAVASCRIPT', 'JASMINE', 'TEST DRIVEN DEVELOPMENT', 'HTML', 'CSS']
                },
                {
                    date: "Out 2016",
                    title:'Congresso de TI UNIFACS',
                    desc:"Site para o congresso de TI da Unifacs com cerca de 500 inscritos e constate atualização durante o evento",
                    tags:['PHP', 'SEO', 'API', 'BOOTSTRAP3', 'JAVASCRIPT', 'JQUERY','CSS', 'HTML']
                },
                {
                    date: "Ago 2016",
                    title:'Concir',
                    desc:"Site feito para a clínica odontológica Concir visando a comunicação com clientes e apresentação dos serviços. Constatemente atualizado com Redes Sociais",
                    tags:['PHP','CSS', 'HTML', 'SEO', 'API', 'BOOTSTRAP3', 'JAVASCRIPT', 'JQUERY']
                },
                {
                    date: "Jun 2016",
                    title:'PKS Arquitetura',
                    desc:"Site construído para empresa de avaliações e perícias de engenharia",
                    tags:['HTML','CSS', 'SEO','BOOTSTRAP3', 'JQUERY']
                },
            ]
        }
    }
    render(){
        console.log("state", this.state.jobs);
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
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Timeline;