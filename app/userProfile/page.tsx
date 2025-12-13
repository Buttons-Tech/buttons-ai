'use client';

import Image from 'next/image';
import React from 'react';

// --- TypeScript Interface for Profile Data ---

interface UserProfileData {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
  linkedin: string;
  twitter: string;
  youtube: string;
}

// --- Sample Data (Using Anya Sharma as an example) ---
const mockProfileData: UserProfileData = {
  id: 1,
  name: "Chigozie Ohakwe",
  position: "Chief Executive Officer (CEO)",
  image: "https://placehold.co/400x400/2c3e50/ecf0f1?text=A.S.",
  bio: "Ohakwechi is a visionary leader dedicated to driving innovation and fostering a culture of collaboration. With over 15 years of experience in the tech industry, he specializes in strategic planning and market expansion. he believes in empowering teams to achieve ambitious goals while maintaining ethical standards and client focus.",
  email: "ohakwechi@atomicmail.io",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  skills: ["Strategic Planning", "Leadership", "Venture Capital", "Product Strategy", "Market Analysis", "Public Speaking"],
  linkedin: "https://linkedin.com/in/anyasharma",
  twitter: "https://x.com/anyasharma",
  youtube: "https://youtube.com/watch?v=anya_intro_video"
};

// --- Inline SVG Icons ---
const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.73-4.85A18.84 18.84 0 0 1 3 14c0-1.03.73-2.05 2-2 1.3 0 2.5.3 3.6.8a1.38 1.38 0 0 0 1.5-1.5 1.38 1.38 0 0 0-1.5-1.5A12 12 0 0 0 3.16 3.12 2 2 0 0 1 5.34 1h3a2 2 0 0 1 2 2 12 12 0 0 0 1.7 5.5 1.38 1.38 0 0 0 1.5 1.5 1.38 1.38 0 0 0 1.5-1.5A12 12 0 0 0 21 8.84a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3.08a1 1 0 0 1-.92-1z" /></svg>
);
const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.7 8.5 4.5 5 9 10 15 11.5 18 10c-1-.5-2 1-1 3 1.5.5 3.5 1 5-1V4z" /></svg>
);
const YoutubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="15" x="2" y="3" rx="4" ry="4" /><path d="M10 9l5 3-5 3V9z" /></svg>
);


// --- Profile Section Container Component ---

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const ProfileSection: React.FC<SectionProps> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-6">
    <h3 className="text-xl font-bold text-indigo-700 mb-4 border-b pb-2">{title}</h3>
    {children}
  </div>
);


// --- Main App Component ---

export default function App(): React.ReactElement {
  const profile = mockProfileData;

  // LIFTED EVENT HANDLER: This is the fix for the "Event handlers cannot be passed" error.
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Prevent infinite loop if the fallback image also fails to load
    e.currentTarget.onerror = null; 
    // Set a placeholder image on failure
    e.currentTarget.src = "https://placehold.co/400x400/1e293b/94a3b8?text=Photo+N/A";
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8 font-['Inter'] flex justify-center">
      <div className="w-full max-w-4xl">
        
        {/* Header Title */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
            Team Member Profile
          </h1>
          <p className="text-lg text-gray-500">A detailed look at our core leadership</p>
        </header>

        {/* Profile Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Contact & Social) - Fixed Width */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-indigo-500 text-center">
              
              {/* Profile Image */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-300 shadow-md">
                <Image
                width={200}
                height={200}
                  src={profile.image}
                  alt={`Profile picture of ${profile.name}`}
                  className="w-full h-full object-cover"
                  // Applying the named handler here
                  onError={handleImageError} 
                />
              </div>

              <h2 className="text-3xl font-extrabold text-gray-900 leading-snug">{profile.name}</h2>
              <p className="text-md font-semibold text-indigo-600 mb-6 uppercase tracking-wider">{profile.position}</p>

              {/* Contact Info */}
              <div className="space-y-3 text-left text-gray-600">
                <div className="flex items-center space-x-3">
                  <MailIcon className="text-indigo-500 flex-shrink-0" />
                  <a href={`mailto:${profile.email}`} className="hover:text-indigo-700 transition truncate">{profile.email}</a>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="text-indigo-500 flex-shrink-0" />
                  <a href={`tel:${profile.phone}`} className="hover:text-indigo-700 transition">{profile.phone}</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="text-indigo-500 flex-shrink-0" />
                  <span>{profile.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-5 mt-6 pt-4 border-t border-gray-100">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-indigo-600 transition">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a href={profile.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-indigo-600 transition">
                  <TwitterIcon className="w-6 h-6" />
                </a>
                <a href={profile.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 hover:text-red-600 transition">
                  <YoutubeIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column (Bio & Skills) - Flexible Width */}
          <div className="lg:col-span-2">
            
            {/* Bio Section */}
            <ProfileSection title="About Me">
              <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
            </ProfileSection>
            
            {/* Skills Section */}
            <ProfileSection title="Core Competencies">
              <div className="flex flex-wrap gap-3">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full shadow-sm hover:bg-indigo-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ProfileSection>
            
            {/* Call to Action */}
            <div className="mt-8 p-6 bg-indigo-50 rounded-xl text-center">
                <p className="text-lg font-medium text-indigo-800 mb-3">
                    Want to discuss business strategy?
                </p>
                <a 
                    href={`mailto:${profile.email}`}
                    className="inline-block px-8 py-3 text-base font-semibold rounded-lg shadow-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
                >
                    Send an Email
                </a>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}