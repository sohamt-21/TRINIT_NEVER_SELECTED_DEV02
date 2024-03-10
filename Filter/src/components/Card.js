import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {

  const RedirecToTutorPage=async()=>{
    window.location.href="http://localhost:5173/view"
  }

  return (
    <>
      <section className="card" onClick={RedirecToTutorPage}>
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
