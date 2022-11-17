import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useParams, Link } from "react-router-dom";
import { Items } from "../Components/Data";
import "./Detail.scss";
function Detail() {
  const { productId } = useParams();
  const thisProduct = Items.find((item) => item.id === parseInt(productId));
  
  return (
    <>
   
    <div className="product-detail">
          <span className="home"><Link to={"/"}><HomeRoundedIcon style={{color: "#f8901c"}}  /></Link></span>
        <div className="img-product">
          <img
            src={thisProduct.imgSrc}
            alt={thisProduct.name}
          ></img>
        </div>
        <div className="desc-product">
          <h1>
            {thisProduct.name}
          </h1>
          <h2 className="price">$ {thisProduct.price}</h2>
          
          <h3>Food detail</h3>
          <p className="desc">{thisProduct.desc}</p>
          <div className="add-to-cart">
            Add to cart
          </div>
        </div>
      </div></>
  );
}

export default Detail;
