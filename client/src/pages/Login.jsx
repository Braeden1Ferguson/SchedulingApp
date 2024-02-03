import React, { useState } from "react";

// design
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
  Input,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  // form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
      <div className="text-center mb-5 alert alert-primary">
        <label htmlFor="" className="h2">
          Login
        </label>
      </div>

      <div className="form-group">
        <TextField
          size="small"
          variant="outlined"
          className="form-control"
          label="Email"
          value={(email)}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <FormControl variant="standard" className="form-control">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>

          <Input
            id="standard-adornment-password"
            label="Password"
            value={(password)}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className="text-center mt-4">
        <Button variant="contained" disabled={!email || !password}>
            Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
