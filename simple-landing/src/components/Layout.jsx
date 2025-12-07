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

const pages = ['Главная', 'Куда сходить', 'Что посмотреть', 'Где поесть', 'Как добраться', 'Советы'];

export default function Layout() {

  //
  return (
    <>
      {<AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0, 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: '#005a4c', // зелёный цвет
        }}
      >
        <Toolbar sx={{ justifyContent: 'center'}}>          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {pages.map((page) => (
              <Typography
                key={page}
                variant="body1"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': { opacity: 0.8 },
                }}
                onClick={() => console.log(`Go to ${page}`)}
              >
                {page}
              </Typography>
            ))}
        </Box>
        </Toolbar>
      </AppBar>}

      <Box
        component="main"
        sx={{          
          boxSizing: 'border-box'
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}