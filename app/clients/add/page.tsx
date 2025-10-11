"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Box,
  TextField,
  Button,
  Typography,
  Breadcrumbs,
  MenuItem,
  Select,
  FormControl,
  InputAdornment,
} from "@mui/material"
import Link from "next/link"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

export default function AddClientPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    dateOfBirth: "",
    email: "",
    cellNumber: "",
    companyName: "",
    price: "",
    comments: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleBack = () => {
    router.push("/clients")
  }

  const handleNext = () => {
    console.log("Form data:", formData)
    router.push("/clients")
  }

  return (
    <Box sx={{ p: 4, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3, fontSize: "14px" }}>
        <Link href="/dashboard" style={{ textDecoration: "none", color: "#666" }}>
          Dashboard
        </Link>
        <Typography color="text.primary" sx={{ fontSize: "14px" }}>
          Clients
        </Typography>
      </Breadcrumbs>

      <Box sx={{ bgcolor: "white", p: 4, borderRadius: 1 }}>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            fontWeight: 600,
            color: "#2d3a2d",
            borderBottom: "3px solid #2d3a2d",
            display: "inline-block",
            pb: 0.5,
          }}
        >
          Add New Client
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 4,
            mt: 4,
          }}
        >
          {/* First Name */}
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500, color: "#333", fontSize: "14px" }}>First Name:</Typography>
            <TextField
              fullWidth
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="Xion"
              variant="standard"
              InputProps={{
                endAdornment: formData.firstName && (
                  <InputAdornment position="end">
                    <CheckCircleIcon sx={{ color: "#4caf50", fontSize: 20 }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#e0e0e0",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#8b9d8a",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#8b9d8a",
                },
              }}
            />
          </Box>

          {/* Last Name */}
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500, color: "#333", fontSize: "14px" }}>Last Name:</Typography>
            <TextField
              fullWidth
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="Ashly"
              variant="standard"
              InputProps={{
                endAdornment: formData.lastName && (
                  <InputAdornment position="end">
                    <CheckCircleIcon sx={{ color: "#4caf50", fontSize: 20 }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#e0e0e0",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#8b9d8a",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#8b9d8a",
                },
              }}
            />
          </Box>

          {/* Address */}
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500, color: "#333", fontSize: "14px" }}>Address:</Typography>
            <TextField
              fullWidth
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="Type your Address"
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#e0e0e0",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#8b9d8a",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#8b9d8a",
                },
              }}
            />
          </Box>

          {/* Date of Birth */}
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500, color: "#333", fontSize: "14px" }}>Date of Birth:</Typography>
            <TextField
              fullWidth
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#e0e0e0",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#8b9d8a",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#8b9d8a",
                },
              }}
            />
          </Box>

          {/* Contact Email */}
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500, color: "#333", fontSize: "14px" }}>Contact Email:</Typography>
            <TextField
              fullWidth
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Type your Email"
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#e0e0e0",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#8b9d8a",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#8b9d8a",
                },
              }}
            />
          </Box>

          {/* Contact Cell Number */}
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500, color: "#333", fontSize: "14px" }}>
              Contact Cell Number:
            </Typography>
            <TextField
              fullWidth
              value={formData.cellNumber}
              onChange={(e) => handleChange("cellNumber", e.target.value)}
              placeholder="Type your Cell No"
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#e0e0e0",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#8b9d8a",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#8b9d8a",
                },
              }}
            />
          </Box>

          {/* Company Name */}
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500, color: "#333", fontSize: "14px" }}>Company Name</Typography>
            <TextField
              fullWidth
              value={formData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              placeholder="Type Here"
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#e0e0e0",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#8b9d8a",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#8b9d8a",
                },
              }}
            />
          </Box>

          {/* Price */}
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500, color: "#333", fontSize: "14px" }}>Price</Typography>
            <FormControl fullWidth variant="standard">
              <Select
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
                displayEmpty
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#e0e0e0",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#8b9d8a",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#8b9d8a",
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Please Select your Packages
                </MenuItem>
                <MenuItem value="basic">Basic Package - $500</MenuItem>
                <MenuItem value="standard">Standard Package - $1000</MenuItem>
                <MenuItem value="premium">Premium Package - $2000</MenuItem>
                <MenuItem value="enterprise">Enterprise Package - $5000</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Comments */}
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500, color: "#333", fontSize: "14px" }}>Comments</Typography>
            <TextField
              fullWidth
              value={formData.comments}
              onChange={(e) => handleChange("comments", e.target.value)}
              placeholder="You'll get"
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#e0e0e0",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#8b9d8a",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#8b9d8a",
                },
              }}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 6 }}>
          <Button
            variant="outlined"
            onClick={handleBack}
            sx={{
              px: 5,
              py: 1.5,
              borderColor: "#333",
              color: "#333",
              fontWeight: 500,
              "&:hover": {
                borderColor: "#333",
                bgcolor: "#f5f5f5",
              },
            }}
          >
            BACK
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              px: 5,
              py: 1.5,
              bgcolor: "#8b9d8a",
              color: "white",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#6d7e6c",
              },
            }}
          >
            NEXT
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
          pt: 3,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Copyright @ Realseo.digital 2023
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link href="/terms" style={{ textDecoration: "none", color: "#666", fontSize: "14px" }}>
            Terms and Conditions
          </Link>
          <Link href="/privacy" style={{ textDecoration: "none", color: "#666", fontSize: "14px" }}>
            Privacy Policy
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
