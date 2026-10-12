import { ServiceItem, PostCareTip } from '../types';

export const STUDIO_INFO = {
  name: 'Studio Cíntia Cibele',
  fullTitle: 'Studio Cíntia Cibele Epilação e Estética',
  tagline: 'Epilação e estética com cuidado, delicadeza e atenção aos detalhes.',
  subTagline: 'Realce sua beleza com uma rotina de cuidados pensada para você.',
  
  phoneDisplay: '(81) 98201-2800',
  phoneRaw: '5581982012800',
  whatsappDirectUrl: 'https://wa.me/5581982012800',
  
  address: 'Rua Santo Elías, nº 23, Prazeres, Jaboatão dos Guararapes — PE',
  neighborhood: 'Prazeres, Jaboatão dos Guararapes — PE',
  
  logoUrl: 'https://i.postimg.cc/7ZDCbXNK/836211974-18109036310464103-4921592080219584521-n.jpg',

  instagramUrl: 'https://www.instagram.com/studiocintiacibelle?psln=ZWFub21waWJ4ajFl',
  instagramHandle: '@studiocintiacibelle',

  threadsUrl: 'https://www.threads.com/@studiocintiacibelle',
  threadsHandle: '@studiocintiacibelle',

  googleReviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJl12EWEXlqgcRg3abdXGBowQ',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Santo+Elias%2C+23%2C+Prazeres%2C+Jaboat%C3%A3o+dos+Guararapes%2C+PE',
};

export const buildWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'epilacao-hidrossoluvel',
    title: 'Epilação Hidrossolúvel',
    subtitle: 'Método gentil e delicado',
    description: 'Atendimento com método hidrossolúvel, priorizando cuidado, conforto e atenção à pele.',
    buttonText: 'Agendar Epilação Hidrossolúvel (WhatsApp)',
    whatsappMessage: 'Olá, Cíntia! Gostaria de saber mais sobre a epilação com método hidrossolúvel e consultar os horários disponíveis.',
    iconName: 'Droplet',
  },
  {
    id: 'clareamento-de-areas',
    title: 'Clareamento de Áreas',
    subtitle: 'Uniformidade e vitalidade',
    description: 'Conheça as opções de cuidados estéticos voltados ao aspecto e à uniformidade da pele.',
    buttonText: 'Dúvidas sobre Clareamento de Áreas',
    whatsappMessage: 'Olá, Cíntia! Gostaria de informações sobre o serviço de clareamento de áreas.',
    iconName: 'Sparkles',
  },
  {
    id: 'revitalizacao-detox-facial',
    title: 'Revitalização e Detox Facial',
    subtitle: 'Renovação e bem-estar cutâneo',
    description: 'Cuidados faciais voltados à limpeza, à revitalização e ao bem-estar da pele.',
    buttonText: 'Conhecer os Cuidados Faciais',
    whatsappMessage: 'Olá, Cíntia! Gostaria de conhecer os serviços de revitalização e detox facial.',
    iconName: 'Flower2',
  },
];

export const POST_CARE_GENERAL_TIPS: PostCareTip[] = [
  {
    title: 'Hidratação suave e calmante',
    description: 'Dê preferência a hidratantes com fórmulas suaves (como camomila ou aloe vera) e evite cosméticos com álcool logo após a sessão.',
  },
  {
    title: 'Atenção à exposição solar',
    description: 'Evite sol direto e bronzeamento nas primeiras 24 a 48 horas nas áreas epiladas para preservar a integridade da pele.',
  },
  {
    title: 'Roupas leves e confortáveis',
    description: 'Prefira tecidos de algodão e peças mais soltinhas no dia do procedimento, reduzindo atritos desnecessários.',
  },
];

export const POST_CARE_MESSAGE = 'Olá, Cíntia! Gostaria de receber orientações sobre os cuidados após a epilação.';
