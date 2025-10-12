"use client"

import type React from "react"

import { useState } from "react"
import { Box, Paper, TextField, Button, Typography, InputAdornment, IconButton, Alert } from "@mui/material"
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material"
import Image from "next/image"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error] = useState("")
  const [loading] = useState(false)


  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
        padding: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 450,
          width: "100%",
          borderRadius: 2,
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>

          <Image className="mb-[200px]" src="/seologo.png" alt="logo" width={150} height={50} style={{margin:"0 auto"}}/>
          <Typography variant="h5" sx={{ fontWeight: 600, color: "#333" }}>
            Welcome Back
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
            Sign in to access your dashboard
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <form >
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: "#8b9d8a" }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock sx={{ color: "#8b9d8a" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              bgcolor: "#8b9d8a",
              color: "white",
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                bgcolor: "#7a8c79",
              },
              "&:disabled": {
                bgcolor: "#c5d0c4",
              },
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#666" }}>
            Demo: Use any email and password to login
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}
