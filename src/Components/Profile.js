import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Components/Header';
import logo from './images/logo1.png';
import './Profile.css';

function Profile(){
    return(
        <div>
            <Header/>
            <>
            <Row style={{marginTop:'100px'}}>
            <Col lg={3}  className='colstyle offset-lg-1 '>
                <div  style={{backgroundColor:'#ADD8E6'}} className='colstyle1'>
                <img src={logo} width='20%' alt='logo'></img>
                <div className="about">
                <h2>Hello,I'm Divya Akula</h2>
                <h4>Full-stack Web Developer</h4>
                <p >
                Software engineer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines. 
                Eager to obtain a challenging position that will expand my learning and build upon my developer skills.
                </p>
                <div className="centering">
                <a  href="http://www.linkedin.com/in/"><i className="fa fa-lg fa-linkedin iconstyle"></i></a>
                <a  href="http://twitter.com/"><i className="fa fa-lg fa-twitter iconstyle"></i></a>
                <a  href="http://twitter.com/"><i className="fa fa-lg fa-github iconstyle"></i></a>
                <a  href="http://twitter.com/"><i className="fa fa-lg fa-envelope iconstyle"></i></a>          
                </div>
                </div>
                </div>
            </Col>
            <Col lg={3} className='offset-lg-1 offset-2' style={{marginTop:'50px'}}>
                <h4><strong><u>About Me:</u></strong></h4><br></br>
                <ul className="about" >
                    <li>I am fullstack developer.</li><br></br>
                    <li>Designed a few Webpages using Python-Django.</li><br></br>
                    <li>I learned ReactJs and also Designed a responsive-Webpage.</li><br></br>
                    <li>I have good knowledge on Python,Django,Html,CSS,JavaScript,<br></br>ReactJs,MySql.</li>
                </ul>
            </Col>
            <Col lg={3} className=' offset-lg-1 offset-2' style={{marginTop:'50px'}}>
                <h4><strong><u>Details:</u></strong></h4><br></br>
                <div className="about">
                <p><strong>Name:</strong><br></br>Divya Akula</p>
                <p><strong>Age</strong><br></br>22</p>
                <p><strong>Location</strong><br></br>Guntur,AndhraPradesh</p>
                
                <div >
                <a className="btn btn-xs btn-social-icon btn-linkedin" style={{margin:'2px'}} href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                <a className="btn btn-xs btn-social-icon btn-twitter" style={{margin:'2px'}} href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                <a className="btn btn-xs btn-social-icon btn-github" style={{margin:'2px'}} href="http://twitter.com/"><i className="fa fa-github"></i></a>
                <a className="btn btn-xs btn-social-icon btn-pinterest" style={{margin:'2px'}} href="http://twitter.com/"><i className="fa fa-envelope"></i></a>          
                </div>
                </div>
            </Col>
            </Row>
            </>
            
        </div>

    )
}
export default Profile;