export interface Bot {
  id: string;
  name: string;
  description: string;
  badge?: string;
  image: string;
  accessType: string;
  winRate: string;
  profitFactor: string;
  riskProfile: "Low" | "Medium" | "High";
  strategy: string;
}

export interface Video {
  id: string;
  title: string;
  views: string;
  date: string;
  image: string;
  alt: string;
  duration: string;
  isNew?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  image?: string;
}

export interface TrustFactor {
  id: string;
  icon: string;
  value: string;
  label: string;
}
