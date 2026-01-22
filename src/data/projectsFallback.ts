import type { ProjectData } from 'types';

const projectsFallback: ProjectData[] = [
  {
    name: 'Estransport [Client]',
    screenshot: 'project_estransport.png',
    projectLink: '_',
    projectGithubName: 'estransport',
    logo: 'project_liminal.svg',
    technologies: [
      'react',
      'typescript',
      'redux toolkit',
      'leaflet',
      'react-leaflet',
      'openstreetmap',
    ],
    description:
      'Open-source search and routing for public transport in Estonia.',
  },
  {
    name: 'Estransport [Server]',
    screenshot: 'project_estransport.png',
    projectLink: '_',
    projectGithubName: 'estransport-server',
    logo: 'project_liminal.svg',
    technologies: ['node.js', 'express.js', 'typescript'],
    description:
      'Server for the open-source search and routing for public transport in Estonia.',
  },
  {
    name: 'Project_Liminal',
    screenshot: 'project_liminal_screen.png',
    projectLink: '_',
    projectGithubName: 'Project_Liminal',
    logo: 'project_liminal.svg',
    technologies: ['react', 'redux', 'postgresql', 'redis', 'scss'],
    description:
      'This is a music streaming app. Users can listen to music, listen to the radio stream, use smart volume control function. Administrators can add music, change radio queue and control users.',
  },
  {
    name: 'Project_Build',
    screenshot: 'project_build_screen.png',
    projectLink: '_',
    projectGithubName: 'project-build',
    logo: 'project_build.svg',
    technologies: ['react', 'next.js', 'firebase', 'scss'],
    description:
      'This is a house builder organization`s landing page. Users can check sample projects information, contacts, order a call from organization. Administrators can change projects via admin panel.',
  },
  {
    name: 'Project_Ceres',
    screenshot: 'project_ceres_screen.png',
    projectLink: '_',
    projectGithubName: 'Project_Ceres',
    logo: 'project_ceres.svg',
    technologies: ['react', 'redux', 'firebase', 'scss', 'typescript'],
    description:
      'This is a demo project for food delivery company. Users can check goods, add them to their cart. They can sign in using email-password or google account.',
  },
  {
    name: 'Project_Vesta',
    screenshot: 'project_vesta_screen.png',
    projectLink: '_',
    projectGithubName: 'project_vesta',
    logo: 'project_vesta.svg',
    technologies: ['react', 'react-native'],
    description: 'This is a test react-native chat project',
  },
];

export default projectsFallback;
