// import Image from 'next/image';
// import React, { useState, useEffect, useCallback } from 'react';

// // --- TypeScript Interfaces ---

// interface TeamMember {
//   id: number;
//   name: string;
//   position: string;
//   image: string;
//   linkedin: string;
//   twitter: string;
//   youtube: string;
// }

// interface TeamCardProps {
//   member: TeamMember;
//   isCurrent: boolean;
// }

// // --- Data Definition for Team Members (now strongly typed) ---
// const teamMembers: TeamMember[] = [
//   {
//     id: 1,
//     name: "Chigozie Ohakwe",
//     position: "Chief Executive Officer",
//     image: "/img/chi.png",
//     linkedin: "https://linkedin.com/in/anyasharma",
//     twitter: "https://x.com/anyasharma",
//     youtube: "https://youtube.com/watch?v=anya_intro_video"
//   },
//   {
//     id: 2,
//     name: "Goodluck Idiaghe",
//     position: "Lead Product Designer ",
//     image: '/image/gluck.jpeg',
//     linkedin: "https://linkedin.com/in/bencarter",
//     twitter: "https://x.com/bencodes",
//     youtube: "https://youtube.com/watch?v=ben_intro_video"
//   },
//   {
//     id: 3,
//     name: "Mercy John",
//     position: "Lead Product Manager",
//     image: "/image/mercy.jpeg",
//     linkedin: "https://linkedin.com/in/chloelee",
//     twitter: "https://x.com/chloeldesign",
//     youtube: "https://youtube.com/watch?v=chloe_intro_video"
//   },
//   {
//     id: 4,
//     name: "Nuel Diebere",
//     position: "Lead Software Engineer",
//     image: "/img/blank.jpg",
//     linkedin: "https://linkedin.com/in/davidchen",
//     twitter: "https://x.com/davidcmkt",
//     youtube: "https://youtube.com/watch?v=david_intro_video"
//   },
//   {
//     id: 5,
//     name: "Chizoma Odeokwu",
//     position: "Lead Cnsultant",
//     image: "/img/blank.jpg",
//     linkedin: "https://linkedin.com/in/elenasdev",
//     twitter: "https://x.com/elenar",
//     youtube: "https://youtube.com/watch?v=elena_intro_video"
//   }
// ];

// // --- Inline SVG Icons (Replacing external libraries like lucide-react) ---
// // Using React.SVGProps<SVGSVGElement> for proper typing of SVG components
// const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//     <rect width="4" height="12" x="2" y="9" />
//     <circle cx="4" cy="4" r="2" />
//   </svg>
// );

// const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
//     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.7 8.5 4.5 5 9 10 15 11.5 18 10c-1-.5-2 1-1 3 1.5.5 3.5 1 5-1V4z" />
//   </svg>
// );

// const YoutubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
//     <path d="M2.5 17.5l-2.5 5.5 5.5-2.5 12.5-12.5-3-3z" />
//     <rect width="20" height="15" x="2" y="3" rx="4" ry="4" />
//     <path d="M10 9l5 3-5 3V9z" />
//   </svg>
// );


// // --- Team Member Card Component ---

// const TeamCard: React.FC<TeamCardProps> = ({ member, isCurrent }) => {
//   const cardStyle = isCurrent
//     ? "opacity-100 scale-100 shadow-2xl ring-4 ring-indigo-500/50"
//     : "opacity-50 scale-[0.9] blur-[1px] shadow-lg ring-1 ring-gray-200/50";

//   return (
//     <div className={`
//       flex-none w-full sm:w-[450px] mx-4 transition-all duration-700 ease-in-out transform perspective-1000
//       ${cardStyle}
//       bg-white rounded-xl overflow-hidden
//       hover:shadow-3xl hover:ring-indigo-500 hover:opacity-100
//       group relative
//     `}>
//       {/* Background/Effect Layer */}
//       <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50/50 rounded-xl"></div>

//       {/* Content Layer */}
//       <div className="relative p-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left h-full">

//         {/* Image & Position (Left/Top) */}
//         <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 border-4 border-indigo-400/70 shadow-inner">
//           <Image
//             src={member.image}
//             alt={member.name}
//             className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
//             width={200}
//             height={200}
        
//             // Use React.SyntheticEvent<HTMLImageElement> for the event type
//             onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
//               e.currentTarget.onerror = null;
//               e.currentTarget.src = "/img/blank.jpg";
//             }}
//           />
//         </div>

//         {/* Details (Right/Bottom) */}
//         <div className="flex-grow">
//           <h3 className="text-3xl font-extrabold text-indigo-700 mb-1 leading-tight tracking-tight">
//             {member.name}
//           </h3>
//           <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
//             {member.position}
//           </p>

//           <div className="flex justify-center md:justify-start space-x-4 mb-6">
//             <a
//               href={member.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-indigo-600 transition duration-150 p-2 rounded-full hover:bg-indigo-50"
//               aria-label={`LinkedIn profile of ${member.name}`}
//             >
//               <LinkedinIcon className="w-5 h-5" />
//             </a>
//             <a
//               href={member.twitter}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-indigo-600 transition duration-150 p-2 rounded-full hover:bg-indigo-50"
//               aria-label={`X/Twitter profile of ${member.name}`}
//             >
//               <TwitterIcon className="w-5 h-5" />
//             </a>
//           </div>

//           <a
//             href={member.youtube}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-md text-white bg-red-600 hover:bg-red-700 transition duration-200 transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//           >
//             <YoutubeIcon className="w-4 h-4 mr-2 fill-current" />
//             Watch Intro Video
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };


// // --- Main Carousel Component ---

// export default function App(): React.ReactElement {
//   // Explicitly typing useState hooks
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const totalMembers: number = teamMembers.length;

//   // Function to move to the next slide
//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex === totalMembers - 1 ? 0 : prevIndex + 1));
//   }, [totalMembers]);

//   // Automatic sliding effect
//   useEffect(() => {
//     // Set up the interval for auto-sliding (right to left)
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000); // Slides every 4 seconds

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, [nextSlide]);

//   return (
//     <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-8 font-['Inter']">
//       <div className="w-full max-w-6xl">
//         {/* Header */}
//         <header className="text-center mb-10">
//           <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
//             Meet Our Creative Team
//           </h1>
//           <p className="text-xl text-gray-500">
//             Driving innovation, one unique perspective at a time.
//           </p>
//         </header>

//         {/* Carousel Container - Critical for overflow and positioning */}
//         <div className="relative overflow-hidden w-full rounded-2xl bg-indigo-50 p-6 shadow-xl">
//           <div className="relative h-auto py-4">

//             {/* Carousel Track */}
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{
//                 // Calculate the translation to show the current item centered
//                 // We use calc here to center the card based on the current index and container width
//                 transform: `translateX(calc(-${currentIndex * (450 + 32)}px + 50% - 225px))` // (CardWidth + Margin) + (Center Adjustment)
//               }}
//             >
//               {teamMembers.map((member, index) => (
//                 <TeamCard
//                   key={member.id}
//                   member={member}
//                   isCurrent={index === currentIndex}
//                 />
//               ))}
//             </div>

//             {/* Navigation Buttons (Optional, for manual control) */}
//             <div className="absolute inset-y-0 left-0 flex items-center">
//               <button
//                 onClick={() => setCurrentIndex((prev) => (prev === 0 ? totalMembers - 1 : prev - 1))}
//                 className="bg-white/50 hover:bg-white/90 p-3 ml-2 rounded-full shadow-lg transition-all duration-300 z-10 focus:outline-none focus:ring-4 focus:ring-indigo-300"
//                 aria-label="Previous team member"
//               >
//                 <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
//               </button>
//             </div>

//             <div className="absolute inset-y-0 right-0 flex items-center">
//               <button
//                 onClick={nextSlide}
//                 className="bg-white/50 hover:bg-white/90 p-3 mr-2 rounded-full shadow-lg transition-all duration-300 z-10 focus:outline-none focus:ring-4 focus:ring-indigo-300"
//                 aria-label="Next team member"
//               >
//                 <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
//               </button>
//             </div>
            
//             {/* Dots Indicator */}
//             <div className="flex justify-center mt-8 space-x-2">
//               {teamMembers.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
//                     index === currentIndex ? 'w-6 bg-indigo-600 shadow-md' : 'w-2 bg-indigo-300/70 hover:bg-indigo-400'
//                   }`}
//                   aria-label={`Go to team member ${index + 1}`}
//                 />
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }