import { NavItem, Skill, Experience, Project, Stat } from '@/types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const stats: Stat[] = [
  { label: 'Years Experience', value: '4+', description: 'Building production-grade systems' },
  { label: 'Projects Delivered', value: '20+', description: 'Across diverse industries' },
  { label: 'Technologies', value: '15+', description: 'In daily active use' },
  { label: 'Team Collaborations', value: '3', description: 'Companies worked with' },
];

export const skills: Skill[] = [
  // Backend
  { name: 'Laravel', category: 'backend', level: 95 },
  { name: 'PHP', category: 'backend', level: 92 },
  { name: 'REST APIs', category: 'backend', level: 90 },
  { name: 'Sanctum', category: 'backend', level: 88 },
  // Frontend
  { name: 'React', category: 'frontend', level: 85 },
  { name: 'JavaScript', category: 'frontend', level: 88 },
  { name: 'jQuery', category: 'frontend', level: 80 },
  // Database
  { name: 'MySQL', category: 'database', level: 88 },
  { name: 'MS SQL', category: 'database', level: 78 },
  // DevOps
  { name: 'AWS', category: 'devops', level: 72 },
  { name: 'Linux', category: 'devops', level: 80 },
  // Tools
  { name: 'Git', category: 'tools', level: 92 },
  { name: 'GitHub', category: 'tools', level: 90 },
  { name: 'GitLab', category: 'tools', level: 85 },
];

export const experiences: Experience[] = [
  {
    company: 'Analyzen Bangladesh Ltd',
    role: 'Software Developer',
    period: '2024 – Present',
    startDate: '2024',
    endDate: null,
    current: true,
    description: [
      'Developing and maintaining scalable web applications using Laravel & React',
      'Architecting RESTful APIs consumed by mobile and web clients',
      'Collaborating with cross-functional teams in an Agile environment',
      'Implementing secure authentication with Laravel Sanctum',
      'Optimizing database queries for high-traffic endpoints',
    ],
    technologies: ['Laravel', 'React', 'MySQL', 'AWS', 'Docker', 'Git'],
  },
  {
    company: 'E-Soft BD',
    role: 'Full Stack Developer',
    period: '2024',
    startDate: '2024',
    endDate: '2024',
    description: [
      'Built enterprise-level ERP modules with Laravel backend',
      'Developed dynamic frontends with React and jQuery',
      'Integrated third-party payment gateways and SMS APIs',
      'Maintained CI/CD pipelines on GitLab',
    ],
    technologies: ['Laravel', 'React', 'MySQL', 'GitLab', 'jQuery'],
  },
  {
    company: 'GeeksnTechnology Ltd',
    role: 'Junior Software Developer',
    period: '2021 – 2024',
    startDate: '2021',
    endDate: '2024',
    description: [
      'Built SSPPOS — a full-featured Point of Sale system with inventory & reporting',
      'Developed Investors Voice financial analytics platform',
      'Created multiple client portals and admin dashboards',
      'Contributed to code reviews and maintained coding standards',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
];

export const projects: Project[] = [
  {
    id: 'ssppos',
    title: 'SSPPOS',
    description: 'A comprehensive Point of Sale system with inventory management and reporting.',
    longDescription:
      'SSPPOS is a feature-rich, production-grade Point of Sale system built for retail environments. It handles real-time inventory tracking, multi-branch support, sales analytics, purchase management, and detailed financial reporting. The system supports role-based access control and integrates with receipt printers.',
    technologies: ['Laravel', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap'],
    category: 'enterprise',
    featured: true,
    highlights: [
      'Real-time inventory tracking across multiple branches',
      'Detailed sales & profit/loss reporting',
      'Role-based access control (Admin, Manager, Cashier)',
      'Barcode scanner integration',
      'Daily/Monthly/Yearly analytics dashboard',
    ],
  },
  {
    id: 'investors-voice',
    title: 'Investors Voice',
    description: 'Financial analytics platform aggregating stock market insights for investors.',
    longDescription:
      'Investors Voice is a financial analytics platform that aggregates stock market data, news, and insights for retail and institutional investors in Bangladesh. The platform provides real-time portfolio tracking, news feeds, and custom alerts.',
    technologies: ['Laravel', 'React', 'MySQL', 'REST API', 'AWS'],
    category: 'fullstack',
    featured: true,
    highlights: [
      'Real-time stock data aggregation via third-party APIs',
      'Personalized news feed and alerts',
      'Portfolio performance tracking',
      'Responsive mobile-first design',
    ],
  },
  {
    id: 'brookfield-search',
    title: 'Brookfield Search',
    description: 'A recruitment and talent acquisition platform for modern HR teams.',
    longDescription:
      'Brookfield Search is a full-featured recruitment platform that streamlines the hiring pipeline from job posting to candidate selection. Features include applicant tracking, interview scheduling, and automated email notifications.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    category: 'web',
    featured: true,
    highlights: [
      'Complete Applicant Tracking System (ATS)',
      'Automated email communication pipeline',
      'Interview scheduling and calendar integration',
      'Admin analytics for recruitment KPIs',
    ],
  },
  {
    id: 'central-aviation',
    title: 'Central Aviation',
    description: 'Aviation management portal for flight operations and scheduling.',
    longDescription:
      'A web-based aviation management system designed to streamline flight operations, crew scheduling, maintenance logs, and compliance tracking. The system features a real-time dashboard for operations managers.',
    technologies: ['Laravel', 'MySQL', 'React', 'REST API'],
    category: 'enterprise',
    featured: false,
    highlights: [
      'Flight operations management dashboard',
      'Crew scheduling & availability tracking',
      'Maintenance log with compliance alerts',
      'Role-based crew access portal',
    ],
  },
  {
    id: 'raifa-mini-mart',
    title: 'Raifa Mini Mart',
    description: 'E-commerce and inventory management system for retail mini mart.',
    longDescription:
      'Raifa Mini Mart is a complete retail management solution combining e-commerce capabilities with robust inventory management, supplier management, and customer loyalty programs.',
    technologies: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
    category: 'web',
    featured: false,
    highlights: [
      'Product catalog with category management',
      'Online ordering with delivery tracking',
      'Supplier and purchase order management',
      'Customer loyalty & rewards system',
    ],
  },
];

export const systemsBuilt = [
  {
    title: 'Point of Sale Systems',
    description: 'Built multi-branch POS with inventory, billing, and reporting',
    icon: 'ShoppingCart',
  },
  {
    title: 'Financial Analytics Platforms',
    description: 'Aggregated stock data with portfolio tracking dashboards',
    icon: 'TrendingUp',
  },
  {
    title: 'Recruitment Platforms',
    description: 'End-to-end ATS with scheduling and pipeline management',
    icon: 'Users',
  },
  {
    title: 'Aviation Management',
    description: 'Flight ops, crew scheduling, and maintenance tracking',
    icon: 'Plane',
  },
  {
    title: 'RESTful API Systems',
    description: 'Scalable APIs with Sanctum auth powering mobile & web apps',
    icon: 'Zap',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Full-stack retail systems with inventory and payments',
    icon: 'Store',
  },
];
