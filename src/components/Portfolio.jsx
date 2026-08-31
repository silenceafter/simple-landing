import React from 'react';
import { Box, Button, Card, CardMedia, CardContent, Container, Grid, Stack, Typography, CardActionArea, CardActions, Pagination } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export default function Portfolio() {
  const cards = [
    { 
      title: 'Ванная комната с изумрудной плиткой', 
      description: `Проект для молодой пары, мечтавшей о ванной, которая «оживает» после рабочего дня. Мы выбрали глубокий изумрудный цвет плитки — 
        он создаёт ощущение свежести и природы, но не перегружает пространство. `, 
      image: '/images/modern-bathroom-with-emerald-green-subway-tiles-full.jpg', 
      alt: 'Современная ванная комната с изумрудной плиткой метро, деревянной тумбой и круглым светодиодным зеркалом' 
    }, /* Контраст с тёплым деревом и чистыми белыми поверхностями делает интерьер 
        современным и расслабляющим. Круглое LED-зеркало — не просто функция, а акцент, добавляющий света и объёма */
    { 
      title: 'Столовая в светлых тонах', 
      description: `Столовая, которая будет одновременно уютной для семейных обедов и стильной для вечеринок. Мы выбрали тёмное 
        дерево стола как основу, дополнив его нейтральными стульями и геометричным ковром — они создают ритм, не отвлекая от главного.`, 
      image: '/images/dining-room-with-dark-wood-table-full.jpg', 
      alt: 'Столовая с тёмным деревянным столом, бежевыми обитыми стульями, геометрическим ковром и абстрактным оранжевым настенным искусством' 
    }, /* Задача — создать столовую, которая будет одновременно уютной для семейных обедов и стильной для вечеринок. Мы выбрали тёмное 
        дерево стола как основу, дополнив его нейтральными стульями и геометричным ковром — они создают ритм, не отвлекая от главного. Абстрактные 
        картины с оранжевыми акцентами — это «изюминка», которая оживляет пространство и задаёт настроение. Окно с жалюзи обеспечивает контроль над 
        светом — важный момент для комфортного вечера. */
    { 
      title: 'Гостиная в стиле лофт с бетоном', 
      description: `Для клиента, который любит минимализм и городскую эстетику, мы создали гостиную в стиле лофт — с открытыми бетонными стенами, 
        которые подчёркивают аутентичность пространства. Но чтобы не было «холодно», добавили тёплый паркет, мягкий серый диван и живые растения — 
        они смягчают грубость бетона.`, 
      image: '/images/industrial-style-living-room-with-exposed-concrete-walls-full.jpg',
      alt: 'Гостиная в стиле лофт с открытыми бетонными стенами, серым диваном, деревянным журнальным столиком и торшером' 
    }, /* Большие окна пропускают свет и открывают вид на город — это не просто фон, а часть дизайна. Торшер и журнальный 
        столик — финальные штрихи, делающие пространство функциональным и живым. */
  ];
  //
  return (
    <>
      { /* Portfolio */}
      <Box sx={{ bgcolor: '#FAF7F2'}}>
        <Container 
          sx={{        
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pb:4
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
            <Typography variant="h2" sx={{ mt: 2, textAlign: 'left' }}>
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