import React from 'react';
import { Box, Button, Card, CardMedia, CardContent, Container, Grid, Stack, Typography, CardActionArea, CardActions, Pagination } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export default function Process() {
  const steps = [
    { 
      title: 'Знакомство и консультация', 
      description: ``, 
      icon: '/images/modern-bathroom-with-emerald-green-subway-tiles-full.jpg',      
    },
    { 
      title: 'Анализ и замеры', 
      description: ``, 
      icon: '/images/modern-bathroom-with-emerald-green-subway-tiles-full.jpg',      
    },
    { 
      title: 'Дизайн-концепция', 
      description: ``, 
      icon: '/images/modern-bathroom-with-emerald-green-subway-tiles-full.jpg',      
    },
    { 
      title: 'Визуализация и детализация', 
      description: `Делаем визуализацию проекта. Подбираем артикулы (плитка, обои, мебель). Утверждаем всё`, 
      icon: '/images/modern-bathroom-with-emerald-green-subway-tiles-full.jpg',      
    },
    { 
      title: 'Реализация и контроль',
      description: `Работаем с подрядчиками. Проводим промежуточные встречи. При необходимости вносим коррективы`, 
      icon: '/images/modern-bathroom-with-emerald-green-subway-tiles-full.jpg',      
    },
    { 
      title: 'Завершение проекта', 
      description: `Заказчик принимает выполненную работу. Передаем документацию (планы, инструкции и др.). Делаем фотографии реализованного проекта`, 
      icon: '/images/modern-bathroom-with-emerald-green-subway-tiles-full.jpg',      
    },
  ];
  //
  return (
    <>
      { /* Process */}
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
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: 4, md: 8 },
            }}
          >
            {/* Заголовок */}
            <Typography variant="h1" sx={{ mb: 3, textAlign: 'left' }}>
              Портфолио
            </Typography>
            
            {/* Грид для карточек */}
            <Grid container spacing={3}>
              {cards.map((card, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ maxWidth: 345, height: '100%' /*height: '100%', display: 'flex', flexDirection: 'column'*/ }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        src={card.image}
                        alt={card.alt}
                        sx={{
                          height: 300,
                          objectFit: 'cover',
                          objectPosition: 'center', 
                          aspectRatio: '3 / 2',
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1, p: 2 }}>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign:'left', wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal'}}>
                          {card.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                            minHeight: 0,
                            textAlign: 'justify'
                          }}>
                          {card.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Подробнее
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Пагинация */}
            <Stack spacing={2}>
              <Pagination count={10} />
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}