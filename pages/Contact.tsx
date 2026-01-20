
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { BUSINESS_NAME, PHONE_PLACEHOLDER, EMAIL_PLACEHOLDER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ready to discuss your next project? Whether you have a quick question or need a detailed estimate, our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                    <Phone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="font-bold text-lg">{PHONE_PLACEHOLDER}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="font-bold text-lg">{EMAIL_PLACEHOLDER}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="font-bold text-lg">123 Service Way, Metro City</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center">
                <Clock className="mr-3 text-indigo-600" />
                Business Hours
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-bold">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-bold">9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between text-slate-400">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-50">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Service Area</p>
                <p className="text-sm text-slate-600">Serving the greater Metro Area and surrounding communities within a 50-mile radius.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
                <p className="text-slate-500">Required fields are marked with an asterisk (*)</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                    <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Enter your email" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="(555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
                      <option>General Inquiry</option>
                      <option>Request an Estimate</option>
                      <option>Schedule Maintenance</option>
                      <option>Project Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">How can we help? *</label>
                  <textarea rows={6} required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" placeholder="Provide as much detail as possible..."></textarea>
                </div>

                <div className="flex items-start mb-4">
                  <div className="flex items-center h-5">
                    <input id="consent" type="checkbox" required className="w-4 h-4 text-indigo-600 bg-slate-50 border-slate-300 rounded focus:ring-indigo-500" />
                  </div>
                  <label htmlFor="consent" className="ml-3 text-sm text-slate-500">
                    I agree to the processing of my data in accordance with the <a href="#" className="text-indigo-600 font-bold hover:underline">Privacy Policy</a>.
                  </label>
                </div>

                <button className="flex items-center justify-center w-full md:w-fit px-12 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98]">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
