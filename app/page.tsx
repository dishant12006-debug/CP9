'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from 'motion/react';
import { Globe, ArrowRight, Clock, PenTool, ClipboardCheck, TrendingUp, ExternalLink, Compass, Laptop, Mail, Sparkles, Check, ArrowUpRight, Bike, Car, Rocket, Phone, ChevronDown } from 'lucide-react';
import heroImage from '@/src/assets/images/regenerated_image_1784636635176.avif';
import portfolioImage1 from '@/src/assets/images/regenerated_image_1784638877525.avif';
import portfolioImage2 from '@/src/assets/images/regenerated_image_1784638878272.avif';
import portfolioImage3 from '@/src/assets/images/regenerated_image_1784638878970.avif';
import portfolioImage4 from '@/src/assets/images/regenerated_image_1784638880303.avif';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeServiceSubCard, setActiveServiceSubCard] = useState(0);
  const [activeServiceSubCard2, setActiveServiceSubCard2] = useState(0);
  const [billingInterval, setBillingInterval] = useState<'yearly' | 'monthly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hireName, setHireName] = useState('');
  const [hireEmail, setHireEmail] = useState('');
  const [hireService, setHireService] = useState('');
  const [hireBudget, setHireBudget] = useState('');
  const [hireMessage, setHireMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  // Scroll ref and animations for the fifth section ("The Hidden Cost of Manual Work")
  const s5Ref = useRef<HTMLElement>(null);
  const { scrollYProgress: s5ScrollProgress } = useScroll({
    target: s5Ref,
    offset: ["start start", "end end"]
  });

  const s5MaxScrollProgress = useMotionValue(0);

  useEffect(() => {
    return s5ScrollProgress.on("change", (v) => {
      if (v > s5MaxScrollProgress.get()) {
        s5MaxScrollProgress.set(v);
      }
    });
  }, [s5ScrollProgress, s5MaxScrollProgress]);

  // Circumference of radius 420 circle is 2 * Math.PI * 420 = 2638.9
  const s5StrokeDashoffset = useTransform(s5ScrollProgress, [0.08, 0.92], [2638.9, 0]);
  const s5Rotation = useTransform(s5ScrollProgress, [0.0, 1.0], [0, 360]);
  const s5RotationOpposite = useTransform(s5ScrollProgress, [0.0, 1.0], [360, 0]);
  const s5TextY = useTransform(s5ScrollProgress, [0.1, 0.85], [0, 0]); // stable center

  // Sequential badge transitions (opacity, scale, translate y) for 5 custom badges from reference
  // 1. Abandoned Carts
  const s5Badge1Opacity = useTransform(s5MaxScrollProgress, [0.08, 0.20], [0, 1]);
  const s5Badge1Scale = useTransform(s5MaxScrollProgress, [0.08, 0.20], [0.85, 1]);
  const s5Badge1Y = useTransform(s5MaxScrollProgress, [0.08, 0.20], [20, 0]);

  // 2. Low Conversion Rate
  const s5Badge2Opacity = useTransform(s5MaxScrollProgress, [0.22, 0.34], [0, 1]);
  const s5Badge2Scale = useTransform(s5MaxScrollProgress, [0.22, 0.34], [0.85, 1]);
  const s5Badge2Y = useTransform(s5MaxScrollProgress, [0.22, 0.34], [20, 0]);

  // 3. Wasted Ad Spend
  const s5Badge3Opacity = useTransform(s5MaxScrollProgress, [0.36, 0.48], [0, 1]);
  const s5Badge3Scale = useTransform(s5MaxScrollProgress, [0.36, 0.48], [0.85, 1]);
  const s5Badge3Y = useTransform(s5MaxScrollProgress, [0.36, 0.48], [20, 0]);

  // 4. One-Time Buyers
  const s5Badge4Opacity = useTransform(s5MaxScrollProgress, [0.50, 0.62], [0, 1]);
  const s5Badge4Scale = useTransform(s5MaxScrollProgress, [0.50, 0.62], [0.85, 1]);
  const s5Badge4Y = useTransform(s5MaxScrollProgress, [0.50, 0.62], [20, 0]);

  // 5. Leaking Revenue
  const s5Badge5Opacity = useTransform(s5MaxScrollProgress, [0.64, 0.76], [0, 1]);
  const s5Badge5Scale = useTransform(s5MaxScrollProgress, [0.64, 0.76], [0.85, 1]);
  const s5Badge5Y = useTransform(s5MaxScrollProgress, [0.64, 0.76], [20, 0]);

  const subServices = [
    {
      id: "01",
      title: "Conversion-First Design",
      desc: "Layouts built around buying psychology, not just aesthetics. Every page is designed to remove friction, build trust fast, and guide the visitor straight to checkout.",
      bgAccent: "from-violet-600/80 via-indigo-500/80 to-purple-800/80",
      accentColor: "#8b5cf6",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      title: "Fast, Mobile-First Build",
      desc: "Stores that load instantly and convert just as well on mobile as desktop. Optimized with lightweight code for ultra-fast response.",
      bgAccent: "from-emerald-600/80 via-teal-500/80 to-cyan-800/80",
      accentColor: "#10b981",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "03",
      title: "Checkout Optimization",
      desc: "Reducing every unnecessary click between 'add to cart' and 'order confirmed' to raise average order values and eliminate friction.",
      bgAccent: "from-amber-600/80 via-rose-500/80 to-orange-800/80",
      accentColor: "#f59e0b",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "04",
      title: "Ongoing Revisions",
      desc: "Weekly to daily updates depending on your plan, so the site keeps improving after launch and stays aligned with your marketing.",
      bgAccent: "from-rose-600/80 via-purple-500/80 to-pink-800/80",
      accentColor: "#f43f5e",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const subServices02 = [
    {
      id: "01",
      title: "Core Lifecycle Flows",
      desc: "Custom high-converting email sequences (Welcome series, Abandoned checkout, Post-purchase upsells) built directly in Klaviyo to capture sales 24/7 automatically.",
      bgAccent: "from-blue-600/80 via-cyan-500/80 to-indigo-800/80",
      accentColor: "#3b82f6",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      title: "High-Design Campaigns",
      desc: "Weekly and monthly newsletter campaigns styled to match your premium brand identity while keeping your audience engaged and buying consistently.",
      bgAccent: "from-pink-600/80 via-rose-500/80 to-purple-800/80",
      accentColor: "#ec4899",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "03",
      title: "Advanced Segmentation",
      desc: "Laser-focused database segments based on RFM metrics and custom product affinity rules to target the right message to the right buyer.",
      bgAccent: "from-teal-600/80 via-emerald-500/80 to-cyan-800/80",
      accentColor: "#14b8a6",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "04",
      title: "List Growth Mechanics",
      desc: "High-converting pop-up systems, educational quizzes, and gamified forms designed to convert cold traffic into loyal active subscribers.",
      bgAccent: "from-amber-600/80 via-yellow-500/80 to-orange-800/80",
      accentColor: "#f59e0b",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const navItems = ['Home', 'Projects', 'Service', 'About'];

  const handleHireSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: hireName, email: hireEmail, service: hireService, budget: hireBudget, message: hireMessage }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed.');
      setFormSubmitted(true);
    } catch (err: any) {
      setFormError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitting(true);
    setNewsletterError('');
    setNewsletterSuccess(false);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to subscribe.');
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    } catch (err: any) {
      setNewsletterError(err.message || 'Something went wrong.');
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* Background radial glow for premium depth (subtle, pure dark mode) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_80%)] pointer-events-none" />

      {/* HEADER & HERO CONTAINER */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col pt-4 pb-12 px-6 md:pt-6 md:pb-24 md:px-12 lg:pt-8 lg:pb-32 lg:px-16 gap-12 md:gap-20 overflow-hidden">
        {/* HEADER SECTION */}
        <header className="relative z-40 flex items-center justify-between w-full">
        {/* Navigation capsule */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center p-1 sm:p-1.5 border border-white/30 rounded-full bg-white/[0.16] sm:bg-white/[0.12] backdrop-blur-3xl shadow-[0_16px_48px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.35)]"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className="relative px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium tracking-wide transition-colors rounded-full focus:outline-none"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-white"
                    style={{ borderRadius: '9999px' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-200 ${isActive ? 'text-black' : 'text-white/60 hover:text-white'}`}>
                  {item}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Menu Toggle Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col gap-1.5 justify-center items-end group w-10 h-10 cursor-pointer focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="w-8 h-[2px] bg-white transition-all duration-300 group-hover:w-6" />
          <span className="w-5 h-[2px] bg-white transition-all duration-300 group-hover:w-8" />
        </motion.button>
      </header>

      {/* HERO / BODY SECTION */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center min-h-[55vh] pt-10 pb-16 relative z-10 w-full max-w-4xl mx-auto"
      >
        <div className="overflow-hidden flex flex-col items-center w-full">
          <h1 className="font-display text-[1.3rem] min-[375px]:text-[1.5rem] min-[420px]:text-[1.8rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.8rem] xl:text-[4.6rem] font-bold leading-[1.12] tracking-normal uppercase">
            <span className="block overflow-hidden py-1">
              <motion.span variants={textRevealVariants} className="block whitespace-nowrap">
                We Help Ecom Brands
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span variants={textRevealVariants} className="block">
                To Dominate
              </motion.span>
            </span>
          </h1>
        </div>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 max-w-2xl mt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 font-medium text-sm sm:text-base cursor-pointer shadow-[0_12px_32px_rgba(255,255,255,0.1)] group"
          >
            <span>See How It Works</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </motion.div>
      </div>

      {/* SECOND SECTION: Defining the Future of Brands */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto py-16 sm:py-24 lg:py-32 px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-t border-white/5 overflow-hidden"
      >
        {/* Left Side: Car Image Card */}
        <div className="lg:col-span-5 relative group w-full">
          {/* Ambient subtle glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-[24px] blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-300" />
          
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] aspect-[3/2] w-full shadow-[0_24px_50px_rgba(0,0,0,0.8)]">
            <Image
              src={heroImage}
              alt="Premium brand aesthetic visual"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Side: Headline and copy */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6 relative z-20">
          {/* Globe Icon Container */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/[0.05] text-white/80 backdrop-blur-md">
            <Globe className="w-4.5 h-4.5 animate-[spin_30s_linear_infinite]" />
          </div>

          {/* Heading */}
          <h2 className="font-sans text-[1.25rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[1.6rem] xl:text-[2rem] font-bold leading-[1.3] tracking-tight text-left text-white">
            Most e-commerce brands hire a web designer for the store and a separate freelancer for email — <span className="text-white/45">two disconnected pieces pretending to be one funnel.</span>
          </h2>

          {/* Subtext Paragraph */}
          <p className="text-xs sm:text-sm text-white/60 font-sans font-light max-w-xl leading-relaxed text-left">
            {"CP9 builds both as a single closed loop: the site captures attention and converts on the first visit, and the flows recover, retain, and re-sell everyone who didn't buy the first time."}
          </p>

          {/* Styled CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full border border-white/20 bg-black hover:border-white/40 hover:bg-white/[0.04] transition-all duration-300 group cursor-pointer"
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide">About cp9</span>
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.button>
        </div>

        {/* Elegant wireframe vector background details (bottom right) */}
        <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 -z-10 translate-x-1/4 lg:translate-x-12 translate-y-12 select-none">
          <svg width="350" height="350" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/25">
            {/* Rotated pill shape matching reference */}
            <rect x="180" y="50" width="75" height="230" rx="37.5" transform="rotate(45 180 50)" stroke="currentColor" strokeWidth="1.2" />
            {/* Rounded squares matching reference */}
            <rect x="290" y="40" width="45" height="45" rx="12" stroke="currentColor" strokeWidth="1.2" />
            <rect x="140" y="270" width="45" height="45" rx="12" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
      </motion.section>

      {/* THIRD SECTION: Our Approach */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto py-16 sm:py-24 lg:py-32 px-6 md:px-12 lg:px-16 flex flex-col gap-12 md:gap-16 border-t border-white/5 overflow-hidden"
      >
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 w-full">
          <h2 className="font-sans text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold tracking-tight leading-none">
            Our Approach
          </h2>
          <p className="text-sm sm:text-base text-white/40 font-light max-w-sm leading-relaxed text-left lg:text-right lg:mb-2">
            We provide tailor-made services adapt for any business mode to help growth faster
          </p>
        </div>

        {/* Approach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-4 lg:pb-24">
          {/* Card 1: Research */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between min-h-[380px] sm:min-h-[440px] p-8 sm:p-10 rounded-[24px] border border-white/10 bg-white/[0.01] backdrop-blur-md transition-all duration-300 group lg:translate-y-0 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.03]"
          >
            <div>
              {/* Icon Container */}
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 text-white/90 group-hover:text-white group-hover:bg-white/[0.08] transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M4 16c2-4 4-8 8-8s6 4 8 8" />
                  <circle cx="4" cy="16" r="2.5" fill="black" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="20" cy="16" r="2.5" fill="black" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="8" r="2.5" fill="black" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
                Step 1 — Research
              </h3>
              <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed mb-6">
                We study your store, your competitors, and your customer&apos;s buying behavior before touching a single design file. This means analyzing what&apos;s already converting in your niche, mapping where your current funnel leaks, and defining the strategic direction for both the site and the flows.
              </p>
              
              {/* Divider */}
              <div className="w-full h-[1px] bg-white/5 mb-4" />

              {/* Card Footer */}
              <div className="flex items-center justify-between text-[10px] sm:text-xs tracking-wider uppercase">
                <div className="flex items-center gap-1.5 text-white/40">
                  <Clock className="w-3.5 h-3.5" />
                  <span>30% complete</span>
                </div>
                <span className="text-white/80 font-medium">Foundation</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Build & Execute */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between min-h-[380px] sm:min-h-[440px] p-8 sm:p-10 rounded-[24px] border border-white/10 bg-white/[0.01] backdrop-blur-md transition-all duration-300 group lg:translate-y-12 hover:lg:translate-y-10 hover:-translate-y-2 lg:hover:-translate-y-0 hover:border-white/20 hover:bg-white/[0.03]"
          >
            <div>
              {/* Icon Container */}
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 text-white/90 group-hover:text-white group-hover:bg-white/[0.08] transition-colors duration-300">
                <PenTool className="w-5 h-5" />
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
                Step 2 — Build & Execute
              </h3>
              <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed mb-6">
                We design and build the website and the email flows together — not as separate projects, but as one connected system, so every page and every email speaks the same language and pushes toward the same goal: the sale.
              </p>
              
              {/* Divider */}
              <div className="w-full h-[1px] bg-white/5 mb-4" />

              {/* Card Footer */}
              <div className="flex items-center justify-between text-[10px] sm:text-xs tracking-wider uppercase">
                <div className="flex items-center gap-1.5 text-white/40">
                  <Clock className="w-3.5 h-3.5" />
                  <span>70% complete</span>
                </div>
                <span className="text-white/80 font-medium">Production</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Test & Optimize */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-between min-h-[380px] sm:min-h-[440px] p-8 sm:p-10 rounded-[24px] border border-white/10 bg-white/[0.01] backdrop-blur-md transition-all duration-300 group lg:translate-y-24 hover:lg:translate-y-22 hover:-translate-y-2 lg:hover:-translate-y-0 hover:border-white/20 hover:bg-white/[0.03]"
          >
            <div>
              {/* Icon Container */}
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 text-white/90 group-hover:text-white group-hover:bg-white/[0.08] transition-colors duration-300">
                <ClipboardCheck className="w-5 h-5" />
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
                Step 3 — Test & Optimize
              </h3>
              <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed mb-6">
                We test the flows, check conversion points on the site, and hand off a fully working system — or stay on to keep optimizing it every week, depending on your plan.
              </p>
              
              {/* Divider */}
              <div className="w-full h-[1px] bg-white/5 mb-4" />

              {/* Card Footer */}
              <div className="flex items-center justify-between text-[10px] sm:text-xs tracking-wider uppercase">
                <div className="flex items-center gap-1.5 text-white/40">
                  <Clock className="w-3.5 h-3.5" />
                  <span>100% complete</span>
                </div>
                <span className="text-white/80 font-medium">Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CUSTOM PARTITION DIVIDER */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-center mt-12 mb-20 sm:mt-16 sm:mb-28 relative z-10 h-24 -translate-y-4">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-white/15 to-white/35 flex-1" />
        <svg
          width="480"
          height="96"
          viewBox="0 0 480 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <defs>
            <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.35" />
              <stop offset="30%" stopColor="white" stopOpacity="0.6" />
              <stop offset="50%" stopColor="white" stopOpacity="1.0" />
              <stop offset="70%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path
            d="M 0 48 H 130 C 170 48, 175 84, 205 84 H 275 C 305 84, 310 48, 350 48 H 480"
            stroke="url(#dividerGradient)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="h-[2px] bg-gradient-to-r from-white/35 via-white/15 to-transparent flex-1" />
      </div>

      {/* FOURTH SECTION: Our Philosophy */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl mx-auto -mt-16 sm:-mt-24 lg:-mt-28 pt-4 pb-20 sm:pt-6 sm:pb-28 lg:pt-8 lg:pb-36 flex flex-col items-center text-center px-6 md:px-12 lg:px-16 overflow-hidden"
      >
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 mb-8 sm:mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-xs sm:text-sm font-sans text-white font-light tracking-wide">Our Philosophy</span>
        </div>

        {/* Huge Heading */}
        <h2 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-[0.06em] text-white leading-none mb-12 sm:mb-16 md:whitespace-nowrap max-w-none uppercase">
          One System. Two Halves. Zero Leaks.
        </h2>

        {/* Quote Description */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-white/50 font-light max-w-xl sm:max-w-2xl leading-relaxed">
          &ldquo;Most agencies sell you a nice-looking website and stop there. We build the site and the emails that follow up with everyone who left without buying &mdash; because a beautiful store that doesn&apos;t follow up is just an expensive brochure.&rdquo;
        </p>
      </motion.section>

      {/* FIFTH SECTION: The Hidden Cost of Manual Work (Sticky Pin-Scroll) */}
      <section
        ref={s5Ref}
        className="relative z-10 w-full h-[600vh] bg-black border-t border-white/5"
      >
        {/* Sticky viewport container */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden relative">
          
          {/* Inner layout container holding everything */}
          <div className="relative z-10 w-full max-w-[75vw] max-h-[70vh] sm:max-w-[65vw] sm:max-h-[60vh] md:max-w-[55vw] md:max-h-[55vh] lg:max-w-[750px] lg:max-h-[750px] xl:max-w-[850px] xl:max-h-[850px] aspect-square flex items-center justify-center">
            
            {/* Pill Badge */}
            <div className="absolute top-4 sm:top-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#0c0c0e]/80 backdrop-blur-md z-30 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-sans text-white/80 tracking-wide font-light">Orbiting Pain Point Labels</span>
            </div>

            {/* 1. Large Crisp Concentric Orbit SVG */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <svg 
                className="w-full h-full text-white/[0.04]" 
                viewBox="0 0 1400 1400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Concentric stationary tracks */}
                <circle cx="700" cy="700" r="300" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="700" cy="700" r="420" stroke="currentColor" strokeWidth="1" />
                <circle cx="700" cy="700" r="560" stroke="currentColor" strokeWidth="1" strokeDasharray="8 16" className="opacity-60" />
                
                {/* Scrolling drawn-out high-contrast ring segment */}
                <motion.circle
                  cx="700"
                  cy="700"
                  r="420"
                  stroke="rgba(255, 255, 255, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="2638.9"
                  style={{ strokeDashoffset: s5StrokeDashoffset }}
                  strokeLinecap="round"
                />

                {/* Active revolving orbit line with tip particle (matching reference image) */}
                <motion.g style={{ rotate: s5Rotation, transformOrigin: "700px 700px" }}>
                  {/* Glowing arc segment */}
                  <circle
                    cx="700"
                    cy="700"
                    r="420"
                    stroke="rgba(255, 255, 255, 0.55)"
                    strokeWidth="1.5"
                    strokeDasharray="2638.9"
                    strokeDashoffset="1950"
                    strokeLinecap="round"
                  />
                  {/* Micro glow bullet at the tip */}
                  <circle
                    cx="1120"
                    cy="700"
                    r="3.5"
                    fill="#ffffff"
                  />
                </motion.g>

                {/* Secondary subtle opposing rotation orbit */}
                <motion.g style={{ rotate: s5RotationOpposite, transformOrigin: "700px 700px" }} className="opacity-40">
                  <circle
                    cx="700"
                    cy="700"
                    r="300"
                    stroke="rgba(255, 255, 255, 0.35)"
                    strokeWidth="1"
                    strokeDasharray="1884.9"
                    strokeDashoffset="1400"
                    strokeLinecap="round"
                  />
                </motion.g>
              </svg>
            </div>

            {/* 2. Soft Ambient Center Glow */}
            <div className="absolute w-[350px] h-[350px] bg-white/[0.015] rounded-full blur-[110px] pointer-events-none" />

            {/* 3. Central Premium Typography Header */}
            <div className="relative z-30 max-w-[280px] sm:max-w-md md:max-w-xl text-center select-none pointer-events-none">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                className="font-sans text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.12]"
              >
                The Hidden Cost<br />of a Disconnected Funnel
              </motion.h2>
            </div>

            {/* 4. SCROLL REVEALED HIGH-CONTRAST BADGES / PILLS */}
            
            {/* Badge 1: Abandoned Carts (Top center-ish, slightly right) */}
            <motion.div
              style={{ 
                opacity: s5Badge1Opacity, 
                scale: s5Badge1Scale, 
                y: s5Badge1Y 
              }}
              className="absolute z-30 top-[4%] left-[50%] -translate-x-1/2"
            >
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-[#0c0c0e]/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.7)] hover:border-white/20 transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                <span className="text-[11px] sm:text-xs font-sans font-medium tracking-wide text-white whitespace-nowrap">
                  Abandoned Carts
                </span>
              </div>
            </motion.div>

            {/* Badge 2: Low Conversion Rate (Left center) */}
            <motion.div
              style={{ 
                opacity: s5Badge2Opacity, 
                scale: s5Badge2Scale, 
                y: s5Badge2Y 
              }}
              className="absolute z-30 top-[44%] left-[-18%] sm:left-[-12%] md:left-[-8%] lg:left-[-10%] xl:left-[-12%] -translate-y-1/2"
            >
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-[#0c0c0e]/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.7)] hover:border-white/20 transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                <span className="text-[11px] sm:text-xs font-sans font-medium tracking-wide text-white whitespace-nowrap">
                  Low Conversion Rate
                </span>
              </div>
            </motion.div>

            {/* Badge 3: Wasted Ad Spend (Right upper) */}
            <motion.div
              style={{ 
                opacity: s5Badge3Opacity, 
                scale: s5Badge3Scale, 
                y: s5Badge3Y 
              }}
              className="absolute z-30 top-[32%] right-[-18%] sm:right-[-12%] md:right-[-8%] lg:right-[-10%] xl:right-[-12%] -translate-y-1/2"
            >
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-[#0c0c0e]/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.7)] hover:border-white/20 transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                <span className="text-[11px] sm:text-xs font-sans font-medium tracking-wide text-white whitespace-nowrap">
                  Wasted Ad Spend
                </span>
              </div>
            </motion.div>

            {/* Badge 4: One-Time Buyers (Right lower) */}
            <motion.div
              style={{ 
                opacity: s5Badge4Opacity, 
                scale: s5Badge4Scale, 
                y: s5Badge4Y 
              }}
              className="absolute z-30 bottom-[18%] right-[-18%] sm:right-[-12%] md:right-[-8%] lg:right-[-10%] xl:right-[-12%] translate-y-1/2"
            >
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-[#0c0c0e]/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.7)] hover:border-white/20 transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                <span className="text-[11px] sm:text-xs font-sans font-medium tracking-wide text-white whitespace-nowrap">
                  One-Time Buyers
                </span>
              </div>
            </motion.div>

            {/* Badge 5: Leaking Revenue (Bottom center-ish, left of vertical line) */}
            <motion.div
              style={{ 
                opacity: s5Badge5Opacity, 
                scale: s5Badge5Scale, 
                y: s5Badge5Y 
              }}
              className="absolute z-30 bottom-[18%] left-[-18%] sm:left-[-12%] md:left-[-8%] lg:left-[-10%] xl:left-[-12%] translate-y-1/2"
            >
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-[#0c0c0e]/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.7)] hover:border-white/20 transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                <span className="text-[11px] sm:text-xs font-sans font-medium tracking-wide text-white whitespace-nowrap">
                  Leaking Revenue
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>



      {/* SECTION 6: SERVICES — 01 */}
      <section className="relative z-10 w-full max-w-7xl mx-auto py-16 sm:py-24 lg:py-32 px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
        
        {/* Large subtle background backdrop number 01 */}
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none text-center">
          <span className="font-sans font-bold text-[18rem] sm:text-[25rem] md:text-[32rem] lg:text-[38rem] xl:text-[42rem] text-white/[0.015] leading-none tracking-tighter">
            01
          </span>
        </div>

        {/* Our Solutions Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#0c0c0e]/60 backdrop-blur-md mb-8 sm:mb-12 select-none -mt-4" id="services-solutions-badge">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-xs sm:text-sm font-sans text-white/80 tracking-wide font-normal">Our Solutions</span>
        </div>

        {/* Section Pill and Heading */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mb-12 md:mb-16">
          <span className="text-[10px] sm:text-xs tracking-[0.25em] text-white/40 uppercase font-mono mb-4 block">
            SERVICES — 01
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Website Design & Development
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-white/50 font-light max-w-2xl leading-relaxed">
            High-converting store design built around one goal: turning visitors into buyers. Every page is designed to remove friction, build trust fast, and guide the visitor straight to checkout.
          </p>
        </div>

        {/* Sub-services Interactive Row */}
        <div className="relative z-10 w-full max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[380px] xl:h-[420px]">
            {subServices.map((service, index) => {
              const isActive = activeServiceSubCard === index;
              return (
                <motion.div
                  key={service.id}
                  layout
                  onMouseEnter={() => setActiveServiceSubCard(index)}
                  transition={{ type: "spring", stiffness: 95, damping: 21, mass: 0.85 }}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-between p-6 sm:p-8 transition-colors duration-300 ${
                    isActive
                      ? "flex-[2.8] bg-[#0c0c0e] text-white border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.8)] h-[220px] md:h-full"
                      : "flex-1 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 text-white/40 hover:text-white/60 h-[80px] md:h-full"
                  }`}
                >
                  {/* Premium Background Image Layer */}
                  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-3xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover transition-all duration-700 ${
                        isActive 
                          ? "scale-105 opacity-[0.22] brightness-[0.4]" 
                          : "scale-100 opacity-[0.05] brightness-[0.3] group-hover:opacity-[0.12] group-hover:scale-[1.03]"
                      }`}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>

                  {/* Glowing fluid flowy backdrop overlay inside active card */}
                  {isActive && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0">
                      {/* Ambient glowing blobs with organic slow transition */}
                      <motion.div
                        animate={{
                          scale: [1, 1.25, 1],
                          x: [0, 40, 0],
                          y: [0, -30, 0]
                        }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-r ${service.bgAccent} opacity-[0.35] blur-[80px]`}
                      />
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          x: [0, -30, 0],
                          y: [0, 40, 0]
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-indigo-600/30 opacity-[0.3] blur-[80px]"
                      />
                      {/* Premium vignette filters for depth and readability */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px] z-[1]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/25 z-[2]" />
                    </div>
                  )}

                  {/* Top: Card Number & Indicator */}
                  <div className="relative z-10 flex justify-between items-start w-full">
                    <span className={`font-mono text-[10px] tracking-wider ${isActive ? "text-white/60" : "text-white/20 group-hover:text-white/40"} transition-colors`}>
                      {service.id}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </div>

                  {/* Bottom / Mid Content */}
                  <div className="relative z-10 flex flex-col w-full mt-auto">
                    {isActive ? (
                      <div className="flex flex-col">
                        <motion.h3
                          layout="position"
                          className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2"
                        >
                          {service.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-xl"
                        >
                          {service.desc}
                        </motion.p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between w-full">
                        <motion.h3
                          layout="position"
                          className="font-sans text-sm sm:text-base md:text-lg font-bold tracking-tight text-white/40 group-hover:text-white transition-colors duration-300"
                        >
                          {service.title}
                        </motion.h3>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* View Portfolio Button styled exactly like 'View More' from reference */}
        <div className="relative z-10 mt-12 md:mt-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3.5 pl-6 pr-2 py-2 rounded-full border border-white/10 bg-white text-black hover:bg-zinc-100 transition-all duration-300 group cursor-pointer shadow-[0_12px_40px_rgba(255,255,255,0.05)]"
          >
            <span className="text-xs font-semibold uppercase tracking-widest pl-1">
              View Portfolio
            </span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.button>
        </div>

      </section>



      {/* SECTION 7: SERVICES — 02 */}
      <section className="relative z-10 w-full max-w-7xl mx-auto py-16 sm:py-24 lg:py-32 px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
        
        {/* Large subtle background backdrop number 02 */}
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none text-center">
          <span className="font-sans font-bold text-[18rem] sm:text-[25rem] md:text-[32rem] lg:text-[38rem] xl:text-[42rem] text-white/[0.015] leading-none tracking-tighter">
            02
          </span>
        </div>

        {/* Section Pill and Heading */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mb-12 md:mb-16">
          <span className="text-[10px] sm:text-xs tracking-[0.25em] text-white/40 uppercase font-mono mb-4 block">
            SERVICES — 02
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Retention & Email Marketing
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-white/50 font-light max-w-2xl leading-relaxed">
            Maximized customer lifetime value through data-driven campaigns and core flow automation. We turn one-time buyers into loyal brand advocates, lifting retention revenue by 30% or more.
          </p>
        </div>

        {/* Sub-services Interactive Row */}
        <div className="relative z-10 w-full max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[380px] xl:h-[420px]">
            {subServices02.map((service, index) => {
              const isActive = activeServiceSubCard2 === index;
              return (
                <motion.div
                  key={service.id}
                  layout
                  onMouseEnter={() => setActiveServiceSubCard2(index)}
                  transition={{ type: "spring", stiffness: 95, damping: 21, mass: 0.85 }}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-between p-6 sm:p-8 transition-colors duration-300 ${
                    isActive
                      ? "flex-[2.8] bg-[#0c0c0e] text-white border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.8)] h-[220px] md:h-full"
                      : "flex-1 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 text-white/40 hover:text-white/60 h-[80px] md:h-full"
                  }`}
                >
                  {/* Premium Background Image Layer */}
                  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-3xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover transition-all duration-700 ${
                        isActive 
                          ? "scale-105 opacity-[0.22] brightness-[0.4]" 
                          : "scale-100 opacity-[0.05] brightness-[0.3] group-hover:opacity-[0.12] group-hover:scale-[1.03]"
                      }`}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>

                  {/* Glowing fluid flowy backdrop overlay inside active card */}
                  {isActive && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0">
                      {/* Ambient glowing blobs with organic slow transition */}
                      <motion.div
                        animate={{
                          scale: [1, 1.25, 1],
                          x: [0, 40, 0],
                          y: [0, -30, 0]
                        }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-r ${service.bgAccent} opacity-[0.35] blur-[80px]`}
                      />
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          x: [0, -30, 0],
                          y: [0, 40, 0]
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-indigo-600/30 opacity-[0.3] blur-[80px]"
                      />
                      {/* Premium vignette filters for depth and readability */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px] z-[1]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/25 z-[2]" />
                    </div>
                  )}

                  {/* Top: Card Number & Indicator */}
                  <div className="relative z-10 flex justify-between items-start w-full">
                    <span className={`font-mono text-[10px] tracking-wider ${isActive ? "text-white/60" : "text-white/20 group-hover:text-white/40"} transition-colors`}>
                      {service.id}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </div>

                  {/* Bottom / Mid Content */}
                  <div className="relative z-10 flex flex-col w-full mt-auto">
                    {isActive ? (
                      <div className="flex flex-col">
                        <motion.h3
                          layout="position"
                          className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2"
                        >
                          {service.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-xl"
                        >
                          {service.desc}
                        </motion.p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between w-full">
                        <motion.h3
                          layout="position"
                          className="font-sans text-sm sm:text-base md:text-lg font-bold tracking-tight text-white/40 group-hover:text-white transition-colors duration-300"
                        >
                          {service.title}
                        </motion.h3>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Explore Flows Button styled exactly like 'View Portfolio' */}
        <div className="relative z-10 mt-12 md:mt-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3.5 pl-6 pr-2 py-2 rounded-full border border-white/10 bg-white text-black hover:bg-zinc-100 transition-all duration-300 group cursor-pointer shadow-[0_12px_40px_rgba(255,255,255,0.05)]"
          >
            <span className="text-xs font-semibold uppercase tracking-widest pl-1">
              Explore Flows
            </span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.button>
        </div>

      </section>

      {/* SECTION 8: SERVICES — 03 (Capabilities Grid) */}
      <section className="relative z-10 w-full max-w-7xl mx-auto py-16 sm:py-24 lg:py-32 px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
        
        {/* Large subtle background backdrop number 03 */}
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none text-center">
          <span className="font-sans font-bold text-[18rem] sm:text-[25rem] md:text-[32rem] lg:text-[38rem] xl:text-[42rem] text-white/[0.015] leading-none tracking-tighter">
            03
          </span>
        </div>

        {/* Section Pill and Heading */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mb-16 md:mb-20">
          <span className="text-[10px] sm:text-xs tracking-[0.25em] text-white/40 uppercase font-mono mb-4 block">
            SERVICES — 03
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            What&apos;s Inside Every Build
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-white/50 font-light max-w-2xl leading-relaxed">
            Our standard of execution is designed to scale. From detailed consumer research to automated high-converting flows and daily optimization, here&apos;s what you get.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Store Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="relative rounded-3xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden min-h-[360px]"
          >
            {/* Corner hover subtle light glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 text-white/60 group-hover:text-white group-hover:border-white/25 transition-all">
                <Compass className="w-5 h-5" />
              </div>
              
              <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-white mb-6">
                Store Strategy
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Customer behavior research",
                  "Competitor & market research",
                  "Conversion mapping before design starts"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-emerald-500/80 uppercase bg-emerald-500/5 px-2.5 py-1 rounded-full border border-emerald-500/10">
                Full Audit
              </span>
            </div>
          </motion.div>

          {/* Card 2: Website Build */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="relative rounded-3xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden min-h-[360px]"
          >
            {/* Corner hover subtle light glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-indigo-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 text-white/60 group-hover:text-white group-hover:border-white/25 transition-all">
                <Laptop className="w-5 h-5" />
              </div>
              
              <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-white mb-6">
                Website Build
              </h3>
              
              <ul className="space-y-4">
                {[
                  "High-fidelity, conversion-first design",
                  "Fast, mobile-first development",
                  "Checkout & speed optimization"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-indigo-400/80 uppercase bg-indigo-500/5 px-2.5 py-1 rounded-full border border-indigo-500/10">
                Built to Convert
              </span>
            </div>
          </motion.div>

          {/* Card 3: Email Flow Build */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="relative rounded-3xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden min-h-[360px]"
          >
            {/* Corner hover subtle light glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 text-white/60 group-hover:text-white group-hover:border-white/25 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              
              <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-white mb-6">
                Email Flow Build
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Welcome, cart, and post-purchase flows",
                  "Copy + design written to sell, not just inform",
                  "Segmentation based on buyer behavior"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-pink-400/80 uppercase bg-pink-500/5 px-2.5 py-1 rounded-full border border-pink-500/10">
                Revenue on Autopilot
              </span>
            </div>
          </motion.div>

          {/* Card 4: Ongoing Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -6 }}
            className="relative rounded-3xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden min-h-[360px]"
          >
            {/* Corner hover subtle light glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-amber-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 text-white/60 group-hover:text-white group-hover:border-white/25 transition-all">
                <Sparkles className="w-5 h-5" />
              </div>
              
              <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-white mb-6">
                Ongoing Optimization
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Scheduled revisions (weekly to daily by plan)",
                  "Continuous testing based on real data",
                  "Full maintenance on higher-tier plans"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-amber-400/80 uppercase bg-amber-500/5 px-2.5 py-1 rounded-full border border-amber-500/10">
                Always Improving
              </span>
            </div>
          </motion.div>

        </div>

      </section>

      {/* CUSTOM PARTITION DIVIDER 2 */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-center mt-12 mb-6 sm:mt-16 sm:mb-10 relative z-10 h-24 -translate-y-4">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-white/15 to-white/35 flex-1" />
        <svg
          width="480"
          height="96"
          viewBox="0 0 480 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <defs>
            <linearGradient id="dividerGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.35" />
              <stop offset="30%" stopColor="white" stopOpacity="0.6" />
              <stop offset="50%" stopColor="white" stopOpacity="1.0" />
              <stop offset="70%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path
            d="M 0 48 H 130 C 170 48, 175 84, 205 84 H 275 C 305 84, 310 48, 350 48 H 480"
            stroke="url(#dividerGradient2)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="h-[2px] bg-gradient-to-r from-white/35 via-white/15 to-transparent flex-1" />
      </div>

      {/* SECTION 9: PORTFOLIO */}
      <section className="relative z-10 w-full max-w-7xl mx-auto pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-14 lg:pb-32 px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
        
        {/* Top badge/pill: • Latest Works */}
        <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full border border-white/10 bg-[#0c0c0e]/60 backdrop-blur-md mb-6 relative z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-xs sm:text-sm font-sans text-white/80 font-normal tracking-wider">Latest Works</span>
        </div>

        {/* Big Heading: Portfolio */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-16 sm:mb-20 text-center relative z-10">
          Portfolio
        </h2>

        {/* Two-column grid of portfolio items/cards */}
        <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: DS Freelance Developer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-[32px] bg-white/[0.01] hover:bg-[#0c0c0e]/80 border border-white/5 hover:border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px] z-0">
              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-600/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative z-10">
              {/* Tags: Branding • Web • Marketing */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider font-mono text-white/60 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full">Branding</span>
                <span className="text-white/20">•</span>
                <span className="text-[10px] uppercase tracking-wider font-mono text-white/60 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full">Web</span>
                <span className="text-white/20">•</span>
                <span className="text-[10px] uppercase tracking-wider font-mono text-white/60 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full">Marketing</span>
              </div>

              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/5 mb-8">
                <Image
                  src={portfolioImage1}
                  alt="DS Freelance Developer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Description with Hover Button */}
              <div className="flex items-end justify-between gap-4 mt-2">
                <div className="max-w-[78%]">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-white transition-colors">
                    DS Freelance Developer
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                    Showcase key project results and improve SEO with summary. Excellent for SEO regarding responsiveness.
                  </p>
                </div>

                {/* Circular Button with Diagonal Up-Right Arrow */}
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-transparent text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shrink-0 mb-1">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Architecture Studio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-[32px] bg-white/[0.01] hover:bg-[#0c0c0e]/80 border border-white/5 hover:border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px] z-0">
              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500/10 to-blue-600/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative z-10">
              {/* Tags: Branding • Web */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider font-mono text-white/60 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full">Branding</span>
                <span className="text-white/20">•</span>
                <span className="text-[10px] uppercase tracking-wider font-mono text-white/60 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full">Web</span>
              </div>

              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/5 mb-8">
                <Image
                  src={portfolioImage2}
                  alt="Architecture Studio"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Description with Hover Button */}
              <div className="flex items-end justify-between gap-4 mt-2">
                <div className="max-w-[78%]">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-white transition-colors">
                    Architecture Studio
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                    Crafting digital spaces with architectural precision and timeless aesthetic.
                  </p>
                </div>

                {/* Circular Button with Diagonal Up-Right Arrow */}
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-transparent text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shrink-0 mb-1">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Luminary Apparel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-[32px] bg-white/[0.01] hover:bg-[#0c0c0e]/80 border border-white/5 hover:border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px] z-0">
              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-600/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative z-10">
              {/* Tags: E-commerce • Branding • Klaviyo */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider font-mono text-white/60 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full">E-commerce</span>
                <span className="text-white/20">•</span>
                <span className="text-[10px] uppercase tracking-wider font-mono text-white/60 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full">Branding</span>
                <span className="text-white/20">•</span>
                <span className="text-[10px] uppercase tracking-wider font-mono text-white/60 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full">Klaviyo</span>
              </div>

              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/5 mb-8">
                <Image
                  src={portfolioImage3}
                  alt="Luminary Apparel"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Description with Hover Button */}
              <div className="flex items-end justify-between gap-4 mt-2">
                <div className="max-w-[78%]">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-white transition-colors">
                    Luminary Apparel
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                    Architecting custom e-commerce experiences and lifecycle flows driving a 42% increase in customer lifetime value.
                  </p>
                </div>

                {/* Circular Button with Diagonal Up-Right Arrow */}
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-transparent text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shrink-0 mb-1">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Sola Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-[32px] bg-white/[0.01] hover:bg-[#0c0c0e]/80 border border-white/5 hover:border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px] z-0">
              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-teal-500/10 to-emerald-600/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative z-10">
              {/* Tags: Product • Web • Optimization */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider font-mono text-white/60 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full">Product</span>
                <span className="text-white/20">•</span>
                <span className="text-[10px] uppercase tracking-wider font-mono text-white/60 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full">Web</span>
                <span className="text-white/20">•</span>
                <span className="text-[10px] uppercase tracking-wider font-mono text-white/60 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full">Optimization</span>
              </div>

              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/5 mb-8">
                <Image
                  src={portfolioImage4}
                  alt="Sola Analytics"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Description with Hover Button */}
              <div className="flex items-end justify-between gap-4 mt-2">
                <div className="max-w-[78%]">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-white transition-colors">
                    Sola Analytics
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                    A high-performance analytics interface designed to visualize complex real-time user flow patterns and purchase funnels.
                  </p>
                </div>

                {/* Circular Button with Diagonal Up-Right Arrow */}
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-transparent text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shrink-0 mb-1">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* View All Projects Button */}
        <div className="relative z-10 mt-16 md:mt-20 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3.5 pl-7 pr-2 py-2 rounded-full border border-white/10 bg-white text-black hover:bg-zinc-100 transition-all duration-300 group cursor-pointer shadow-[0_12px_40px_rgba(255,255,255,0.05)]"
          >
            <span className="text-xs font-semibold uppercase tracking-widest pl-1">
              View All Projects
            </span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.button>
        </div>

      </section>

      {/* DUAL SLANTED INTERSECTING MARQUEE RIBBONS PARTITION (REPEATED) */}
      <div className="relative w-full overflow-hidden py-16 sm:py-20 bg-black select-none z-10 flex items-center justify-center min-h-[220px] sm:min-h-[260px] md:min-h-[280px]">
        
        {/* Dark Ribbon (Behind) - Slanted Upward (6 degrees) */}
        <div className="absolute w-[200%] h-10 sm:h-12 md:h-14 lg:h-16 bg-[#121215] border-y border-white/10 flex items-center rotate-[6deg] z-0 shadow-2xl overflow-hidden">
          <div className="flex w-full overflow-hidden items-center">
            <motion.div
              animate={{ x: [0, "-50%"] }}
              transition={{
                ease: "linear",
                duration: 55,
                repeat: Infinity,
              }}
              className="flex whitespace-nowrap gap-12 sm:gap-16 items-center"
            >
              {Array(6).fill(null).map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center gap-12 sm:gap-16 shrink-0">
                  {[
                    "Dedicated Support 24/7",
                    "Flexible Pricing",
                    "Top-notch Experts",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-12 sm:gap-16">
                      <span className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-tight text-white/80">
                        {item}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* White Ribbon (Front) - Slanted Downward (-6.5 degrees) */}
        <div className="absolute w-[200%] h-10 sm:h-12 md:h-14 lg:h-16 bg-white flex items-center -rotate-[6.5deg] z-10 shadow-[0_15px_45px_rgba(0,0,0,0.7)] overflow-hidden">
          <div className="flex w-full overflow-hidden items-center">
            <motion.div
              animate={{ x: ["-50%", 0] }}
              transition={{
                ease: "linear",
                duration: 48,
                repeat: Infinity,
              }}
              className="flex whitespace-nowrap gap-12 sm:gap-16 items-center"
            >
              {Array(6).fill(null).map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center gap-12 sm:gap-16 shrink-0">
                  {[
                    "Dedicated Support 24/7",
                    "Flexible Pricing",
                    "Top-notch Experts",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-12 sm:gap-16">
                      <span className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight text-black">
                        {item}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* SECTION 10: PRICING PLANS */}
      <section className="relative z-10 w-full max-w-7xl mx-auto py-16 sm:py-24 lg:py-32 px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
        
        {/* Top badge/pill: • Our Packages */}
        <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full border border-white/10 bg-[#0c0c0e]/60 backdrop-blur-md mb-6 relative z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-xs sm:text-sm font-sans text-white/80 font-normal tracking-wider">Our Packages</span>
        </div>

        {/* Big Heading: Pricing Plans */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-10 text-center relative z-10">
          Pricing Plans
        </h2>

        {/* Pricing Toggle */}
        <div className="flex items-center gap-4 mb-16 relative z-10">
          <span className={`text-xs sm:text-sm font-sans tracking-wide transition-colors ${billingInterval === 'yearly' ? 'text-white font-medium' : 'text-white/40'}`}>
            Yearly <span className="text-emerald-500 font-semibold ml-1">20% off</span>
          </span>
          {/* Switch Toggle */}
          <button
            onClick={() => setBillingInterval(billingInterval === 'yearly' ? 'monthly' : 'yearly')}
            className="w-12 h-6 rounded-full bg-zinc-800 p-0.5 relative transition-colors duration-300 focus:outline-none cursor-pointer"
          >
            <motion.div
              layout
              className="w-5 h-5 rounded-full bg-white shadow-md"
              animate={{ x: billingInterval === 'monthly' ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-xs sm:text-sm font-sans tracking-wide transition-colors ${billingInterval === 'monthly' ? 'text-white font-medium' : 'text-white/40'}`}>
            Monthly
          </span>
        </div>

        {/* Three Pricing Cards layout */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative z-10">
          
          {/* Card 1: Starter */}
          <div className="rounded-[32px] border border-white/10 bg-[#050505]/40 hover:bg-white/[0.02] hover:border-white/20 hover:-translate-y-2 backdrop-blur-md p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-500 shadow-xl hover:shadow-[0_30px_60px_rgba(255,255,255,0.03)] group/card">
            <div className="relative z-10">
              <div className="flex justify-between items-start w-full">
                <span className="font-sans text-sm font-medium text-white/50 group-hover/card:text-white/70 transition-colors duration-300 tracking-wide">
                  Starter
                </span>
                <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/70 bg-white/[0.02] group-hover/card:bg-white/10 group-hover/card:text-white transition-all duration-300">
                  <Bike className="w-4 h-4" />
                </div>
              </div>
              
              <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white mt-6 mb-8 leading-snug">
                For brands that need a converting website, live.
              </h3>
              
              <div className="h-[1px] bg-white/5 my-8" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-baseline gap-1.5 mb-8">
                <span className="text-2xl font-light text-white/50">$</span>
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                  {billingInterval === 'yearly' ? '719' : '899'}
                </span>
                <span className="text-sm font-light text-white/40 ml-1">/mo</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between pl-6 pr-2.5 py-2.5 rounded-full border border-white/10 bg-black hover:bg-zinc-950 text-white transition-all duration-300 group cursor-pointer mb-8 shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Get Started
                </span>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.button>
              
              <ul className="space-y-4 text-xs sm:text-sm text-white/50 font-light mt-8">
                <li className="flex items-center gap-2">
                  <span className="text-white/30">•</span> High-converting website build
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/30">•</span> 1x revision per week
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/30">•</span> Welcome flow included
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Growth */}
          <div className="rounded-[32px] border border-white/10 bg-[#050505]/40 hover:bg-white/[0.02] hover:border-white/20 hover:-translate-y-2 backdrop-blur-md p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-500 shadow-xl hover:shadow-[0_30px_60px_rgba(255,255,255,0.03)] group/card">
            <div className="relative z-10">
              <div className="flex justify-between items-start w-full">
                <span className="font-sans text-sm font-medium text-white/50 group-hover/card:text-white/70 transition-colors duration-300 tracking-wide">
                  Growth
                </span>
                <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/70 bg-white/[0.02] group-hover/card:bg-white/10 group-hover/card:text-white transition-all duration-300">
                  <Car className="w-4 h-4" />
                </div>
              </div>
              
              <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white mt-6 mb-8 leading-snug">
                For brands ready to close the loop.
              </h3>
              
              <div className="h-[1px] bg-white/5 my-8" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-baseline gap-1.5 mb-8">
                <span className="text-2xl font-light text-white/50">$</span>
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                  {billingInterval === 'yearly' ? '1,199' : '1,499'}
                </span>
                <span className="text-sm font-light text-white/40 ml-1">/mo</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between pl-6 pr-2.5 py-2.5 rounded-full border border-white/10 bg-black hover:bg-zinc-950 text-white transition-all duration-300 group cursor-pointer mb-8 shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Get Started
                </span>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.button>
              
              <ul className="space-y-4 text-xs sm:text-sm text-white/50 font-light mt-8">
                <li className="flex items-center gap-2">
                  <span className="text-white/30">•</span> Everything in Starter
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/30">•</span> Website build with 2x revisions per week
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/30">•</span> 3 flows included: Welcome, Abandoned Cart, Post-Purchase
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Scale (Recommended) */}
          <div className="rounded-[32px] border border-white/15 bg-[#0c0c0e]/90 hover:bg-[#0e0e11] hover:border-emerald-500/30 hover:-translate-y-2 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-500 shadow-[0_24px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_60px_rgba(16,185,129,0.06)] group/card">
            {/* Ambient background highlight */}
            <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-emerald-500/5 group-hover/card:bg-emerald-500/10 blur-[80px] transition-all duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2.5">
                  <span className="font-sans text-sm font-medium text-white/50 group-hover/card:text-white/70 transition-colors duration-300 tracking-wide">
                    Scale
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full font-medium group-hover/card:border-emerald-400/40 group-hover/card:bg-emerald-500/20 transition-all duration-300">
                    Recommended
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/70 bg-white/[0.02] group-hover/card:bg-white/10 group-hover/card:text-white transition-all duration-300">
                  <Rocket className="w-4 h-4" />
                </div>
              </div>
              
              <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white mt-6 mb-8 leading-snug">
                Full closed-loop system, fully managed.
              </h3>
              
              <div className="h-[1px] bg-white/5 my-8" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-baseline gap-1.5 mb-8">
                <span className="text-2xl font-light text-white/50">$</span>
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                  {billingInterval === 'yearly' ? '1,599' : '1,999'}
                </span>
                <span className="text-sm font-light text-white/40 ml-1">/mo</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between pl-6 pr-2.5 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-black transition-all duration-300 group cursor-pointer mb-8 shadow-xl"
              >
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Get Started
                </span>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.button>
              
              <ul className="space-y-4 text-xs sm:text-sm text-white/50 font-light mt-8">
                <li className="flex items-center gap-2">
                  <span className="text-white/30">•</span> Everything in Growth
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/30">•</span> Daily revisions on the website
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/30">•</span> Full flow suite with maximum maintenance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/30">•</span> Competitor research included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/30">•</span> Full creation & ongoing optimization across site + flows
                </li>
              </ul>
            </div>
          </div>

        </div>

      </section>

      {/* SECTION 11: FAQS (REF INSPIRED) */}
      <section className="relative z-10 w-full max-w-7xl mx-auto pt-10 pb-6 sm:pt-14 sm:pb-8 lg:pt-20 lg:pb-12 px-6 md:px-12 lg:px-16 border-t border-white/5" id="faqs-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full lg:sticky lg:top-32">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#0c0c0e]/60 backdrop-blur-md mb-6 select-none" id="faq-common-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs sm:text-sm font-sans text-white/80 tracking-wide font-normal">Common Asked</span>
              </div>
              
              {/* Giant Title */}
              <h2 className="font-display text-7xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white uppercase leading-none select-none" id="faq-main-title">
                FAQS
              </h2>
            </div>

            {/* Bottom Card */}
            <div className="mt-12 lg:mt-24 rounded-[24px] border border-white/10 bg-[#07070a]/80 backdrop-blur-md p-6 sm:p-8 max-w-md" id="faq-bottom-card">
              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed font-light mb-8">
                {"“Can't find what you're looking for? Our team is ready to provide personalized answers for your specific project needs. Let's talk about your vision.”"}
              </p>
              
              <div className="h-[1px] bg-white/5 my-6" />
              
              <div className="flex flex-col">
                <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-widest text-white/40 uppercase mb-1">
                  RESPONSE TIME
                </span>
                <span className="font-sans text-sm sm:text-base font-medium text-white/90">
                  Under 24h
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4" id="faq-accordion-list">
            {[
              {
                question: "How is CP9 different from a normal web design agency?",
                answer: "We don't just build the website — we build the website and the email flows together, as one system. Most agencies hand you a site and leave the follow-up (and the lost sales) to you."
              },
              {
                question: "Do I need email flows if I already have a website?",
                answer: "If you're only using the website to convert, you're leaving money on the table. Every visitor who doesn't buy on the first visit is a lead your flows should be recovering — that's the whole point of the closed loop."
              },
              {
                question: "How fast can you get my project live?",
                answer: "Timelines depend on scope, but most website builds are ready within 1–2 weeks, with flows following shortly after — we'll give you an exact timeline once we understand your store."
              },
              {
                question: "What if I only want the website, not the flows?",
                answer: "Every plan includes at least a welcome flow, because a website without any follow-up is only half a system. If you truly only want the site, let's talk — we can scope it separately."
              },
              {
                question: "What happens after launch?",
                answer: "Depending on your plan, we keep revising and optimizing the site (weekly to daily) and keep your flows updated as your offers change. Nothing goes live and gets forgotten."
              },
              {
                question: "Do you work with brands outside e-commerce?",
                answer: "Our system is built specifically for e-commerce and DTC brands — that's where the closed loop (website + flows) delivers the most impact."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="rounded-[24px] border border-white/10 bg-[#050507]/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.01]"
                  id={`faq-item-container-${index}`}
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex justify-between items-center px-6 py-6 sm:px-8 sm:py-7 text-left focus:outline-none cursor-pointer group"
                    id={`faq-btn-${index}`}
                  >
                    <span className="font-sans text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-white/90 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 ml-4 bg-white/[0.02] text-white/80 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                      <motion.svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        id={`faq-svg-${index}`}
                      >
                        <path d="M6 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </motion.svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        id={`faq-content-${index}`}
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-white/5 font-sans text-sm sm:text-base text-white/50 leading-relaxed font-light mt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 12: HIRE US / CONTACT */}
      <section className="relative z-10 w-full max-w-7xl mx-auto pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-14 lg:pb-32 px-6 md:px-12 lg:px-16 border-t border-white/5" id="contact-hire-section">
        {/* Abstract World Map Vector in Left Background (Subtle) */}
        <div className="absolute inset-y-0 left-0 right-1/2 pointer-events-none opacity-[0.06] select-none z-0 hidden lg:block overflow-hidden">
          <svg
            viewBox="0 0 1000 600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-[140%] h-[140%] text-white -translate-x-16 -translate-y-8"
          >
            {/* Hand-crafted highly detailed premium world map paths */}
            <path d="M150 120 l30 5 l15 -10 l25 20 l10 40 l-15 30 l-25 10 l-30 -20 l-10 -30 z" fill="rgba(255,255,255,0.08)" />
            <path d="M220 280 l10 20 l30 40 l15 60 l-10 30 l-20 10 l-15 -35 l-15 -50 z" fill="rgba(255,255,255,0.08)" />
            <path d="M440 100 l30 -5 l20 15 l-10 20 l-25 5 z" fill="rgba(255,255,255,0.08)" />
            <path d="M460 160 l45 10 l30 40 l5 50 l-20 60 l-40 15 l-30 -30 l15 -60 z" fill="rgba(255,255,255,0.08)" />
            <path d="M520 80 l120 5 l80 40 l-10 60 l-50 40 l-60 -20 l-30 -60 z" fill="rgba(255,255,255,0.08)" />
            <path d="M720 340 l30 10 l15 30 l-20 20 l-25 -20 z" fill="rgba(255,255,255,0.08)" />
            {/* Connections / Grid Lines */}
            <line x1="200" y1="160" x2="480" y2="120" stroke="rgba(255,255,255,0.15)" strokeDasharray="5,5" />
            <line x1="250" y1="340" x2="480" y2="240" stroke="rgba(255,255,255,0.15)" strokeDasharray="5,5" />
            <line x1="520" y1="240" x2="680" y2="140" stroke="rgba(255,255,255,0.15)" strokeDasharray="5,5" />
            <line x1="680" y1="140" x2="730" y2="350" stroke="rgba(255,255,255,0.15)" strokeDasharray="5,5" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* Left Column: Text & Meta Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Badge: Contact Us */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#0c0c0e]/60 backdrop-blur-md mb-8 select-none" id="contact-us-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs sm:text-sm font-sans text-white/80 tracking-wide font-normal">Contact Us</span>
              </div>
              
              {/* Giant Headline */}
              <h2 className="font-sans text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white mb-10 select-none" id="contact-main-headline">
                Hire us!!
              </h2>
            </div>

            {/* Bottom details block */}
            <div className="mt-12 lg:mt-24 space-y-10">
              
              {/* Phone Detail */}
              <div className="flex items-center gap-4.5" id="contact-phone-block">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] text-white/80">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-widest text-white/40 uppercase mb-0.5 block">
                    Call Us 24/7
                  </span>
                  <a href="tel:+0278346236" className="font-sans text-lg sm:text-xl font-bold text-white hover:text-white/80 transition-colors tracking-tight">
                    +0278346236
                  </a>
                </div>
              </div>

              {/* Start Project CTA Button */}
              <div id="contact-start-project-btn-container">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3.5 pl-6 pr-2 py-2 rounded-full border border-white/10 bg-transparent text-white hover:bg-white/[0.02] hover:border-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest pl-1">
                    Start Project
                  </span>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.button>
              </div>

            </div>
          </div>

          {/* Right Column: Hire Us Interactive Card Form */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="rounded-[32px] border border-white/10 bg-[#050508]/80 backdrop-blur-md p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="hire-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleHireSubmit}
                    className="space-y-8"
                  >
                    {/* Name & Email Group */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-white/90 font-sans tracking-tight">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={hireName}
                          onChange={(e) => setHireName(e.target.value)}
                          placeholder="Marcus Kane"
                          className="w-full bg-[#0d0d11] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/25 focus:bg-black/40 transition-all duration-200"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-white/90 font-sans tracking-tight">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={hireEmail}
                          onChange={(e) => setHireEmail(e.target.value)}
                          placeholder="marcus@example.com"
                          className="w-full bg-[#0d0d11] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/25 focus:bg-black/40 transition-all duration-200"
                        />
                      </div>

                    </div>

                    {/* Service & Budget Group */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Service selector */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-white/90 font-sans tracking-tight">
                          Service
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={hireService}
                            onChange={(e) => setHireService(e.target.value)}
                            className="w-full bg-[#0d0d11] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white/80 focus:outline-none focus:border-white/25 focus:bg-black/40 transition-all duration-200 appearance-none cursor-pointer"
                          >
                            <option value="" disabled hidden>Select an option</option>
                            <option value="web-design" className="bg-[#0c0c0e]">Web Design & Store Build</option>
                            <option value="email-flows" className="bg-[#0c0c0e]">Email Marketing / Flows</option>
                            <option value="closed-loop" className="bg-[#0c0c0e]">Complete Closed Loop System</option>
                            <option value="branding" className="bg-[#0c0c0e]">Branding & Identity</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/40">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Budget selector */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-white/90 font-sans tracking-tight">
                          Budget
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={hireBudget}
                            onChange={(e) => setHireBudget(e.target.value)}
                            className="w-full bg-[#0d0d11] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white/80 focus:outline-none focus:border-white/25 focus:bg-black/40 transition-all duration-200 appearance-none cursor-pointer"
                          >
                            <option value="" disabled hidden>Select an option</option>
                            <option value="2k-5k" className="bg-[#0c0c0e]">$2,000 - $5,000</option>
                            <option value="5k-10k" className="bg-[#0c0c0e]">$5,000 - $10,000</option>
                            <option value="10k-20k" className="bg-[#0c0c0e]">$10,000 - $20,000</option>
                            <option value="20k+" className="bg-[#0c0c0e]">$20,000+</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/40">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-white/90 font-sans tracking-tight">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={hireMessage}
                        onChange={(e) => setHireMessage(e.target.value)}
                        placeholder="Write your request"
                        className="w-full bg-[#0d0d11] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/25 focus:bg-black/40 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Error Display */}
                    {formError && (
                      <div className="text-red-400 text-sm font-sans bg-red-500/10 border border-red-500/20 px-4 py-2.5 rounded-xl">
                        {formError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                        className={`w-full py-4 rounded-xl font-sans font-bold text-sm tracking-wide uppercase transition-all duration-300 cursor-pointer shadow-[0_12px_40px_rgba(255,255,255,0.05)] ${
                          isSubmitting ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed' : 'bg-white hover:bg-zinc-100 text-black'
                        }`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </motion.button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="thank-you"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    {/* Glowing success circle */}
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                      <Check className="w-10 h-10" />
                    </div>
                    
                    <h3 className="font-sans text-3xl font-extrabold text-white tracking-tight mb-4">
                      Thank You, {hireName}!
                    </h3>
                    
                    <p className="font-sans text-sm text-white/60 font-light max-w-md leading-relaxed mb-8">
                      We have successfully received your request. Our team will review your project requirements and respond in under 24 hours.
                    </p>
                    
                    <div className="h-[1px] bg-white/5 w-full max-w-sm my-6" />
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setHireName('');
                        setHireEmail('');
                        setHireService('');
                        setHireBudget('');
                        setHireMessage('');
                      }}
                      className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-pointer focus:outline-none"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 13: FOOTER */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto pt-16 pb-12 px-6 md:px-12 lg:px-16 border-t border-white/5 bg-black" id="custom-footer">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start pb-16">
          
          {/* Column 1: LOCATION */}
          <div className="lg:col-span-4 space-y-12" id="footer-location-column">
            <div>
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-white/40 uppercase block">
                LOCATION
              </span>
              <p className="font-sans text-base sm:text-lg font-bold text-white leading-snug mt-4 max-w-[280px]">
                No. 152 Thatcher Road, New York, NY 10012
              </p>
            </div>

            {/* Circular badge - rotating */}
            <div className="relative w-40 h-40 select-none" id="footer-circular-badge">
              {/* Rotating outer text */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="font-mono text-[6.5px] font-bold tracking-[0.16em] fill-white/50 uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      AWARD WINNING AGENCY - SINCE 2022 -
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Inner stationary/accent shape - cp9 logo mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center relative">
                  {/* Geometric cp9 icon logo */}
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    {/* Diagonal Pill */}
                    <div className="absolute w-6 h-2 rounded-full border border-white bg-transparent rotate-[135deg] translate-x-[2px] -translate-y-[2px]" />
                    {/* Small square outlines */}
                    <div className="absolute w-2.5 h-2.5 border border-white rounded-[2px] top-1 left-1" />
                    <div className="absolute w-2.5 h-2.5 border border-white rounded-[2px] bottom-1 right-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: INQUIRY & LINKS */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-4" id="footer-inquiry-links-column">
            {/* Inquiry */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-white/40 uppercase block">
                INQUIRY
              </span>
              <div className="space-y-1.5 pt-1">
                <a href="mailto:hello@cp9.agency" className="font-sans text-base sm:text-lg font-bold text-white hover:text-white/80 transition-colors block">
                  hello@cp9.agency
                </a>
                <a href="tel:+0278346236" className="font-sans text-base sm:text-lg font-bold text-white hover:text-white/80 transition-colors block">
                  +0278346236
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-white/40 uppercase block">
                LINKS
              </span>
              <ul className="space-y-3 pt-1">
                {['About', 'Work', 'News', 'Privacy', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="font-sans text-sm text-white/50 hover:text-white font-medium transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: LOGO, EMPOWER TEXT, SOCIALS & NEWSLETTER */}
          <div className="lg:col-span-4 space-y-10" id="footer-newsletter-column">
            {/* Logo and brief */}
            <div className="space-y-4">
              {/* cp9 logo */}
              <div className="font-sans text-3xl font-black tracking-tight text-white select-none">
                cp9
              </div>
              <p className="font-sans text-sm font-light text-white/50 leading-relaxed max-w-sm">
                We hope to <span className="text-white font-medium">empower</span> user and simplify their everyday lives
              </p>
            </div>

            {/* Social icons row */}
            <div className="flex items-center gap-3">
              {[
                { name: 'X', label: 'X', icon: <span className="font-sans text-xs font-semibold">𝕏</span> },
                { name: 'Dribbble', label: 'Dribbble', icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.37c-.383-1.007-1.127-2.825-3.08-4.225-.262-.187-.525-.363-.8-.525.074-.187.15-.387.212-.587 1.05-3.113.125-5.388.087-5.476l-.375-.85-.75.563c-.113.088-2.125 1.637-2.813 4.412a14.7 14.7 0 0 0-.75 2.5 17.5 17.5 0 0 0-4.837-1.075c-.2-.012-.4-.012-.6-.012-1.925.013-4.137.45-5.962 1.938l-.688.562.488.75c.1.15 1.5 2.225 4.312 3.013.238.063.488.125.738.175-.15.425-.288.85-.413 1.287-1.037 3.563-1.912 8.35-.112 8.788l.85.2.113-.863c.012-.087.675-4.525 1.562-7.85 1.513.388 3.125.6 4.775.613.113 0 .225 0 .338-.012 3.163-.088 5.613-2.025 5.737-2.125l.7-.563-.487-.763zm-5.113-1.463c1.613 1.15 2.2 2.65 2.45 3.375a9.8 9.8 0 0 1-4.113 2.7c-.125-.325-.262-.663-.412-1-.875-2.025-2.013-3.95-3.325-5.638 1.937-.025 3.737.5 5.4 1.563z" />
                  </svg>
                )},
                { name: 'Instagram', label: 'Instagram', icon: (
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                )},
                { name: 'Behance', label: 'Bē', icon: <span className="font-sans text-xs font-bold leading-none tracking-tighter">Bē</span> }
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={`#${soc.name.toLowerCase()}`}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300"
                  aria-label={soc.name}
                >
                  {soc.icon}
                </a>
              ))}
            </div>

            {/* Newsletter form */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white/90">
                <Mail className="w-4 h-4 text-white/60" />
                <span className="font-sans text-sm font-bold tracking-tight">Newsletter</span>
              </div>

              {newsletterSuccess ? (
                <div className="text-emerald-400 text-xs font-sans font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-lg">
                  Subscribed successfully! Thank you.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  {/* Form Input Container */}
                  <div className="relative flex items-center w-full max-w-sm rounded-xl border border-white/10 bg-[#050508]/80 px-4 py-1.5 focus-within:border-white/25 transition-all duration-200">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Your email"
                      disabled={newsletterSubmitting}
                      className="w-full bg-transparent border-none text-sm text-white placeholder-white/20 focus:outline-none py-2 pr-12 pl-1 disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={newsletterSubmitting}
                      className="absolute right-1.5 top-1.5 bottom-1.5 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors duration-200 cursor-pointer disabled:bg-zinc-700 disabled:text-zinc-500"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  {newsletterError && (
                    <p className="text-red-400 font-sans text-xs font-semibold">{newsletterError}</p>
                  )}
                </form>
              )}

              <p className="font-sans text-xs text-white/30 font-light">
                By subscribing, you&apos;re accept our Policy
              </p>
            </div>
          </div>

        </div>

        {/* Bottom footer bar */}
        <div className="w-full border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-white/40 text-xs tracking-wider relative" id="footer-bottom-bar">
          <div className="font-sans font-bold text-white/90">
            © 2026 cp9. All Rights Reserved
          </div>

          {/* Scroll to Top Chevron container */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-[30px] hidden sm:block">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-14 h-14 rounded-full border border-white/10 bg-black flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer group shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
              aria-label="Scroll to top"
            >
              <div className="flex flex-col items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
            </button>
          </div>

          <div className="font-sans font-medium text-white/40">
            New York, USA
          </div>
        </div>
      </footer>

      {/* FULL-SCREEN OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-6 md:p-12 lg:p-16"
          >
            {/* Overlay Header */}
            <div className="flex justify-between items-center w-full">
              <div className="text-sm tracking-widest uppercase text-white/40">
                Menu
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-white/10 transition-colors cursor-pointer focus:outline-none"
                aria-label="Close Menu"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col gap-4 my-auto">
              {['Home', 'Projects', 'Service', 'About', 'Contact'].map((item, index) => (
                <div key={item} className="overflow-hidden">
                  <motion.button
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={() => {
                      if (navItems.includes(item)) {
                        setActiveTab(item);
                      }
                      setMenuOpen(false);
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white/60 hover:text-white transition-colors py-2 text-left focus:outline-none block"
                  >
                    {item}
                  </motion.button>
                </div>
              ))}
            </div>

            {/* Overlay Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 w-full border-t border-white/10 pt-6 text-white/40 text-xs tracking-wider">
              <div>
                <p>© 2026 CREATIVE AGENCY. ALL RIGHTS RESERVED.</p>
              </div>
              <div className="flex gap-6">
                <a href="#privacy" className="hover:text-white transition-colors">PRIVACY POLICY</a>
                <a href="#terms" className="hover:text-white transition-colors">TERMS OF USE</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
