import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

// material
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

// components
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

const navItems = [
  { label: 'О себе', href: '#about' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Контакты', href: '#contacts' },
];

export default function LandingPage() {
  return (
    <>
      <Header navItems={navItems} />
      <Hero />
      <About />
      <Portfolio />
      <Process />
      <Testimonials />
    </>
  );
}
