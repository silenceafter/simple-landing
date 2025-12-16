import React, { useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Box, Card, CardMedia, CardContent, Container, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

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
              backgroundImage: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {/* Логотип слева */}
            <Box sx={{ flex: 1 }} />

            {/* Навигация по центру */}
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                gap: 4,
                justifyContent: 'center',
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
          <Box sx={{ flex: 1, textAlign: 'right' }} />
          </Toolbar>
        </AppBar>

        {/* Hero */}
        <Hero />
      </Box>

      {/* About */}
      <About />
      {/* Portfolio */}
      <Portfolio />
    </>
  );
}