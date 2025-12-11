import React, { useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Box, Grid, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const pages = ['О себе', 'Портфолио', 'Отзывы', 'Контакты'];

export default function HomePage() {
    return (
    <>
      <Box
        sx={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          width: '100vw',
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <AppBar
          position="absolute"
          elevation={0}
          sx={{
            boxShadow: 'none',
            backgroundColor: 'transparent',
            background: 'none',
            border: 'none',
            zIndex: 1200,
          }}
        >
          <Toolbar 
            sx={{ 
              justifyContent: 'space-between',
              px: { xs: 2, md: 4 } ,
              fontFamily: "Montserrat", 
              fontWeight: 200,
              backgroundColor: 'transparent',
                    backgroundImage: 'none'
            }}
          >
            {/* Логотип слева */}
            {/*<Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Логотип
            </Typography>*/}

            {/* Навигация по центру */}
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                gap: 4,
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              {pages.map((page) => (
                <Typography
                  key={page}
                  variant="body1"
                  sx={{
                    color: 'white',
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}
                  onClick={() => console.log(`Go to ${page}`)}
                >
                  {page}
                </Typography>
              ))}
          </Box>

          {/* Кнопка справа */}
          {/*<Button 
            variant="contained" 
            sx={{ 
              backgroundColor: 'white',
              color: 'black',
              '&:hover': {
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            Связаться
          </Button>*/}
          </Toolbar>
        </AppBar>

        {/* Hero */}
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            px: 2
          }}
        >
          <Typography 
            variant="h1" 
            sx={{ 
              mb: 3, 
              /*fontWeight: 'bold',*/
              '& span': {
                display: 'block'
              }
            }}
          >
            Ваш идеальный интерьер <span>начинается здесь</span>
          </Typography>
          <Typography variant="h5" sx={{ mb: 5, maxWidth: '800px' }}>
            Пространство, отражающее индивидуальность, комфорт и стиль жизни
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              backgroundColor: 'primary.main',
              fontSize: '1.1rem',
              px: 4,
              py: 1.5
            }}
          >
            Начать
          </Button>
        </Box>
      </Box>
    </>
  );
}