import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended Filters</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Languages" />
          <Button onClickHandler={handleClick} value="French" title="French" />
          <Button onClickHandler={handleClick} value="German" title="German" />
          <Button onClickHandler={handleClick} value="Japanese" title="Japanese" />
          <Button onClickHandler={handleClick} value="English" title="English" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
