import React from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/products/${item.id}`)
  }

  return (
    <Grid item
      textAlign='center'
      sx={{my: 2, cursor: 'pointer'}}
      xs={12} sm={6} md={4}
      className="product-card"
      onClick={showDetail}
    >
      <img width="280px" height="450px" src={item?.img} />
      <Typography 
        fontSize="0.8rem"
        fontWeight='bold' 
        color="#d54425" 
      >
        {item?.choice ? "Conscious choice" : ""}
      </Typography>
      <Typography 
        fontSize="1rem" 
        color="yellowgreen" 
        display="inline-block"
        mr={1}
      >
        {item?.new ? "NEW!" : ""}
      </Typography>
      <Typography display="inline-block" fontWeight='bold'>{item?.title}</Typography>
      <Typography>₩ {item?.price}</Typography>
    </Grid>
  );
};

export default ProductCard;
