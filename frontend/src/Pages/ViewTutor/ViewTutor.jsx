import "./DashBoard.css";
import { InlineWidget } from "react-calendly";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import photo from "../ViewTutor/Github.png";

function ViewTutor() {

  const handleonclick = () => {
    console.log("harox");
  }

  const Navigator=useNavigate();


  const handleStripePayment = async () => {
    await axios.post("http://localhost:9000/CreatePayment").then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(`${err} is Occured`);
    })
    Navigator("/stripe");
  }


  const tutor = {
    name: "Aditya Suryawnshi",
    photo: photo,
    description: ["⭐4.6 Instructor Rating", "🫂93,405 Reviews", "🧑‍🎓308,111 Students"],
    skills: ["German", "B2 Test Passed", "4+ years Teaching Experience"],
    privateCode: "<Private code content here>",
  };

  return (
    <div className="BlackBGClass">
      <div className="container">
        <div className="profile-section">
          <div className="profile-info">
            <img src={photo} alt="Tutor" className="profile-image" />
            <div className="profile-description">
              <h2>{tutor.name}</h2>
              {/* <p>{tutor.description}</p> */}
              <ul>
                {tutor.description.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="Seconddiv">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="skills" >
              <h3>Skills</h3>
              <ul>
                {tutor.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>

            </div>
            <div style={{ marginTop: '20px' }}>
              <button className="Feedback_btn" onClick={handleonclick}>
                <span className="Feedback_btn-text-one">FeedBack</span>
              </button>
              <br />
              <br />
              <button className="Feedback_btn" onClick={handleStripePayment}>
                <span className="Feedback_btn-text-one">PayTutor</span>
              </button>
            </div>
          </div>


          <div className="private-code">
            {" "}
            <InlineWidget
              url="https://calendly.com/harshal-ingale17/30min"
              pageSettings={{ backgroundColor: "000000", textColor: "ffffff" }}
            />
          </div>
        </div>
      </div>
      
    </div>

  );
}

export default ViewTutor;