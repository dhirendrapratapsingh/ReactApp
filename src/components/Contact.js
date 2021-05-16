import React from 'react'
import './cv.css'

const Contact = () => {
    return (
            <div className="container">
                <div className="row">
                    <h4 className="ListHeading">My Details</h4>
                </div>
                
                <div id="header">
                <p id="name">Dhirendra pratap singh</p>
                <a href="mailto:dhirendrapratapsingh398@gmail.com" target="_blank"><p id="email">dhirendrapratapsingh398@gmail.com</p></a>
                </div>
                
                <div class="data">
                    <h3>Who am I ?</h3>
                    <p>
                        I am a certified Front end developer having hands-on experience on 8+ projects which include games, e-commerce mobile/web apps etc.
                        I genuinely love designing & developing appealable, user friendly UI. I handle 2 projects alone in fast paced product based startup, so giving fast & effective results is mandatory for survival.
                        Learning is always on as challanging tasks keep on coming. I acheive my targets on or before time which is appreciated by Team lead, Founder & even testers.
                        I try to bring something extra out of box on the table apart from requirements.
                    </p>
                    
                <h3>Professional Experience</h3>
                <table>
                    <tr id="heading">
                        <td>Company Name </td>
                        <td>Designation </td>
                        <td>Responsibilities</td>
                        <td>Duration</td>
                    </tr>
                    <tr>
                        <td>Wishbook Info services Pvt Ltd.</td>
                        <td>Front end developer</td>
                        <td>Adding new Features with UI & logic, 3rd party API integrations, Bug fixing,
                        code migration, Implementing requirement changes, team co-ordination, meetings.</td>
                        <td>May 2018
                            Till
                            Present</td>
                    </tr>
                    <tr>
                        <td>Infosys
                            Limited</td>
                        <td>System
                            Engineer</td>
                        <td>Training on Python &
                            JavaScript,
                            Assignments, Test,
                            Projects</td>
                        <td>Dec 2017
                            till
                            April
                            2018</td>
                    </tr>

                </table>

                   <h3>Technical Skills</h3>
                    <p>
                        <ul>
                            <li>
                            <span id="course-name">FrontEnd :</span>
                            Angular JS, React JS, javascript, HTML5, CSS3, jQuery, RESTful API's, Cordova,Onsen(framework for hybrid iOS/Android app),
                            Bootstrap 4, angular-datatablesV.6, Google maps Api, JSON, Backbone js, Jasmine js
                            </li>
                            <li>
                            <span id="course-name">Backend :</span> Asp.net with c#, MVC
                                
                            </li>
                            <li>
                                <span id="course-name">Database:</span> : sql, MySQL
                            </li>
                            <li>
                            <span id="course-name">Database:</span>  : sql, MySQL
                                <span id="course-name">Language-</span>  c,c++, Java, Python
                            </li>
                        </ul>
                    </p>

                   
                    <h3>Projects</h3>
                    <p>
                        <ul>
                            <li>
                                <span id="course-name">Wishbook Wholesale App</span><br/>
                                is an online Indian marketplace where textile Manufacturers and Wholesalers sell their products, 
                                while Resellers and Retailers purchase them.iOS App & Mobile browser app (Cordova+onsen+AngularJS)
                            </li>
                            <li>
                                <span id="course-name">Wishbook Seller/admin panel </span><br/>
                                (web Application: AngularJS, AngularDatatablesv0,6x)
                            </li>
                            <li>
                                <span id="course-name">Character Recognizer using KNN </span><br/>
                                (python-Window Apppublished paper in IEEE Bangkok Conference 2017 - my work with name on Google search )
                            </li>
                            <li>
                                <span id="course-name">Map of places to visit in Jamshedpur </span><br />
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
                                <span id="course-name">Classic Arcade Game </span><br/>
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
                            <span id="course-name">Card Matching Memory Game </span><br />
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
                            <span id="course-name">Online Police Station </span><br />
                                    To lodge & handle
                                    complains online
                                    (.NET c#,mySQL-Visial studio)
                            </li>
                            <li>
                            <span id="course-name">Appraisal Management System </span><br />
                                To give grades to
                                employees based on
                                performance( J2EE, servlets,JSP -Eclipse)
                            </li>
                        </ul>
                    </p> 
                </div>
            </div>
    )
}

export default Contact