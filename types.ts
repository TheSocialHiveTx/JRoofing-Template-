
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
