export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'AiCruiter',
    description:
      'Designed scalable recruitment workflows for handling large candidate datasets efficiently.',
    logo: '/logos/ai.png',
    link: 'https://github.com/Arsalan0736/AICruiter',
    slug: 'aicruiter',
  },
  {
    title: 'NextJS-Ecommerce',
    description:
      'Engineered an end-to-end eCommerce platform that enhances customer experience and drives growth.',
    logo: '/logos/ecom.png',
    link: 'https://github.com/Arsalan0736/NextJS-Ecommerce',
    slug: 'NextJS-Ecommerce',
  },
  {
    title: 'TherapAIst',
    description:
      'Developed an AI-powered emotional therapy platform with real-time video sessions, emotion detection, and analytics dashboard to enhance mental wellness.',
    logo: '/logos/brain.png',
    link: 'https://github.com/Arsalan0736/ai-therapist',
    slug: 'therapist',
  },
  {
    title: 'MERN Movie',
    description:
      'Developed a full-stack MERN Movie Website enabling users to search, explore, and track movies with a responsive, user-friendly interface.',
    logo: '/logos/clapper.png',
    link: 'https://github.com/Arsalan0736/mern-movie-2024',
    slug: 'mern-movie-2024',
  },
  {
    title: 'Crowdsourced Disaster Relief and Coordination System',
    description:
      'Built a Crowdsourced Disaster Relief System linking volunteers, resources, and communities.',
    logo: '/logos/ocean.png', 
    link: 'https://github.com/Arsalan0736/disasterManagement',
    slug: 'disasterManagement',
  },
];
