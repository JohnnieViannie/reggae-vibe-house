
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Normally this would send data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center">Contact Us</h1>
          <div className="relative mb-10 flex justify-center">
            <div className="h-1 w-16 bg-reggae-gold"></div>
          </div>
          <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
            Get in touch with the House of Reggae team for bookings, collaborations, 
            or just to connect with our community.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-heading mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-reggae-gold"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-reggae-gold"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-reggae-gold"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-reggae-gold"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-reggae-red text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-200 flex items-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading mb-6">Get in Touch</h2>
              
              <div className="space-y-8">
                <ContactInfo 
                  icon={<MapPin size={24} />}
                  title="Our Location"
                  detail="15 Reggae Road, Kampala, Uganda"
                />
                
                <ContactInfo 
                  icon={<Phone size={24} />}
                  title="Phone Number"
                  detail="+256 700 123456"
                />
                
                <ContactInfo 
                  icon={<Mail size={24} />}
                  title="Email Address"
                  detail="info@houseofreggae.com"
                />
              </div>
              
              {/* Map */}
              <div className="mt-10 h-80 bg-gray-200 rounded-lg overflow-hidden">
                <div className="h-full w-full bg-[url('/reggae-map.jpg')] bg-cover bg-center"></div>
              </div>
              
              {/* Social Media */}
              <div className="mt-10">
                <h3 className="text-xl font-heading mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <SocialButton href="https://instagram.com" label="Instagram" />
                  <SocialButton href="https://facebook.com" label="Facebook" />
                  <SocialButton href="https://twitter.com" label="Twitter" />
                  <SocialButton href="https://youtube.com" label="YouTube" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex items-start">
    <div className="bg-reggae-gold rounded-full p-3 text-reggae-black mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-heading text-lg">{title}</h3>
      <p className="text-gray-600">{detail}</p>
    </div>
  </div>
);

const SocialButton = ({ href, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-reggae-black hover:bg-reggae-green transition duration-200 text-white px-4 py-2 rounded-md"
    aria-label={label}
  >
    {label}
  </a>
);

export default Contact;
