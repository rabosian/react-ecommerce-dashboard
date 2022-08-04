import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

const ProductAll = ({ searchResult }) => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      let url = `http://localhost:5000/products`;
      let response = await fetch(url);
      let data = await response.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Grid container>
        {searchResult ? 
          products.filter((item) => {
            return item.title.includes(searchResult)
          }).map((item, index) => {
            return <ProductCard item={item} key={index} />;
          })
        :
          products.map((item, index) => {
            return <ProductCard item={item} key={index} />;
          })
        }
      </Grid>
    </div>
  );
};

export default ProductAll;
