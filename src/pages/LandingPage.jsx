import React, { useState } from "react";
import { Outlet, Link } from 'react-router-dom';

// material
import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';

// components
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";

// icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'О себе', href: '#about' }, 
  { label: 'Портфолио', href: '#portfolio' }, 
  { label: 'Отзывы', href: '#testimonials' }, 
  { label: 'Контакты', href: '#contacts' }
];

export default function LandingPage() {
  // стейты
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // события
  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box sx={{ minHeight: '100vh' }}>
        {/* Hero-секция с фоном */}
        <Box
          sx={{
            /*margin: 0,
            padding: 0,*/
            position: 'relative',
            minHeight: '100vh',
            /*width: '100vw',*/
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Header */}
          <AppBar
            position="fixed"
            elevation={0}
            sx={{
              boxShadow: 'none',
              backgroundColor: 'transparent',
              width: '100%',
              left: 0,
              right: 0, 
              /*background: 'none',
              border: 'none',
              zIndex: 1200,*/
            }}
          >
            <Container maxWidth="lg">
              <Toolbar 
                disableGutters
                sx={{ 
                  justifyContent: 'space-between',
                  px: { xs: 2, md: 0 } ,
                  /*fontFamily: "Montserrat", 
                  fontWeight: 200,
                  backgroundColor: 'transparent',
                  backgroundImage: 'none',
                  display: 'flex',
                  alignItems: 'center',*/
                }}
              >
                {/* Логотип слева */}
                {/*<Box sx={{ flex: 1 }} />*/}
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                  }}>
                  Анна Асеева | Дизайнер
                </Typography>

                {/* Навигация по центру (десктоп) */}
                <Box 
                  sx={{ 
                    display: { xs: 'none', md: 'flex' }, 
                    gap: 4,
                    /*justifyContent: 'center',*/
                  }}
                >
                  {navItems.map((items) => (
                    <Typography
                      key={items.href}
                      variant="body1"
                      sx={{
                        color: 'white',
                        cursor: 'pointer',
                        '&:hover': { opacity: 0.8 },
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          opacity: 0.8,
                        }
                      }}
                      onClick={() => console.log(`Go to ${items.label}`)}
                    >
                      {items.label}
                    </Typography>
                  ))}
              </Box>

              {/* Бургер-кнопка (мобильная версия) */}
              <IconButton
                sx={{
                  display: { xs: 'block', md: 'none'},
                  color: 'white',
                }}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Открыть меню"
              >
                <MenuIcon />
              </IconButton>

              {/* Кнопка справа */}
              {/*<Box sx={{ flex: 1, textAlign: 'right' }} />*/}
              </Toolbar>
            </Container>
          </AppBar>

          {/* Hero */}
          <Hero />
        </Box>

        {/* Мобильное меню */}
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
              backgroundColor: '#ffffff',
              color: '#1a1a1a',
              pt: 8,
              pl: 3,
              pr: 3,
              boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
            }
          }}
          BackdropProps={{
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.3)', // Менее темное затемнение
            }
          }}
        >
          {/* Кнопка закрытия */}
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            sx={{ 
              position: 'absolute', 
              top: 16, 
              right: 16, 
              color: '#1a1a1a' 
            }}
          >
            <CloseIcon />
          </IconButton>

          <List>
            {navItems.map((item) => (
              <ListItem
                button 
                key={item.href} disablePadding
                onClick={() => {
                  console.log(`Go to ${items.label}`);
                  setMobileMenuOpen(false);
                }}
                sx={{
                  py: 2,
                  borderRadius: 2,
                  mb: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  }
                }}
              >
                <ListItemButton
                  onClick={() => handleNavClick(item.href)}
                  sx={{ py: 2, borderRadius: 2, mb: 1 }}  
                >
                  <ListItemText 
                    primary={item.label}
                    slotProps={{
                      primary: {
                        fontSize: '18px',
                        fontWeight: 500
                      }
                    }} />
                </ListItemButton>
                
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 'auto', mb: 4 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleNavClick('#contact')}
              sx={{ 
                py: 1.5, 
                bgcolor: '#d4a843', 
                color: '#ffffff',
                fontWeight: 600,
                  '&:hover': { 
                    bgcolor: '#c49833' 
                  }
              }}
            >
              Написать мне
            </Button>
          </Box>
        </Drawer>

        {/* About */}
        <About />
        {/* Portfolio */}
        <Portfolio />
        {/* Process */}
        <Process />
        {/* Testimonials */}
        <Testimonials />
      </Box>
    </>
  );
}