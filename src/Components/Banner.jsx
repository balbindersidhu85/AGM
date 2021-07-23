import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div class="hero-v1">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 mr-auto text-center text-lg-left">
                            <span class="d-block subheading">Anantayitsolutions</span>
                            <h1 class="heading mb-3">Hire Dedicated Developers</h1>
                            <p class="mb-5">React, React Native, Angular and NodeJS</p>
                            <p class="mb-4"><a href="/Contact" class="btn btn-primary">Contact us</a></p>
                        </div>
                        <div class="col-lg-6">
                            <figure class="illustration">
                                <img src="assets/images/illustration.png" alt="Image" class="img-fluid" />
                            </figure>
                        </div>
                        <div class="col-lg-6"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;