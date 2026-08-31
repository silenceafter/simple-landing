import { createTheme } from '@mui/material/styles';

// Создаем полную тему с Montserrat
const theme = createTheme({
  typography: {
    // Основной шрифт для всего
    fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    
    // ===== HEADINGS =====
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 800, // Extra Bold
      fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Адаптивный размер
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700, // Bold
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600, // SemiBold
      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600, // SemiBold
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500, // Medium
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500, // Medium
      fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
      lineHeight: 1.5,
    },
    
    // ===== SUBTITLES =====
    subtitle1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400, // Regular
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    subtitle2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500, // Medium
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    
    // ===== BODY TEXT =====
    body1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400, // Regular
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    body2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400, // Regular
      fontSize: '0.875rem',
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    
    // ===== BUTTONS =====
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600, // SemiBold
      fontSize: '0.9375rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase', // или 'none' если не хотите CAPS
    },
    
    // ===== CAPTION & OVERLINE =====
    caption: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400, // Regular
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    overline: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400, // Regular
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
    
    // ===== CUSTOM WEIGHTS =====
    // Вы можете создать свои варианты
    light: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 300, // Light
    },
    extraLight: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 200, // ExtraLight - ВАШ ЗАПРОС
      letterSpacing: '0.02em',
    },
    thin: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 100, // Thin
    },
    medium: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500, // Medium
    },
    semiBold: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600, // SemiBold
    },
    bold: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700, // Bold
    },
    extraBold: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 800, // ExtraBold
    },
    black: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 900, // Black
    },
  },
  
  // ===== КОМПОНЕНТЫ =====
  components: {
    // Настройка MuiTypography для использования кастомных вариантов
    MuiTypography: {
      defaultProps: {
        fontFamily: '"Montserrat", sans-serif',
      },
      styleOverrides: {
        root: {
          '&.MuiTypography-light': {
            fontWeight: 300,
          },
          '&.MuiTypography-extraLight': {
            fontWeight: 200,
          },
          '&.MuiTypography-thin': {
            fontWeight: 100,
          },
        },
      },
      variants: [
        {
          props: { variant: 'extraLight' },
          style: {
            fontWeight: 200,
            letterSpacing: '0.02em',
          },
        },
        {
          props: { variant: 'light' },
          style: {
            fontWeight: 300,
          },
        },
      ],
    },
    
    // Настройка MuiButton
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 600,
          borderRadius: '8px',
          padding: '10px 24px',
          transition: 'all 0.3s ease',
        },
        text: {
          fontWeight: 500,
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    
    // Настройка MuiAppBar
    MuiAppBar: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
        },
      },
    },
    
    // Настройка MuiToolbar
    MuiToolbar: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
        },
      },
    },
  },
  
  // ===== ПАЛИТРА (опционально) =====
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
  },
  
  // ===== ДРУГИЕ НАСТРОЙКИ =====
  shape: {
    borderRadius: 8,
  },
  spacing: 8, // базовый spacing unit
});

export default theme;