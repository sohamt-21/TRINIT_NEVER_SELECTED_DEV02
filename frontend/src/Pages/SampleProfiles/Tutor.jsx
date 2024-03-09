import React, { useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/clerk-react';


const Tutor = () => {

    const { user } = useUser();

    const [Language, setLanguage] = useState("");
    const [Experience, setExperience] = useState(0);
    const [Pricing, setPricing] = useState(0);

    const createTutorProfile = async (e) => {

        e.preventDefault();

        const Newtutor = {
            Name: user.fullName,
            Email: user.primaryEmailAddress.emailAddress,
            Image: user.imageUrl,
            Language: Language,
            Experience: Experience,
            Pricing: Pricing
        }

        console.log(Newtutor);

        await axios.post("http://localhost:9000/AddTutorinList", { Newtutor: Newtutor }, { withCredentials: true }).then((res) => {
            console.log("Tutors Are Added" + res.data);
        }).catch((err) => {
            console.log(err);
        })

    }


    return (
        <>

            <div style={{ display: 'block', margin: 'auto', width: 'fit-content', border: '3px solid red' }}>
                <h2>TutorForm</h2>
                <br />
                <p>Language :</p>
                <select value={Language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value=""></option>
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Japanese">Japanese</option>
                    <option value="German">German</option>
                </select>
                <br />
                <br />

                <p>Teaching Experience:</p>
                <input type='number' onChange={(e) => { setExperience(e.target.value) }} />
                <br />

                <br />
                <p>Pricing : </p>
                <input type='number' onChange={(e) => { setPricing(e.target.value) }} />

                <br />
                <br />

                <button onClick={createTutorProfile}>Submit</button>

            </div>
        </>
    )
}

export default Tutor