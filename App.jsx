import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  Code2,
  Server,
  Database,
  Wrench,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  Send,
  Sparkles,
  User,
  Layers,
  Terminal,
  ArrowUpRight,
  MapPin,
  Camera,
  Box,
  Cpu
} from 'lucide-react';
import portraitPhoto from './assets/portrait.jpeg';

const WEB3FORMS_ACCESS_KEY = '8896b281-d3a0-40db-9586-a9fa233a1bdb';

const FALLBACK_SUIT_AVATAR =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="400" height="480">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="suit" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="400" height="480" fill="url(#bg)"/>
  <circle cx="200" cy="175" r="76" fill="#e2b49a"/>
  <path d="M126 162 C125 98, 275 98, 274 162 C266 132, 134 132, 126 162 Z" fill="#18181b"/>
  <path d="M142 195 Q200 262 258 195 Q256 244 200 252 Q144 244 142 195 Z" fill="#18181b" opacity="0.88"/>
  <path d="M72 480 C76 348, 125 305, 200 305 C275 305, 324 348, 328 480 Z" fill="url(#suit)"/>
  <polygon points="164,305 200,415 236,305" fill="#f8fafc"/>
  <polygon points="154,305 200,425 174,305" fill="#0f172a"/>
  <polygon points="246,305 200,425 226,305" fill="#0f172a"/>
  <text x="200" y="454" text-anchor="middle" fill="#e2e8f0" font-family="sans-serif" font-size="14" font-weight="600">SANDEEP YADAV</text>
</svg>
`);

const DEFAULT_PORTRAIT_SRC = portraitPhoto;
const PHOTO_STORAGE_KEY = 'sandeep_portfolio_photo_v3';

function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17.34V10.67H6.12V17.34H8.34ZM7.23 9.75C8.01 9.75 8.5 9.23 8.5 8.58C8.48 7.91 8.01 7.41 7.25 7.41C6.49 7.41 6 7.91 6 8.58C6 9.23 6.48 9.75 7.22 9.75H7.23ZM18 17.34V13.59C18 11.58 16.93 10.64 15.5 10.64C14.35 10.64 13.84 11.27 13.55 11.72V10.67H11.33C11.36 11.27 11.33 17.34 11.33 17.34H13.55V13.62C13.55 13.42 13.56 13.22 13.62 13.08C13.78 12.68 14.15 12.27 14.77 12.27C15.58 12.27 15.88 12.88 15.88 13.78V17.34H18Z" />
    </svg>
  );
}

function TiltCard3D({
  children,
  className = '',
  maxTilt = 10,
  glare = true,
  scale = 1.02
}) {
  const [transformStyle, setTransformStyle] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  );
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.35), transparent 65%)'
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glare) {
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      setGlareStyle({
        opacity: 1,
        background: `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.28), transparent 65%)`
      });
    }
  };

  const handleMouseLeave = () => {
    setTransformStyle(
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    );
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
        transition: 'transform 180ms cubic-bezier(0.22, 1, 0.36, 1)'
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <div
          aria-hidden="true"
          style={glareStyle}
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
        />
      )}
    </div>
  );
}

const PORTFOLIO_DATA = {
  name: 'Sandeep Yadav',
  role: 'MERN Stack & WordPress Developer',
  tagline:
    'Full-stack web developer specializing in MongoDB, Express.js, React.js, Node.js, PHP, and custom WordPress solutions. Currently building scalable client websites at Creative Squadz.',
  summary:
    'MERN Stack and WordPress Developer with hands-on experience in MongoDB, Express.js, React.js, Node.js, PHP and WordPress. Strong foundation in full-stack web development, REST APIs, database design, custom WordPress development and responsive UI using React.js and Tailwind CSS. Currently working at Creative Squadz, delivering client websites while growing as a professional developer.',
  contact: {
    phone: '+91-8948587749',
    email: 'sandeep.dparsa@gmail.com',
    github: 'https://github.com/sandeepyadav111',
    linkedin: 'https://www.linkedin.com/in/sandeep-yadav-9a50b42ab',
    location: 'Delhi NCR / India'
  },
  skills: [
    {
      category: 'Frontend Development',
      icon: Code2,
      description: 'Building responsive, interactive, and accessible user interfaces.',
      items: [
        'React.js',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap',
        'Redux',
        'Context API'
      ]
    },
    {
      category: 'Backend & APIs',
      icon: Server,
      description: 'Architecting scalable server-side logic and secure authentication.',
      items: [
        'Node.js',
        'Express.js',
        'PHP',
        'REST API',
        'JWT Authentication',
        'CRUD Operations'
      ]
    },
    {
      category: 'CMS & Databases',
      icon: Database,
      description: 'Custom WordPress solutions and structured/NoSQL data modeling.',
      items: [
        'WordPress',
        'Custom Themes & Plugins',
        'Elementor',
        'WooCommerce',
        'ACF',
        'MongoDB',
        'MySQL',
        'Database Design'
      ]
    },
    {
      category: 'Tools & Languages',
      icon: Wrench,
      description: 'Version control, deployment workflows, and core programming.',
      items: [
        'Git',
        'GitHub',
        'VS Code',
        'cPanel',
        'Java',
        'Responsive Web Design'
      ]
    }
  ],
  experience: [
    {
      id: 'exp-1',
      role: 'Web Developer (WordPress & PHP)',
      company: 'Creative Squadz',
      period: '2026 - Present',
      type: 'Full-Time',
      responsibilities: [
        'Develop and maintain responsive WordPress websites for clients using PHP, HTML5, CSS3 and JavaScript.',
        'Customize WordPress themes and plugins, and build custom page templates and functionality with PHP.',
        'Optimize websites for speed, cross-browser compatibility and mobile responsiveness.',
        'Troubleshoot bugs, handle updates and collaborate with the design team to deliver projects on schedule.'
      ]
    }
  ],
  projects: [
    {
      id: 'proj-live-1',
      title: 'B2B LED Marketplace',
      year: '2026',
      isLive: true,
      category: 'WordPress & PHP',
      shortDesc:
        'Live B2B wholesale marketplace platform for LED raw materials and lighting products featuring supplier registration & approval workflows, buyer inquiry management, and custom WordPress/PHP functionality.',
      tech: ['WordPress', 'PHP', 'WooCommerce', 'Custom CSS', 'MySQL'],
      highlights: [
        'Built and deployed a live B2B wholesale marketplace tailored for LED raw materials and commercial lighting products.',
        'Engineered custom supplier registration, admin approval workflows, and structured buyer inquiry management using PHP and MySQL.',
        'Customized WooCommerce product catalogs and responsive templates for fast browsing across desktop and mobile devices.'
      ],
      liveUrl: 'https://sandeep.universalacademyhometutor.com/'
    },
    {
      id: 'proj-live-2',
      title: 'Loan & Finance Portal',
      year: '2026',
      isLive: true,
      category: 'WordPress & PHP',
      shortDesc:
        'Live financial services and loan consultation web platform featuring responsive lead capture forms, loan eligibility/inquiry workflows, and performance-optimized UI.',
      tech: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript'],
      highlights: [
        'Developed a live financial services and loan consultation platform designed for high lead conversion and clarity.',
        'Implemented interactive loan eligibility and inquiry capture workflows with PHP form handling and validation.',
        'Optimized page load speed, mobile responsiveness, and cross-browser compatibility for seamless user experience.'
      ],
      liveUrl: 'https://loan.universalacademyhometutor.com/'
    },
    {
      id: 'proj-live-3',
      title: 'Frands.in',
      year: '2026',
      isLive: true,
      category: 'WordPress & PHP',
      shortDesc:
        'Live commercial website built using WordPress and PHP with custom theme tailoring, responsive layouts, speed optimization, and seamless user experience.',
      tech: ['WordPress', 'PHP', 'Custom Themes & Plugins', 'CSS3'],
      highlights: [
        'Designed, customized, and launched the live Frands.in commercial web platform using WordPress and custom PHP.',
        'Tailored custom theme layouts, reusable page templates, and plugin integrations to match brand requirements.',
        'Delivered mobile-first responsive styling and core performance optimizations for smooth navigation.'
      ],
      liveUrl: 'https://frands.in'
    },
    {
      id: 'proj-1',
      title: 'Online Book Store',
      year: '2025',
      isLive: false,
      category: 'MERN Stack',
      shortDesc:
        'Full-stack MERN e-commerce platform for books with user authentication, shopping cart, checkout, order management, and REST APIs.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
      highlights: [
        'Developed a full-stack MERN e-commerce platform for books with user authentication, shopping cart, checkout, and order management.',
        'Designed a clean, responsive UI using Tailwind CSS for seamless experience across devices.',
        'Implemented secure REST APIs with Express.js and managed data persistence using MongoDB.'
      ],
      githubUrl: 'https://github.com/sandeepyadav111'
    },
    {
      id: 'proj-2',
      title: 'E-Commerce Website',
      year: '2024',
      isLive: false,
      category: 'MERN Stack',
      shortDesc:
        'Fully functional e-commerce frontend with product browsing, detail pages, global state cart/session management, and client-side routing.',
      tech: ['React.js', 'Tailwind CSS', 'Redux', 'Context API'],
      highlights: [
        'Built a fully functional e-commerce frontend with product browsing, product detail pages, cart, and checkout.',
        'Managed local component state with React Hooks and global state (cart, user session) using Redux and Context API.',
        'Implemented client-side routing and responsive layouts for mobile and desktop screens.'
      ],
      githubUrl: 'https://github.com/sandeepyadav111'
    },
    {
      id: 'proj-3',
      title: 'School Management System',
      year: '2023',
      isLive: false,
      category: 'MERN Stack',
      shortDesc:
        'Full-stack MERN application managing student records, attendance, classes, and staff with role-based JWT authentication (Admin, Teacher, Student).',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      highlights: [
        'Built a full-stack MERN application to manage student records, attendance, classes, and staff information for schools.',
        'Developed role-based authentication for admin, teacher, and student logins using JWT.',
        'Designed REST APIs for CRUD operations on students, attendance, and results, with MongoDB for data storage.'
      ],
      githubUrl: 'https://github.com/sandeepyadav111'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Technology - Information Technology',
      institution: 'Meerut Institute of Engineering and Technology, Meerut',
      period: '2022 - 2026'
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'Rais Ahmed Inter College, Itwa',
      period: '2020 - 2022'
    },
    {
      degree: 'High School (Class X)',
      institution: 'Rais Ahmed Inter College, Itwa',
      period: '2018 - 2020'
    }
  ],
  achievements: [
    {
      title: 'Campus Director Award - Project Expo 2nd Runner-Up',
      issuer: 'Meerut Institute of Engineering and Technology'
    },
    {
      title: 'Department Award - Project Expo 1st Runner-Up',
      issuer: 'Meerut Institute of Engineering and Technology'
    }
  ],
  strengths: [
    'Strong problem-solving skills with ability to debug and optimize code efficiently',
    'Effective team collaborator with good interpersonal and communication skills',
    'Quick learner with ability to adapt to new technologies and frameworks',
    'Excellent time management and ability to meet deadlines under pressure'
  ]
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const [profilePhoto, setProfilePhoto] = useState(() => {
    try {
      const saved = localStorage.getItem(PHOTO_STORAGE_KEY);
      if (saved && saved.trim().length > 10) {
        return saved;
      }
    } catch {
      // Ignore storage access errors
    }
    return DEFAULT_PORTRAIT_SRC;
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setProfilePhoto(reader.result);
        try {
          localStorage.setItem(PHOTO_STORAGE_KEY, reader.result);
        } catch {
          // Ignore storage quota errors
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoError = () => {
    if (profilePhoto !== FALLBACK_SUIT_AVATAR) {
      setProfilePhoto(FALLBACK_SUIT_AVATAR);
    }
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education & Awards', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const filterCategories = ['All Projects', 'Live Projects', 'MERN Stack', 'WordPress & PHP'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === 'All Projects') return true;
    if (activeFilter === 'Live Projects') return p.isLive;
    return p.category === activeFilter;
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus === 'error') {
      setFormStatus('idle');
      setFormError('');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setFormStatus('submitting');
    setFormError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'Portfolio Inquiry',
          message: formData.message.trim(),
          from_name: 'Sandeep Portfolio'
        })
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setFormError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submit error:', error);
      setFormStatus('error');
      setFormError('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 font-sans selection:bg-indigo-600 selection:text-white">
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#0f172a] to-indigo-600 shadow-sm group-hover:scale-105 transition-transform">
              <img
                src={profilePhoto}
                onError={handlePhotoError}
                alt="Sandeep Yadav"
                className="w-full h-full rounded-full object-cover object-top bg-slate-200"
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0f172a] block leading-none">
                {PORTFOLIO_DATA.name}
              </span>
              <span className="text-[11px] font-medium text-indigo-700 hidden sm:block mt-0.5">
                MERN &amp; WordPress Dev
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f172a] hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0f172a] hover:bg-indigo-700 text-white text-sm font-semibold"
              >
                Hire Me
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <section
        id="about"
        className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200/70"
      >
        <style>{`
          @keyframes float3dSlow {
            0%, 100% { transform: translate3d(0, 0px, 0) rotateX(12deg) rotateY(-12deg); }
            50% { transform: translate3d(0, -14px, 20px) rotateX(20deg) rotateY(8deg); }
          }
          @keyframes float3dReverse {
            0%, 100% { transform: translate3d(0, 0px, 0) rotate(-6deg); }
            50% { transform: translate3d(0, 12px, 15px) rotate(6deg); }
          }
          .animate-float-3d {
            animation: float3dSlow 6s ease-in-out infinite;
          }
          .animate-float-3d-rev {
            animation: float3dReverse 7s ease-in-out infinite;
          }
        `}</style>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-x-0 bottom-0 h-72 opacity-[0.35]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(79, 70, 229, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(79, 70, 229, 0.12) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
              transform: 'perspective(700px) rotateX(58deg) scale(1.4)',
              transformOrigin: 'bottom center'
            }}
          />
          <div className="absolute top-12 right-[8%] w-24 h-24 rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-indigo-100/40 to-white/10 backdrop-blur-sm shadow-lg animate-float-3d hidden lg:block" />
          <div className="absolute bottom-24 left-[6%] w-16 h-16 rounded-full border border-slate-300/70 bg-gradient-to-tr from-slate-200/50 to-white/20 shadow-md animate-float-3d-rev hidden lg:block" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl opacity-70" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-800 text-xs sm:text-sm font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                Available for Full-Stack &amp; WordPress Roles
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f172a]">
                  {PORTFOLIO_DATA.name}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-indigo-700">
                  {PORTFOLIO_DATA.role}
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {PORTFOLIO_DATA.tagline}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0f172a] hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base shadow-sm transition-all duration-200"
                >
                  View Projects
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#0f172a] border border-slate-300 font-semibold text-sm sm:text-base transition-all duration-200"
                >
                  Contact Me
                </a>
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-slate-600">
                <a
                  href={PORTFOLIO_DATA.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#0f172a] font-medium transition-colors"
                >
                  <GitHubIcon className="w-4 h-4 text-slate-700" />
                  GitHub
                </a>
                <a
                  href={PORTFOLIO_DATA.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#0f172a] font-medium transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-indigo-700" />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#0f172a] font-medium transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-indigo-700 shrink-0" />
                  {PORTFOLIO_DATA.contact.email}
                </a>
                <a
                  href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                  className="inline-flex items-center gap-2 hover:text-[#0f172a] font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-indigo-700" />
                  {PORTFOLIO_DATA.contact.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center py-4">
              <TiltCard3D maxTilt={12} scale={1.03} className="relative group cursor-pointer">
                <div
                  style={{ transform: 'translateZ(-20px)' }}
                  className="absolute -inset-4 rounded-[32px] bg-gradient-to-tr from-[#0f172a] via-indigo-700 to-indigo-400 opacity-20 group-hover:opacity-35 blur-md transition-opacity duration-300"
                />

                <div className="relative w-72 h-84 sm:w-80 sm:h-[400px] rounded-[28px] bg-gradient-to-b from-white via-slate-100 to-slate-200 p-2 shadow-2xl border border-white/80">
                  <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-700 relative">
                    <img
                      src={profilePhoto}
                      alt="Sandeep Yadav - MERN Stack & WordPress Developer"
                      onError={handlePhotoError}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/30 to-transparent pointer-events-none" />

                    <label
                      htmlFor="hero-photo-upload"
                      title="Upload or change your profile photo"
                      className="absolute top-3 right-3 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f172a]/85 hover:bg-indigo-600 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-lg opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 cursor-pointer"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Change Photo</span>
                      <input
                        id="hero-photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>

                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                      <div>
                        <p className="text-sm font-bold leading-tight">Sandeep Yadav</p>
                        <p className="text-[11px] text-indigo-200">Creative Squadz</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-md text-[11px] font-semibold border border-white/20">
                        B.Tech IT
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  style={{ transform: 'translateZ(38px)' }}
                  className="hidden sm:flex items-center gap-2 absolute -left-8 top-8 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200/90 animate-float-3d"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Full-Stack
                    </p>
                    <p className="text-xs font-extrabold text-[#0f172a]">MERN Stack</p>
                  </div>
                </div>

                <div
                  style={{ transform: 'translateZ(44px)' }}
                  className="hidden sm:flex items-center gap-2 absolute -right-8 top-1/2 -translate-y-1/2 px-3.5 py-2 rounded-2xl bg-[#0f172a] text-white shadow-xl border border-slate-700 animate-float-3d-rev"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                    <Box className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-indigo-300">
                      3+ Live Sites
                    </p>
                    <p className="text-xs font-bold">WordPress &amp; PHP</p>
                  </div>
                </div>

                <div
                  style={{ transform: 'translateZ(32px)' }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 py-2 rounded-full shadow-lg border border-slate-200 flex items-center gap-2.5"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0f172a]">
                    Open to Opportunities
                  </span>
                </div>
              </TiltCard3D>
            </div>
          </div>

          <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="p-3 rounded-xl bg-[#0f172a] text-white shrink-0">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-700 mb-1">
                  Professional Summary
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {PORTFOLIO_DATA.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-700">
              Core Competencies
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
              Technical Skills
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              A comprehensive stack spanning full-stack JavaScript (MERN), custom PHP &amp; WordPress engineering, and relational/NoSQL databases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.skills.map((skillGroup) => {
              const IconComponent = skillGroup.icon;
              return (
                <TiltCard3D
                  key={skillGroup.category}
                  maxTilt={6}
                  scale={1.015}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-shadow duration-200"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 border border-indigo-100">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0f172a]">
                        {skillGroup.category}
                      </h3>
                      <p className="text-sm text-slate-500 mt-0.5">
                        {skillGroup.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 text-slate-800 hover:text-indigo-800 border border-slate-200/70 hover:border-indigo-200 text-xs sm:text-sm font-medium transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </TiltCard3D>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-white border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-700">
              Career Journey
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
              Work Experience
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Delivering responsive, high-performance web applications and tailored CMS solutions for real-world clients.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-600/30 space-y-8">
            {PORTFOLIO_DATA.experience.map((exp) => (
              <div key={exp.id} className="relative">
                <span className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100" />
                <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-slate-200/80">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl font-bold text-[#0f172a]">{exp.role}</h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-base font-semibold text-indigo-700 mt-1 flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-700">
                Selected Work
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
                Featured Projects
              </h2>
              <p className="mt-3 text-slate-600 text-base max-w-2xl">
                Live production websites built with WordPress &amp; PHP alongside full-stack MERN applications.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {filterCategories.map((category) => {
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-[#0f172a] text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-indigo-300 hover:text-indigo-700'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project) => (
              <TiltCard3D
                key={project.id}
                maxTilt={7}
                scale={1.02}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-shadow duration-200 flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.isLive && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live Project
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-400">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0f172a] mb-2.5">{project.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-1"
                    >
                      Details
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0f172a] hover:bg-indigo-700 text-white text-xs font-semibold transition-colors"
                      >
                        Live Site
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-white border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-700">
                  Academic Background
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-[#0f172a]">Education</h2>
              </div>

              <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700 shrink-0 mt-0.5">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-slate-600 mt-0.5">{edu.institution}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 self-start sm:self-center shrink-0">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-700">
                    Recognition
                  </span>
                  <h2 className="mt-1.5 text-2xl font-extrabold text-[#0f172a]">Achievements</h2>
                </div>

                <div className="space-y-3.5">
                  {PORTFOLIO_DATA.achievements.map((ach, idx) => (
                    <TiltCard3D
                      key={idx}
                      maxTilt={6}
                      scale={1.02}
                      className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3.5"
                    >
                      <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-[#0f172a]">
                          {ach.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{ach.issuer}</p>
                      </div>
                    </TiltCard3D>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#0f172a]">Key Strengths</h2>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  {PORTFOLIO_DATA.strengths.map((str, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-700">
              Get In Touch
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
              Contact Me
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Have a project, freelance requirement, or full-time developer opportunity? Send a message directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-5 shadow-2xs">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase text-slate-400">Email</p>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                      className="text-sm sm:text-base font-semibold text-[#0f172a] hover:text-indigo-700 break-all"
                    >
                      {PORTFOLIO_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-400">Phone</p>
                    <a
                      href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                      className="text-sm sm:text-base font-semibold text-[#0f172a] hover:text-indigo-700"
                    >
                      {PORTFOLIO_DATA.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-400">Location</p>
                    <p className="text-sm sm:text-base font-semibold text-[#0f172a]">
                      {PORTFOLIO_DATA.contact.location}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                  <a
                    href={PORTFOLIO_DATA.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={PORTFOLIO_DATA.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-sm font-semibold transition-colors"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleFormSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Your Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-slate-800"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Subject
                  </label>
                  <div className="relative">
                    <Layers className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      placeholder="Project / Job Opportunity"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Write your message here..."
                    className="w-full p-4 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-slate-800"
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Thank you! Your message has been sent.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium">
                    {formError || 'Something went wrong while sending your message.'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0f172a] hover:bg-indigo-700 disabled:opacity-60 text-white text-sm font-semibold shadow-sm transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0f172a] text-slate-300 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="font-medium text-white">
            {PORTFOLIO_DATA.name} — {PORTFOLIO_DATA.role}
          </p>
          <p className="text-slate-400">
            © {new Date().getFullYear()} Sandeep Yadav. All rights reserved.
          </p>
        </div>
      </footer>

      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  {selectedProject.category} • {selectedProject.year}
                </span>
                <h3 className="text-2xl font-extrabold text-[#0f172a] mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedProject.shortDesc}
            </p>

            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Highlights
              </h4>
              {selectedProject.highlights.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {selectedProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold"
                >
                  Visit Live Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0f172a] hover:bg-indigo-700 text-white text-sm font-semibold"
                >
                  View on GitHub
                  <GitHubIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}