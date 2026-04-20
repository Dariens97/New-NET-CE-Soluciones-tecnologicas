import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, Network, Code2, TrendingUp, TreeDeciduous, 
  Mail, Phone, Instagram, Facebook, ChevronRight, Menu, 
  X, ArrowRight, Database, Cpu, Globe, Lock, Search, 
  Layout, Settings, Activity, Layers, Server, Zap
} from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 border-b border-slate-200' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2">
          {/* USANDO URL ABSOLUTA DESDE PUBLIC/IMAGES PARA VITAR ERRORES DE VERCEL */}
          <img src="/images/Logo-NETCE-png.png" alt="NET-CE Logo" className="h-12 md:h-16 w-auto transition-all duration-300" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">{link.name}</a>
          ))}
          <a href="#contacto" className="bg-brand-primary hover:bg-brand-primary-light text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-primary/20">Solicitar Diagnóstico</a>
        </div>
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 md:hidden shadow-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
              ))}
              <a href="#contacto" className="bg-brand-primary text-white text-center py-3 rounded-xl font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Solicitar Diagnóstico</a>
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
      <div className="absolute inset-0 bg-white -z-20" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/5 blur-[120px] rounded-full -z-10" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Shield size={14} /> Consultoría e Ingeniería TI
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">Tu aliado estratégico en <span className="text-gradient">infraestructura</span> y transformación digital.</h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">Fortalecemos la base tecnológica de tu empresa con soluciones de ingeniería, seguridad y eficiencia operativa diseñadas para el futuro.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#servicios" className="bg-brand-primary hover:bg-brand-primary-light text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-lg shadow-brand-primary/20">Ver Soluciones <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></a>
            <a href="#contacto" className="bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold transition-all">Solicitar Diagnóstico</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden lg:block">
          <div className="glass-panel p-8 rounded-3xl border-slate-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <div className="flex items-center gap-2 text-[10px] font-mono text-accent-600">
                <div className="w-2 h-2 bg-accent-600 rounded-full animate-pulse" /> SYSTEM_ONLINE
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary"><Cpu size={24} /></div>
                <div><div className="text-xs font-mono text-slate-400 uppercase">Infraestructura</div><div className="text-slate-900 font-semibold">Optimización de Redes</div></div>
              </div>
              <div className="h-px bg-slate-100" />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100"><div className="text-[10px] font-mono text-slate-400 uppercase mb-1">Seguridad</div><div className="text-xl font-bold text-slate-900">99.9%</div><div className="text-[10px] text-accent-600 mt-1">Hardening Activo</div></div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100"><div className="text-[10px] font-mono text-slate-400 uppercase mb-1">Eficiencia</div><div className="text-xl font-bold text-slate-900">+40%</div><div className="text-[10px] text-brand-primary mt-1">Operacional</div></div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Diagnóstico", desc: "Analizamos tu infraestructura actual y detectamos puntos de mejora.", icon: <Search size={24} /> },
    { title: "Diseño", desc: "Creamos una arquitectura a medida alineada con tus objetivos.", icon: <Layout size={24} /> },
    { title: "Implementación", desc: "Ejecutamos el proyecto con estándares de alta disponibilidad.", icon: <Settings size={24} /> },
    { title: "Soporte", desc: "Acompañamiento continuo para garantizar la operatividad.", icon: <Activity size={24} /> },
  ];
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16"><h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Nuestro Método</h2></div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 tech-card-hover text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center mx-auto mb-6">{step.icon}</div>
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
  const services = [
    { title: "Ingeniería de Software", desc: "Desarrollo a medida, plataformas e-commerce y automatización de flujos con enfoque en seguridad.", icon: <Code2 size={32} />, color: "from-blue-500/10 to-brand-primary/10", size: "lg" },
    { title: "Infraestructura de Redes", desc: "Diseño de arquitectura corporativa y configuración lógica avanzada para conectividad escalable.", icon: <Network size={32} />, color: "from-emerald-500/10 to-accent-500/10", size: "sm" },
    { title: "Estrategia TI", desc: "Alineamos la tecnología con tus objetivos de negocio mediante diagnósticos y roadmaps estratégicos.", icon: <TrendingUp size={32} />, color: "from-purple-500/10 to-brand-primary/10", size: "sm" },
    { title: "Ciberseguridad", desc: "Protección integral, análisis de riesgos y hardening para blindar tus activos digitales.", icon: <Lock size={32} />, color: "from-red-500/10 to-orange-500/10", size: "lg" }
  ];
  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Soluciones a tu Medida</h2></div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div key={idx} whileHover={{ y: -5 }} className={`glass-panel p-8 rounded-3xl border-slate-100 flex flex-col justify-between group relative overflow-hidden ${service.size === 'lg' ? 'md:col-span-2' : 'md:col-span-1'}`}>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const techs = [{ name: "Cisco", icon: <Network size={20} /> }, { name: "Azure", icon: <Globe size={20} /> }, { name: "AWS", icon: <Database size={20} /> }, { name: "Fortinet", icon: <Shield size={20} /> }, { name: "Linux", icon: <Cpu size={20} /> }, { name: "Docker", icon: <Layers size={20} /> }];
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md"><h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Stack Tecnológico</h2></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-auto">
            {techs.map((tech, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl tech-card-hover"><div className="text-brand-primary">{tech.icon}</div><span className="font-bold text-slate-700">{tech.name}</span></div>
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
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="rounded-3xl overflow-hidden border border-accent-500/20 shadow-2xl shadow-accent-500/5">
            {/* USANDO URL ABSOLUTA */}
            <img src="/images/arbol202.png" alt="Bosque Nativo" className="w-full h-auto object-cover" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Tecnología con Propósito</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">Reducimos consumo energético y plantamos un árbol nativo por contrato.</p>
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">Quiénes Somos</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">Somos Net-CE, una empresa chilena especializada en consultoría.</p>
          </motion.div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
               {/* USANDO URL ABSOLUTA */}
              <img src="/images/photo-1521791136064-7986c2920216.jpg" alt="Nosotros" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-panel rounded-[40px] border-slate-200 overflow-hidden grid md:grid-cols-5 shadow-2xl">
          <div className="md:col-span-2 bg-brand-primary p-12 text-white flex flex-col justify-between">
            <h2 className="text-3xl font-bold mb-6">Hablemos de tu proyecto</h2>
          </div>
          <div className="md:col-span-3 p-12 bg-white">
            <form action="https://formspree.io/f/myzllvrb" method="POST" className="space-y-6">
              <button type="submit" className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl">Enviar Mensaje</button>
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
           {/* USANDO URL ABSOLUTA */}
          <img src="/images/Logo-NETCE-png.png" alt="NET-CE" className="h-10 md:h-12 w-auto opacity-80" />
          <p className="text-slate-400 text-xs">© 2025 NET-CE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      <Navbar /><Hero /><Process /><Services /><TechStack /><TreeSection /><About /><Contact /><Footer />
    </div>
  );
}
