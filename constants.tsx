
import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  ThumbsUp, 
  Wrench, 
  Home, 
  Building, 
  Hammer, 
  CheckCircle,
  Truck
} from 'lucide-react';
import { ServiceItem, ProjectItem, BenefitItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'Projects', href: '#/projects' },
  { label: 'Contact', href: '#/contact' },
];

export const BUSINESS_NAME = "Professional Services Group";
export const TAGLINE = "Quality craftsmanship and reliable solutions for your property.";
export const PHONE_PLACEHOLDER = "(555) 123-4567";
export const EMAIL_PLACEHOLDER = "info@serviceprotemplate.com";

export const BENEFITS: BenefitItem[] = [
  {
    title: "Unmatched Quality",
    description: "We use premium materials and rigorous standards to ensure every job is completed to perfection.",
    icon: "ShieldCheck"
  },
  {
    title: "On-Time Service",
    description: "Your time is valuable. We pride ourselves on punctuality and efficient project management.",
    icon: "Clock"
  },
  {
    title: "Clear Communication",
    description: "Stay informed at every step. We provide transparent updates and responsive customer support.",
    icon: "MessageSquare"
  },
  {
    title: "Proven Results",
    description: "With years of industry experience, our track record speaks for itself through satisfied clients.",
    icon: "ThumbsUp"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Residential Solutions",
    description: "Comprehensive care and specialized services tailored specifically for home environments.",
    longDescription: "Our residential services are designed to give homeowners peace of mind. Whether it's routine maintenance or complex upgrades, we treat your home as if it were our own. Our team is trained to work cleanly and respectfully in private residences.",
    icon: "Home",
    image: "https://picsum.photos/seed/res1/800/600"
  },
  {
    id: "s2",
    title: "Commercial Maintenance",
    description: "Expert facility management and large-scale services for business properties and offices.",
    longDescription: "Commercial properties require a different level of expertise. We provide scalable maintenance programs and emergency repairs that minimize downtime for your business. Our technicians are experienced in high-traffic environments.",
    icon: "Building",
    image: "https://picsum.photos/seed/com1/800/600"
  },
  {
    id: "s3",
    title: "Expert Installations",
    description: "Precision installation of fixtures, systems, and structures with a focus on longevity.",
    longDescription: "From initial design to final walkthrough, our installation team ensures that every component is integrated perfectly. We follow manufacturer specifications to the letter, ensuring warranty compliance and peak performance.",
    icon: "Wrench",
    image: "https://picsum.photos/seed/inst1/800/600"
  },
  {
    id: "s4",
    title: "Specialized Repairs",
    description: "Advanced diagnostic and repair capabilities for complex technical issues.",
    longDescription: "When standard solutions aren't enough, our specialists step in. We use the latest diagnostic equipment to identify root causes and implement lasting repairs that prevent future failures.",
    icon: "Hammer",
    image: "https://picsum.photos/seed/rep1/800/600"
  },
  {
    id: "s5",
    title: "Consultation & Planning",
    description: "Professional guidance and detailed project roadmaps for your next big undertaking.",
    longDescription: "Great results start with great planning. We offer comprehensive feasibility studies, budgeting assistance, and technical consultations to ensure your project starts on the right foot.",
    icon: "CheckCircle",
    image: "https://picsum.photos/seed/plan1/800/600"
  },
  {
    id: "s6",
    title: "Emergency Support",
    description: "Rapid response teams available to handle urgent issues and critical failures.",
    longDescription: "Issues don't always happen during business hours. Our rapid response team is equipped to handle emergencies, providing immediate stabilization and repair services when you need them most.",
    icon: "Truck",
    image: "https://picsum.photos/seed/emerg1/800/600"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Residential System Upgrade",
    category: "Residential",
    description: "Full modernization of a multi-room environment using energy-efficient materials.",
    image: "https://picsum.photos/seed/p1/600/400"
  },
  {
    id: "p2",
    title: "Commercial Complex Refit",
    category: "Commercial",
    description: "Comprehensive facility upgrade completed over a four-week timeline.",
    image: "https://picsum.photos/seed/p2/600/400"
  },
  {
    id: "p3",
    title: "Custom Installation Project",
    category: "Bespoke",
    description: "Specialized installation requiring precision engineering and unique components.",
    image: "https://picsum.photos/seed/p3/600/400"
  },
  {
    id: "p4",
    title: "Property Restoration",
    category: "Residential",
    description: "Returning a vintage property to its original condition while updating core systems.",
    image: "https://picsum.photos/seed/p4/600/400"
  },
  {
    id: "p5",
    title: "Modern Office Integration",
    category: "Commercial",
    description: "Designing and installing smart systems for a 50-person workspace.",
    image: "https://picsum.photos/seed/p5/600/400"
  },
  {
    id: "p6",
    title: "Safety Standard Overhaul",
    category: "Industrial",
    description: "Implementing advanced safety protocols and structural reinforcements.",
    image: "https://picsum.photos/seed/p6/600/400"
  }
];

export const IconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  ThumbsUp: <ThumbsUp className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Building: <Building className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  Hammer: <Hammer className="w-6 h-6" />,
  CheckCircle: <CheckCircle className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
};
