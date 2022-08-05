import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    try {
      let searchQuery = query.get("q") || "";
      // console.log("query: ", searchQuery);
      let url = `https://my-json-server.typicode.com/rabosian/react-shopping-app
      /products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Grid container>
        {products.map((item, index) => {
          return <ProductCard item={item} key={index} />;
        })}
        {/* {searchResult ? 
          products.filter((item) => {
            return item.title.includes(searchResult)
          }).map((item, index) => {
            return <ProductCard item={item} key={index} />;
          })
        :
          products.map((item, index) => {
            return <ProductCard item={item} key={index} />;
          })
        } */}
      </Grid>
    </div>
  );
};

export default ProductAll;
