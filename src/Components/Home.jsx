import React from "react";
import Header from '../Components/Header';
import About from '../Components/About';
import Servicebox from '../Components/Servicebox';
import Portfolio from '../Components/Portfolio';
import Navbar from '../Components/Navbar';
import Testimonial from '../Components/Testimonial';
import Contactus from '../Components/Contactus';

class Home extends React.Component {
    render() {
        return (
            <>
                <Navbar/>
                <Header />
                <Servicebox />
                <About/>
                <Testimonial/>
                <Contactus/>
            </>
        );
    }
}

export default Home;