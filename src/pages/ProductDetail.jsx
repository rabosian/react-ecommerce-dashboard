import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, MenuItem, Typography, Button, Select, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = useSelector((state) => state.product.item)
  const [selectedSize, setSelectedSize] = useState("select");

  const getProductDetail = () => {
    try {
      dispatch(productAction.getProductDetail(id));
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setSelectedSize(e.target.value);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Grid container justifyContent="center" sx={{ mt: 2 }}>
      <Grid item>
        <img src={item?.img} />
      </Grid>

      <Grid item sx={{ mr: 20, pl: 5 }}>
        <Typography variant="h5">{item?.title}</Typography>
        <Typography variant="h6" sx={{ my: 2 }}>
          ₩ {item?.price}
        </Typography>

        <Box>
          <Typography mr={6}>Size</Typography>
          <Select
            size="small"
            value={selectedSize}
            onChange={handleChange}
            sx={{ width: "200px" }}
          >
            {item?.size.map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </Box>

        <Button
          style={{
            marginTop: "15px",
            backgroundColor: "#11262f",
            width: "150px",
            color: "white",
          }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
