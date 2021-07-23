import React from "react";

class About extends React.Component {
    render() {
        return (
            <>
                <section id="about" class="about">
                    <div class="container">
                        <div class="section-title" data-aos="fade-up">
                            <h2>About Us</h2>
                        </div>
                        <div class="row content">
                            <div class="col-lg-12" data-aos="fade-up" data-aos-delay="150">
                                <p>
                                    Agm etech is a India-based software development company with offices in Ahmedabad(india) and Coral Springs (USA). Our highly talented and dedicated staff deliver work of exceptional quality, and can help you no matter what stage you are at in developing your software. We are totally committed to customer satisfaction, and this drives everything we do.
                                </p>
                                <div class="col-lg-12" data-aos="fade-up" data-aos-delay="300">
                                    <p>
                                        <h5>WHO WE ARE</h5>
                                        Agm etech was started in Ahmedabad, India, in 2015 by two long-time friends. Paresh and Komal, two people with an entrepreneurial outlook. They had worked together for several years as senior consultants for a software company, and decided it was time to amalgamate their experience and start a Agm etech software company all their own.
                                    </p>
                                </div>
                                <a href="/Aboutus" class="btn-learn-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="counts" class="counts">
                    <div class="container">

                        <div class="row">
                            <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                                <img src="assets/img/counts-img.svg" alt="" class="img-fluid" />
                            </div>
                            <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                                <div class="content d-flex flex-column justify-content-center">
                                    <div class="row">
                                        <div class="col-md-6 d-md-flex align-items-md-stretch">
                                            <div class="count-box">
                                                <i class="bi bi-emoji-smile"></i>
                                                <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" class="purecounter"></span>
                                                <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                            </div>
                                        </div>

                                        <div class="col-md-6 d-md-flex align-items-md-stretch">
                                            <div class="count-box">
                                                <i class="bi bi-journal-richtext"></i>
                                                <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter"></span>
                                                <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                                            </div>
                                        </div>

                                        <div class="col-md-6 d-md-flex align-items-md-stretch">
                                            <div class="count-box">
                                                <i class="bi bi-clock"></i>
                                                <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" class="purecounter"></span>
                                                <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                                            </div>
                                        </div>

                                        <div class="col-md-6 d-md-flex align-items-md-stretch">
                                            <div class="count-box">
                                                <i class="bi bi-award"></i>
                                                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
                                                <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default About;