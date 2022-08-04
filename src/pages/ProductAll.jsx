import React, { useState, useEffect } from "react";
import { CircularProgress, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
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
      <Grid container justifyContent="space-evenly">
        {products.map((item) => {
          return <ProductCard item={item} />;
        })}
      </Grid>
    </div>
  );
};

export default ProductAll;
