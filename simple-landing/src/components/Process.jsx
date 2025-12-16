import React from 'react';
import { Box, Button, Container, Grid, Stack, Stepper, Step, StepLabel, StepContent, Paper, Typography, } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PaletteIcon from '@mui/icons-material/Palette';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ChecklistIcon from '@mui/icons-material/Checklist';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function Process() {
  return (
    <>
      { /* Process */}
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
              pt: 4,
              pb: 2,
            }}
          >
            {/* Заголовок */}
            <Typography variant="h2" sx={{ mt: 2, textAlign: 'center' }}>
              Как мы работаем
            </Typography>
            
            {/* Степпер */}
            <Box sx={{ maxWidth: 800, mx: 'auto' }}>
              <Stepper orientation="vertical">
                {/* 1 */}
                <Step active={true} completed={true}>
                  <StepLabel 
                    icon={
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'primary.light',
                          color: 'primary.main',
                          borderRadius: '50%',
                          fontSize: '1.2rem',
                        }}
                      >
                        <WavingHandIcon sx={{ color: 'white' }} />
                      </Box>
                    }
                  >
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6" component="h3">
                        Знакомство и консультация
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Обсуждаем пожелания, бюджет, сроки и стиль. Задаём вопросы, чтобы понять вашу мечту
                      </Typography>
                    </Box>
                  </StepLabel>                  
                </Step>

                {/* 2 */}
                <Step active={true} completed={true}>
                  <StepLabel 
                    icon={
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'primary.light',
                          color: 'primary.main',
                          borderRadius: '50%',
                          fontSize: '1.2rem',
                        }}
                      >
                        <DesignServicesIcon sx={{ color: 'white' }} />
                      </Box>
                    }
                  >
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6" component="h3">
                        Анализ и замеры
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Выполняем точные замеры помещения, анализируем планировку, освещение и коммуникации. Готовим техническое задание
                      </Typography>
                    </Box>
                  </StepLabel>                  
                </Step>
                
                {/* 3 */}
                <Step active={true} completed={true}>
                  <StepLabel 
                    icon={
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'primary.light',
                          color: 'primary.main',
                          borderRadius: '50%',
                          fontSize: '1.2rem',
                        }}
                      >
                        <PaletteIcon sx={{ color: 'white' }} />
                      </Box>
                    }
                  >
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6" component="h3">
                        Дизайн-концепция
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Создаём первичную концепцию: планировочные решения, цветовую гамму, подбор материалов и мебели. Делаем эскизы или 2D-планы. Согласовываем с вами идею
                      </Typography>
                    </Box>
                  </StepLabel>                  
                </Step>

                {/* 4 */}
                <Step active={true} completed={true}>
                  <StepLabel 
                    icon={
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'primary.light',
                          color: 'primary.main',
                          borderRadius: '50%',
                          fontSize: '1.2rem',
                        }}
                      >
                        <ViewInArIcon sx={{ color: 'white' }} />
                      </Box>
                    }
                  >
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6" component="h3">
                        Визуализация и детализация
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Делаем визуализацию проекта. Подбираем артикулы (плитка, обои, мебель). Утверждаем всё до мелочей
                      </Typography>
                    </Box>
                  </StepLabel>                  
                </Step>

                {/* 5 */}
                <Step active={true} completed={true}>
                  <StepLabel 
                    icon={
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'primary.light',
                          color: 'primary.main',
                          borderRadius: '50%',
                          fontSize: '1.2rem',
                        }}
                      >
                        <ChecklistIcon sx={{ color: 'white' }} />
                      </Box>
                    }
                  >
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6" component="h3">
                        Реализация и контроль
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Работаем с подрядчиками. Проводим промежуточные встречи. При необходимости вносим коррективы
                      </Typography>
                    </Box>
                  </StepLabel>                  
                </Step>

                {/* 6 */}
                <Step active={true} completed={true}>
                  <StepLabel 
                    icon={
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'primary.light',
                          color: 'primary.main',
                          borderRadius: '50%',
                          fontSize: '1.2rem',
                        }}
                      >
                        <CelebrationIcon sx={{ color: 'white' }} />
                      </Box>
                    }
                  >
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6" component="h3">
                        Завершение
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Заказчик принимает выполненную работу. Передаем документацию (планы, инструкции и др.). Делаем фотографии реализованного проекта
                      </Typography>
                    </Box>
                  </StepLabel>                  
                </Step>
              </Stepper>
            </Box>            
          </Box>
        </Container>
      </Box>
    </>
  );
}