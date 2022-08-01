import React from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material'


const Loginpage = () => {
  return (
    <div>
    <Grid align="center">
      <Paper elevation={20}>
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
          {/* <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Log In
          </Button>
      </Paper>
    </Grid></div>
  )
}

export default Loginpage