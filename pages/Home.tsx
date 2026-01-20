
import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Star, Users, Trophy, Award } from 'lucide-react';
// Added missing PHONE_PLACEHOLDER to the imports from constants
import { BENEFITS, SERVICES, PROJECTS, BUSINESS_NAME, TAGLINE, IconMap, PHONE_PLACEHOLDER } from '../constants';
import SectionHeading from '../components/SectionHeading';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-indigo-600/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Expert Solutions • Reliable Results
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Professional Service <br />
              <span className="text-indigo-400">Built On Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              {TAGLINE} Delivering excellence for every project, from minor repairs to major commercial installations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#/contact" 
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-lg flex items-center justify-center transition-all shadow-xl shadow-indigo-600/20"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#/services" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 rounded-lg font-bold text-lg flex items-center justify-center transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: QUICK VALUE PROPOSITION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all group border border-slate-100">
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {IconMap[benefit.icon]}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LEAD CAPTURE */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4 block">Get Started Today</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to start your next project?</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Contact us for a detailed estimate. We respond to all inquiries within 24 business hours to discuss your needs and provide a clear roadmap.
              </p>
              <ul className="space-y-4">
                {['Detailed project assessment', 'Transparent pricing models', 'Expert consultation included'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <CheckCircle2 className="text-indigo-500 mr-3 w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="(555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message / Project Details</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" placeholder="Tell us about your needs..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98]">
                    Submit Quote Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            centered 
            title="Our Core Services" 
            subtitle="Explore our comprehensive range of specialized solutions designed to meet the highest industry standards."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-indigo-600">
                    {IconMap[service.icon]}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <a href="#/services" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700">
                    Learn More
                    <ChevronRight className="ml-1 w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: COMPANY INTRODUCTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1574123853412-2579f649495b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team at work" 
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-slate-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 font-bold text-3xl">
                      15+
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg leading-tight">Years of<br />Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Our Company</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Commitment to Excellence in Every Detail</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded on the principles of integrity and expert craftsmanship, {BUSINESS_NAME} has grown into a leader in the service industry. We believe that no job is too small for quality care, and no project is too large for personalized attention.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Our team consists of certified specialists who undergo continuous training to stay at the forefront of technical advancements and safety protocols. We don't just complete tasks; we build lasting relationships with our clients through reliable results.
              </p>
              <a href="#/about" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all inline-block shadow-lg shadow-indigo-600/10">
                Discover Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PROJECTS SHOWCASE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Showcase of our Recent Work</h2>
            </div>
            <a href="#/projects" className="inline-flex items-center px-6 py-3 border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 rounded-xl font-bold transition-all">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative h-96 overflow-hidden rounded-3xl bg-slate-900">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 w-fit">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TRUST & CREDIBILITY */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-slate-500 font-semibold text-sm uppercase tracking-[0.2em]">Trusted By Industry Leaders</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
            {/* These would be real partner logos in a real site */}
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="flex justify-center items-center h-12">
                <div className="font-black text-2xl text-slate-400">PARTNER_{i}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <Award className="w-12 h-12 text-indigo-600 mb-4" />
              <h4 className="font-bold text-lg mb-2 text-slate-900">Certified Excellence</h4>
              <p className="text-sm text-slate-600">Holding top-tier industry certifications for safety and specialized techniques.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <Users className="w-12 h-12 text-indigo-600 mb-4" />
              <h4 className="font-bold text-lg mb-2 text-slate-900">Skilled Team</h4>
              <p className="text-sm text-slate-600">Every technician is fully vetted, background checked, and highly trained.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <Trophy className="w-12 h-12 text-indigo-600 mb-4" />
              <h4 className="font-bold text-lg mb-2 text-slate-900">Award Winning</h4>
              <p className="text-sm text-slate-600">Recognized for consistently high service quality and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <SectionHeading 
                title="Why Clients Choose Us" 
                subtitle="We don't just complete projects; we provide peace of mind through a structured approach to every challenge."
              />
              <div className="space-y-6">
                {[
                  { t: "Full Transparency", d: "Clear timelines, no hidden fees, and straightforward communication from day one." },
                  { t: "Dedicated Support", d: "A project manager assigned to your case ensures your vision is followed perfectly." },
                  { t: "Premium Standards", d: "We only use industry-leading materials that guarantee long-term durability and value." }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.t}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4 pt-12">
                  <div className="bg-indigo-600 rounded-3xl p-8 text-white h-64 flex flex-col justify-between">
                    <Star className="w-8 h-8 text-indigo-300" />
                    <div>
                      <p className="text-3xl font-black mb-1">98%</p>
                      <p className="text-xs uppercase tracking-widest font-bold text-indigo-200">Customer Rating</p>
                    </div>
                  </div>
                  <img src="https://picsum.photos/seed/wc1/400/400" alt="Work" className="rounded-3xl h-64 w-full object-cover" />
                </div>
                <div className="space-y-4">
                  <img src="https://picsum.photos/seed/wc2/400/400" alt="Work" className="rounded-3xl h-64 w-full object-cover" />
                  <div className="bg-slate-900 rounded-3xl p-8 text-white h-64 flex flex-col justify-between">
                    <CheckCircle2 className="w-8 h-8 text-indigo-500" />
                    <div>
                      <p className="text-3xl font-black mb-1">500+</p>
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Projects Done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
            Experience the Professional Difference
          </h2>
          <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto">
            Ready to secure high-quality results for your home or business? Our experts are standing by to assist with your next major project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#/contact" className="px-10 py-5 bg-white text-indigo-600 rounded-xl font-bold text-xl hover:bg-slate-50 transition-all shadow-xl shadow-black/10">
              Get My Free Estimate
            </a>
            <div className="flex items-center text-white font-bold text-lg">
              <span className="opacity-70 mr-3">Or Call:</span>
              <a href={`tel:${PHONE_PLACEHOLDER}`} className="hover:underline">{PHONE_PLACEHOLDER}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
