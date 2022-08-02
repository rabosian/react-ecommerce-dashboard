import React from "react";
import {Grid, Typography} from '@mui/material'
const ProductCard = (props) => {
  return (
    <div>
      <Grid item xs={4} className="item">
        <img src={props.item.img} />
        <Typography>{props.item.title}</Typography>
        <Typography>{props.item.price}</Typography>
      </Grid>
      ;
    </div>
  );
};

export default ProductCard;
