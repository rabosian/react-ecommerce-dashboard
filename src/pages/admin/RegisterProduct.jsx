import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Select,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const RegisterProduct = () => {
  const [title, setTitle] = useState("");
  const [isNew, setIsNew] = useState(true);
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("select");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("title: " + title);
    console.log("isNew: " + isNew);
    console.log("price: " + price);
    console.log("size: " + size);
  };

  const categories = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "Home",
    "Sale",
    "Sustainability",
  ];

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <Grid align="center" sx={{ mt: 5 }}>
        <Paper sx={{ padding: 7, width: 400 }}>
          <Grid align="center">
            <h2>Register Product</h2>
          </Grid>
          <TextField
            required
            variant="standard"
            type="text"
            fullWidth
            label="product name"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            required
            variant="standard"
            fullWidth
            label="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            required
            variant="standard"
            fullWidth
            label="size"
            placeholder="enter in comma separated string (e.g. S,M,L)"
            onChange={(e) => setSize(e.target.value)}
          />
          <Box display="flex" mt={2}>
            <Typography mr={6}>Select Category</Typography>
            <Select
              size="small"
              value={selectedCategory}
              onChange={handleChange}
              sx={{ width: "auto" }}
            >
              {categories.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="New Product"
              onChange={() => setIsNew(!isNew)}
            />
          </FormGroup>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
            style={{ backgroundColor: "#11262f" }}
            onClick={handleSubmit}
          >
            Add to Product List
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default RegisterProduct;
