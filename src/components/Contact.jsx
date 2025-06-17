import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Toast from './Toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: '', type: 'success' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // EmailJS configuration - Replace these with your actual values from EmailJS dashboard
      const serviceID = 'service_8d372ep'; // Replace with your actual Service ID
      const templateID = 'template_qlunpo2'; // Replace with your actual Template ID
      const publicKey = 'feqHWfneljF-iyc8A'; // Replace with your actual Public Key
      
      // Check if EmailJS is properly configured
      const isEmailJSConfigured = 
        serviceID !== 'service_your_id' && 
        templateID !== 'template_your_id' && 
        publicKey !== 'your_public_key' &&
        serviceID.startsWith('service_') &&
        templateID.startsWith('template_') &&
        publicKey.length > 10;
      
      if (isEmailJSConfigured) {
        // Try EmailJS first if configured
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Osama Ahmad',
          to_email: 'osamaahmad4923@gmail.com',
        };

        await emailjs.send(serviceID, templateID, templateParams, publicKey);
        showToast("Thank you for your message! I'll get back to you soon.", 'success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback to mailto (works immediately without setup)
        const subject = encodeURIComponent("Portfolio Contact Form - " + formData.name);
        const body = encodeURIComponent(
          `Hello Osama,\n\nYou have received a new message from your portfolio:\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio contact form`
        );
        
        // Open email client with pre-filled message
        window.open(`mailto:osamaahmad4923@gmail.com?subject=${subject}&body=${body}`, '_blank');
        
        showToast("Your email client will open with a pre-filled message. Please send it to complete your contact request!", 'info');
        setFormData({ name: "", email: "", message: "" });
      }
      
    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Fallback to mailto if EmailJS fails
      const subject = encodeURIComponent("Portfolio Contact Form - " + formData.name);
      const body = encodeURIComponent(
        `Hello Osama,\n\nYou have received a new message from your portfolio:\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio contact form`
      );
      
      window.open(`mailto:osamaahmad4923@gmail.com?subject=${subject}&body=${body}`, '_blank');
      showToast("There was an issue with the direct email service. Your email client will open with a pre-filled message instead.", 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-gradient">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cream">
              Let's Work Together
            </h2>
            <p className="text-xl text-warm-taupe max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's create
              something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cream">
                  Get In Touch
                </h3>
                <p className="text-warm-taupe leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative
                  projects, or just having a chat about design. Feel free to
                  reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-blue/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-warm-taupe/30">
                    <svg
                      className="w-6 h-6 text-warm-taupe"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream font-medium">Email</p>
                    <p className="text-warm-taupe">osamaahmad4923@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-blue/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-warm-taupe/30">
                    <svg
                      className="w-6 h-6 text-warm-taupe"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream font-medium">Phone</p>
                    <p className="text-warm-taupe">+962777882080</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-blue/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-warm-taupe/30">
                    <svg
                      className="w-6 h-6 text-warm-taupe"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream font-medium">Location</p>
                    <p className="text-warm-taupe">Amman,Jordan</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4 text-cream">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/osama-taweel-945934242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-navy-blue/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-warm-taupe/30 hover:border-cream/50 hover:bg-warm-taupe/20 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-warm-taupe hover:text-cream transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/osama.0.3?igsh=b3BmM3J6aWMxNG96&utm_source=qr"
                    title="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-navy-blue/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-warm-taupe/30 hover:border-cream/50 hover:bg-warm-taupe/20 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-warm-taupe hover:text-cream transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-navy-blue/30 backdrop-blur-sm rounded-2xl p-8 border border-warm-taupe/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-cream font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-charcoal/50 border border-warm-taupe/30 rounded-lg text-cream placeholder-warm-taupe/60 focus:border-cream/50 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-cream font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-charcoal/50 border border-warm-taupe/30 rounded-lg text-cream placeholder-warm-taupe/60 focus:border-cream/50 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-cream font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-charcoal/50 border border-warm-taupe/30 rounded-lg text-cream placeholder-warm-taupe/60 focus:border-cream/50 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-4 bg-accent-gradient text-charcoal font-semibold rounded-lg hover:shadow-xl hover:shadow-cream/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={hideToast}
        duration={5000}
      />
    </section>
  );
};

export default Contact;
