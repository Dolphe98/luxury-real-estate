import React, { useState } from 'react';

const Contact = () => {
  // 📝 Multi-input form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle typing in the inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🚀 DEMO MODE: Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Demo Mode: Inquiry from ${formData.name} captured! In a production app, this would be sent to a backend API or a CRM via a POST request.`);
    
    // Clear the form to show a completed action
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Copy */}
          <div>
            <h2 className="text-4xl font-light text-slate-900 tracking-tight mb-6">
              Request a <span className="font-bold text-emerald-700">Private Showing</span>
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Whether you are acquiring a new portfolio asset or selling a legacy estate, our discreet and dedicated team is available 24/7. Contact us below to begin the conversation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Direct Line</p>
                  <p className="font-semibold">+1 (800) 555-AURA</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Desk</p>
                  <p className="font-semibold">inquiries@auraestates.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Lead Form */}
          <div className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border border-slate-200 text-slate-900 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-slate-200 text-slate-900 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border border-slate-200 text-slate-900 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full bg-white border border-slate-200 text-slate-900 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 transition-all"></textarea>
              </div>

              <button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold uppercase tracking-wider py-4 rounded shadow-lg shadow-emerald-700/20 transition-all hover:-translate-y-0.5">
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;