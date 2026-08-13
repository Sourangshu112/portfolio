'use client'
import React, { useState, useRef, useEffect } from 'react';
import machanImage1 from "./images/machan_image_1.jpg";
import machanImage2 from "./images/machan_image_2.jpg";
import machanImage3 from "./images/machan_image_3.jpg";
import machanImage4 from "./images/machan_image_4.jpg";
import Image from 'next/image';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const carouselRef = useRef(null);

  // SCROLL ANIMATION OBSERVER
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adds the 'important' Tailwind classes to override the initial hidden states
            entry.target.classList.add('!opacity-100', '!translate-y-0', '!translate-x-0', '!scale-100');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.85; 
      carouselRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 120, 
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false); 
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 overflow-x-hidden">
      
      {/* 1. TOP OFFER BANNER */}
      <div className="fixed top-0 w-full z-[60] bg-gray-900 text-amber-400 text-center py-2 px-4 text-sm font-semibold tracking-wide shadow-md flex items-center justify-center gap-2">
        <span className="animate-pulse">✨</span>
        <span>SPECIAL OFFER: Buy 1 Get 1 Free on all Main Courses this Weekend!</span>
        <span className="animate-pulse">✨</span>
      </div>

      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 top-9 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="shrink-0 flex items-center group cursor-pointer">
              <span className="font-serif text-2xl font-bold tracking-wider uppercase group-hover:text-amber-600 transition-colors duration-300">Machan</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" onClick={handleNavClick} className="relative text-gray-600 hover:text-amber-600 transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-600 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">Home</a>
              <a href="#menu" onClick={handleNavClick} className="relative text-gray-600 hover:text-amber-600 transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-600 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">Menu</a>
              <a href="#reviews" onClick={handleNavClick} className="relative text-gray-600 hover:text-amber-600 transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-600 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">Reviews</a>
              <a href="#about" onClick={handleNavClick} className="relative text-gray-600 hover:text-amber-600 transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-600 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">About Us</a>
              <a href="#contact" onClick={handleNavClick} className="relative text-gray-600 hover:text-amber-600 transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-600 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">Contact</a>
              <a href="#reservations" onClick={handleNavClick} className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300">
                Order Now
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-amber-600 transition-colors focus:outline-none">
                <svg className="h-6 w-6 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden bg-white shadow-lg px-4 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0'}`}>
          <a href="#home" onClick={handleNavClick} className="block text-gray-600 hover:text-amber-600 hover:pl-2 transition-all duration-300 py-2">Home</a>
          <a href="#menu" onClick={handleNavClick} className="block text-gray-600 hover:text-amber-600 hover:pl-2 transition-all duration-300 py-2">Menu</a>
          <a href="#reviews" onClick={handleNavClick} className="block text-gray-600 hover:text-amber-600 hover:pl-2 transition-all duration-300 py-2">Reviews</a>
          <a href="#about" onClick={handleNavClick} className="block text-gray-600 hover:text-amber-600 hover:pl-2 transition-all duration-300 py-2">About Us</a>
          <a href="#contact" onClick={handleNavClick} className="block text-gray-600 hover:text-amber-600 hover:pl-2 transition-all duration-300 py-2">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={machanImage4} 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover transform scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 animate-[fadeIn_1.5s_ease-out]">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg">MACHAN WELCOMES YOU</h1>
          <div className="text-lg md:text-xl text-gray-200 mb-10 font-light h-10"></div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#reservations" onClick={handleNavClick} className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-700 hover:shadow-[0_0_15px_rgba(217,119,6,0.5)] transform hover:-translate-y-1 transition-all duration-300">
              Book a Table
            </a>
            <a href="#menu" onClick={handleNavClick} className="bg-white/10 backdrop-blur-md text-white border border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300">
              View Menu
            </a>
          </div>
        </div>
      </section>

      {/* QUICK INFO & SOCIAL PROOF */}
      <section className="bg-gray-900 text-gray-300 py-12 relative overflow-hidden group">
        <div className="absolute inset-0 bg-amber-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-in-out"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
            {/* Scroll reveal: Slide up */}
            <div className="reveal opacity-0 translate-y-12 transition-all duration-700 ease-out p-4 transform hover:scale-105">
              <h3 className="text-amber-500 font-serif text-xl mb-2">Hours</h3>
              <p>Mon-Sun: 11am - 11pm</p>
            </div>
            {/* Scroll reveal: Slide up with delay */}
            <div className="reveal opacity-0 translate-y-12 transition-all duration-700 delay-200 ease-out p-4 transform hover:scale-105">
              <h3 className="text-amber-500 font-serif text-xl mb-2">Location</h3>
              <p>Near BSF Camp More, Narayanpur</p>
              <p>Malda 732141</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 group reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 transform group-hover:scale-105 transition-transform duration-500">Our Menu</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto transform group-hover:w-48 transition-all duration-500"></div>
          </div>

          {/* Menu Category: Starters */}
          <div className="mb-16 reveal opacity-0 -translate-x-12 transition-all duration-700 ease-out">
            <h3 className="text-2xl font-serif text-amber-600 mb-8 border-b pb-2">Starters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {["Reshmi Kabab", "Paneer Tikka", "Chicken Tangri Kabab", "Crispy Chili Baby Corn"].map((item) => (
                <div key={item} className="flex justify-between items-start p-4 rounded-lg hover:bg-amber-50 hover:shadow-sm transform hover:translate-x-2 transition-all duration-300 group cursor-pointer border border-transparent hover:border-amber-100">
                  <div>
                    <h4 className="text-lg font-bold group-hover:text-amber-700 transition-colors">{item}</h4>
                    <p className="text-gray-500 text-sm mt-1">Small description of Item.</p>
                  </div>
                  <span className="text-lg font-bold text-amber-600">Rs. 120</span>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Category: Mains (with Photos) */}
          <div className="mb-16 reveal opacity-0 translate-y-16 transition-all duration-1000 ease-out">
            <h3 className="text-2xl font-serif text-amber-600 mb-8 border-b pb-2">Main Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Hakka Noodles", "Fried Rice", "Paneer Butter Masala", "Mixed Vegetable Curry"].map((name, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group border border-gray-100">
                  <div className="h-48 overflow-hidden relative">
                    <Image src={machanImage3} alt="Food Dish" className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition duration-700" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xl font-bold font-serif group-hover:text-amber-600 transition-colors">{name}</h4>
                      <span className="text-amber-600 font-bold bg-amber-50 px-2 py-1 rounded-md">Rs. 340</span>
                    </div>
                    <p className="text-gray-600 text-sm">Small description of the dish. Like seasoning, etc.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Category: Desserts & Drinks */}
          <div className="reveal opacity-0 translate-x-12 transition-all duration-700 ease-out">
            <h3 className="text-2xl font-serif text-amber-600 mb-8 border-b pb-2">Desserts & Drinks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {["Ice Cream", "Gulab Jamun", "Lime Soda", "Lassi"].map((item) => (
                <div key={item} className="flex justify-between items-start p-4 rounded-lg hover:bg-amber-50 hover:shadow-sm transform hover:translate-x-2 transition-all duration-300 group cursor-pointer border border-transparent hover:border-amber-100">
                  <div>
                    <h4 className="text-lg font-bold group-hover:text-amber-700 transition-colors">Sweet/Drink {item}</h4>
                    <p className="text-gray-500 text-sm mt-1">Chocolate, vanilla bean, or artisanal spirit description.</p>
                  </div>
                  <span className="text-lg font-bold text-amber-600">Rs. 90</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-24 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 group reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 transform group-hover:scale-105 transition-transform duration-500">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto transform group-hover:w-48 transition-all duration-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul D.", review: "The Reshmi Kabab is absolutely out of this world! Best ambience in Malda.", rating: 5, delay: "delay-100" },
              { name: "Priya S.", review: "A perfect place for family dinners. The staff is so polite and the food is top-notch.", rating: 5, delay: "delay-300" },
              { name: "Amit K.", review: "Loved the Hakka Noodles and Crispy Chili Baby Corn. Will definitely visit again!", rating: 4, delay: "delay-500" }
            ].map((item, i) => (
              <div key={i} className={`reveal opacity-0 translate-y-16 transition-all duration-700 ease-out ${item.delay} bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transform hover:-translate-y-3 border border-amber-100/50 relative overflow-hidden group`}>
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-amber-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="flex text-amber-500 mb-4 relative z-10">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className={`w-5 h-5 ${idx < item.rating ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 relative z-10">"{item.review}"</p>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <p className="font-bold text-gray-900">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATIONS / ORDERING */}
      <section id="reservations" className="bg-amber-600 py-20 text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 group-hover:scale-110 transition-transform duration-1000"></div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10 reveal opacity-0 scale-95 transition-all duration-1000 ease-out">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 transform group-hover:scale-105 transition-transform duration-500">Ready to Order?</h2>
          <p className="text-amber-100 text-lg mb-8">
            We are currently accepting orders and reservations exclusively over the phone to ensure the highest quality of service. 
          </p>
          <div className="bg-white inline-block px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group/btn">
            <p className="text-amber-600 text-sm uppercase tracking-widest mb-1 font-bold">Call us now</p>
            <p className="text-3xl font-bold text-gray-900 group-hover/btn:text-amber-600 transition-colors duration-300">+91 12345 12345</p>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Slides in from left */}
            <div className="group reveal opacity-0 -translate-x-16 transition-all duration-1000 ease-out">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 transform group-hover:translate-x-2 transition-transform duration-500">Our Story</h2>
              <div className="w-16 h-1 bg-amber-600 mb-6 transform group-hover:w-32 transition-all duration-500"></div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Located in Narayanpur, Malda, Machan Restaurant is one of the region’s most photogenic dining destinations. With its wonderful ambience, family-friendly atmosphere, and delicious dishes like our signature Reshmi Kabab, it’s the perfect place to enjoy great food and create lasting memories.
              </p>
              <p className="font-serif text-2xl italic text-amber-700 border-l-4 border-amber-600 pl-4 py-2 bg-amber-50/50 rounded-r-lg">
                "Food is our passion, hospitality is our purpose."
              </p>
            </div>
            
            {/* Slides in from right */}
            <div className="relative group/carousel reveal opacity-0 translate-x-16 transition-all duration-1000 delay-300 ease-out">
              <button 
                onClick={() => scroll('left')} 
                className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-3 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:bg-amber-600 hover:text-white transform hover:scale-110 transition duration-300 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
                aria-label="Scroll left"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div 
                ref={carouselRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-4" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style>{`div::-webkit-scrollbar { display: none; }`}</style>
                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80" 
                  alt="Restaurant Atmosphere" 
                  className="snap-center shrink-0 w-[85%] md:w-[90%] rounded-2xl h-80 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80" 
                  alt="Chef Cooking" 
                  className="snap-center shrink-0 w-[85%] md:w-[90%] rounded-2xl h-80 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80" 
                  alt="Craft Cocktail" 
                  className="snap-center shrink-0 w-[85%] md:w-[90%] rounded-2xl h-80 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300" 
                />
              </div>
                
              <button 
                onClick={() => scroll('right')} 
                className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-3 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:bg-amber-600 hover:text-white transform hover:scale-110 transition duration-300 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
                aria-label="Scroll right"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & LOCATION */}
      <section id="contact" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 group reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 transform group-hover:scale-105 transition-transform duration-500">Visit Us</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto transform group-hover:w-48 transition-all duration-500"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info slides in from left */}
            <div className="space-y-8 reveal opacity-0 -translate-x-16 transition-all duration-1000 ease-out">
              <div className="group p-6 rounded-2xl hover:bg-amber-50 hover:shadow-md transition-all duration-300 border border-transparent hover:border-amber-100">
                <h3 className="text-xl font-bold font-serif mb-2 flex items-center gap-2 text-amber-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Location
                </h3>
                <p className="text-gray-600 ml-7">Near BSF Camp More, Narayanpur <br/> Malda 732141</p>
              </div>
              
              <div className="group p-6 rounded-2xl hover:bg-amber-50 hover:shadow-md transition-all duration-300 border border-transparent hover:border-amber-100">
                <h3 className="text-xl font-bold font-serif mb-2 flex items-center gap-2 text-amber-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Contact
                </h3>
                <p className="text-gray-600 ml-7">Phone: +91 12345 12345<br/>Email: hello@machan.com</p>
              </div>
              
              <div className="group p-6 rounded-2xl hover:bg-amber-50 hover:shadow-md transition-all duration-300 border border-transparent hover:border-amber-100">
                <h3 className="text-xl font-bold font-serif mb-2 flex items-center gap-2 text-amber-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Hours
                </h3>
                <p className="text-gray-600 ml-7">Monday - Sunday: 11:00 AM - 11:00 PM</p>
              </div>
            </div>

            {/* Map slides in from right */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center min-h-[350px] shadow-lg group reveal opacity-0 translate-x-16 transition-all duration-1000 delay-200 ease-out">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.723077917976!2d88.156634!3d25.043470199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fafd004d5e4ab7%3A0xb128e8037adbf114!2sMachan%20Restaurant!5e0!3m2!1sen!2sin!4v1786483860585!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                className="transform group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%] group-hover:grayscale-0"
                referrerPolicy="strict-origin-when-cross-origin">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-12 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="font-serif text-3xl text-white mb-6 uppercase tracking-widest hover:text-amber-500 transition-colors duration-300 cursor-default">Machan</p>
          <div className="flex justify-center space-x-8 mb-8">
            {["Instagram", "Facebook", "Twitter"].map((social) => (
              <a key={social} href="#" className="hover:text-amber-500 hover:-translate-y-1 transform transition-all duration-300">
                {social}
              </a>
            ))}
          </div>
          <p className="text-sm border-t border-gray-800 pt-8">
            &copy; {new Date().getFullYear()} Sourangshu. All rights reserved. 
            <br className="md:hidden mt-2" /> Prototype designed for presentation.
          </p>
        </div>
      </footer>
    </div>
  );
}