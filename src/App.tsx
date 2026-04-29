/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { 
  Shield, 
  Network, 
  Code2, 
  TrendingUp, 
  TreeDeciduous, 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  Database,
  Cpu,
  Globe, 
  Lock,
  Search,
  Layout,
  Settings,
  Activity,
  Layers,
  CheckCircle2,
  Server,
  Zap,
  Download
} from 'lucide-react';

// --- Assets ---
import logoImg from './assets/images/Logo-NETCE-png.png';
import arbolImg from './assets/images/arbol202.png';
import nosotrosImg from './assets/images/photo-1521791136064-7986c2920216.jpg';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-3 border-b border-slate-200' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2">
          <img 
            src={logoImg} 
            alt="NET-CE Logo" 
            className="h-16 md:h-24 w-auto transition-all duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="bg-brand-primary hover:bg-brand-primary-light text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-primary/20"
          >
            Solicitar Diagnóstico
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-slate-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contacto" 
                className="bg-brand-primary text-white text-center py-3 rounded-xl font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solicitar Diagnóstico
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white -z-20" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/5 blur-[120px] rounded-full -z-10" />
      
      {/* --- INICIO ELEMENTO HOLOGRÁFICO (HERO) --- */}
      {/* Para ocultarlo, comenta o elimina este bloque */}
      <motion.div
        className="absolute right-[5%] top-1/4 w-[500px] h-[500px] text-brand-primary/20 pointer-events-none -z-10 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(17,54,179,0.3)]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.2" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.2" transform="rotate(-30 50 50)" />
          <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.2" transform="rotate(90 50 50)" />
          <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.2" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.2" transform="rotate(-60 50 50)" />
        </svg>
      </motion.div>
      {/* --- FIN ELEMENTO HOLOGRÁFICO --- */}

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Shield size={14} />
            Consultoría e Ingeniería TI
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
            Tu aliado estratégico en <span className="text-gradient">infraestructura</span> y transformación digital.
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            Fortalecemos la base tecnológica de tu empresa con soluciones de ingeniería, seguridad y eficiencia operativa diseñadas para el futuro.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#servicios" className="bg-brand-primary hover:bg-brand-primary-light text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-lg shadow-brand-primary/20">
              Ver Soluciones
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contacto" className="bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold transition-all">
              Solicitar Diagnóstico
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="glass-panel p-8 rounded-3xl border-slate-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <div className="flex items-center gap-2 text-[10px] font-mono text-accent-600">
                <div className="w-2 h-2 bg-accent-600 rounded-full animate-pulse" />
                SYSTEM_ONLINE
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Cpu size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Infraestructura</div>
                  <div className="text-slate-900 font-semibold">Optimización de Redes</div>
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">Seguridad</div>
                  <div className="text-xl font-bold text-slate-900">99.9%</div>
                  <div className="text-[10px] text-accent-600 mt-1">Hardening Activo</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">Eficiencia</div>
                  <div className="text-xl font-bold text-slate-900">+40%</div>
                  <div className="text-[10px] text-brand-primary mt-1">Operacional</div>
                </div>
              </div>

              <div className="bg-brand-primary/5 p-4 rounded-2xl border border-brand-primary/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-mono text-slate-500">TRANSFORMACIÓN_DIGITAL</span>
                  <span className="text-[10px] font-mono text-brand-primary">75%</span>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-brand-primary"
                  />
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Clients = () => {
  return null;
};

const Process = () => {
  const steps = [
    {
      title: "Diagnóstico",
      desc: "Analizamos tu infraestructura actual y detectamos puntos de mejora.",
      icon: <Search size={24} />,
    },
    {
      title: "Diseño",
      desc: "Creamos una arquitectura a medida alineada con tus objetivos.",
      icon: <Layout size={24} />,
    },
    {
      title: "Implementación",
      desc: "Ejecutamos el proyecto con estándares de alta disponibilidad.",
      icon: <Settings size={24} />,
    },
    {
      title: "Soporte",
      desc: "Acompañamiento continuo para garantizar la operatividad.",
      icon: <Activity size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />
      
      {/* --- INICIO ELEMENTO HOLOGRÁFICO (MÉTODO) --- */}
      {/* Para ocultarlo, comenta o elimina este bloque */}
      <motion.div
        className="absolute -right-20 top-20 w-96 h-96 text-brand-primary/10 pointer-events-none -z-10 hidden md:block"
        animate={{ 
          y: [0, -40, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(17,54,179,0.2)]">
          <polygon points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.2" />
          <line x1="11" y1="27.5" x2="89" y2="72.5" stroke="currentColor" strokeWidth="0.2" />
          <line x1="11" y1="72.5" x2="89" y2="27.5" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </motion.div>
      {/* --- FIN ELEMENTO HOLOGRÁFICO --- */}

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Nuestro Método</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Un proceso estructurado para garantizar resultados predecibles y escalables.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-slate-200 -z-10" />
              )}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 tech-card-hover text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (url: string, filename: string) => {
    try {
      setIsDownloading(true);
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      window.open(url, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  const services = [
    {
      title: "Ingeniería de Software",
      desc: "Desarrollo a medida, plataformas e-commerce y automatización de flujos con enfoque en seguridad.",
      longDesc: "Arquitectura y desarrollo de aplicaciones web a medida. Implementamos software corporativo robusto, diseñamos APIs escalables y automatizamos tus flujos de trabajo operativos. Incorporamos prácticas de desarrollo seguro (DevSecOps) desde la primera línea de código.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      icon: <Code2 size={32} />,
      color: "from-blue-500/10 to-brand-primary/10",
      size: "lg",
      pdfUrl: "/brochures/software.pdf"
    },
    {
      title: "Infraestructura de Redes",
      desc: "Diseño de arquitectura corporativa y configuración lógica avanzada para conectividad escalable.",
      longDesc: "Estructuramos el corazón digital de tu empresa. Realizamos desde el diseño de cableado estructurado hasta la configuración de redes LAN/WAN, switches, routers de borde y VPNs, garantizando una comunicación interna rapidísima y sin latencia.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      icon: <Network size={32} />,
      color: "from-emerald-500/10 to-accent-500/10",
      size: "sm",
      pdfUrl: "/brochures/redes.pdf"
    },
    {
      title: "Estrategia TI",
      desc: "Alineamos la tecnología con tus objetivos de negocio mediante diagnósticos y roadmaps estratégicos.",
      longDesc: "Nos convertimos en tu departamento tecnológico externo. Evaluamos la madurez digital actual de tu empresa para proponer un plan de acción a largo plazo (Roadmap). Te ayudamos a elegir el hardware correcto, migrar a la nube y reducir costos operacionales.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      icon: <TrendingUp size={32} />,
      color: "from-purple-500/10 to-brand-primary/10",
      size: "sm",
      pdfUrl: "/brochures/consultoria.pdf"
    },
    {
      title: "Ciberseguridad",
      desc: "Protección integral, análisis de riesgos y hardening para blindar tus activos digitales.",
      longDesc: "Blindaje de extremo a extremo. Realizamos auditorías de seguridad, test de vulnerabilidades, Hardening de servidores y capacitación a empleados. Nos aseguramos de que tus datos y los de tus clientes permanezcan inaccesibles para atacantes.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      icon: <Lock size={32} />,
      color: "from-red-500/10 to-orange-500/10",
      size: "lg",
      pdfUrl: "/brochures/ciberseguridad.pdf"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      {/* --- INICIO ELEMENTO HOLOGRÁFICO (SERVICIOS) --- */}
      {/* Para ocultarlo, comenta o elimina este bloque */}
      <motion.div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] text-accent-500/10 pointer-events-none -z-10 hidden md:block"
        animate={{ 
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full blur-[1px]">
          <defs>
            <pattern id="hexGrid" width="20" height="34.64" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M 20 0 L 10 17.32 L 0 0 L 0 34.64 L 10 17.32 L 20 34.64" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <circle cx="100" cy="100" r="100" fill="url(#hexGrid)" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>
      {/* --- FIN ELEMENTO HOLOGRÁFICO --- */}

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Soluciones a tu Medida</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Combinamos experiencia técnica con visión estratégica para ofrecer servicios que impulsan el crecimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className={`glass-panel p-8 rounded-3xl border-slate-100 flex flex-col justify-between group relative overflow-hidden ${
                service.size === 'lg' ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              <div 
                onClick={() => setSelectedService(service)}
                className="relative z-10 flex items-center gap-2 text-brand-primary font-bold text-sm cursor-pointer hover:underline"
              >
                Saber más <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de Detalle de Servicio */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 bg-black/10 hover:bg-black/20 md:bg-white/20 md:hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-slate-800 transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-2/5 h-48 md:h-auto relative shrink-0">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden" />
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center overflow-y-auto">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
                  {selectedService.icon}
                </div>
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">{selectedService.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {selectedService.longDesc}
                </p>
                
                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#contacto" 
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary hover:bg-brand-primary-light text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-primary/20 w-full sm:w-auto text-center gap-2 group"
                  >
                    Cotizar servicio 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  {selectedService.pdfUrl && (
                    <button 
                      onClick={() => handleDownload(selectedService.pdfUrl, `${selectedService.title}.pdf`)}
                      disabled={isDownloading}
                      className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 hover:bg-slate-200 disabled:opacity-70 disabled:cursor-not-allowed text-slate-700 font-bold rounded-xl transition-all w-full sm:w-auto text-center gap-2 group"
                    >
                      {isDownloading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Descargando...
                        </>
                      ) : (
                        <>
                          <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                          Descargar PDF
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const TechStack = () => {
  const techs = [
    { name: "Cisco", icon: <Network size={20} /> },
    { name: "Azure", icon: <Globe size={20} /> },
    { name: "AWS", icon: <Database size={20} /> },
    { name: "Fortinet", icon: <Shield size={20} /> },
    { name: "Linux", icon: <Cpu size={20} /> },
    { name: "Docker", icon: <Layers size={20} /> },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-[0.05] -z-10" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Stack Tecnológico</h2>
            <p className="text-slate-600">
              Trabajamos con las herramientas líderes del mercado para asegurar que tu infraestructura sea robusta, segura y de vanguardia.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-auto">
            {techs.map((tech, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl tech-card-hover">
                <div className="text-brand-primary">{tech.icon}</div>
                <span className="font-bold text-slate-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TreeSection = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] -z-10" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-[85%] max-w-[400px] mx-auto lg:ml-auto lg:mr-10"
        >
          <div className="rounded-3xl overflow-hidden border border-accent-500/20 shadow-2xl shadow-accent-500/5 bg-white">
            <img 
              src={arbolImg} 
              alt="Bosque Nativo" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-accent-500 p-6 rounded-2xl text-white shadow-xl">
            <TreeDeciduous size={40} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-accent-600 font-bold uppercase tracking-widest text-xs mb-4">
            <div className="w-8 h-px bg-accent-500" />
            Sostenibilidad & Eficiencia
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Tecnología con Propósito</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            En Net-CE creemos que el progreso tecnológico debe ir de la mano con la preservación de nuestro entorno. Optimizamos tu infraestructura para reducir el consumo energético y, por cada contrato integral, plantamos un árbol nativo.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-accent-500"><Zap size={20} /></div>
              <div>
                <div className="font-bold text-slate-900">Eficiencia Energética</div>
                <div className="text-xs text-slate-500">Reducción de huella de carbono</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 text-accent-500"><Server size={20} /></div>
              <div>
                <div className="font-bold text-slate-900">Infraestructura Verde</div>
                <div className="text-xs text-slate-500">Hardware optimizado</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">1 Proyecto</span>
              <span className="text-sm text-slate-400">Aprobado</span>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-accent-500">1 Árbol</span>
              <span className="text-sm text-slate-400">Donado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">Quiénes Somos</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Somos Net-CE, una empresa chilena especializada en consultoría y servicios tecnológicos. Brindamos soluciones a medida para PYMEs y corporaciones, garantizando calidad, rapidez y soporte continuo.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Compromiso con la calidad y continuidad operativa.",
                "Equipo técnico con experiencia comprobada.",
                "Soluciones personalizadas según tus necesidades."
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <ChevronRight size={14} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-slate-900 font-bold mb-2">Misión</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Satisfacer las necesidades actuales y dejar las bases para un crecimiento tecnológico sostenible.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-slate-900 font-bold mb-2">Visión</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Consolidarnos como referentes en asesorías e instalaciones de sistemas de seguridad y redes.</p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img 
                src={nosotrosImg} 
                alt="Nosotros" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/5 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        console.warn('Faltan configuraciones de EmailJS. No se enviará el correo.');
        setFormStatus('error');
        return;
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        {
          publicKey: publicKey,
        }
      );
      
      setFormStatus('success');
      form.reset();
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-panel rounded-[40px] border-slate-200 overflow-hidden grid md:grid-cols-5 shadow-2xl">
          <div className="md:col-span-2 bg-brand-primary p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hablemos de tu proyecto</h2>
              <p className="text-white/80 mb-10">¿Tienes un desafío técnico o necesitas optimizar tu infraestructura? Estamos listos para ayudarte.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <a href="mailto:net-ce@net-ce.cl" className="hover:underline">net-ce@net-ce.cl</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <a href="tel:+56957928042" className="hover:underline">+56 9 5792 8042</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Globe size={20} />
                  </div>
                  <span>Santiago, Chile</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://www.instagram.com/_net_ce_" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578633135960" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 p-12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nombre</label>
                  <input 
                    type="text" 
                    name="nombre"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Empresa (Opcional)</label>
                  <input 
                    type="text" 
                    name="razonSocial"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="Tu empresa"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Teléfono</label>
                  <input 
                    type="tel" 
                    name="telefono"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="+56 9 0000 0000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mensaje</label>
                <textarea 
                  name="mensaje"
                  required
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              
              {formStatus === 'success' && (
                <div className="bg-green-50 text-green-600 px-4 py-3 rounded-xl border border-green-200 text-sm font-medium">
                  ¡Gracias! Tu mensaje ha sido enviado exitosamente.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl border border-red-200 text-sm font-medium">
                  Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.
                </div>
              )}

              <button 
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-brand-primary hover:bg-brand-primary-light disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-primary/20 flex justify-center items-center gap-2"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img 
            src={logoImg} 
            alt="NET-CE" 
            className="h-16 md:h-20 w-auto opacity-80"
          />
          <p className="text-slate-400 text-xs">© 2025 NET-CE. Todos los derechos reservados.</p>
        </div>
        <div className="flex gap-8">
          <a href="#inicio" className="text-xs text-slate-500 hover:text-brand-primary transition-colors">Inicio</a>
          <a href="#servicios" className="text-xs text-slate-500 hover:text-brand-primary transition-colors">Servicios</a>
          <a href="#nosotros" className="text-xs text-slate-500 hover:text-brand-primary transition-colors">Nosotros</a>
          <a href="#contacto" className="text-xs text-slate-500 hover:text-brand-primary transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-brand-primary/10 selection:text-brand-primary">
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <TechStack />
      <TreeSection />
      <About />
      <Contact />
      <Footer />

      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/56957928042?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20solicitar%20un%20diagn%C3%B3stico." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-accent-500 hover:bg-accent-600 text-white p-4 rounded-full shadow-2xl shadow-accent-500/20 transition-all hover:scale-110 active:scale-95"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
