import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const productDetails = useLoaderData()
    const {thumbnail, stock, rating, title, discountPercentage, category, brand, description, price } = productDetails;

    return (
        <div className="h-screen  justify-center items-center">
            <div className="card  bg-base-100 shadow-xl image-full">
  <figure><img src={thumbnail} alt={title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Brand : {brand}</p>
    <p>Category : {category}</p>
    <p>Rating : {rating}</p>
    <p className="my-6">{description}</p>
    <div className="badge badge-outline">Discount:  {discountPercentage}%</div>
    <p className="text-2xl">PRICE: {price}$</p>
    <p>Stock : {stock}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;