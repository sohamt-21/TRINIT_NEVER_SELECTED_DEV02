import { useState } from "react";
import './TutDash.css';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';

function TutDash() {
    const [language, setlanguage] = useState("");
    const [teachingexperience, setteachingexperience] = useState("");
    const [pricing, setpricing] = useState("");
    const [education, seteducation] = useState("");
    const { user } = useUser();

    const collectData = async (e) => {
        e.preventDefault();
        const NewUserTobeAdded = {
            img: `${user.imageUrl}`,
            title: `${user.firstName}`,
            reviews: "(78973 Learners)",
            prevPrice: `Rs 10000`,
            newPrice: `RS ${pricing}`,
            language: language
        }
        await axios.post("http://localhost:9000/MakeManipulation", { Data: NewUserTobeAdded }, { withCredentials: true }).then((res) => {
            alert("You are Added As Tutor");
        }).catch((err) => {
            console.log(`${err} is Occured`);
        })
    }

    return (
        <div className="maiii">
            <div className="Profileee"><h1 style={{ color: 'red' }}>Photo</h1></div>
            <div className="maindiv">
                <div id="admin_grp_form" className="admin__grp_form_container">
                    <form id="admin_grp_form_sub" onSubmit={collectData}>
                        <h1 id="admin_grp_form_h1" className="admin_grp_form_text-center">Admin Form</h1>
                        <div style={{ marginBottom: '3px' }}>
                            <label id="admin_grp_label" className="admin_grp_form-label"> Language</label>
                            <input
                                type="text"
                                className="admin_grp_form-control"
                                value={language}
                                onChange={(e) => setlanguage(e.target.value)}
                            />
                        </div>


                        <div style={{ marginBottom: '3px' }}>
                            <label id="admin_grp_form_label" className="admin_grp_form-label">Teaching Experience</label>
                            <input
                                type="text"
                                className="admin_grp_form-control"
                                value={teachingexperience}
                                onChange={(e) => setteachingexperience(e.target.value)}
                            />
                        </div>


                        <div style={{ marginBottom: '3px' }}>
                            <label id="admin_grp_form_label" className="admin_grp_form-label">Pricing</label>
                            <input
                                type="text"
                                className="admin_grp_form-control"
                                value={pricing}
                                onChange={(e) => setpricing(e.target.value)}
                            />
                        </div>
                        <div style={{ marginBottom: '3px' }}>
                            <label id="admin_grp_form_label" className="admin_grp_form-label">Education</label>
                            <input
                                type="text"
                                className="admin_grp_form-control"
                                value={education}
                                onChange={(e) => seteducation(e.target.value)}
                            />
                        </div>

                        <button id="admin_grp_form_button" type="submit" className="admin_grp_form_btn">
                            Submit
                        </button>
                    </form>
                </div>


                <div className="Buttons">
                    <div className="FirstButton">
                        <button
                            style={{ color: 'Black', fontSize: '30px' }}
                            onClick={() => { window.location.href = ''; }}
                        >
                            Candely
                        </button>

                    </div>

                    <div className="SecondButton"> <button
                        style={{ color: 'Black', fontSize: '30px' }}
                        onClick={() => { window.location.href = ''; }}
                    >
                        Amity
                    </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default TutDash;