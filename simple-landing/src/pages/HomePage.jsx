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
import HeroSection from "../components/HeroSection";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

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
        <HeroSection />
        {/*<Box
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
        </Box>*/}        
      </Box>

      { /* About */}
      <Box sx={{ bgcolor: '#FAF7F2'}}>
        <Container 
          sx={{        
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 4, md: 8 },
            }}
          >
            {/* Картинка - левая часть */}
            <Box
              sx={{
                width: { xs: '100%', md: '45%' }, 
                flexShrink: 0,              
              }}
            >            
              <Card
                sx={{ 
                  maxWidth: 400,
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                }}
              >
                <CardMedia
                  component="img"
                  height="auto"                
                  image="/images/about-bg.jpg"
                  alt="Дизайнер"
                  sx={{
                    objectFit: 'cover',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      transition: 'transform 0.5s ease',
                    }
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="body1" color="text.secondary">
                    Анна Асеева • Дизайнер интерьеров
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            
            {/* Текст - правая часть */}
            <Box 
              sx={{ 
                width: { xs: '100%', md: '100%' },
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography variant="h1" sx={{ mb: 3, textAlign: 'left' }}>
                  О себе
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }} noWrap>
                  Создайте пространство, которое вдохновляет!
                </Typography>
                <Typography paragraph sx={{ textAlign: 'justify' }}>
                  Меня зовут Анна Асеева, и я более 5 лет занимаюсь дизайном интерьеров. 
                </Typography>
                <Typography paragraph sx={{ textAlign: 'justify' }}>
                  Моя страсть к дизайну началась с детства, когда я заметила, как пространство может влиять на наше настроение и самочувствие. 
                  С тех пор я посвятила себя созданию интерьеров, которые не только красивы, но и функциональны, отражая индивидуальность каждого клиента.            
                </Typography>
                <Typography paragraph sx={{ textAlign: 'justify' }}>
                  За годы работы реализовано множество проектов, от небольших квартир до крупных коммерческих объектов.
                  Каждый элемент интерьера продуман до мелочей, чтобы обеспечить максимальный комфорт и удобство.
                </Typography>
                <Typography paragraph sx={{ textAlign: 'justify' }}>
                  Что важно для меня? Искать новые решения и вдохновляться современными тенденциями, чтобы создать что-то особенное.
                </Typography>
              </Box>
              <Stack direction="row" spacing={2} ali>
                <Button variant="contained" endIcon={<TrendingFlatIcon />}>
                  Мои работы
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}