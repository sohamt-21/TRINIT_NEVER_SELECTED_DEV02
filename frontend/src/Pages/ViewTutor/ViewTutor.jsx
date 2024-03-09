import "./DashBoard.css"; 
import { InlineWidget } from "react-calendly";
import Review from "./Components/Review";

function ViewTutor() {

  const handleonclick= ()=>{
      console.log("harox");
  }


  const tutor = {
    name: "Harshal Ingale ",
    // photo: photo,
    description: ["⭐4.6 Instructor Rating", "🫂93,405 Reviews", "🧑‍🎓308,111 Students"],
    skills: ["German", "B2 Test Passed", "4+ years Teaching Experience"],
    privateCode: "<Private code content here>",
  };

  return (
    <div className="BlackBGClass">
      <div className="container">
        <div className="profile-section">
          <div className="profile-info">
            <img src={""} alt="Tutor" className="profile-image" />
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
        <div style={{display:'flex',flexDirection:'column'}}>
        <div className="skills" >
            <h3>Skills</h3>
            <ul>
              {tutor.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            
          </div>
          <div style={{marginTop:'20px'}}>
          <button className="Feedback_btn" onClick={handleonclick}>
              <span className="Feedback_btn-text-one">FeedBAck</span>
              
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
      <Review />

    </div>

  );
}

export default ViewTutor;