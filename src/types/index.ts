export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  whatsappMessage: string;
  tag?: string;
  iconName: 'Droplet' | 'Sparkles' | 'Flower2' | 'HeartHandshake';
}

export interface PostCareTip {
  title: string;
  description: string;
}
