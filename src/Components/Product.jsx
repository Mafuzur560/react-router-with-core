import { NavLink } from "react-router-dom";


const Product = ({ product }) => {

    const {id, images, price, description, brand, rating, title
    } = product;

    return (
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={images[0]} alt={title} /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{rating}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{brand}</div> 
      <div className="badge badge-outline">{price} $</div>
    </div>
    <NavLink to={`/products/${id}`}>
        <button className="btn btn-info mt-3 text-white w-full">See DEtails</button>
    </NavLink>
  </div>
</div>
    );
};

export default Product;