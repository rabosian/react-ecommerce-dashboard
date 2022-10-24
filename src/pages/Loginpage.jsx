import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../redux/actions/authAction";

const Loginpage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // temp admin login
    dispatch(authAction.login(email, password));
    dispatch(authAction.adminLogin());
    // dispatch(authAction.login(email, password));
    navigate("/");
  };

  return (
    <div>
      <Grid align="center" sx={{ mt: 5 }}>
        <Paper sx={{ padding: 7, width: 400 }}>
          <Grid align="center">
            <Avatar></Avatar>
            <h2>Log In</h2>
          </Grid>
          <TextField
            required
            variant="standard"
            type="email"
            fullWidth
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            variant="standard"
            type="password"
            fullWidth
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
            style={{ backgroundColor: "#11262f" }}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default Loginpage;
