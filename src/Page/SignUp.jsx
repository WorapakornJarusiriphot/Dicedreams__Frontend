import React from 'react';
import { Box, Checkbox, TextField, Button, Typography, Container, Paper, FormControlLabel } from '@mui/material';

const InputField = ({ label, type }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
    <TextField label={label} type={type} variant="outlined" fullWidth />
  </Box>
);

const RegistrationForm = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ลงทะเบียนเข้าใช้งานระบบ
        </Typography>
        <Typography variant="body1">
          ลงชื่อใช้งานระบบด้วยชื่อผู้ใช้ที่ได้มีการลงทะเบียนไว้:
        </Typography>
        <InputField label="Username" type="text" />
        <InputField label="Password" type="password" />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="จดจำการเข้าใช้งานระบบของฉันไว้"
          sx={{ mt: 2 }}
        />
        <Box sx={{ mt: 4 }}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="ไม่สามารถอ่านข้อความได้เปลี่ยนข้อความใหม่"
          />
          <TextField
            label="Captcha"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, py: 1.5 }}
        >
          ลงทะเบียนเข้าใช้งานระบบ
        </Button>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;