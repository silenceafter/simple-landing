import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '100dvh', md: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Box
        sx={{
          /*display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',*/
          color: 'white',
          /*textAlign: 'center',*/
          width: '100%',
          maxWidth: '800px',

          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(3px)',
          pt: '0.75rem',
          pb: '0.75rem',
          pl: '24px',
          pr: '24px',
          boxSizing: 'border-box',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            mb: 4,
            fontSize: { xs: '2rem', md: '1.1rem' },
            /*lineHeight: 1.6,*/
            minWidth: 0,
            width: '100%',
            maxWidth: '100%',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',

            // Усилить контрастность:
            textShadow: '0 2px 8px rgba(0,0,0,0.8)',
          }}
        >
          Ваш идеальный интерьер начинается здесь
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 5,
            fontWeight: (theme) => theme.typography.medium.fontWeight,
            minWidth: 0,
            width: '100%',
            maxWidth: '100%',
            wordBreak: 'break-all', // ← Ломает длинные слова
            overflowWrap: 'break-word',
          }}
        >
          Пространство, отражающее индивидуальность, комфорт и стиль жизни
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            minWidth: '30ch',
            fontWeight: (theme) => theme.typography.medium.fontWeight,
            backgroundColor: 'rgb(209,167,57)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgb(130, 84, 30)',
            },
          }}
        >
          Узнать больше
        </Button>
      </Box>
    </Box>
  );
}
