import React from 'react';
import { Avatar, Box, Button, Container, Grid, Pagination, Rating, Stack, Typography, } from '@mui/material';

const getInitials = (name) => {
  if (!name) return '';
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase();
};

export default function Testimonials() {
const testimonials = [
    {
      id: 1,
      name: 'Анна Петрова',
      avatar: '/images/avatars/anna.jpg',
      rating: 5,
      text: 'Дизайнер превзошёл все мои ожидания. Дом стал именно таким, каким я его себе представляла. Очень рада, что выбрала именно эту студию!',
      project: 'Ремонт гостиной',
      date: '2024-07-08'
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      avatar: null,
      rating: 4,
      text: 'Очень рады, что выбрали именно эту студию! Всё сделали быстро, красиво и с душой. Работа выполнена качественно и в срок. Спасибо за профессионализм и внимательное отношение к деталям.',
      project: 'Дизайн-проект кухни',
      date: '2024-10-27'
    },
    {
      id: 3,
      name: 'Елена Кузнецова',
      avatar: '/images/avatars/elena.jpg',
      rating: 5,
      text: 'Это был мой первый опыт работы с дизайнером, и он оказался идеальным. Все детали продуманы до мелочей. Спасибо за профессионализм и терпение!',
      project: 'Полный ремонт квартиры',
      date: '2024-03-25'
    },
    {
      id: 4,
      name: 'Дмитрий Волков',
      avatar: '/images/avatars/dmitry.jpg',
      rating: 5,
      text: 'Обратились к этой студии по рекомендации друзей, и не прогадали! Анна сразу поняла нашу идею: хотели стильный, светлый интерьер с элементами скандинавского стиля...',
      project: 'Дизайн-проект и авторский надзор, 3-комн. квартира',
      date: '2026-01-10'
  },
  {
    id: 5,
    name: 'Ольга Назарова',
    avatar: '/images/avatars/alexey.jpg',
    rating: 5,
    text: 'Когда мы решили сделать ремонт в новостройке, я понятия не имела, с чего начать. Обратилась к дизайнеру Анне...',
    project: 'Полный дизайн-проект и сопровождение ремонта',
    date: '2025-12-20'
  },
  {
    id: 6,
    name: 'Алексей Козлов',
    avatar: null,
    rating: 4,
    text: 'Работой остались довольны. Дизайнер предложил интересные решения, ремонт прошёл без срывов сроков. Рекомендую!',
    project: 'Дизайн-проект офиса',
    date: '2025-11-05'
  }];

  return (
    <>
      { /* Testimonials */}
      <Box sx={{ bgcolor: '#FFFFFF'}}>
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
              gap: { xs: 2, md: 4 },
              pt: 6,
              mt: 0,
              pb: 6,
            }}
          >
            {/* Заголовок */}
            <Typography variant="h2" sx={{ mt: 0, mb: 2, textAlign: 'left' }}>
              Что о нас говорят
            </Typography>
            {/*<Typography variant="h5" align="center" color="textSecondary" sx={{ mb: 4 }}>
                Реальные истории, настоящие эмоции
            </Typography>*/}

            <Grid container spacing={3} sx={{ mb: 2 }}>
            {testimonials.map((testimonial, index) => {
                // Определяем размер карточки на основе длины текста
                const isLongText = testimonial.text.length > 100;
                const cardHeight = isLongText ? 280 : 180; // Высота в px
                //
                return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                    sx={{
                        width: '365px',
                        p: 2,
                        border: '1px solid #e0e0e0',
                        borderRadius: 2,
                        bgcolor: 'white',
                        height: '265px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        },
                    }}
                    >
                    {/* Аватарка и рейтинг */}
                    <Box sx={{ display: 'flex', alignItems: 'center',  mb: 2 }}>
                        <Avatar
                            src={testimonial.avatar || undefined}
                            alt={testimonial.name}
                            sx={{
                                width: 48,
                                height: 48,
                                mr: 2,
                                bgcolor: testimonial.avatar ? 'transparent' : '#bdbdbd',
                            }}
                        >
                            {!testimonial.avatar && getInitials(testimonial.name)}
                        </Avatar>
                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                                {testimonial.name}
                            </Typography>
                            <Rating value={testimonial.rating} readOnly size="small" />
                        </Box>
                    </Box>

                    {/* Текст отзыва */}
                    <Typography variant="body2" sx={{ flexGrow: 1, mb: 2 }}>
                        "{testimonial.text}"
                    </Typography>

                    {/* Проект и дата */}
                    <Typography variant="caption" color="textSecondary">
                        {testimonial.project} • {new Date(testimonial.date).toLocaleDateString()}
                    </Typography>                  
                    </Box>
                </Grid>
                );
            })}
            </Grid>

            {/* Пагинация */}
            <Stack spacing={2}>
                <Pagination count={5} />
            </Stack>
          </Box>

          {/* p: 3,
    borderRadius: 2,
    border: '1px solid #e0e0e0',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      transform: 'translateY(-4px)', // ← поднятие при наведении
      borderColor: 'primary.main', // ← акцент на цвете
    }, */}
        </Container>
      </Box>
    </>
  );
}