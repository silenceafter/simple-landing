import React from 'react';
import { Box, Button, Card, CardMedia, CardContent, Container, Stack, Typography } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export default function About() {
  return (
    <>
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