import { useEffect, useRef, useState } from 'react';

// Property Data
const houses = [
  {
    id: 1,
    title: 'آپارتمان مدرن ولنجک',
    location: 'تهران، ولنجک',
    price: '۱۲,۵۰۰,۰۰۰,۰۰۰',
    area: '۱۸۰',
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    floor: '۵',
    land: '',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
    features: ['کابینت MDF', 'کف سرامیک', 'ویو کوهستان'],
    advisor: 'علی محمدی',
    advisorPhone: '09121234567'
  },
  {
    id: 2,
    title: 'پنت‌هاوس لوکس الهیه',
    location: 'تهران، الهیه',
    price: '۴۵,۰۰۰,۰۰۰,۰۰۰',
    area: '۳۲۰',
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    floor: '۱۲',
    land: '',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
    features: ['استخر اختصاصی', 'تراس بزرگ', 'لابی مجلل'],
    advisor: 'سارا احمدی',
    advisorPhone: '09122345678'
  },
  {
    id: 3,
    title: 'آپارتمان نوساز سعادت‌آباد',
    location: 'تهران، سعادت‌آباد',
    price: '۸,۹۰۰,۰۰۰,۰۰۰',
    area: '۱۴۰',
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    floor: '۸',
    land: '',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    features: ['هوشمند', 'آسانسور اختصاصی', 'انباری'],
    advisor: 'رضا کریمی',
    advisorPhone: '09123456789'
  }
];

const villas = [
  {
    id: 4,
    title: 'ویلای جنگلی نوشهر',
    location: 'مازندران، نوشهر',
    price: '۱۸,۰۰۰,۰۰۰,۰۰۰',
    area: '۵۰۰',
    bedrooms: 5,
    bathrooms: 4,
    parking: 3,
    floor: '',
    land: '۱۰۰۰',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop',
    features: ['استخر', 'باغ بزرگ', 'ویو جنگل'],
    advisor: 'مهدی حسینی',
    advisorPhone: '09111234567'
  },
  {
    id: 5,
    title: 'ویلای ساحلی رامسر',
    location: 'گیلان، رامسر',
    price: '۲۵,۰۰۰,۰۰۰,۰۰۰',
    area: '۶۵۰',
    bedrooms: 6,
    bathrooms: 5,
    parking: 4,
    floor: '',
    land: '۱۵۰۰',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
    features: ['ساحل اختصاصی', 'جکوزی', 'سونا'],
    advisor: 'فاطمه رضایی',
    advisorPhone: '09112345678'
  },
  {
    id: 6,
    title: 'ویلای دماوند لوکس',
    location: 'تهران، دماوند',
    price: '۳۲,۰۰۰,۰۰۰,۰۰۰',
    area: '۸۰۰',
    bedrooms: 7,
    bathrooms: 6,
    parking: 5,
    floor: '',
    land: '۲۰۰۰',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop',
    features: ['ویو کوهستان', 'سالن ورزش', 'سینما خانگی'],
    advisor: 'امیر نوری',
    advisorPhone: '09113456789'
  }
];

type Property = typeof houses[0];

// Intersection Observer Hook
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Particles Component
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 4}s`,
    size: `${2 + Math.random() * 4}px`
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size
          }}
        />
      ))}
    </div>
  );
}

// Hero Section
function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      <Particles />
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0 perspective-container">
        <div
          className="absolute top-20 right-20 w-32 h-32 md:w-64 md:h-64 rounded-full opacity-10"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) rotateX(${mousePos.y * 0.2}deg) rotateY(${mousePos.x * 0.2}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div
          className="absolute bottom-20 left-20 w-48 h-48 md:w-96 md:h-96 rounded-full opacity-5"
          style={{
            background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
            transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 md:w-48 md:h-48 rounded-lg opacity-10"
          style={{
            background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
            transform: `translate(-50%, -50%) translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px) rotateZ(${mousePos.x * 0.1}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        <div className="float-3d">
          {/* 3D Building Icon */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center glow pulse-3d"
                style={{
                  transform: `rotateY(${mousePos.x * 0.3}deg) rotateX(${mousePos.y * -0.3}deg)`,
                  transition: 'transform 0.3s ease-out'
                }}>
                <i className="fas fa-building text-3xl md:text-5xl text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full animate-ping opacity-75" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text">
            <span className="gradient-text">املاک لوکس</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            خانه و ویلای رویایی خود را پیدا کنید
          </p>
          <p className="text-sm md:text-base text-gray-500 mb-10 max-w-xl mx-auto">
            با بهترین مشاورین املاک، مسیر رسیدن به خانه ایده‌آل شما را هموار می‌کنیم
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#houses" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-bold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 tilt-3d">
              <i className="fas fa-search ml-2" />
              مشاهده املاک
            </a>
            <a href="#contact" className="px-8 py-4 glass rounded-xl text-white font-bold hover:scale-105 transition-all duration-300 hover:bg-white/10 tilt-3d">
              <i className="fas fa-phone ml-2" />
              تماس با ما
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-indigo-400 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-indigo-400 rounded-full animate-pulse" />
          </div>
          <p className="text-xs text-gray-500 mt-2">اسکرول کنید</p>
        </div>
      </div>
    </section>
  );
}

// Property Card Component
function PropertyCard({ property, index, type }: { property: Property; index: number; type: 'house' | 'villa' }) {
  const { ref, isVisible } = useScrollAnimation();
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const animClass = index % 3 === 0 ? 'animate-slide-right' : index % 3 === 1 ? 'animate-slide-up' : 'animate-slide-left';

  return (
    <>
      <div
        ref={ref}
        className={`perspective-container ${isVisible ? animClass : 'opacity-0'}`}
        style={{ animationDelay: `${index * 0.2}s` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`card-3d glass rounded-2xl overflow-hidden ${isHovered ? 'glow' : ''}`}>
          {/* Image */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Price Badge */}
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-sm font-bold shadow-lg">
              {property.price} تومان
            </div>

            {/* Type Badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg text-xs text-gray-300">
              {type === 'house' ? '🏠 آپارتمان' : '🏡 ویلا'}
            </div>

            {/* Location */}
            <div className="absolute bottom-4 right-4 text-white">
              <p className="font-bold text-lg">{property.title}</p>
              <p className="text-gray-300 text-sm flex items-center gap-1">
                <i className="fas fa-map-marker-alt text-indigo-400" />
                {property.location}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="p-5">
            {/* Specs Grid */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="text-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <i className="fas fa-bed text-indigo-400 text-lg mb-1 block" />
                <p className="text-xs text-gray-400">خواب</p>
                <p className="font-bold text-sm">{property.bedrooms}</p>
              </div>
              <div className="text-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <i className="fas fa-bath text-purple-400 text-lg mb-1 block" />
                <p className="text-xs text-gray-400">سرویس</p>
                <p className="font-bold text-sm">{property.bathrooms}</p>
              </div>
              <div className="text-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <i className="fas fa-ruler-combined text-cyan-400 text-lg mb-1 block" />
                <p className="text-xs text-gray-400">متراژ</p>
                <p className="font-bold text-sm">{property.area}m²</p>
              </div>
              <div className="text-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                {type === 'house' ? (
                  <>
                    <i className="fas fa-layer-group text-pink-400 text-lg mb-1 block" />
                    <p className="text-xs text-gray-400">طبقه</p>
                    <p className="font-bold text-sm">{property.floor}</p>
                  </>
                ) : (
                  <>
                    <i className="fas fa-tree text-green-400 text-lg mb-1 block" />
                    <p className="text-xs text-gray-400">زمین</p>
                    <p className="font-bold text-sm">{property.land}m²</p>
                  </>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {property.features.map((feature, i) => (
                <span key={i} className="px-2 py-1 text-xs bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/30">
                  {feature}
                </span>
              ))}
            </div>

            {/* Parking */}
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
              <i className="fas fa-car text-gray-500" />
              <span>پارکینگ: {property.parking} عدد</span>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setShowModal(true)}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <i className="fas fa-headset ml-2" />
              ارتباط با مشاور
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative glass rounded-2xl p-6 md:p-8 max-w-md w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <i className="fas fa-times" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <i className="fas fa-user-tie text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-1">مشاور شما</h3>
              <p className="text-indigo-400 font-bold text-lg">{property.advisor}</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <i className="fas fa-phone text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">شماره تماس</p>
                  <p className="font-bold" dir="ltr">{property.advisorPhone}</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <i className="fas fa-home text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">ملک مورد نظر</p>
                  <p className="font-bold text-sm">{property.title}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`tel:${property.advisorPhone}`}
                className="flex-1 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-bold text-center hover:scale-105 transition-transform"
              >
                <i className="fas fa-phone ml-2" />
                تماس
              </a>
              <a
                href={`https://wa.me/98${property.advisorPhone.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-gradient-to-r from-green-700 to-green-600 rounded-xl text-white font-bold text-center hover:scale-105 transition-transform"
              >
                <i className="fab fa-whatsapp ml-2" />
                واتساپ
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Houses Section
function HousesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="houses" className="relative min-h-screen py-20 md:py-32 gradient-bg overflow-hidden">
      <Particles />
      
      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-4 md:px-8 ${isVisible ? 'scroll-section active' : 'scroll-section'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 glass rounded-full text-sm text-indigo-300">
              <i className="fas fa-building ml-2" />
              آپارتمان‌ها
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">آپارتمان‌های ویژه</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            بهترین آپارتمان‌های تهران با موقعیت مکانی عالی و امکانات بی‌نظیر
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {houses.map((house, index) => (
            <PropertyCard key={house.id} property={house} index={index} type="house" />
          ))}
        </div>
      </div>

      {/* Decorative 3D Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-indigo-500/20 rounded-lg rotate-45 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-purple-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
    </section>
  );
}

// Villas Section
function VillasSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="villas" className="relative min-h-screen py-20 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a3e 50%, #0a1628 100%)' }}>
      <Particles />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-4 md:px-8 ${isVisible ? 'scroll-section active' : 'scroll-section'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 glass rounded-full text-sm text-purple-300">
              <i className="fas fa-tree ml-2" />
              ویلاها
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">ویلاهای لوکس</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            ویلاهای رویایی در بهترین مناطق شمال کشور با امکانات استثنایی
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {villas.map((villa, index) => (
            <PropertyCard key={villa.id} property={villa} index={index} type="villa" />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-xl" />
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-full blur-xl" />
    </section>
  );
}

// Contact Section
function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 md:py-32 gradient-bg overflow-hidden">
      <Particles />

      <div ref={ref} className={`relative z-10 max-w-6xl mx-auto px-4 md:px-8 ${isVisible ? 'scroll-section active' : 'scroll-section'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 glass rounded-full text-sm text-cyan-300">
              <i className="fas fa-envelope ml-2" />
              تماس با ما
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">با ما در ارتباط باشید</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            برای مشاوره رایگان و دریافت اطلاعات بیشتر با ما تماس بگیرید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-6 md:p-8 tilt-3d">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-paper-plane text-indigo-400" />
              فرم درخواست مشاوره
            </h3>

            {submitted ? (
              <div className="text-center py-12 animate-scale-in">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <i className="fas fa-check text-green-400 text-2xl" />
                </div>
                <p className="text-green-400 font-bold text-lg">درخواست شما ثبت شد!</p>
                <p className="text-gray-400 text-sm mt-2">به زودی با شما تماس خواهیم گرفت</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="نام خود را وارد کنید"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">شماره تماس</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">پیام شما</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all h-32 resize-none"
                    placeholder="در مورد ملک مورد نظرتان بنویسید..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <i className="fas fa-paper-plane ml-2" />
                  ارسال درخواست
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 tilt-3d">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <i className="fas fa-phone text-indigo-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">تلفن تماس</p>
                  <p className="font-bold text-lg" dir="ltr">021-88776655</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 tilt-3d">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">آدرس دفتر</p>
                  <p className="font-bold">تهران، ولنجک، خیابان دانشگاه، پلاک ۱۲</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 tilt-3d">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <i className="fas fa-clock text-cyan-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">ساعات کاری</p>
                  <p className="font-bold">شنبه تا پنجشنبه | ۹ صبح تا ۹ شب</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 tilt-3d">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                  <i className="fas fa-envelope text-pink-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">ایمیل</p>
                  <p className="font-bold" dir="ltr">info@luxury-realty.ir</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass rounded-2xl p-6">
              <p className="text-sm text-gray-400 mb-3">ما را در شبکه‌های اجتماعی دنبال کنید</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-indigo-500/30 transition-colors">
                  <i className="fab fa-instagram text-lg" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-500/30 transition-colors">
                  <i className="fab fa-telegram text-lg" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-green-500/30 transition-colors">
                  <i className="fab fa-whatsapp text-lg" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-500/30 transition-colors">
                  <i className="fab fa-youtube text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-20 border-t border-white/10 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          © ۱۴۰۳ املاک لوکس | تمامی حقوق محفوظ است
        </p>
      </div>
    </section>
  );
}

// Navbar
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <i className="fas fa-building text-white" />
          </div>
          <span className="font-bold text-lg hidden sm:block">املاک لوکس</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">خانه</a>
          <a href="#houses" className="text-sm text-gray-300 hover:text-white transition-colors">آپارتمان‌ها</a>
          <a href="#villas" className="text-sm text-gray-300 hover:text-white transition-colors">ویلاها</a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">تماس</a>
        </div>

        <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-sm font-bold hover:scale-105 transition-transform">
          مشاوره رایگان
        </a>
      </div>
    </nav>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-['Vazirmatn']" dir="rtl">
      <Navbar />
      <HeroSection />
      <HousesSection />
      <VillasSection />
      <ContactSection />
    </div>
  );
}
