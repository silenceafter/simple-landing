import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(3px)',
        paddingTop: '12px',
        paddingBottom: '12px',
      }}
    >
      <Typography 
        variant="h1" 
        sx={{ 
          mb: 3, 
          '& span': {
            display: 'block'
          },
        }}
      >
        Ваш идеальный интерьер <span>начинается здесь</span>
      </Typography>
      <Typography 
        variant="h6"
        sx={{ 
          mb: 5, 
          fontWeight: (theme) => theme.typography.medium.fontWeight,
          '& span': {
            display: 'block'
          },
        }}
      >
        Пространство, отражающее индивидуальность, комфорт и стиль жизни
      </Typography>
      <Button 
        variant="contained"
        sx={{
          fontWeight: (theme) => theme.typography.medium.fontWeight,
          backgroundColor: 'rgb(209,167,57)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgb(130, 84, 30)', 
          }
        }}
      >Узнать больше</Button>
      </Box>
    </Box>
  );
}