import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
// TODO: add project images

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
    desc: 'I graduated after 5 months of studying.',
    icon: React.createElement(LuGraduationCap),
    date: '2020',
  },
  {
    title: 'Software Engineer in Test II',
    location: 'Remote',
    desc: 'I worked as a software engineer in test for 2 years at Magnite (formerly SpoX)',
    icon: React.createElement(CgWorkAlt),
    date: '2021-2023',
  },
  {
    title: 'Quality Assurance Engineer',
    location: 'Remotte',
    desc: 'I worked as a quality assurance engineer at MNTN.',
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
