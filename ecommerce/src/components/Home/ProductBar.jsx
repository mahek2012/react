import { useEffect, useState } from "react";
import ProductCard from "../../ui/ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductBar = () => {
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    const fetchProduct = async () => {
      try{
        let response = await axios.get("https://dummyjson.com/products?limit=4");
        console.log(response.data.products);
        setProduct(response.data.products);
      }catch (error) {
          console.log(error);
      }
    };
    fetchProduct();
  },[]);
  return (
    <>
      <section className="p-6 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {product.map((data)=>{
            return(
              <Link to={`/product/${data.id}`} key={data.id}>
                  <ProductCard product_data={data}/>
              </Link>
            )
          })}
         
        </div>
      </section>
    </>
  );
};

export default ProductBar;
