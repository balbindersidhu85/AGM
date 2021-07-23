import React, { useState, useEffect } from "react";
import { db } from "../Config/firebase";

const Contact = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("Contactus")
            .add({
                fname: fname,
                lname: lname,
                email: email,
                subject: subject,
                message: message,
            })
            .then(() => {
                setLoader(false);
                alert("Your from has been submitted");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setfname("");
        setlname("");
        setemail("");
        setsubject("");
        setmessage("");
    };
    return (
        <>
            <section id="breadcrumbs" class="breadcrumbs">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Contact us</h2>
                    </div>
                </div>
            </section>

            <section id="portfolio-details" class="portfolio-details">
                <div class="container">
                    <div class="row gy-4">

                    </div>
                </div>
            </section>

            <div class="site-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <form className="form" onSubmit={handleSubmit}>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="fname">First name</label>
                                            <input name="fname" type="text" class="form-control" value={fname} onChange={(e) => setfname(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="lname">Last name</label>
                                            <input name="lname" type="text" class="form-control" value={lname} onChange={(e) => setlname(e.target.value)} />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input name="email" type="text" class="form-control" value={email} onChange={(e) => setemail(e.target.value)} />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="subject">Subject</label>
                                            <input name="subject" type="text" class="form-control" value={subject} onChange={(e) => setsubject(e.target.value)} />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="message">Message</label>
                                            <textarea name="message" class="form-control" cols="30" rows="10" value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-6">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-lg-5 ml-auto">
                            <h3 class="mb-3 side-title">Quick info</h3>
                            <div class="quick-contact">
                                <div class="d-flex">
                                    <span class="icon-room"></span>
                                    <address>
                                        429 S.V. Square Building
                                        New Ranip, Ahmedabad, India
                                    </address>
                                </div>
                                <div class="d-flex">
                                    <span class="icon-phone"></span>
                                    <a href="#">+91 97123 12188</a>
                                </div>
                                <div class="d-flex">
                                    <span class="icon-envelope"></span>
                                    <a href="#">info@agmetech.com</a>
                                </div>
                                <div class="d-flex">
                                    <span class="icon-globe"></span>
                                    <a href="#">https://agmetech.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="portfolio-details" class="portfolio-details">
                <div class="container">
                    <div class="row gy-4">

                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;