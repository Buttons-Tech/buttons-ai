"use client"; // Required for using React Hooks

import Image from "next/image";
import React, { useState, useCallback, FC, FormEvent, useEffect } from "react";
import washpro from "../public/image/washpro.jpeg";
import ProductCard from "./components/ProductCard";
import ProcessCard from "./components/ProcessCard";
import Team from "./components/Team";
import JoinUs from "./components/JoinUs";

// --- BRANDING & DESIGN SYSTEM (Pulled from Design Brief) ---
const COLOR_PRIMARY = "#228B22"; // Forest Green (Action/CTA)
const COLOR_SECONDARY = "white"; // Walnut Brown (Sophistication/Accent)
const COLOR_BACKGROUND_BASE = "#F9FAFB"; // Ghost White
const COLOR_TEXT_PRIMARY = "#1F2937"; // Charcoal
const COLOR_BACKGROUND_CONTRAST = "#111827"; // Deep Slate (Footer/Contact)

// Hover is a slightly brighter shade of the primary green
const ACCENT_COLOR_HOVER = "#289E28";

// Typography Classes (updated to use Charcoal for main headings)
const HEADING_CLASSES = `font-extrabold text-[${COLOR_TEXT_PRIMARY}]`;
const SUBTITLE_CLASSES = "text-lg text-gray-600";

// Custom style for consistent button appearance
const ctaButtonClasses: string = `transition duration-300 shadow-xl hover:shadow-2xl hover:translate-y-[-2px] bg-[${COLOR_PRIMARY}] hover:bg-[${ACCENT_COLOR_HOVER}] text-white`;

// BASE64 Image for the #MakeItHappen Campaign Slide (Afro Vibe + Futuristic Tech Landscape)
// Use local public image for campaign background
const CAMPAIGN_BG_IMAGE = "/img/AAAA.jpg";

// --- SVG ICONS ---
const DesignIcon: FC = () => (
  // Stroke color set dynamically to primary color
  <svg
    className={`svg-icon w-8 h-8 stroke-2 text-[${COLOR_PRIMARY}]`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 20l4-16m4 4l4 4m-4-4l-4 4m0 0l-4 4m4-4l4-4m-4 4l-4-4m-4 4l-4 4m4-4l-4-4"
    ></path>
  </svg>
);

const SoftwareIcon: FC = () => (
  // Stroke color set dynamically to primary color
  <svg
    className={`svg-icon w-8 h-8 stroke-2 text-[${COLOR_PRIMARY}]`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 17L9 20l-1.5 1h5.25v-2.25M15 17v2.25A2.25 2.25 0 0112.75 21H6.75A2.25 2.25 0 014.5 18.75V5.25A2.25 2.25 0 016.75 3h4.94L18.75 9V17H15z"
    ></path>
  </svg>
);

const GadgetsIcon: FC = () => (
  // Stroke color set dynamically to primary color
  <svg
    className={`svg-icon w-8 h-8 stroke-2 text-[${COLOR_PRIMARY}]`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 15M2 17V7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"
    ></path>
  </svg>
);

// --- SLIDER COMPONENT ---
interface Slide {
  id: number;
  content: React.ReactNode;
  bgStyle: React.CSSProperties;
  textColor: string;
}

const HeroSlider: FC = () => {
  const slides: Slide[] = [
    // Slide 1: New Campaign Banner (#MakeItHappen) - centered image
    {
      id: 1,
      content: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full max-h-[600px] sm:max-h-[700px] flex items-center justify-center">
            <Image
              src="/img/AAAA.jpg"
              alt="#MakeItHappen Campaign"
              fill
              className="object-contain"
            />
          </div>
        </div>
      ),
      // Background is the generated Afro/Futuristic image
      bgStyle: {
        backgroundImage: `url(${CAMPAIGN_BG_IMAGE})`,
        backgroundColor: COLOR_BACKGROUND_CONTRAST,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      textColor: "text-white",
    },
    // Slide 2: Original Core Message
    {
      id: 2,
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className={`text-[2rem]  ${HEADING_CLASSES} mx-auto`}>
            Stop Talking
          </h2>
          <span
            className={`text-5xl text-primary md:text-7xl ${HEADING_CLASSES} mb-6 leading-tight max-w-5xl mx-auto`}
          >
            #makeithappen!
          </span>
          <p className={`text-2xl text-gray-500 max-w-4xl mx-auto mb-10`}>
            Design | AI Software | Gadgets
          </p>
          <a
            href="#contact"
            className={`inline-block font-bold  bg-primary py-4 px-12 rounded-full text-lg shadow-2xl shadow-green-300/50 ${ctaButtonClasses}`}
          >
            Start Now
          </a>
        </div>
      ),
      bgStyle: {
        backgroundColor: COLOR_BACKGROUND_BASE,
      },
      textColor: "text-charcoal",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play feature
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000); // Change slide every 7 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <section
      className="relative w-full overflow-hidden h-[600px] sm:h-[700px] flex items-center justify-center transition-all duration-1000"
      id="hero-slider"
    >
      {/* Slide Content Container */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 p-4 sm:p-12 flex items-center justify-center ${currentSlideData.textColor}`}
        style={currentSlideData.bgStyle}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {currentSlideData.content}
        </div>
        {/* Overlay for Campaign Slide */}
        {currentSlideData.id === 1 && (
          <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition duration-300 hidden md:block"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition duration-300 hidden md:block"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary scale-125 shadow-md"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

// --- MAIN COMPONENT ---
const Home: FC = () => {
  // State is explicitly typed as boolean
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Event handler is typed to FormEvent<HTMLFormElement>
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // send to database

    setIsSubmitted(true);
    // Cast event.target to HTMLFormElement to safely access the reset() method
    (event.target as HTMLFormElement).reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  }, []);

  // Custom Tailwind Configuration for dynamic colors (JIT Workaround)
  const customStyles = `
        <style>
            .bg-primary { background-color: ${COLOR_PRIMARY}; }
            .bg-secondary { background-color: ${COLOR_SECONDARY}; }
            .bg-contrast { background-color: ${COLOR_BACKGROUND_CONTRAST}; }
            .bg-base { background-color: ${COLOR_BACKGROUND_BASE}; }
            .hover\\:bg-primary-dark:hover { background-color: ${ACCENT_COLOR_HOVER}; }
            .text-primary { color: ${COLOR_PRIMARY}; }
            .border-primary { border-color: ${COLOR_PRIMARY}; }
            .text-charcoal { color: ${COLOR_TEXT_PRIMARY}; }
            /* Custom class for the campaign text shadow for readability */
            .shadow-text { text-shadow: 0 4px 8px rgba(0, 0, 0, 0.7); }
        </style>
    `;

  return (
    <div
      className="bg-base min-h-screen font-sans"
      style={{ backgroundColor: COLOR_BACKGROUND_BASE }}
    >
      {/* Inject Custom Styles */}
      <div dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Header & Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-black text-charcoal tracking-tight">
            <Image height={100} width={300} src='/image/buttons..png' alt="image" className="w-[10rem] absolute top-[-3rem] " />
          </h1>
          <nav className="hidden md:flex space-x-10 text-gray-700 font-medium">
            <a
              href="#services"
              className="hover:text-primary transition duration-200"
            >
              Services
            </a>
            <a
              href="#solutions"
              className="hover:text-primary transition duration-200"
            >
              Solutions
            </a>
            <a
              href="#process"
              className="hover:text-primary transition duration-200"
            >
              Process
            </a>
            {/* Updated to use primary color for border and text */}
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition duration-230"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - NOW THE SLIDER COMPONENT */}
      <HeroSlider />

      {/* Core Services Section - Elevated Card Design */}
      <section
        id="services"
        className="py-24 bg-white"
        style={{ backgroundColor: "white" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className={`text-4xl ${HEADING_CLASSES} text-center mb-4`}>
            Our Tech Services
          </h3>
          <p
            className={`text-center mb-16 max-w-3xl mx-auto ${SUBTITLE_CLASSES}`}
          >
            From concept to deployment, we provide the full technology stack
            tailored for International institutions and businesses.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1. DIGITAL DESIGNS & MEDIA */}
            {/* Uses Green border and text primary for card content */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-t-4 border-primary">
              <div className="text-primary mb-4 overflow-hidden rounded-t-2xl">
                <Image
                  src="/img/digital-design.jpg"
                  alt="Design Icon"
                  width={200}
                  height={100}
                  className="w-full h-[4rem] object-cover"
                />
              </div>
              <div className="px-8 pb-8">
                <h4 className="text-2xl font-bold mb-3 text-charcoal">
                  Digital Designs & UX
                </h4>
                <p className="text-gray-600">
                  High-impact **UI/UX design**, modern branding, and
                  professional media assets. We build digital identity that
                  commands attention.
                </p>
              </div>
            </div>

            {/* 2. CUSTOM SOFTWARE & AI */}
            <div className="bg-white  rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-t-4 border-primary">
              <div className="text-primary mb-4 overflow-hidden rounded-t-2xl">
                <Image
                  src="/img/software.jpg"
                  alt="Design Icon"
                  width={200}
                  height={100}
                  className="w-full h-[4rem] object-cover"
                />
              </div>
              <div className="px-8 pb-8">
                <h4 className="text-2xl font-bold mb-3 text-charcoal">
                  Custom AI Software
                </h4>
                <p className="text-gray-600">
                  Bespoke, scalable **AI-integrated applications**. Custom
                  development for complex challenges, from logistics to resource
                  management.
                </p>
              </div>
            </div>

            {/* 3. PREMIUM GADGETS & HARDWARE */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-t-4 border-primary">
              <div className="text-primary mb-4 overflow-hidden rounded-t-2xl">
                <Image
                  src="/img/GADGETS1.webp"
                  alt="Design Icon"
                  width={200}
                  height={100}
                  className="w-full h-[4rem] object-cover"
                />
              </div>
              <div className="px-8 pb-8">
                <h4 className="text-2xl font-bold mb-3 text-charcoal">
                  Premium Gadgets & Supply
                </h4>
                <p className="text-gray-600">
                  Sourcing and distribution of high-quality technology hardware:
                  advanced **Security Cameras**, **Drones**, and specialized
                  equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Targeted Solutions / Case Study Section */}
      {/* Uses Ghost White background */}
      <section
        id="solutions"
        className="py-24 bg-base"
        style={{ backgroundColor: COLOR_BACKGROUND_BASE }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className={`text-4xl ${HEADING_CLASSES} text-center mb-4`}>
            Our <span className="underline ">Solutions</span> Buttons
          </h3>
          <p
            className={`text-center mb-16 max-w-3xl mx-auto ${SUBTITLE_CLASSES}`}
          >
            We address specific, high-stakes operational needs across various
            sectors.
          </p>

          <div className="grid md:grid-cols-3  gap-10 items-center">
            {/* Example 1: Government/Logistics */}
            {/* <div className="p-8 bg-white rounded-2xl shadow-2xl border-l-4 border-primary">
                            <h4 className="text-2xl font-bold mb-3 text-charcoal">E-Logistics & Public Services</h4>
                            <p className="text-gray-600 mb-4">
                                Developing an **Uber-like ride-hailing app** for state government use, optimizing vehicle allocation and public service delivery through geo-fencing and AI routing.
                            </p> */}
            {/* Retaining soft green tag color */}
            {/* <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Custom Software</span>
                        </div> */}

            {/* Example 2: Social Impact / NGO */}
            {/* <div className="p-8 bg-white rounded-2xl shadow-2xl border-l-4 border-primary">
                            <h4 className="text-2xl font-bold mb-3 text-charcoal">Ethical Fund Disbursement</h4>
                            <p className="text-gray-600 mb-4">
                                Specialized software for NGOs and Churches to manage, track, and securely disburse funds to target groups, like **out-of-school children**, ensuring transparency and accountability.
                            </p> */}
            {/* Retaining soft green tag color */}
            {/* <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">AI & Software</span>
                        </div> */}

            {/* Example 3: washpro */}

            <ProductCard />

            {/* Example 3: LoudHouse */}
            {/* <div className="p-8 bg-white rounded-2xl shadow-2xl border-l-4 border-primary">
                            <Image src="/img/LH.png" alt="LoudHouse" width={75} height={70} className='rounded-3xl '/>
                            <h4 className="text-2xl font-bold mb-3 text-charcoal">LOUDHOUSE</h4>
                            <p className="text-gray-600 mb-4">
                                <span className='text-green-600'>18+</span>  Smoke shop and accessories along with loud music playlist suggestions. lighters, hookahs, lightings, wraps and grinders. We have got you covered
                            </p> */}
            {/* Retaining soft green tag color */}
            {/* <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Lifestyle</span>
                        </div> */}

            {/* Example 3: Tripper */}
            {/* <div className="p-8 bg-white rounded-2xl shadow-2xl border-l-4 border-primary"> */}
            {/* <Image src="/image/TX.jpg" alt="Tripper" width={140} height={100} className='rounded-3xl '/>
                            <h4 className="text-2xl font-bold mb-3 text-charcoal">TRIPPER X</h4>
                            <p className="text-gray-600 mb-4">
                                Enjoy this festive season. Visit top places in Africa with style and Elegance. We give you trips and <span className='text-green-600'>EXTRA </span> 
                                The flight, the Ride, the accommodation, the events, the tours, everything taken care off. We allow you to focus on you, family and memories
                            </p> */}
            {/* Retaining soft green tag color */}
            {/* <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Tourism & Events</span> */}
            {/* </div> */}

            {/* Example 3: Tripper */}
            {/* <div className="p-8 bg-white rounded-2xl shadow-2xl border-l-4 border-primary"> */}
            {/* <Image src="/image/DB.jpg" alt="Tripper" width={140} height={100} className='rounded-3xl '/>
                            <h4 className="text-2xl font-bold mb-3 text-charcoal">Dreambox</h4>
                            <p className="text-gray-600 mb-4">
                                A Creative Teachnology school for the next generation of innovators. Dreambox Clubs: <span>Early Years | Junior | Senior </span> 
                                Subjects: <span>ICT | Coding | Robotics | Mathematics | English | Design | Creativity</span>
                            </p> */}
            {/* Retaining soft green tag color
                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Education</span> */}
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Easy 3-Step Process Section - Elevated */}
      {/* Uses Ghost White background */}
      <section
        id="process"
        className="py-24 bg-white"
        style={{ backgroundColor: "white" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className={`text-4xl ${HEADING_CLASSES} text-center mb-4`}>
            Our Simplified Process
          </h3>
          <p
            className={`text-center mb-16 max-w-3xl mx-auto ${SUBTITLE_CLASSES}`}
          >
            Complexity is removed. We focus on results using an agile,
            client-centric approach.
          </p>

          <div className="relative flex flex-col md:flex-row justify-between items-stretch space-y-12 md:space-y-0 md:space-x-8">
            <ProcessCard />
          </div>
        </div>

      </section>
      <section id="team">
              <Team/>
      </section>
      <section id="team">
              <JoinUs />
      </section>
      {/* CTA / Contact Section - Enhanced Contrast (Deep Slate and Walnut Brown) */}
      <section
        id="contact"
        className="bg-contrast py-20 text-white"
        style={{ backgroundColor: COLOR_BACKGROUND_CONTRAST }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-extrabold mb-4">
            Ready to Build the Future?
          </h3>
          <p className="text-xl mb-12 opacity-90 text-gray-300">
            Tell us your challenge, and we will show you the button.
          </p>

          {/* Form uses Secondary Walnut Brown for sophisticated contrast */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-lg mx-auto p-8 rounded-xl bg-secondary shadow-2xl"
            style={{ backgroundColor: COLOR_SECONDARY }}
          >
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full p-4 rounded-xl text-black border border-gray-300 focus:outline-none focus:ring-4 focus:ring-primary/50 transition duration-200"
              required
            />
            <input
              type="email"
              placeholder="Work Email"
              className="w-full p-4 rounded-xl text-black border border-gray-300 focus:outline-none focus:ring-4 focus:ring-primary/50 transition duration-200"
              required
            />

            {/* Service Selection Dropdown */}
            <div className="relative">
              <select
                className="w-full p-4 rounded-xl text-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-4 focus:ring-primary/50 transition duration-200"
                required
                defaultValue=""
              >
                <option value="" className="text-black hover:text" disabled>
                  I am interested in...
                </option>
                <option value="design">Digital Designs & UX</option>
                <option value="software">Custom AI Software</option>
                <option value="gadgets">Premium Gadgets & Supply</option>
              </select>
              {/* Dropdown icon in dark gray */}
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>

            <textarea
              placeholder="Describe your biggest need (e.g., I need a fund disbursement software)"
              rows={4}
              className="w-full p-4 rounded-xl text-black border border-gray-300 focus:outline-none focus:ring-4 focus:ring-primary/50 transition duration-200"
              required
            ></textarea>

            {/* Button uses primary Green defined in ctaButtonClasses */}
            <button
              type="submit"
              className={`w-full font-bold hover:cursor-pointer py-4 rounded-xl bg-primary text-white text-lg shadow-xl shadow-green-500/30 `}
            >
              Send Request & Get a Quote
            </button>
          </form>
          <p
            className={`mt-6 text-sm text-green-300 font-semibold ${
              isSubmitted ? "animate-pulse" : "hidden"
            }`}
          >
            Thank you! We will review your request and be in touch shortly.
          </p>
        </div>
      </section>

      {/* Footer */}
      {/* Uses Ghost White background */}
      <footer
        className="bg-gray-100 text-gray-600 py-10"
        style={{ backgroundColor: COLOR_BACKGROUND_BASE }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-2">
            <h5 className="font-bold text-charcoal mb-2 text-base">Buttons.</h5>
            <p>
              Technology Simplified. Built for Nigeria&apos;s digital future.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-charcoal mb-2 text-base">
              Quick Links
            </h5>
            <ul className="space-y-1">
              {/* Links use primary color on hover */}
              <li>
                <a href="#services" className="hover:text-primary transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-primary transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary transition">
                  Our Process
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-charcoal mb-2 text-base">Contact</h5>
            <p>Start your project now:</p>
            {/* Contact link uses primary color */}
            <a
              href="#contact"
              className="text-primary font-semibold hover:underline transition"
            >
              Click to Get Started
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-gray-400 border-t border-gray-200 pt-6">
          <p>&copy; 2025 Buttons. All rights reserved. | Simple. Built.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
