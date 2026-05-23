"use client";

import React, { useState } from 'react';
import { Stethoscope, MapPin, Clock, Calendar, Star, ChevronRight } from 'lucide-react';

export default function DoctorLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll handler for the Book Now button
  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. TOP NAV BAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                <Stethoscope size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold leading-tight">Dr. [Doctor Name]</h1>
                <p className="text-sm text-slate-500 font-medium">Specialisation</p>
              </div>
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={scrollToBooking} className="text-sm font-semibold hover:text-blue-600 transition-colors">Services</button>
              <button onClick={scrollToBooking} className="text-sm font-semibold hover:text-blue-600 transition-colors">Locations</button>
              <button 
                onClick={scrollToBooking}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-blue-200"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left: Doctor Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-[2.5rem] transform -rotate-3 scale-[1.02] -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
              alt="Dr. Sarah Jenkins" 
              className="w-full h-125 object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>
          
          {/* Right: Quote & CTA */}
          <div className="w-full md:w-1/2 flex flex-col items-start">

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              "Healing begins with <span className="text-blue-600">listening</span>."
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Some text describing the doctors best works.
            </p>
            <button 
              onClick={scrollToBooking}
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300"
            >
              Book Your Visit
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. REVIEWS SECTION */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900">Reviews</h3>
            <div className="flex justify-center items-center gap-1 mt-3 text-amber-400">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} fill="currentColor" size={24} />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Michael R.", text: "Great Doctor, helping me a lot" },
              { name: "Emily T.", text: "Great Doctor, helping me a lot" },
              { name: "David L.", text: "Great Doctor, helping me a lot" },
              { name: "Sarah W.", text: "Great Doctor, helping me a lot" }
            ].map((review, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex text-amber-400 mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} fill="currentColor" size={16} />)}
                </div>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-slate-900 text-sm">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPLIT SECTION: DETAILS (Left) & BOOKING (Right) */}
      <section id="booking-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Details, Address, Map */}
          <div className="w-full lg:w-5/12 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Visit the Clinic</h2>
              <p className="text-slate-600">Find us at our modern facility designed for your comfort.</p>
            </div>

            <div className="space-y-6">
              {/* Address Card */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-900 mb-1">City Health Center</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Malda city location<br />
                    
                  </p>
                </div>
              </div>

              {/* Timing Card */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-900 mb-1">Consultation Hours</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li className="flex justify-left w-64 font-semibold"><span>Mon - Thu: 9:00 AM - 5:00 PM</span></li>
                    <li className="flex justify-left w-64 font-semibold"><span>Friday: 9:00 AM - 1:00 PM</span></li>
                    <li className="flex justify-left w-64 font-semibold"><span>Sat - Sun: Closed</span> </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative shadow-inner">
              {/* Replace with actual iframe in production */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white px-4 py-2 rounded-full shadow-lg font-semibold text-slate-700 flex items-center gap-2">
                  <MapPin size={18} className="text-blue-600"/> View on Maps
                </div>
              </div>
            </div>
          </div>

          {/* Right: Appointment Booking Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-3xl font-bold mb-2">Request an Appointment</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and our front desk will contact you to confirm.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Name" />
                  </div>
                  {/* Age */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Age</label>
                    <input type="number" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Age" />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Phone No." />
                </div>

                {/* Date Range */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Calendar size={16} className="text-slate-500" />
                    Preferable Date Range
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Reason for Visit</label>
                  <textarea rows="3" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Briefly describe your symptoms or reason for visit..."></textarea>
                </div>

                <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold text-lg transition-colors mt-4">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM SECTION / FOOTER */}
      <footer className="bg-slate-900 text-white py-16 text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center gap-2 text-blue-400 mb-6">
            <Stethoscope size={32} />
            <span className="text-2xl font-bold text-white">Dr. [Doctor Name]</span>
          </div>
          <p className="text-slate-400 mb-8 max-w-md">
            Dedicated to providing the highest standard of care. Your health and well-being are our top priority.
          </p>
          
          {/* Add Review Button */}
          <button className="px-6 py-3 border border-slate-600 hover:border-slate-400 hover:bg-slate-800 rounded-full font-medium transition-all text-sm mb-12">
            Leave a Review
          </button>
          
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Dr. [Doctor Name]. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}