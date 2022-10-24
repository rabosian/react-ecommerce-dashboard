import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const products = useSelector((state) => state.product.products);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    try {
      let searchQuery = query.get("q") || "";
      dispatch(productAction.getProducts(searchQuery));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Grid container justifyContent="center">
        {products.length !== 0 ? (
          products.map((item, index) => {
            return <ProductCard item={item} key={index} />;
          })
        ) : (
          <Typography mt={10} variant="h4" sx={{ fontWeight: "bold" }}>
            Item Not Found!
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default ProductAll;
