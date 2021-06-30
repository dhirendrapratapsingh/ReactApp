import React from 'react'
import '../css/cv.css';

const Contact = () => {

    const companies = [{
        name: 'Tektronix(merged with Telestream)Under a Fortune 500 company: Fortive',
        jobTitle : 'UI/UX Developer',
        responisbilities: `Develop UI of embedded App which runs on touch panel Instrument, Browser & Monitor. 
        Features, Bug fixes, Wireframes, UI improvements, pull requests approvals`,
        duration: 'June 2019- Present'

    },{
        name: 'Wishbook Info services Pvt Ltd',
        jobTitle : 'Frontend developer',
        responisbilities: `Develop UI of embedded App which runs on touch panel Instrument, Browser & Monitor. 
        Features, Bug fixes, Wireframes, UI improvements, pull requests approvals`,
        duration: 'May 2018 to June 2019'

    },{
        name: 'Infosys Limited',
        jobTitle : 'System Engineer',
        responisbilities: `Training on Python & JavaScript, Assignments, Test.`,
        duration: 'Dec 2017 to January 2018'
    }]


    return (
            <div className="container">
                <div className="row">
                    <h4 className="ListHeading">My Details</h4>
                </div>
                
                <div id="header">
                    <p id="name">Dhirendra pratap singh</p>
                    <a href="mailto:dhirendrapratapsingh398@gmail.com" target="_blank" rel="noopener noreferrer"><p className="link">dhirendrapratapsingh398@gmail.com</p></a>
                    <a href="https://linkedin.com/in/dhirendra-pratap-singh-530b17112/"  rel="noopener noreferrer"><p className="link">Linkedin</p></a>
                </div>
                
                <div className="data">
                    <h3>Brief Intro</h3>
                    <p>
                    I have 3.3 years of expertise in solving UI/UX problems using various frontend technologies. I have created, developed & optimized 16 applications including professional, certification & personal projects like games. 
                    I have experience in 3 of the 4 top JavaScript frameworks. I have experience in working with  3 of the 4 world's most demanded JavaScript frameworks at leading product based companies & startups.
                    I genuinely love designing and developing appealable, user friendly UI. I have handled 2 projects alone in fast paced product based startup, so giving fast & effective results is mandatory for survival.
                    I acheive my targets on or before time which is appreciated by Team lead, Founder & even testers.
                    I try to bring something extra out of box on the table apart from requirements.
                    </p>
                    
                <h3>Professional Experience</h3>
                <table>
                    <tbody>
                        <tr id="heading">
                            <td>Company Name </td>
                            <td>Designation </td>
                            <td>Responsibilities</td>
                            <td>Duration</td>
                        </tr>
                        {companies.map((company,i)=>(
                            <tr key={i}>
                                <td>{company.name} </td>
                                <td>{company.jobTitle} </td>
                                <td>{company.responisbilities}</td>
                                <td>{company.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                   <h3>Technical Skills</h3>
                    <div>
                        <ul>
                            <li>
                            <span className="course-name">FrontEnd :</span>
                            JavaScript, React Js, Redux, Ember Js, Angular Js, Html5, Css3, jQuery, RESTful API, JSON, Ajax, Bootstrap 4,
                            Handlebar Js, Jasmine Js, Cordova, Onsen(framework to make hybrid iOS/android app), Google Maps API.
                            angular-datatablesV.6, Backbone js, SAAS
                            </li>
                            <li>
                            <span className="course-name">Backend :</span> Asp.net with c#, J2EE, 
                                
                            </li>
                            <li>
                                <span className="course-name">Database:</span> : sql, MySQL
                            </li>
                            <li>
                                <span className="course-name">Language-</span>  c,c++, Python
                            </li>
                        </ul>
                    </div>

                   
                    <h3>Projects</h3>
                    <div>
                        <ul>
                            <li>
                                <span className="course-name">PRISM waveform monitor</span><br/>
                                media monitoring & analysis platform(H/W+S/W) for live SDI, IP signals used by video engineers while production, edit & broadcast
                            </li>
                            <li>
                                <span className="course-name">Wishbook Wholesale App</span><br/>
                                is an online Indian marketplace where textile Manufacturers and Wholesalers sell their products, 
                                while Resellers and Retailers purchase them.iOS App & Mobile browser app (Cordova+onsen+AngularJS)
                            </li>
                            <li>
                                <span className="course-name">Wishbook Seller/admin panel </span><br/>
                                (web Application: AngularJS, AngularDatatablesv0.6x)
                            </li>
                            <li>
                                <span className="course-name">Character Recognizer using KNN </span><br/>
                                (python-Window Apppublished paper in IEEE Bangkok Conference 2017 - my work with name on Google search )
                            </li>
                            <li>
                                <span className="course-name">Map of places to visit in Jamshedpur </span><br />
                                Google map API based
                                application showing
                                places list & markers on
                                map with search feature &
                                on click fetches & displays
                                JSON data from 3rd party
                                Foursquare API
                                ( SPA Google map API +Foursquare API integration:JavaScript,HTML5,CSS3,jQuery,Bootstrap,Google map API,Foursquare API, Knockout JS)
                            </li>          
                            <li>
                                <span className="course-name">Classic Arcade Game </span><br/>
                                The objective is to make
                                the player reach to the
                                water crossing through
                                the road tiles without
                                colliding with bugs which
                                keep appearing & running
                                at random speed.
                                Collision causes 1 life loss
                                & resets player to original
                                position
                                (Js, html5, sweetalert2, jQuery, bootstrap4, canvas js)
                            </li>
                            <li>
                            <span className="course-name">Card Matching Memory Game </span><br />
                                There are eight pairs of
                                turned cards on the panel.
                                The card flips when
                                clicked & shows its icon.
                                On clicking next card it
                                flips:
                                * If the 2nd card icon
                                matches with 1st one then
                                both cards gets locked.
                                * Else the unmatched
                                cards flip back to initial
                                state.
                                Objective is to open all the
                                cards using memory in as
                                lesser time and steps.
                                (Js, jQuery, SweetAlert2,FontAwesome)
                            </li>
                            <li>
                            <span className="course-name">Online Police Station </span><br />
                                    To lodge & handle
                                    complains online
                                    (.NET c#,mySQL-Visial studio)
                            </li>
                            <li>
                            <span className="course-name">Appraisal Management System </span><br />
                                To give grades to
                                employees based on
                                performance( J2EE, servlets,JSP -Eclipse)
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>
            
    )
}

export default Contact