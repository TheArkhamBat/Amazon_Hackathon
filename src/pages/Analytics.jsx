import React from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx"; // Navbar component
import Chatbot from "../Components/Chatbot.jsx"; // Chatbot component

function Analytics() {
  return (
    <>
      <ResponsiveAppBar /> {/* Navbar */}

      {/* Horizontal Row with 7 Rectangles */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          padding: '2rem 0',
        }}
      >
        {/* First Rectangle with Divided Sections */}
        <Box
          sx={{
            width: '180px',
            height: '100px',
            backgroundColor: 'primary.main', // Default Material UI Blue
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '0.5rem',
          }}
        >
          {/* Top Part: Sales Review */}
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              color: 'white', // White text on blue background
            }}
          >
            Sales Review
          </Typography>

          {/* Bottom Part: Dropdown Menu */}
          <FormControl fullWidth>
            <InputLabel id="year-select-label" sx={{ color: 'white' }}>Select Year</InputLabel>
            <Select
              labelId="year-select-label"
              label="Select Year"
              defaultValue={2024}
              size="small"
              sx={{
                color: 'white', // White text on the select menu
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // White border for the dropdown
                },
              }}
            >
              <MenuItem value={2024}>2024</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Other Rectangles */}
        {Array.from({ length: 6 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: '180px',
              height: '100px',
              backgroundColor: 'primary.main', // Default Material UI Blue
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Empty content for placeholders */}
          </Box>
        ))}
      </Box>

      {/* Active Delivery Request Heading */}
      <div
        style={{
          marginTop: '1rem', // Adjusted for spacing
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: '4rem',
        }}
      >
        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Active Delivery Request</h1>
      </div>

      {/* Chatbot in the bottom-right corner */}
      <Chatbot />
    </>
  );
}

export default Analytics;
