
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Success notification (in a real app, you'd send this to your backend)
    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for joining the House of Reggae newsletter.",
    });
    
    // Reset form
    setEmail('');
  };

  return (
    <section className="py-20 bg-reggae-black text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('/placeholder.svg')] bg-repeat opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 p-3 rounded-full bg-reggae-red bg-opacity-20">
            <Mail size={32} className="text-reggae-red" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
            Get Rooted with Us – Join the House
          </h2>
          
          <p className="text-lg mb-10 opacity-80">
            Subscribe to our newsletter and stay updated with the latest mixes, 
            upcoming events, and everything happening in Uganda's reggae scene.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow py-3 px-4 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-reggae-gold"
              required
            />
            
            <button 
              type="submit" 
              className="bg-reggae-gold text-reggae-black font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-200 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
          
          <p className="text-sm mt-4 opacity-60">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
