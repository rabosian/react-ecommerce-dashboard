import React from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material'


const Loginpage = () => {
  return (
    <div>
    <Grid align="center" sx={{mt: 5}}>
      <Paper sx={{padding: 7, width: 400}}>
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
            sx={{ mt: 4}}
            // onClick={()=>}
          >
            Log In
          </Button>
      </Paper>
    </Grid></div>
  )
}

export default Loginpage