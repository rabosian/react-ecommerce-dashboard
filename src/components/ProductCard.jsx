import React from "react";
import { Grid, Typography } from "@mui/material";
const ProductCard = ({ item }) => {
  return (
    <Grid xs={12} sm={6} md={4} textAlign="center">
      <img width="320px" height="500px" src={item?.img} />
      <Typography 
        fontSize="1rem" 
        color="yellowgreen" 
        display="inline-block"
        mr={1}
      >
        {item?.new ? "NEW!" : ""}
      </Typography>
      <Typography display="inline-block">{item?.title}</Typography>
      <Typography>₩ {item?.price}</Typography>
    </Grid>
  );
};

export default ProductCard;
