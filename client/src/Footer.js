
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            < footer className="footer1">
                < div className="container">
                    < div className="row">
                        < div className="col-lg-3 col-md-3">
                            < ul className="list-unstyled clear-margins">
                                < li className="widget-container widget_nav_menu">
                                    < h1 className="title-widget"> Useful links< /h1>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> About Us</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Contact Us</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Success Stories</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> PG Courses</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Achiever's Batch</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Regular Batch</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Test & Discussion</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Fast Track T & D</a></li>
                                    </ul>
                                < /li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <ul className="list-unstyled clear-margins">
                                <li className="widget-container widget_nav_menu">
                                    <h1 className="title-widget">Useful links</h1>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i>  Test Series Schedule</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i>  Postal Coaching</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i>  PG Dr. Bhatia Books</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i>  UG Courses</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i>  Satellite Education</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i>  Study Centres</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i>  State P.G. Mocks</a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-angle-double-right"></i> Results</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <ul className="list-unstyled clear-margins">
                                <li className="widget-container widget_nav_menu">
                                    <h1 className="title-widget">Useful links</h1>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Enquiry Form</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Online Test Series</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Grand Tests Series</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Subject Wise Test Series</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Smart Book</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Test Centres</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i>  Admission Form</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i>  Computer Live Test</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <ul className="list-unstyled clear-margins">
                                <li className="widget-container widget_recent_news">
                                    <h1 className="title-widget">Contact Detail </h1>
                                    <div className="footerp">
                                        <h2 className="title-median">Webenlance Pvt. Ltd.</h2>
                                        <p><b>Email id:</b> <a href="mailto:info@webenlance.com">info@webenlance.com</a></p>
                                        <p><b>Helpline Numbers </b>
                                            <b styles="color:#ffc106;">(8AM to 10PM):</b> +91-8130890090, +91-8130190010 </p>
                                        <p><b>Corp Office / Postal Address</b></p>
                                        <p><b>Phone Numbers : </b>7042827160, </p>
                                        <p> 011-27568832, 9868387223</p>
                                    </div>
                                    <div className="social-icons">
                                        <ul className="nomargin">
                                            <a href="https://www.facebook.com/bootsnipp"><i className="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
                                            <a href="https://twitter.com/bootsnipp"><i className="fa fa-twitter-square fa-3x social-tw" id="social"></i></a>
                                            <a href="https://plus.google.com/+Bootsnipp-page"><i className="fa fa-google-plus-square fa-3x social-gp" id="social"></i></a>
                                            <a href="mailto:bootsnipp@gmail.com"><i className="fa fa-envelope-square fa-3x social-em" id="social"></i></a>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="copyright">
                                    © 2020, Webenlance, All rights reserved
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="design">
                                    <a href="#">Franchisee </a> | <a target="_blank" href="http://www.webenlance.com">Web Design
                                    & Development by Webenlance</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )}
    }

    export default Footer

