export interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
  author: string;
  category: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface ChurchMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}