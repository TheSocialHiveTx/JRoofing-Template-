
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Search, Filter, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Our Work in Action</h1>
          <p className="text-xl text-slate-600">
            A visual record of our commitment to excellence. From residential refits to commercial installations, see the standards we bring to every job.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="w-full pl-12 pr-4 py-2.5 bg-white border border-slate-200 rounded-full focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-indigo-600 scale-50 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight size={32} />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
              <Filter className="text-slate-400 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No projects found in this category</h3>
            <p className="text-slate-500 mt-2">Try selecting a different category or clearing your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
