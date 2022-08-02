import React, { useState, useEffect } from "react";
import { CircularProgress, Grid, Paper, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [products, setProducts] = useState([]);
  const getProductData = async () => {
    try {
      let url = `http://localhost:5000/products`;
      let response = await fetch(url)
      let data = await response.json()
      setProducts(data)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    getProductData()
    console.log(products)
  }, [])

  return (
    <div>
      <Grid container spacing={2} align="center">
        <ProductCard />
      </Grid>
    </div>
  );
};

export default ProductAll;
