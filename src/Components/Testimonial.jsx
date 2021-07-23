import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Testimonials extends Component {
    render() {
        return (
            <section id="about" class="about">
                <div class="section-title" data-aos="fade-up">
                    <h2>Testimonial</h2>
                </div>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >
                    <div>
                        <img src="assets/img/MiltEmbs.png" />
                        <div className="myCarousel">
                            <h3>Milt Embs</h3>
                            <h4>USA</h4>
                            <p>
                                I have been associated with Paresh Prajapati (AGM eTech) as a supplier and friend for the past five years.
                                I can vouch for his personal integrity and commitment to ethical business behavior.  His technical competence and his understanding of written English is excellent which enables him to execute complex instructions with ease.  I would recommend Paresh and his company to be considered for your next assignment
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src="assets/img/mtipl.jpg" />
                        <div className="myCarousel">
                            <h3>Director - Micronics India</h3>
                            <h4></h4>
                            <p>
                                Thanks for the great work, I'm very happy with the result. During the work process, they were very flexible and willing to try out various things according to my suggestions.
                                I will sure hire them again!
                            </p>
                        </div>
                    </div>
                </Carousel>
            </section>
        );
    }
}