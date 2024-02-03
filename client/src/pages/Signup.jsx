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
  FormHelperText,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  // form states
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false);


  // password validation
  let hasSixChar = password.length >= 6;
  let hasLowerChar = /(.*[a-z].*)/.test(password);
  let hasUpperChar = /(.*[A-Z].*)/.test(password);
  let hasNumber = /(.*[0-9].*)/.test(password);
  let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);




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
      <div className="mb-2">
      <TextField
          size="small"
          variant="outlined"
          className="form-control"
          label="Username"
          value={(username)}
          onChange={(e) => setUsername(e.target.value)}
        />
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
      <div className="form-group mb-2">
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
        {password && (
        <div className="ml-1" style={{columns : 2}}>
            <div>
                <small className={hasSixChar ? "text-succes" : "text-danger"}>
                    at least 6 characters
                </small>
            </div>
            <div>
                <small className={hasLowerChar ? "text-succes" : "text-danger"}>
                    one lowercase letter
                </small>
            </div>
            <div>
                <small className={hasUpperChar ? "text-succes" : "text-danger"}>
                    one uppercase letter
                </small>
            </div>
            <div>
                <small className={hasNumber? "text-succes" : "text-danger"}>
                    one number
                </small>
            </div>
            <div>
                <small className={hasSpecialChar? "text-succes" : "text-danger"}>
                    one special character
                </small>
            </div>
        </div>)}
      </div> 
      <div className="form-group">
        <TextField
        
          size="small"
          type="password"
          variant="outlined"
          className="form-control"
          label="Confirm Password"
          value={(confirmPassword)}
          onChange={(e) => setConfirmPassword(e.target.value)}
          
        />
        {password && confirmPassword && (
            <FormHelperText className="ml-1 mt-1">
                {password === confirmPassword ? 
                <span className="text-success">
                    Passwords match
                </span> : 
                <span className="text-failure">
                    Passwords do not match
                </span>}
            </FormHelperText>
        )}
      </div>
      <div className="text-center mt-4">
        <Button variant="contained" disabled={!email || !password}>
            Submit
        </Button>
      </div>
    </div>
  );
};

export default Signup;
