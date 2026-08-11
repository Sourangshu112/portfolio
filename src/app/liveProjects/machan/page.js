'use client'
import React, { useState, useRef } from 'react';
import machanImage1 from "./images/machan_image_1.jpg";
import machanImage2 from "./images/machan_image_2.jpg";
import machanImage3 from "./images/machan_image_3.jpg";
import machanImage4 from "./images/machan_image_4.jpg";
import Image from 'next/image';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const carouselRef = useRef(null);
  const scroll = (direction) => {
    if (carouselRef.current) {
      // Scrolls by roughly one image width at a time
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
        // Subtract 80px to account for your fixed 'h-20' navbar
        top: targetElement.offsetTop - 80, 
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false); // Closes the mobile menu after clicking
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="shrink-0 flex items-center">
              <span className="font-serif text-2xl font-bold tracking-wider uppercase">Machan</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" onClick={handleNavClick} className="text-gray-600 hover:text-amber-600 transition">Home</a>
              <a href="#menu" onClick={handleNavClick} className="text-gray-600 hover:text-amber-600 transition">Menu</a>
              <a href="#about" onClick={handleNavClick} className="text-gray-600 hover:text-amber-600 transition">About Us</a>
              <a href="#contact" onClick={handleNavClick} className="text-gray-600 hover:text-amber-600 transition">Contact</a>
              <a href="#reservations" onClick={handleNavClick} className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
                Order Now
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        {isMenuOpen && (
          <div className=" bg-white shadow-lg pb-4 px-4 space-y-2">
            <a href="#home" onClick={handleNavClick} className="block text-gray-600 hover:text-amber-600 py-2">Home</a>
            <a href="#menu" onClick={handleNavClick} className="block text-gray-600 hover:text-amber-600 py-2">Menu</a>
            <a href="#about" onClick={handleNavClick} className="block text-gray-600 hover:text-amber-600 py-2">About Us</a>
            <a href="#contact" onClick={handleNavClick} className="block text-gray-600 hover:text-amber-600 py-2">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src={machanImage4} 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">MACHAN WELCOMES YOU</h1>
          <div className="text-lg md:text-xl text-gray-200 mb-10 font-light h-10"></div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#reservations" className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-700 transition">
              Book a Table
            </a>
            <a href="#menu" className="bg-white/10 backdrop-blur-md text-white border border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-gray-900 transition">
              View Menu
            </a>
          </div>
        </div>
      </section>

      {/* QUICK INFO & SOCIAL PROOF */}
      <section className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
            <div className="p-4">
              <h3 className="text-amber-500 font-serif text-xl mb-2">Hours</h3>
              <p>Mon-Sun: 11am - 11pm</p>
            </div>
            <div className="p-4">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Menu</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          {/* Menu Category: Starters */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif text-amber-600 mb-8 border-b pb-2">Starters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {["Reshmi Kabab", "Paneer Tikka", "Chicken Tangri Kabab", "Crispy Chili Baby Corn"].map((item) => (
                <div key={item} className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold">{item}</h4>
                    <p className="text-gray-500 text-sm mt-1">Small description of Item.</p>
                  </div>
                  <span className="text-lg font-bold text-amber-600">Rs. 120</span>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Category: Mains (with Photos) */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif text-amber-600 mb-8 border-b pb-2">Main Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Hakka Noodles", "Fried Rice", "Paneer Butter Masala", "Mixed Vegetable Curry"].map((name, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm group">
                  <div className="h-48 overflow-hidden">
                    <Image src={machanImage3} alt="Food Dish" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xl font-bold font-serif">{name}</h4>
                      <span className="text-amber-600 font-bold">Rs. 340</span>
                    </div>
                    <p className="text-gray-600 text-sm">Small description of the dish. Like seasoning, etc.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Category: Desserts & Drinks */}
          <div>
            <h3 className="text-2xl font-serif text-amber-600 mb-8 border-b pb-2">Desserts & Drinks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {["Ice Cream", "Gulab Jamun", "Lime Soda", "Lassi"].map((item) => (
                <div key={item} className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold">Sweet/Drink {item}</h4>
                    <p className="text-gray-500 text-sm mt-1">Chocolate, vanilla bean, or artisanal spirit description.</p>
                  </div>
                  <span className="text-lg font-bold text-amber-600">Rs. 90</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATIONS / ORDERING */}
      <section id="reservations" className="bg-amber-600 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Ready to Order?</h2>
          <p className="text-amber-100 text-lg mb-8">
            We are currently accepting orders and reservations exclusively over the phone to ensure the highest quality of service. 
          </p>
          <div className="bg-white inline-block px-8 py-4 rounded-full shadow-lg">
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-1">Call us now</p>
            <p className="text-3xl font-bold text-gray-900">+91 12345 12345</p>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-amber-600 mb-6"></div>
              <p className="text-gray-600 mb-6 text-lg">
                Located in Narayanpur, Malda, Machan Restaurant is one of the region’s most photogenic dining destinations. With its wonderful ambience, family-friendly atmosphere, and delicious dishes like our signature Reshmi Kabab, it’s the perfect place to enjoy great food and create lasting memories.
              </p>

              <p className="font-serif text-xl italic text-gray-800">"Food is our passion, hospitality is our purpose."</p>
            </div>
            <div className="relative group">
              {/* Left Button (Desktop only) */}
              <button 
                onClick={() => scroll('left')} 
                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 text-gray-800 p-2 rounded-full shadow-lg hover:bg-amber-600 hover:text-white transition duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Scroll left"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Scroll Container */}
              <div 
                ref={carouselRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-4" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style>{`
                  div::-webkit-scrollbar { display: none; }
                `}</style>

                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80" 
                  alt="Restaurant Atmosphere" 
                  className="snap-center shrink-0 w-[85%] md:w-[90%] rounded-lg h-72 object-cover shadow-sm" 
                />

                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80" 
                  alt="Chef Cooking" 
                  className="snap-center shrink-0 w-[85%] md:w-[90%] rounded-lg h-72 object-cover shadow-sm" 
                />

                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80" 
                  alt="Craft Cocktail" 
                  className="snap-center shrink-0 w-[85%] md:w-[90%] rounded-lg h-72 object-cover shadow-sm" 
                />
              </div>
                
              {/* Right Button (Desktop only) */}
              <button 
                onClick={() => scroll('right')} 
                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 text-gray-800 p-2 rounded-full shadow-lg hover:bg-amber-600 hover:text-white transition duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
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
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold font-serif mb-2">Location</h3>
                <p className="text-gray-600">Near BSF Camp More, Narayanpur <br/> Malda 732141</p>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif mb-2">Contact</h3>
                <p className="text-gray-600">Phone: +91 12345 12345<br/>Email: </p>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif mb-2">Hours</h3>
                <p className="text-gray-600">Monday - Sunday: 11:00 AM - 11:00 PM</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg flex items-center justify-center min-h-75">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.723077917976!2d88.156634!3d25.043470199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fafd004d5e4ab7%3A0xb128e8037adbf114!2sMachan%20Restaurant!5e0!3m2!1sen!2sin!4v1786483860585!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-serif text-2xl text-white mb-6 uppercase tracking-widest">Machan</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sourangshu. All rights reserved. 
            <br className="md:hidden" /> Prototype designed for presentation.
          </p>
        </div>
      </footer>
    </div>
  );
}