import "./language.css";
import Input from "../../components/Input";

function Language({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Language</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="French"
          title="French"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="German"
          title="German"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Japanese"
          title="Japanese"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="English"
          title="English"
          name="test"
        />
      </div>
    </div>
  );
}

export default Language;
