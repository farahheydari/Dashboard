"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography, Paper, CircularProgress } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebaseConfig";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
 
      router.push("/admin"); 
      
    } catch (err) {
      setError("❌ please enter your information.");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper sx={{ p: 4, width: 400, textAlign: "center",border:'1px , solid gray' }}>
        <Typography variant="h5" mb={2}>Login To Dashboard</Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />

          {error && (
            <Typography color="error" variant="body2" mt={1}>
              {error}
            </Typography>
          )}

          <Button 
            variant="contained" 
            type="submit" 
            fullWidth 
            sx={{ mt: 2 }} 
          >
            Submit
          </Button>

        </form>
        <Box sx={{my:'20px'}}>
          <Typography>email:farah@gmail.com</Typography>
          <Typography>pass:123456</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
