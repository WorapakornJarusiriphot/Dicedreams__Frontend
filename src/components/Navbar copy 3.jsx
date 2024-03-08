import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';

const LogoButton = styled(IconButton)({
  flexGrow: 1,
});

const RegisterButton = styled(Button)({
  backgroundColor: '#5F6368',
  color: '#FFFFFF',
  marginRight: '10px',
});

const LoginButton = styled(Button)({
  backgroundColor: '#D32F2F',
  color: '#FFFFFF',
});

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <LogoButton edge="start" color="inherit" aria-label="menu">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/994875b2f9df4e667cef0fabf9411d18edd23c0dd8aa896b4e62adc0776aed3a?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
              alt="logo"
              style={{ width: '25px', height: '25px' }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DiceDreams
            </Typography>
          </LogoButton>
          <RegisterButton variant="contained">Register</RegisterButton>
          <LoginButton variant="contained">Log in</LoginButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}