'use client';

import { useState, useEffect } from 'react';
import { Rocket, Code, Satellite, Radio, Github, Linkedin, Mail, ExternalLink, ChevronDown, GraduationCap, Briefcase, Star, Monitor, Globe, LayoutGrid, OrbitIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Orbit } from 'next/font/google';

const generateInteractiveStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    x: (i * 123.456) % 100,
    y: (i * 789.012) % 100,
    size: 1 + (i % 3),
    delay: (i % 10) * 0.5,
    speed: 3 + (i % 5)
  }));
};

const interactiveStars = generateInteractiveStars(150);

export default function SpacePortfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const isLoaded = true;  // Removed unused setIsLoaded

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about-me', 'education', 'services', 'projects', 'skills', 'contact'];
      let current = 'hero';
      const scrollY = window.scrollY + window.innerHeight / 2;
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
       title: "Mission Control Dashboard",
  description: "A real-time satellite telemetry monitoring interface simulating live orbital, power, and communication data with mission operations–style visualizations.",
  tech: ["React", "TypeScript", "Recharts", "Tailwind CSS", "Simulated Telemetry"],
      link: "https://satellite-dashboard-eight.vercel.app/"
    },
    {
   title: "Solar Pulse",
  description: "A real-time space weather monitoring dashboard visualizing solar flares, geomagnetic activity, CMEs, and their impacts on Earth systems using live NOAA and NASA data.",
  tech: ["React", "TypeScript", "Recharts", "React Leaflet", "NASA/NOAA APIs", "Tailwind CSS"],
      link: "https://solar-pulse-two.vercel.app/"
    },
    {
    title: "Live ISS Tracker",
  description: "A real-time interactive dashboard visualizing the International Space Station's position, velocity, and orbital path using live telemetry data.",
  tech: ["React", "TypeScript", "React Leaflet", "REST API", "Tailwind CSS"],
      link: "https://iss-tracker-nihal.vercel.app/"
    }
  ];

const skills = [
  {
    name: "Frontend Frameworks",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "Space Data & APIs",
    tools: ["NASA APIs", "NOAA SWPC", "N2YO"]
  },
  {
    name: "Visualization & Maps",
    tools: ["Recharts", "Leaflet", "Three.js"]
  },
  {
    name: "Backend Frameworks",
    tools: ["Node.js","MongoDB","Firebase"]
  },
  {
    name: "DevOps & Deployment",
    tools: ["Vercel", "Git", "GitHub"]
  },
  {
    name: "Design & UX",
    tools: ["Figma", "Responsive Design" ]
  }
];

  const experience = [
    {
      role: "Frontend and cross-platform developer ",
      company: "ITI - Information Technology Institute",
      period: "Jul - Dec 2025",
      description: "intern at ITI, where I developed various web and mobile applications."
    },
    {
      role: "Frontend Developer",
      company: "Frontend development Bootcamp",
      period: "Dec 2024 - Feb 2025",
      description: "I explored frontend development concepts, and focused on learning Reactjs and developed various projects."
    }
  ];

  const education = [
    {
      degree: "BSc in Navigation Sciences and Space Technology",
      institution: "NSST - faculty of navigation sciences and space technology , Beni suef university",
      period: "2019 - 2024",
      description: "Specialization in Aerospace Software Engineering and Human-Computer Interaction."
    }
    
  ];

  const courses = [
    {
      title: "Frontend and cross-platform development",
      platform: "ITI - Information Technology Institute",
      year: "2025"
    },

    {
      title: "User Excerience Design nano-degree",
      platform: "Udacity",
      year: "2022"
    }
  ];

 const services = [
  {
    title: "Clear Mission Data Interfaces",
    description: "I transform complex space telemetry into simple, organized, and intuitive dashboards.",
    icon: <Monitor className="w-8 h-8 text-purple-400" />
  },
  {
    title: "User-Friendly Space Visualizations",
    description: "Orbits, solar activity, and satellite status—presented clearly with clean, accessible design.",
    icon:<OrbitIcon className="w-8 h-8 text-pink-400" />
  },
  {
    title: "Focused & Calm Mission Control UIs",
    description: "Critical space data displayed without clutter—so operators can act quickly and confidently.",
    icon: <LayoutGrid className="w-8 h-8 text-cyan-400" />
  }
];

  const navItems = ['About Me', 'Education', 'Services', 'Projects', 'Skills', 'Contact'];

  return (
    <div className="min-h-screen text-white relative" style={{ 
      background: 'linear-gradient(to bottom, #0a0118 0%, #1a0b2e 50%, #0f0520 100%)'
    }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <style jsx>{`
          @keyframes sparkle {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(180deg); }
          }

          @keyframes twinkle-move {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }

          .star {
            position: absolute;
            background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%);
            border-radius: 50%;
            transition: all 0.15s ease-out;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            animation: sparkle 4s ease-in-out infinite;
          }

          .star::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, transparent 70%);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(2);
            animation: pulse 2s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(2); }
            50% { opacity: 0.4; transform: translate(-50%, -50%) scale(3); }
          }

          .shooting-star {
            position: absolute;
            width: 3px;
            height: 3px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
            animation: shoot 4s linear infinite;
          }

          .shooting-star::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 80px;
            height: 2px;
            background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(147, 51, 234, 0.4), transparent);
            transform-origin: right;
          }

          @keyframes shoot {
            0% { 
              transform: translateX(0) translateY(0) rotate(-45deg); 
              opacity: 1; 
            }
            70% { opacity: 1; }
            100% { 
              transform: translateX(-400px) translateY(400px) rotate(-45deg); 
              opacity: 0; 
            }
          }

          .nebula {
            position: absolute;
            border-radius: 10%;
            filter: blur(100px);
            opacity: 0.2;
            animation: float 10s ease-in-out infinite;
          }

          @keyframes drift {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(20px, -20px) scale(1.05); }
            50% { transform: translate(-15px, 15px) scale(0.95); }
            75% { transform: translate(25px, 10px) scale(1.02); }
          }
        `}</style>
        
        {interactiveStars.map((star, i) => {
          const parallaxStrength = 0.05 * star.size;
          const offsetX = (mousePosition.x - 50) * parallaxStrength;
          const offsetY = (mousePosition.y - 50) * parallaxStrength;
          
          return (
            <div
              key={i}
              className="star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                transform: `translate(${offsetX}px, ${offsetY}px)`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.speed}s`
              }}
            />
          );
        })}

        {[0, 1, 2, ].map((i) => (
          <div
            key={`shoot-${i}`}
            className="shooting-star"
            style={{
              top: `${10 + i * 20}%`,
              left: `${70 + i * 5}%`,
              animationDelay: `${i * 2.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}

        <div className="nebula" style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4), transparent)',
          top: '5%',
          left: '15%',
          animation: 'drift 15s ease-in-out infinite'
        }} />
        <div className="nebula" style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.35), transparent)',
          bottom: '15%',
          right: '10%',
          animation: 'drift 18s ease-in-out infinite 3s'
        }} />
        <div className="nebula" style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25), transparent)',
          top: '45%',
          right: '25%',
          animation: 'drift 20s ease-in-out infinite 6s'
        }} />

        <div 
          className="absolute rounded-full blur-3xl"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.15), transparent)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.2s ease-out',
            pointerEvents: 'none'
          }}
        />
        
        <div 
          className="absolute rounded-full blur-2xl"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.25), transparent)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out',
            pointerEvents: 'none'
          }}
        />

        <div 
          className="absolute rounded-full"
          style={{
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.5s ease-out',
            pointerEvents: 'none',
            filter: 'blur(30px)'
          }}
        />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-700 ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ 
          background: 'rgba(10, 1, 24, 0.85)',
          borderColor: 'rgba(147, 51, 234, 0.3)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Satellite className="w-6 h-6 text-purple-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
CosmoCoder Nihal Sabri            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const section = item.toLowerCase().replace(/ & /g, '-').replace(' ', '-');
              return (
                <a
                  key={item}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(section);
                    const target = document.getElementById(section);
                    target?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-gray-300 hover:text-purple-400 transition-colors relative group ${activeSection === section ? 'text-purple-400' : ''}`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Hero Section - WITH IMAGE SPACE */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className={`max-w-6xl w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="flex justify-center md:justify-end order-1 md:order-1">
              <div className="relative">
                {/* Outer glow effect */}
                <div 
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4), transparent 70%)',
                    transform: 'scale(1.15)'
                  }}
                ></div>
                
                {/* Image container */}
                <div 
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 shadow-2xl"
                  style={{ 
                    borderColor: 'rgba(147, 51, 234, 0.8)',
                    boxShadow: '0 0 60px rgba(147, 51, 234, 0.5), inset 0 0 30px rgba(147, 51, 234, 0.2)'
                  }}
                >
                  <Image
                    src="/image.png" 
                    alt="Nihal Sabri"
                    width={484}  
                    height={484}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="text-center order-2 md:order-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center">
Nihal Sabri              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
                Frontend Developer
              </p>
              <p className="text-base md:text-lg bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-8 tracking-wider font-semibold">
                 BUILDING INTERFACES FOR SPACE MISSIONS 
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                {[
                  { icon: Github, href: 'https://github.com/nihalsabri' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/nihal-sabri' },
                  { icon: Mail, href: 'mailto: nihalsabri60@gmail.com' }
                ].map(({ icon: Icon, href }, idx) => (
                  <a 
                    key={idx}
                    href={href} 
                    target="_blank"
                    className="p-3 rounded-lg transition-all group hover:scale-110"
                    style={{ 
                      border: '1px solid rgba(147, 51, 234, 0.5)',
                      background: 'rgba(147, 51, 234, 0.1)'
                    }}
                  >
                    <Icon className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <ChevronDown className="w-8 h-8 text-purple-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="relative py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center">
            <Radio className="w-6 md:w-8 h-6 md:h-8 mr-3 text-pink-400" />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols gap-6">
            <div className="space-y-6">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
As a Frontend Developer holding a degree in Navigation Sciences and Space Technology, I bring a rare perspective to building digital interfaces. I understand the intricacies of space systems, satellite data, and navigation principles, and I'm driven to translate this complexity into clear, engaging, and accessible web experiences.               

              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I build responsive, performant web applications using React, Next.js, and modern CSS to visualize orbital mechanics, mission telemetry, or ground station data.
             </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
I'm seeking a frontend role within the space sector where I can leverage both my technical coding skills and my deep passion for space to solve real-world challenges.             </p>
              <div className="pt-6">
                <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-4">Experience </h3>
                <div className="space-y-6">
                  {experience.map((exp, idx) => (
                    <div 
                      key={idx} 
                      className="pl-6 hover:border-purple-400 transition-colors group"
                      style={{ borderLeft: '2px solid rgba(147, 51, 234, 0.3)' }}
                    >
                      <div className="text-sm text-purple-400 mb-1">{exp.period}</div>
                      <div className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{exp.role}</div>
                      <div className="text-gray-400 mb-2">{exp.company}</div>
                      <div className="text-gray-300 text-sm md:text-base">{exp.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center">
            <GraduationCap className="w-6 md:w-8 h-6 md:h-8 mr-3 text-pink-400" />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center">
              Education & Courses
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-pink-400 mb-6">Formal Education</h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="pl-6" style={{ borderLeft: '2px solid rgba(236, 72, 153, 0.3)' }}>
                    <div className="text-sm text-pink-400 mb-1">{edu.period}</div>
                    <div className="text-lg font-bold text-white">{edu.degree}</div>
                    <div className="text-gray-400 mb-2">{edu.institution}</div>
                    <div className="text-gray-300 text-sm">{edu.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-pink-400 mb-6">Professional Courses</h3>
              <div className="space-y-4">
                {courses.map((course, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 rounded-lg hover:scale-105 transition-transform" style={{ background: 'rgba(147, 51, 234, 0.1)', border: '1px solid rgba(147, 51, 234, 0.3)' }}>
                    <div>
                      <div className="font-bold text-white">{course.title}</div>
                      <div className="text-gray-400 text-sm">{course.platform}</div>
                    </div>
                    <div className="text-purple-400 text-sm">{course.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center">
            <Briefcase className="w-6 md:w-8 h-6 md:h-8 mr-3 text-pink-400" />
      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center">
              Services
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group relative rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.05))',
                  border: '1px solid rgba(147, 51, 234, 0.3)',
                  boxShadow: '0 4px 20px rgba(147, 51, 234, 0.2)'
                }}
              >
                <div className="flex items-center justify-center mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors text-center">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center">
            <Rocket className="w-6 md:w-8 h-6 md:h-8 mr-3 text-pink-400" />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center">
              Mission Archives
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(236, 72, 153, 0.1))',
                  border: '1px solid rgba(147, 51, 234, 0.3)',
                  boxShadow: '0 4px 20px rgba(236, 72, 153, 0.2)'
                }}
              >
                <div className="relative">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs rounded-full text-purple-300"
                        style={{
                          background: 'rgba(147, 51, 234, 0.2)',
                          border: '1px solid rgba(147, 51, 234, 0.4)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-pink-400 hover:text-purple-400 transition-colors group/link text-sm md:text-base"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Grid Style, Same Visual Theme */}
<section id="skills" className="relative py-20 md:py-32 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center">
      <Star className="w-6 md:w-8 h-6 md:h-8 mr-3 text-pink-400" />
      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Skills
      </span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, idx) => (
        <div key={idx} className="group bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-5 hover:border-cyan-500/50 transition-all">
          <h3 className="text-gray-300 font-semibold mb-3 text-left">{skill.name}</h3>
                   

          <div className="flex flex-wrap gap-2">
            {skill.tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium text-white"
                style={{
                  // background: 'linear-gradient(to right, #9333ea, #ec4899, #06b6d4)',
    border: '2px solid rgba(147, 51, 234, 0.5)',
                  boxShadow: '0 0 10px rgba(147, 51, 234, 0.4)'
                }}
              >
                {tool}
              </span>
            ))}
          </div>

        
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center ">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-center">
            
            Contact Me
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-12">
            Ready to collaborate on your next space mission interface? Lets build something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:nihalsabri60@gmail.com"
              className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all hover:scale-105 text-sm md:text-base text-white"
              style={{
                background: 'linear-gradient(to right, #9333ea, #ec4899)',
                boxShadow: '0 4px 20px rgba(147, 51, 234, 0.4)'
              }}
            >
              Email
            </a>

            <Link 
  href="nihaldev.pdf"
  download="nihaldev.pdf"
  className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all hover:scale-105 text-sm md:text-base text-white"
  style={{
    border: '2px solid #9333ea',
    background: 'rgba(147, 51, 234, 0.1)'
  }}
>
  Download Resume
</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t" style={{ borderColor: 'rgba(147, 51, 234, 0.3)' }}>
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="text-sm md:text-base">© 2024 Nihal Sabri | CosmoCoder</p>
         
        </div>
      </footer>
    </div>
  );
}