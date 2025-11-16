"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebaseConfig";
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
      setError("❌please enter your information");
    }
  };

  return (
    <Box display="flex" justifyContent="space-around" alignItems="center" height="100vh" bgcolor={'white'}>
  
      <Paper sx={{ p: 4, width: 400, textAlign: "center" }}>
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
            Login
          </Button>
        </form>
            <Box mt={3} justifyContent="start" alignItems="start" bgcolor={'white'}>
          <Typography fontSize={'15px'}  mb={2} color="gray">email:farah@gmail.com</Typography>
        <Typography fontSize={'15px'} mb={2} color="gray">pass:123456</Typography>
      </Box>
      </Paper>
     
    </Box>
  );
}
