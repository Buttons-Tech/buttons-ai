import React from 'react';

// --- TypeScript Interface for Track Data ---

interface JoinTrack {
  title: string;
  description: string;
  benefits: string[];
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string; // Tailwind color class for accent
  link: string;
}

// --- Inline SVG Icons ---

// Volunteer Icon (Heart/Hands)
const VolunteerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-heart">
    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.5.6L3 17v0a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2z" />
    <path d="M18 10c-1.3 0-2.5.6-3.3 1.5.5-2.6-.4-5-2-6.5C11.6 3.9 9.9 3 8 3a4 4 0 0 0-4 4c0 1.3.6 2.5 1.5 3.3L11 15h2v3c.3.5 1.2 1.5 2.5 1.5C18.4 19.5 21 16 21 12.5c0-1.9-1.5-3.5-3-3.5z" />
  </svg>
);

// Intern Icon (Graduation Cap)
const InternIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap">
    <path d="M21.42 10.98a2 2 0 0 0 0-3.96L12.79 3.25a2 2 0 0 0-1.58 0L2.58 7.02a2 2 0 0 0 0 3.96l4.21 1.95c.53.25 1.15.25 1.68 0L21.42 10.98z" />
    <path d="M12 10V3" />
    <path d="M6 10v7a3 3 0 0 0 6 0v-7" />
    <path d="M18 10v7a3 3 0 0 1-6 0v-7" />
    <path d="M12 17v4" />
  </svg>
);

// Main Team Icon (Briefcase)
const MainTeamIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);


// --- Join Track Card Component ---

const JoinTrackCard: React.FC<JoinTrack> = ({ title, description, benefits, icon: Icon, color, link }) => (
  <div className={`
    bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300
    p-6 sm:p-8 flex flex-col h-full border-t-8 ${color}
    transform hover:-translate-y-1
  `}>
    {/* Icon and Title */}
    <div className="flex items-center space-x-4 mb-4">
      <div className={`p-3 rounded-full bg-opacity-10 ${color.replace('border-t-8', 'text').replace('500', '600')} ring-2 ${color.replace('border-t-8', 'ring').replace('500', '400')}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h2 className="text-3xl font-extrabold text-gray-800 leading-snug">
        {title}
      </h2>
    </div>

    {/* Description */}
    <p className="text-gray-600 mb-6 flex-grow">
      {description}
    </p>

    {/* Key Benefits Section */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-1">Key Focuses:</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg className={`w-4 h-4 mr-2 mt-1 flex-shrink-0 ${color.replace('border-t-8', 'text').replace('500', '600')}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Call to Action Button */}
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        mt-auto w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md
        text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
      `}
    >
      Apply Now
    </a>
  </div>
);


// --- Main Component Data and Structure ---

const joinTracks: JoinTrack[] = [
  {
    title: "Volunteer Program",
    description: "Dedicate your time and passion to make a direct impact. This is perfect for those who want flexible hours and meaningful contribution.",
    benefits: [
      "Flexible schedule, remote work",
      "Gain community experience",
      "Network with professionals",
      "Receive letters of recommendation",
    ],
    icon: VolunteerIcon,
    color: "border-t-8 border-green-500",
    link: "#volunteer-application",
  },
  {
    title: "Internship Track",
    description: "Accelerate your career with real-world projects and mentorship. Available for students seeking structured learning and practical skills.",
    benefits: [
      "Structured 3-6 month program",
      "Dedicated senior mentor",
      "Hands-on project ownership",
      "Potential offer for full-time role",
    ],
    icon: InternIcon,
    color: "border-t-8 border-yellow-500",
    link: "#internship-application",
  },
  {
    title: "Core Team (Full-Time)",
    description: "Join our main team to drive strategic decisions and lead major initiatives. This is for experienced professionals looking for their next challenge.",
    benefits: [
      "Competitive salary and benefits",
      "Stock options and growth paths",
      "Unlimited PTO and flexible WFH",
      "Lead cross-functional teams",
    ],
    icon: MainTeamIcon,
    color: "border-t-8 border-indigo-500",
    link: "#fulltime-application",
  },
];


// --- Main App Component ---

export default function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-16 px-4 sm:px-8 font-['Inter']">
      <div className="w-full max-w-7xl">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Find the perfect track to apply your skills and grow your career with a team that values innovation, collaboration, and impact.
          </p>
        </header>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {joinTracks.map((track) => (
            <JoinTrackCard key={track.title} {...track} />
          ))}
        </div>

        {/* Footer CTA (Optional but good for UX) */}
        <div className="mt-16 text-center pt-8 border-t border-gray-200">
            <p className="text-lg text-gray-600 mb-4">
                Have questions about a specific role?
            </p>
            <a 
                href="#contact"
                className="inline-block px-8 py-3 text-base font-medium rounded-full text-white bg-gray-800 hover:bg-gray-900 transition duration-150 shadow-lg"
            >
                Contact Our HR Team
            </a>
        </div>
      </div>
    </div>
  );
}