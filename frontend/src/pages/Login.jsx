import {
  TextField,
  Typography,
  Box,
  Container,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { LoginRoute } from "../utils/APIRoutes";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = axios.post(
        LoginRoute,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
    } catch (err) {}
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="Password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>

        <Grid container>
          <Grid item xs>
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </Grid>
          <Grid item>
            <Link>Forgot Password?</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
