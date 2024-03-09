import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  const handlePriceChange = (event) => {
    const value = event.target.value;
    let minPrice = 0;
    let maxPrice = Infinity;

    // Set minPrice and maxPrice based on selected value
    switch (value) {
      case "Rs 0 - 5k":
        maxPrice = 5000;
        break;
      case "Rs 5k - 10k":
        minPrice = 5000;
        maxPrice = 10000;
        break;
      case "Rs 10k - 15k":
        minPrice = 10000;
        maxPrice = 15000;
        break;
      case "Over Rs 15k":
        minPrice = 15000;
        break;
      default:
        break;
    }

    // Call handleChange function with minPrice and maxPrice
    handleChange({ minPrice, maxPrice });
  };

  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
<Input
  handleChange={handleChange}
  value="Rs 5000"
  title="Rs 0 - 5k"
  name="test2"
/>
<Input
  handleChange={handleChange}
  value="Rs 10000"
  title="Rs 5k - 10k"
  name="test2"
/>
<Input
  handleChange={handleChange}
  value="Rs 15000"
  title="Rs 10k - 15k"
  name="test2"
/>
<Input
  handleChange={handleChange}
  value="Rs 20000"
  title="Over Rs 15k"
  name="test2"
/>

      </div>
    </>
  );
};

export default Price;
