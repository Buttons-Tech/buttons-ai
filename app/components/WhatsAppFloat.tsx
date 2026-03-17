import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const whatsappNumber = "2349066596603"; // Replace with your business number
  const message = "Hi Buttons! I'm interested in your services on Isuti Road. How can I get started?";
  const encodedMessage = encodeURIComponent(message);

  return (
    <a 
      href={"https://cloud-city-sigma.vercel.app/"}
      target="_blank"
      rel="noopener noreferrer"
      style={{backgroundImage: 'url("/cloudcity-icon.jpg")' }}
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:scale-110 transition-transform flex items-center justify-center"
      
    >
      <MessageCircle size={32} fill="white" />
    </a>
  );
}