import React, { useState } from 'react';
import { User, Upload, MapPin, GraduationCap } from 'lucide-react';
import ChatInterface from './ChatInterface';

export default function HeroSection() {
  const [portraitUrl, setPortraitUrl] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPortraitUrl(URL.createObjectURL(file));
    }
  };

  return (
    <section id="about" className="pt-4">
      <div className="mb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#c8ad55]">
          01 // Introduction & Interactive Assistant
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* LEFT COLUMN: Portrait Placeholder + General Bio */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-[#6c5a49]/25 border border-[#6c5a49] space-y-6">
          <div className="space-y-5">
            {/* Placeholder Image Frame */}
            <div className="relative group w-full h-64 rounded-xl overflow-hidden bg-[#271f30] border-2 border-dashed border-[#c8ad55]/60 flex flex-col items-center justify-center">
              {portraitUrl ? (
                <img
                  src={portraitUrl}
                  alt="Sourangshu Ghosh"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-4 space-y-2">
                  <div className="w-14 h-14 rounded-full bg-[#6c5a49]/40 border border-[#c8ad55] flex items-center justify-center mx-auto text-[#c8ad55]">
                    <User size={28} />
                  </div>
                  <p className="text-sm font-medium text-[#d0fcb3]">
                    Portrait Image Placeholder
                  </p>
                  <p className="text-xs text-[#9bc59d]">
                    Replace with <code className="text-[#c8ad55]">/images/portrait.webp</code> or preview below
                  </p>
                </div>
              )}

              <label className="cursor-pointer mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#6c5a49]/70 hover:bg-[#c8ad55] text-[#d0fcb3] hover:text-[#271f30] text-xs font-medium transition">
                <Upload size={13} />
                <span>{portraitUrl ? 'Change Photo' : 'Preview Photo'}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* General Bio Text Below Image */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#d0fcb3] tracking-tight">
                Sourangshu Ghosh
              </h1>
              <p className="text-sm text-[#9bc59d] leading-relaxed">
                Engineering undergraduate passionate about building reliable full-stack applications, mobile platforms, optimization engines, and autonomous robotics systems that solve practical problems.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#6c5a49]/60 flex flex-wrap gap-4 text-xs text-[#d0fcb3]/90">
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap size={15} className="text-[#c8ad55]" />
              B.Tech in Electrical Engineering (2028)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-[#c8ad55]" />
              West Bengal, India
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Chatting Interface */}
        <div className="lg:col-span-7 flex flex-col">
          <ChatInterface />
        </div>
      </div>
    </section>
  );
}