import React from 'react';
import { Box, Typography, TextField, Button, Paper, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const InputField = ({ label, type = "text" }) => {
  return (
    <Box mt={2}>
      <TextField fullWidth label={label} variant="outlined" type={type} />
    </Box>
  );
};

const EbookFormMui = () => {
  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
      <Paper sx={{ p: 2, mb: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Typography variant="h4">NPRU E-BOOK</Typography>
      </Paper>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ alignSelf: 'stretch', fontWeight: 'bold' }}>
          เพิ่มข้อมูลหนังสือ
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: 'grey.300', my: 2, width: '100%' }}>
          <Typography sx={{ color: 'info.main' }}>หน้าหลัก / รายการหนังสือ / เพิ่มข้อมูลหนังสือ</Typography>
        </Box>
        <FormControl fullWidth>
          <InputLabel id="category-label">หมวดหมู่หนังสือ</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            label="หมวดหมู่หนังสือ"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <InputField label="ชื่อหนังสือ" />
        <InputField label="ผู้เเต่งหนังสือ" />
        <InputField label="เว็บไซต์ผู้เเต่งหนังสือ" />
        <InputField label="สำนักพิมพ์" />
        <InputField label="ISBN" />
        <Box mt={2} width="100%">
          <Button variant="contained" component="label" fullWidth>
            อัพโหลดรูปภาพหนังสือ
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Box>
        <Paper sx={{ p: 2, mt: 2, bgcolor: 'info.main', width: '100%' }}>
          <Typography>การเพิ่มผู้เเต่งหนังสือและเว็บไซต์ผู้เเต่งหนังสือหากมีมากกว่า1คนให้ใช้เครื่องหมาย , คั่นระหว่างชื่อ</Typography>
        </Paper>
        <Box mt={2} width="100%">
          <Button variant="contained" fullWidth>
            บันทึกข้อมูล
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EbookFormMui;