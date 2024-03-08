import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Grid, Paper } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

// สร้าง theme ใหม่ที่นี่ หากคุณมีการกำหนดค่าเฉพาะสำหรับ theme คุณสามารถทำเพิ่มเติมได้
const theme = createTheme({
  // คุณสามารถกำหนดค่าสำหรับ theme ได้ที่นี่ เช่น สี, ฟอนต์, ฯลฯ
});

const HeaderSection = ({ text }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
    <Typography variant="body2" color="text.secondary">
      {text}
    </Typography>
    <ImageIcon sx={{ width: 18, height: 18, color: 'action.active' }} />
  </Box>
);

const BookInfoField = ({ label, children }) => (
  <Box sx={{ mt: 3 }}>
    <Typography variant="subtitle1" sx={{ mb: 1 }}>
      {label}
    </Typography>
    <Paper variant="outlined" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
      {children}
      <ImageIcon />
    </Paper>
  </Box>
);

function BookEditForm() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Paper sx={{ p: 5, backgroundColor: 'primary.main', color: 'common.white' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h3">NPRU E-Book</Typography>
            <HeaderSection text="ผลต่อสัญญาจ้าง" />
            <Typography variant="body1">Worapakorn - นายวรปกร จารุศิริพจน์</Typography>
          </Box>
        </Paper>
        <Grid container spacing={3} direction="column" sx={{ mt: 5 }}>
          <Grid item>
            <Typography variant="h4">แก้ไขข้อมูลหนังสือ</Typography>
          </Grid>
          <Grid item>
            <Paper variant="outlined" sx={{ padding: 2 }}>
              <Typography variant="body1">หน้าหลัก / รายการหนังสือ / แก้ไขข้อมูลหนังสือ</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <BookInfoField label="หมวดหมู่หนังสือ">
              <Typography variant="body1">คอมพิวเตอร์</Typography>
            </BookInfoField>
            {/* คุณสามารถทำซ้ำ BookInfoField ด้วยข้อมูลต่างๆ ตามที่ต้องการ */}
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              บันทึกข้อมูล
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default BookEditForm;
