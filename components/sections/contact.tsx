"use client";

import { useState } from "react";
import ExpandableSection from "../ExpandSection";
import {
  Send,
  Mail,
  Linkedin,
  Instagram,
  Github,
  MapPin,
  Phone,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ExpandableSection title="Contact" subtitle="Let's Talk" bgColor="#55AD9B">
      <div
        className="w-full p-5 md:p-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* === 1. TOP BANNER: GOT AN IDEA? === */}
        <div className="w-full md:w-[350px] lg:w-[550px] mb-4 md:mb-8">
          <div className="bg-[#ECEE81] border-4 border-black p-2 md:p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-tight">
              Got an idea? Let&apos;s build it together.
            </h3>
          </div>
        </div>

        {/* === 2. MAIN CONTENT GRID === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* === KOLOM KIRI: CONTACT FORM === */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative h-full">
            {/* Window Header */}
            <div className="bg-[#55AD9B] border-b-4 border-black p-3 flex items-center justify-between">
              <span className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Mail size={18} className="text-black" /> Send a Message
              </span>
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-white border-2 border-black" />
                <div className="w-4 h-4 bg-black border-2 border-white" />
              </div>
            </div>

            {/* Form Content */}
            <form className="p-6 md:p-8 space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="font-black uppercase text-sm block"
                >
                  Subject / Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Who is this awesome person?"
                  required
                  className="w-full bg-gray-50 border-2 border-black p-3 md:p-4 font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_#55AD9B] focus:-translate-y-1 transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-black uppercase text-sm block"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="email@example.com"
                  required
                  className="w-full bg-gray-50 border-2 border-black p-3 md:p-4 font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_#55AD9B] focus:-translate-y-1 transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-black uppercase text-sm block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-gray-50 border-2 border-black p-3 md:p-4 font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_#55AD9B] focus:-translate-y-1 transition-all placeholder:text-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 group bg-[#55AD9B] text-black font-black uppercase py-3 md:py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
              >
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>

          {/* === KOLOM KANAN: INFO & SOCIALS === */}
          <div className="flex flex-col gap-8 h-full">
            {/* A. Contact Information Section */}
            <div className="flex flex-col gap-4">
              {/* Header */}
              <div className="mt-8 bg-white border-4 border-black p-2 md:p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h5 className="text-md md:text-lg lg:text-2xl font-black uppercase text-center">
                  Contact Information
                </h5>
              </div>

              {/* Cards Container */}
              <div className="flex flex-col gap-4">
                {/* Location Card */}
                <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 group">
                  <div className="bg-[#FF90E8] p-3 border-2 border-black shrink-0">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase text-gray-500 mb-1">
                      Location
                    </p>
                    <p className="font-bold text-lg leading-tight">
                      Yogyakarta, Indonesia
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <a className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 group">
                  <div className="bg-[#40E0D0] p-3 border-2 border-black shrink-0">
                    <Mail size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase text-gray-500 mb-1">
                      Email
                    </p>
                    <p className="font-bold text-lg leading-tight truncate">
                      ibmahendraf04@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone Card */}
                <a className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 group">
                  <div className="bg-[#ECEE81] p-3 border-2 border-black shrink-0">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase text-gray-500 mb-1">
                      Phone / WhatsApp
                    </p>
                    <p className="font-bold text-lg leading-tight">
                      +62 882 3283 5269
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* B. Connect With Me Section */}
            <div className="flex flex-col justify-center items-center gap-4">
              {/* Header */}
              <div className="w-full md:w-[420px] lg:w-[500px] mx-auto justify-center items-center bg-white border-4 border-black p-2 md:p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h5 className="text-md md:text-xl lg:text-2xl font-black uppercase text-center">
                  Connect With Me
                </h5>
              </div>

              {/* Social Links Grid (2x2 Layout) */}
              <div className="flex justify-center items-center gap-3 md:gap-4">
                <a
                  href="https://www.linkedin.com/in/ibmahendraferdiansah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 bg-white border-2 border-black p-3 md:p-4 flex items-center justify-center gap-2 font-bold text-sm md:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#0077b5] hover:text-white hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300 ease-in-out"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/ibma.hen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 bg-white border-2 border-black p-3 md:p-4 flex items-center justify-center gap-2 font-bold text-sm md:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#C13584] hover:text-white hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300 ease-in-out"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://github.com/Ibmahen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 bg-white border-2 border-black p-3 md:p-4 flex items-center justify-center gap-2 font-bold text-sm md:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300 ease-in-out"
                >
                  <Github size={18} />
                </a>
                {/* New Email Button */}
                <a
                  href="mailto:ibmahendraf04@gmail.com"
                  target="_blank"
                  className="w-16 bg-white border-2 border-black p-3 md:p-4 flex items-center justify-center gap-2 font-bold text-sm md:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#EA4335] hover:text-white hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300 ease-in-out"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExpandableSection>
  );
}
