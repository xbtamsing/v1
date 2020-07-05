// --- IMPORTS ---
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Stylesheets/resume.css';

// --- RESUME ---
class Resume extends React.Component {
    render() {
        return(
            <Container id="resume" className="main-content-wrapper">
                <Row>
                    <Col id="resume-title">
                        <h1>Resume.<span className="cursor">|</span></h1>
                    </Col>
                </Row>
                    {/* education // no column necessary?*/}
                {/*
                <Row className="resume-section" id="work">
                    <Col>
                        <Row className="header">
                            <Col>
                                <h3>Work</h3>
                            </Col>
                        </Row>
                        <Row className="desc">
                            <Col>
                                <Row className="full-hover" id="work-bc">
                                    <Col className="detail">
                                        <p>Summer 2019</p>
                                    </Col>
                                    <Col className="detail">
                                        <p>Bruce Clay, Inc. / Simi Valley, CA</p>
                                    </Col>
                                    <Col className="detail">
                                        <p>Web Content Assistant (SEO) - <br></br>
                                            <span className="minor">Revised over 200+ static 
                                                pages/blogs using SEO tools, strengthening website silos and improving site-wide link 
                                                equity, particularly for the search term "SEO"
                                            </span>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                */}
                <Row className="resume-section" id="education">
                    <Col>
                        <Row className="header">
                            <Col>
                                <h3>Education</h3>
                            </Col>
                        </Row>
                        <Row className="desc">
                            <Col>
                                <Row className="full-hover" id="sjsu-se">
                                    <Col className="detail">
                                        <p>2018-2021</p>
                                    </Col>
                                    <Col className="detail">
                                        <p>San Jose State University</p>
                                    </Col>
                                    <Col className="detail">
                                        <p>Bachelor of Science in Software Engineering, Minor in Mathematics</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row className="full-hover" id="bonaventure">
                                    <Col className="detail">
                                        <p>2012-2016</p>
                                    </Col>
                                    <Col className="detail">
                                        <p>Saint Bonaventure High School</p>
                                    </Col>
                                    <Col className="detail">
                                        <p>High School Diploma</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                    <hr />
                    {/* technical skills */}
                    <Row className="resume-section" id="technical-skills">
                        <Col>
                            <Row className="header">
                                <Col>
                                    <h3>Technical Skills</h3>
                                </Col>
                            </Row>
                            <Row className="desc">
                                <Col>
                                    <Row className="tech-skills">
                                        <Col className="detail full-hover">
                                            <p>HTML/CSS</p>
                                            <div className="level" style={{width: "75%"}}>
                                                <span className="level-title">75%</span>
                                                <div className="level-bar"></div>
                                            </div>
                                        </Col>
                                        <Col className="detail full-hover">
                                            <p>Java</p>
                                            <div className="level" style={{width: "50%"}}>
                                                <span className="level-title">50%</span>
                                                <div className="level-bar"></div>
                                            </div>
                                        </Col>
                                        <Col className="detail full-hover">
                                            <p>JavaScript</p>
                                            <div className="level" style={{width: "50%"}}>
                                                <span className="level-title">50%</span>
                                                <div className="level-bar"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="tech-skills">
                                        <Col className="detail full-hover">
                                            <p>Bootstrap</p>
                                            <div className="level" style={{width: "50%"}}>
                                                <span className="level-title">50%</span>
                                                <div className="level-bar"></div>
                                            </div>
                                        </Col>
                                        <Col className="detail full-hover">
                                            <p>PHP</p>
                                            <div className="level" style={{width: "25%"}}>
                                                <span className="level-title">25%</span>
                                                <div className="level-bar"></div>
                                            </div>
                                        </Col>
                                        <Col className="detail full-hover">
                                            <p>React</p>
                                            <div className="level" style={{width: "25%"}}>
                                                <span className="level-title">25%</span>
                                                <div className="level-bar"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="tech-skills">
                                        <Col className="detail full-hover">
                                            <p>Swift</p>
                                            <div className="level" style={{width: "25%"}}>
                                                <span className="level-title">25%</span>
                                                <div className="level-bar"></div>
                                            </div>
                                        </Col>
                                        <Col className="detail full-hover">
                                            <p>Firebase</p>
                                            <div className="level" style={{width: "25%"}}>
                                                <span className="level-title">25%</span>
                                                <div className="level-bar"></div>
                                            </div>
                                        </Col>
                                        <Col className="detail full-hover">
                                            <p>Git</p>
                                            <div className="level" style={{width: "25%"}}>
                                                <span className="level-title">25%</span>
                                                <div className="level-bar"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    {/* other skills and soft skills */}
                    <Row className="resume-section" id="soft-skills">
                        <Col>
                            <Row className="header">
                                <Col>
                                    <h3>Soft Skills</h3>
                                </Col>
                            </Row>
                            <Row className="desc">
                                <Col>
                                    <Row className="soft-skills">
                                        <Col className="detail">
                                            <p className="partial-hover">Attention to Detail</p>
                                        </Col>
                                        <Col className="detail">
                                            <p className="partial-hover">Team Focused</p>
                                        </Col>
                                        <Col className="detail">
                                            <p className="partial-hover">Problem Solving and Critical Thinking</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            </Container>
        );
    }
}

export default Resume;