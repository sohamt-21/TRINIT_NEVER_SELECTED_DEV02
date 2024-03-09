import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Experience</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="5"
          title="5 Years"
          name="test1"
          color="5"
        />

        <Input
          handleChange={handleChange}
          value="7"
          title="7 Years"
          name="test1"
          color="7"
        />

        <Input
          handleChange={handleChange}
          value="10"
          title="10 Years"
          name="test1"
          color="10"
        />

        {/* <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label> */}
      </div>
    </>
  );
};

export default Colors;
