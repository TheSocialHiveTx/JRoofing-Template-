
import React from 'react';
import { Target, Heart, Shield, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Our Legacy of Excellence</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Since our founding, we've been dedicated to one simple goal: providing the highest quality service solutions with unparalleled professionalism.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
              alt="Our Story" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div>
            <SectionHeading title="A Foundation of Trust" />
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                {BUSINESS_NAME} started with a small team of dedicated technicians who believed that the local service industry needed a higher standard of accountability and craftsmanship.
              </p>
              <p>
                Over the years, we have grown into a full-scale professional organization, yet we have never lost sight of the personal touch that defines our work. Every project is handled with the same level of care and precision that earned us our first referral.
              </p>
              <p>
                Today, we serve hundreds of residential and commercial clients, helping them maintain their properties and realize their structural visions with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Driven By Our Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Our core principles guide every decision we make and every project we undertake.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Target className="w-10 h-10 text-indigo-400" />, t: "Mission", d: "To deliver reliable, high-quality solutions that improve the lives and properties of our clients." },
              { icon: <Shield className="w-10 h-10 text-indigo-400" />, t: "Integrity", d: "We stand behind our work and our word, ensuring transparency in every interaction." },
              { icon: <Heart className="w-10 h-10 text-indigo-400" />, t: "Care", d: "We treat every property with respect, focusing on cleanliness and professionalism." },
              { icon: <Users className="w-10 h-10 text-indigo-400" />, t: "Collaboration", d: "Working closely with clients to ensure their specific needs are met with precision." }
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6">{v.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{v.t}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="mb-24">
          <SectionHeading centered title="Our Journey" subtitle="Key milestones that have shaped our commitment to quality." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2010", title: "Humble Beginnings", desc: "Started as a 3-person team focused on residential repairs." },
              { year: "2015", title: "Commercial Expansion", desc: "Launched our facility maintenance division for local businesses." },
              { year: "2020", title: "Industry Recognition", desc: "Awarded top regional certification for excellence in safety standards." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl font-black text-indigo-100 block mb-4">{item.year}</span>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center p-12 bg-indigo-50 rounded-[2rem] border-2 border-dashed border-indigo-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Want to learn more about our team?</h3>
          <a href="#/contact" className="inline-block px-10 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
            Let's Talk Shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
