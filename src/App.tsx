import { motion } from 'motion/react';
import { 
  Milk, 
  Users, 
  Banknote, 
  BarChart3, 
  Download,
  CheckCircle2,
  Menu,
  X,
  ChevronDown,
  AlertTriangle,
  Mail,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState, useRef } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do I register my dairy?",
      a: "Simply download the app, enter your phone number, verify with OTP, and set up your dairy profile in less than 2 minutes."
    },
    {
      q: "How do I enter daily milk records?",
      a: "Go to the 'Daily Log' tab, select a customer, and enter the total milk quantity for the day. It saves instantly."
    },
    {
      q: "Can I track pending payments?",
      a: "Yes! The app automatically calculates monthly bills based on your daily entries and tracks who has paid and who has pending dues."
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. Your data is securely backed up in the cloud. Even if you lose your phone, you can log in on a new device and restore everything."
    },
    {
      q: "Which devices are supported?",
      a: "Currently, Dairy Khaata is available for Android devices (Android 8.0 and above). iOS version is coming soon!"
    }
  ];

  const screenshots = [
    '/shots/1.png',
    '/shots/2.png',
    '/shots/3.png',
    '/shots/4.png',
    '/shots/5.png'
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300; // Approximate width of one screenshot
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src="/icon.png" alt="Dairy Khaata Logo" className="w-10 h-10 rounded-xl shadow-sm" />
              <span className="text-xl font-bold tracking-tight">Dairy Khaata</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How it Works</a>
              <a href="#screenshots" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Screenshots</a>
              <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">FAQ</a>
              <a 
                href="https://expo.dev/artifacts/eas/dK7AZcwtv8AJJE9DAYogSe.apk" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414C17.523 16.1428 16.8837 16.7937 16.0963 16.7937C15.3089 16.7937 14.6696 16.1428 14.6696 15.3414C14.6696 14.54 15.3089 13.8891 16.0963 13.8891C16.8837 13.8891 17.523 14.54 17.523 15.3414ZM9.33037 15.3414C9.33037 16.1428 8.69106 16.7937 7.90367 16.7937C7.11628 16.7937 6.47697 16.1428 6.47697 15.3414C6.47697 14.54 7.11628 13.8891 7.90367 13.8891C8.69106 13.8891 9.33037 14.54 9.33037 15.3414ZM17.9175 7.4216L19.7892 4.17935C19.914 3.9632 19.8391 3.68778 19.6229 3.56299C19.4068 3.4382 19.1314 3.51307 19.0066 3.72922L17.1092 7.01569C15.5866 6.3292 13.8519 5.92969 12 5.92969C10.1481 5.92969 8.41341 6.3292 6.89082 7.01569L4.99342 3.72922C4.86863 3.51307 4.59321 3.4382 4.37706 3.56299C4.16091 3.68778 4.08604 3.9632 4.21083 4.17935L6.0825 7.4216C2.61208 9.31899 0.234375 12.8755 0.234375 17.0281H23.7656C23.7656 12.8755 21.3879 9.31899 17.9175 7.4216Z" />
                </svg>
                Download APK
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">Features</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">How it Works</a>
            <a href="#screenshots" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">Screenshots</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">FAQ</a>
            <a href="https://expo.dev/artifacts/eas/dK7AZcwtv8AJJE9DAYogSe.apk" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="mt-4 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl text-base font-medium hover:bg-indigo-700 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414C17.523 16.1428 16.8837 16.7937 16.0963 16.7937C15.3089 16.7937 14.6696 16.1428 14.6696 15.3414C14.6696 14.54 15.3089 13.8891 16.0963 13.8891C16.8837 13.8891 17.523 14.54 17.523 15.3414ZM9.33037 15.3414C9.33037 16.1428 8.69106 16.7937 7.90367 16.7937C7.11628 16.7937 6.47697 16.1428 6.47697 15.3414C6.47697 14.54 7.11628 13.8891 7.90367 13.8891C8.69106 13.8891 9.33037 14.54 9.33037 15.3414ZM17.9175 7.4216L19.7892 4.17935C19.914 3.9632 19.8391 3.68778 19.6229 3.56299C19.4068 3.4382 19.1314 3.51307 19.0066 3.72922L17.1092 7.01569C15.5866 6.3292 13.8519 5.92969 12 5.92969C10.1481 5.92969 8.41341 6.3292 6.89082 7.01569L4.99342 3.72922C4.86863 3.51307 4.59321 3.4382 4.37706 3.56299C4.16091 3.68778 4.08604 3.9632 4.21083 4.17935L6.0825 7.4216C2.61208 9.31899 0.234375 12.8755 0.234375 17.0281H23.7656C23.7656 12.8755 21.3879 9.31899 17.9175 7.4216Z" />
              </svg>
              Download APK
            </a>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          {/* Mobile Video Background */}
          <div className="absolute inset-0 z-0 md:hidden">
            <div className="absolute inset-0 bg-slate-900/65 z-10" />
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              {/* Replace this src with your uploaded video path if needed */}
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Desktop Background */}
          <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-slate-50 -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-6 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/90 md:bg-indigo-50 backdrop-blur-sm text-indigo-700 text-sm font-medium mb-6 border border-indigo-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  v1.0 Available Now
                </div>
                <h1 className="text-5xl sm:text-6xl font-extrabold text-white md:text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Manage your dairy business <span className="text-indigo-300 md:text-indigo-600">with ease.</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-200 md:text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  The complete digital khaata for dairy owners. Register yourself, manage customers, record daily milk entries, and track payments seamlessly from your phone.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a 
                    href="https://expo.dev/artifacts/eas/dK7AZcwtv8AJJE9DAYogSe.apk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/20 md:shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414C17.523 16.1428 16.8837 16.7937 16.0963 16.7937C15.3089 16.7937 14.6696 16.1428 14.6696 15.3414C14.6696 14.54 15.3089 13.8891 16.0963 13.8891C16.8837 13.8891 17.523 14.54 17.523 15.3414ZM9.33037 15.3414C9.33037 16.1428 8.69106 16.7937 7.90367 16.7937C7.11628 16.7937 6.47697 16.1428 6.47697 15.3414C6.47697 14.54 7.11628 13.8891 7.90367 13.8891C8.69106 13.8891 9.33037 14.54 9.33037 15.3414ZM17.9175 7.4216L19.7892 4.17935C19.914 3.9632 19.8391 3.68778 19.6229 3.56299C19.4068 3.4382 19.1314 3.51307 19.0066 3.72922L17.1092 7.01569C15.5866 6.3292 13.8519 5.92969 12 5.92969C10.1481 5.92969 8.41341 6.3292 6.89082 7.01569L4.99342 3.72922C4.86863 3.51307 4.59321 3.4382 4.37706 3.56299C4.16091 3.68778 4.08604 3.9632 4.21083 4.17935L6.0825 7.4216C2.61208 9.31899 0.234375 12.8755 0.234375 17.0281H23.7656C23.7656 12.8755 21.3879 9.31899 17.9175 7.4216Z" />
                    </svg>
                    Download APK
                  </a>
                  <a 
                    href="#features" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 md:bg-white text-white md:text-slate-700 backdrop-blur-md px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 md:hover:bg-slate-50 transition-all border border-white/20 md:border-slate-200 shadow-sm hover:shadow"
                  >
                    Explore Features
                  </a>
                </div>
                
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-300 md:text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 md:text-emerald-500" />
                    Free to use
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 md:text-emerald-500" />
                    Secure Data
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden md:block lg:col-span-6 mt-16 lg:mt-0 relative"
              >
                {/* Abstract Phone Mockup representation */}
                <div className="relative mx-auto w-full max-w-[320px] aspect-[1/2.1] bg-slate-900 rounded-[3rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden ring-1 ring-slate-900/5">
                  <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 z-20 rounded-b-3xl w-1/2 mx-auto" />
                  
                  {/* App UI Mockup */}
                  <div className="absolute inset-0 bg-slate-50 flex flex-col pt-12">
                    {/* Header */}
                    <div className="px-6 pb-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">Quick Stats</h3>
                          <p className="text-xs text-slate-500">Today at a glance</p>
                        </div>
                        <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm border border-slate-100 bg-white flex-shrink-0">
                          <img src="/icon.png" alt="App Icon" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      
                      {/* Stats Card */}
                      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-4 flex gap-4 items-center">
                        <div className="w-16 h-16 rounded-full border-4 border-indigo-100 border-t-indigo-500 flex items-center justify-center">
                          <span className="font-bold text-slate-900">5/5</span>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total Volume</p>
                          <p className="text-lg font-bold text-slate-900">120.5L</p>
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                        <p className="text-xs text-orange-600 font-medium uppercase tracking-wider">Pending Bills</p>
                        <p className="text-lg font-bold text-orange-900">₹4,500</p>
                      </div>
                    </div>
                    
                    {/* List */}
                    <div className="flex-1 bg-white rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] px-6 pt-6">
                      <h4 className="font-bold text-slate-900 mb-4">Daily Log</h4>
                      <div className="space-y-4">
                        {[
                          { name: 'Aman Dhiman', amount: '5.0L', status: 'done' },
                          { name: 'Deepa', amount: '2.5L', status: 'done' },
                          { name: 'Deepchand', amount: '10.0L', status: 'done' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
                                {item.name[0]}
                              </div>
                              <div>
                                <p className="text-sm font-bold text-slate-900">{item.name}</p>
                                <p className="text-xs text-slate-500">{item.amount}</p>
                              </div>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-400/20 blur-3xl rounded-full -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to run your dairy</h2>
              <p className="text-lg text-slate-600">Replace your paper registers with a secure, easy-to-use digital khaata designed specifically for dairy owners.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Customer Management',
                  description: 'Add and manage all your customers in one place. Keep track of active and closed accounts easily.'
                },
                {
                  icon: Milk,
                  title: 'Daily Milk Entries',
                  description: 'Record daily milk quantities quickly. View daily logs and historical data.'
                },
                {
                  icon: Banknote,
                  title: 'Payment Tracking',
                  description: 'Generate bills automatically based on milk entries. Track pending payments and clear dues.'
                },
                {
                  icon: BarChart3,
                  title: 'Quick Stats',
                  description: 'Get a daily glance at total volume delivered and pending bills right on your home screen.'
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Simple to use, powerful results</h2>
              <p className="text-lg text-slate-600">Get started in minutes and transform how you manage your daily dairy operations.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Register your dairy', desc: 'Sign up securely using your phone number or Google account.' },
                { step: '02', title: 'Add your customers', desc: 'Enter customer details and set their per-liter milk rates.' },
                { step: '03', title: 'Log daily entries', desc: 'Simply tap on a customer to add their daily total milk quantity.' },
                { step: '04', title: 'Collect payments', desc: 'View generated bills and mark them as paid when you receive the money.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Screenshots Slider */}
        <section id="screenshots" className="py-24 bg-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See Dairy Khaata in action</h2>
                <p className="text-lg text-slate-400">A clean, intuitive interface designed specifically for your daily dairy operations.</p>
              </div>
              
              {/* Slider Controls (Desktop) */}
              <div className="hidden md:flex gap-3">
                <button 
                  onClick={() => scrollSlider('left')}
                  className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-colors border border-slate-700"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => scrollSlider('right')}
                  className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-colors border border-slate-700"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Slider Container */}
            <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
              <div 
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {screenshots.map((src, index) => (
                  <div 
                    key={index} 
                    className="flex-none w-[280px] sm:w-[320px] snap-center"
                  >
                    <div className="relative aspect-[1/2.1] rounded-[2.5rem] bg-slate-800 p-2 shadow-2xl border border-slate-700/50">
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2.5rem] -z-10 blur-xl opacity-50" />
                      <img 
                        src={src} 
                        alt={`App screenshot ${index + 1}`} 
                        className="w-full h-full object-cover rounded-[2rem] bg-slate-900"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beta Notice Section */}
        <section className="py-16 bg-amber-50 border-y border-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">First Launch Notice</h3>
                <p className="text-amber-800 leading-relaxed">
                  Dairy Khaata is currently in its first launch phase. While we've worked hard to make it stable, you might encounter some bugs. If you find any issues or have suggestions, please reach out to us at <a href="mailto:yadavmanu57@gmail.com" className="font-bold underline">yadavmanu57@gmail.com</a>. Your feedback helps us improve!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">Everything you need to know about the app and how it works.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-indigo-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${openFaq === i ? 'rotate-180 text-indigo-600' : ''}`} 
                    />
                  </button>
                  
                  {/* Expandable answer */}
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="py-24 bg-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to digitize your dairy?</h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Join other dairy owners who have simplified their daily operations with Dairy Khaata. Download the APK directly to your Android device.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://expo.dev/artifacts/eas/dK7AZcwtv8AJJE9DAYogSe.apk" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414C17.523 16.1428 16.8837 16.7937 16.0963 16.7937C15.3089 16.7937 14.6696 16.1428 14.6696 15.3414C14.6696 14.54 15.3089 13.8891 16.0963 13.8891C16.8837 13.8891 17.523 14.54 17.523 15.3414ZM9.33037 15.3414C9.33037 16.1428 8.69106 16.7937 7.90367 16.7937C7.11628 16.7937 6.47697 16.1428 6.47697 15.3414C6.47697 14.54 7.11628 13.8891 7.90367 13.8891C8.69106 13.8891 9.33037 14.54 9.33037 15.3414ZM17.9175 7.4216L19.7892 4.17935C19.914 3.9632 19.8391 3.68778 19.6229 3.56299C19.4068 3.4382 19.1314 3.51307 19.0066 3.72922L17.1092 7.01569C15.5866 6.3292 13.8519 5.92969 12 5.92969C10.1481 5.92969 8.41341 6.3292 6.89082 7.01569L4.99342 3.72922C4.86863 3.51307 4.59321 3.4382 4.37706 3.56299C4.16091 3.68778 4.08604 3.9632 4.21083 4.17935L6.0825 7.4216C2.61208 9.31899 0.234375 12.8755 0.234375 17.0281H23.7656C23.7656 12.8755 21.3879 9.31899 17.9175 7.4216Z" />
                </svg>
                Download APK for Android
              </a>
            </div>
            <p className="mt-6 text-sm text-indigo-200">
              Requires Android 8.0 or higher. iOS version coming soon!
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 text-white mb-4">
                <img src="/icon.png" alt="Dairy Khaata Logo" className="w-8 h-8 rounded-lg shadow-sm" />
                <span className="text-xl font-bold tracking-tight">Dairy Khaata</span>
              </div>
              <p className="text-sm max-w-sm mb-6">
                The complete digital solution for dairy owners to manage customers, milk entries, and payments effortlessly.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#download" className="hover:text-white transition-colors">Download App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> yadavmanu57@gmail.com</li>
                <li>+91 8891997373</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Dairy Khaata. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
