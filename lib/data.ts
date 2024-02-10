import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import promptrepo from '@/public/projects/promptrepo.png';
import weatherapp from '@/public/projects/reactweatherapp.png';
import ticTacToe from '@/public/projects/tictactoe.png';
import todoApp from '@/public/projects/todoapp.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experienceData = [
  {
    title: 'Graduated Bootcamp',
    location: 'Chicago, IL',
    desc: 'Took Coding Temple bootcamp. Graduated after 5 months of studing.',
    icon: React.createElement(LuGraduationCap),
    date: '2020',
  },
  {
    title: 'Software Engineer in Test II',
    location: 'Remote',
    desc: 'I worked as a software engineer in test for 2 years at Magnite (formerly SpoX). Developed and maintained frontend and backend automation suites.',
    icon: React.createElement(CgWorkAlt),
    date: '2021-2023',
  },
  {
    title: 'Quality Assurance Engineer',
    location: 'Remote',
    desc: 'I worked as a quality assurance engineer at MNTN. Collaborated with cross-functional teams to enchance end-to-end testing.',
    icon: React.createElement(CgWorkAlt),
    date: '2023',
  },
] as const;

export const skillData = [
  'JavaScript',
  'TypeScript',
  'Python',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind',
  'Git',
  'MongoDB',
  'PyTest',
  'Cypress',
  'PlayWright',
] as const;

export const projectsData = [
  {
    title: 'Todo App',
    description:
      'A simple todo app with MongoDB backend and Next.js frontend. User authentication, CRUD operations, and task completion functionality.',
    tags: ['React', 'Next.js', 'MongoDB', 'NextAuth', 'Tailwind', 'TypeScript'],
    imageUrl: todoApp,
    projectUrl: 'https://todo-next-mongo.vercel.app',
  },
  {
    title: 'PromptRepot',
    description:
      'A full stack web applicaiton allowing users to share and store AI prompts.',
    tags: ['React', 'Next.js', 'MongoDB', 'NextAuth', 'Tailwind', 'JavaScript'],
    imageUrl: promptrepo,
    projectUrl: 'https://promptrepo.vercel.app',
  },
  {
    title: 'React Weather App',
    description:
      'A simple weather app that will provide chatGPT description or recommendation based on location.',
    tags: ['React', 'openAI API', 'OpenWeatherMap API', 'JavaScript'],
    imageUrl: weatherapp,
    projectUrl: 'https://pz-react-weather-app.netlify.app',
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'A game of Tic-Tac-Toe vs the Computer',
    tags: ['React', 'Vite', 'JavaScript'],
    imageUrl: ticTacToe,
    projectUrl: 'https://piotrzalejski.github.io/react-tic-tac-toe/',
  },
] as const;
