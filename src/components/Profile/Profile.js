import React, { Component } from 'react';
import './Profile.css';
import eu from "./Eu2.jpg";
import git from "./git.png";
import linkedin from "./linkedin.png";
import codepen from "./codepen.png";
import wpp from "./wpp.png";

class Profile extends Component {
    render(){
        return(
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
                                <p>Desenvolvedor Web Fullstack situado em Salvador Bahia</p>
                            </div>
                        </div>
                        <div className="third-profile">
                            <h5>Contato</h5>
                            <div className="profile-icons">
                                <a className="icon-link" href="https://github.com/rsmelo92"><img src={git} alt="social network icon"/></a>
                                <a className="icon-link" href="https://www.linkedin.com/in/rafael-melo-info/"><img src={linkedin} alt="social network icon"/></a>
                                <a className="icon-link" href="https://codepen.io/rsmelo92/"><img src={codepen} alt="social network icon"/></a>
                                <a className="icon-link" href=""><img src={wpp} alt="social network icon"/></a>
                            </div>
                        </div>
                </div>
                
            </aside>
        );
    }
}

export default Profile;