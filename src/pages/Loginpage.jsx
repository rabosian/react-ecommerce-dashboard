import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Loginpage = ({ setUser }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
    setUser(true)
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
          />
          <TextField
            required
            variant="standard"
            type="password"
            fullWidth
            label="Password"
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
