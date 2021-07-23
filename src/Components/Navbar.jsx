import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <header id="header" class="fixed-top d-flex align-items-center">
                <div class="container d-flex align-items-center justify-content-between">
                    <div class="logo">
                        <a href="/Home"><img src="assets/img/Company.png" alt="" class="img-fluid" /></a>
                    </div>
                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><a class="nav-link scrollto active" href="/Home">Home</a></li>
                            <li class="dropdown"><a href="/Services"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li class="dropdown"><a href="#"><span>Mobile App Development</span> <i class="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="/Iosappdevelopment">Ios App Development</a></li>
                                            <li><a href="/Androidappdevelopment">Android App Development</a></li>
                                            <li><a href="/Hybridappdevelopment">Hybrid/Cross-Platform</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="/Webappdev"><span>Web Development</span> <i class="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="/Webappdev">Web Application Development</a></li>
                                            <li><a href="/Ecommercedev">eCommerce Development</a></li>
                                            <li><a href="/Webandcmsdev">Web and Cms Development</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#"><span>Software Development</span> <i class="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="/Customersoftwaredev">Custom Software Development</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown"><a href="/HireDevelopers"><span>Hire Developers</span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/Hirenodejsdev">Hire Nodejs Developers</a></li>
                                    <li><a href="/Hirereactjsdev">Hire React Js Developers</a></li>
                                    <li><a href="/Hirecrossplatformdev">Hire Cross Platform Developers</a></li>
                                    <li><a href="/Hirejavadev">Hire Java Developers</a></li>
                                    <li><a href="/Hireaspdotnetdev">Hire ASP.NET Core Developers</a></li>
                                    <li><a href="/Hireecommercedev">Hire Ecommarce Developers</a></li>
                                </ul>
                            </li>
                            <li><a class="nav-link scrollto" href="/Portfolio">Portfolio</a></li>
                            <li><a class="nav-link scrollto" href="/Contact">Contact Us</a></li>
                            <li><a class="nav-link scrollto" href="/Aboutus">About Us</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;