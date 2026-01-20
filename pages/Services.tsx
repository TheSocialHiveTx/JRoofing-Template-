
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES, IconMap } from '../constants';
import { ChevronRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Expert Solutions for Every Need</h1>
          <p className="text-xl text-slate-600">
            We offer a wide spectrum of professional services designed to maintain, improve, and secure your property. Our approach combines traditional craftsmanship with modern efficiency.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-xl">
                    {IconMap[service.icon]}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">Service Division {idx + 1}</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {['Guaranteed Quality', 'Certified Specialists', 'Safe Work Practices', 'Timely Completion'].map((feat, i) => (
                    <div key={i} className="flex items-center text-slate-700 font-medium">
                      <CheckCircle className="text-indigo-600 mr-3 w-5 h-5 shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
                <a href="#/contact" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors group">
                  Inquire About This Service
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Info Section */}
        <div className="mt-40 p-12 md:p-20 bg-slate-900 rounded-[3rem] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Need a custom solution?</h2>
            <p className="text-lg text-slate-400 mb-12">
              Don't see exactly what you're looking for? Our expertise spans across multiple disciplines. We take pride in tackling unique challenges and designing bespoke plans for complex requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="#/contact" className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/20">
                Contact Our Specialists
              </a>
              <div className="flex items-center justify-center">
                <span className="text-slate-400 mr-4">or call us at</span>
                <span className="font-bold text-xl">555-0199</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
