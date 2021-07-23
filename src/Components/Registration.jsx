import React, { useState, useEffect } from "react";
import { db } from "../Config/firebase";

const Registration = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [mname, setmname] = useState("");
    const [mob, setmob] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("Registration")
            .add({
                fname: fname,
                lname: lname,
                mname: mname,
                mob: mob,
            })
            .then(() => {
                setLoader(false);
                alert("Your form has been submitted");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setfname("");
        setlname("");
        setmname("");
        setmob("");
    };

    return (
        <div>
            <section id="section-Registration" class="no-bg">
                <div class="container pt-2">
                    <div class="row row-space">
                        <div class="col-lg-6 offset-lg-3">
                            <div class="text-center">
                                <h2>Registration</h2>
                                <p>Create an Account (it's free)<br /> It only takes a couple of minutes to get started</p>
                                <div class="spacer-30"></div>
                            </div>
                        </div>
                    </div>
                    <form name="row row-space" class="row form-default" onSubmit={handleSubmit}>
                        <div class="col-lg-3">
                        </div>
                        <div class="col-lg-6">
                            <div class="row row-space">
                                <div class="col-6">
                                    <div class="field-set">
                                        <input type="text" class="form-control" placeholder="FirstName" name="fname" value={fname}
                                            onChange={(e) => setfname(e.target.value)} />
                                        <div class="line-fx"></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="field-set">
                                        <input type="text" class="form-control" placeholder="Lastname" name="lname" value={lname}
                                            onChange={(e) => setlname(e.target.value)} />
                                        <div class="line-fx"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-space">
                                <div class="col-12">
                                    <div class="field-set">
                                        <input type="text" class="form-control" placeholder="Father/HusbandName" name="mname" value={mname}
                                            onChange={(e) => setmname(e.target.value)} />
                                        <div class="line-fx"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-space">
                                <div class="col-12">
                                    <div class="field-set">
                                        <input type="text" class="form-control" placeholder="Mobile" name="mob" value={mob}
                                            onChange={(e) => setmob(e.target.value)} />
                                        <div class="line-fx"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="spacer-single"></div>
                        <div class="col-md-12 text-center">
                            <div>
                                <button type="submit" class="btn btn-custom color-2">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div >
    );
}

export default Registration;
