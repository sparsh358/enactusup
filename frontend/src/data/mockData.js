// Mock data for Enactus Shaheed Rajguru website

export const impactStats = {
  beneficiariesTrained: 300,
  womenEmpowered: 50,
  productsSold: 5000,
  revenueGenerated: 135000,
  eventsWorkshops: 40,
  ngoPartnerships: 10,
  carbonFootprintReduction: 822,
  waterSaved: 30000,
  volunteeredHours: 56000,
  awarenessCreated: 400000
};

export const projects = [
  {
    id: 'pehchaan',
    title: 'Project Pehchaan',
    tagline: 'Social Inclusion & Empowerment',
    description: 'Empowering LGBTQIA+ community and underprivileged women through skill development, entrepreneurship, and community support.',
    year: '2018',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    color: '#6366f1',
    sdgs: [4, 5, 8, 10],
    impact: {
      beneficiaries: 150,
      skillsTaught: 8,
      revenue: 45000
    },
    subProjects: ['SDP', 'Sehej', 'Kashida', 'Ishnakari']
  },
  {
    id: 'sehej',
    title: 'Project Sehej',
    tagline: 'Food-based Entrepreneurship',
    description: 'Creating nutritious, preservative-free food products while empowering individuals as micro-entrepreneurs.',
    year: '2019',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
    color: '#f59e0b',
    sdgs: [2, 3, 5, 8, 9],
    impact: {
      products: 15,
      sales: 2000,
      growth: '9.2%'
    },
    products: ['Mango Jam', 'Apple Jam', 'Kiwi Jam', 'Oats Cookies', 'Flaxseed Cookies']
  },
  {
    id: 'kashida',
    title: 'Project Kashida',
    tagline: 'Sustainable Fashion & Women Empowerment',
    description: 'Training underprivileged women in textile upcycling and creating marketable sustainable fashion products.',
    year: '2018',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=800&q=80',
    color: '#ec4899',
    sdgs: [5, 8, 12],
    impact: {
      wasteUpcycled: 500,
      womenTrained: 30,
      productsCreated: 800
    }
  },
  {
    id: 'ishnakari',
    title: 'Ishnakari',
    tagline: 'Artisan-led Apparel Brand',
    description: 'An ethical fashion brand built around craftsmanship, promoting conscious fashion and empowering marginalized women.',
    year: '2019',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=80',
    color: '#8b5cf6',
    sdgs: [5, 8, 10, 12],
    impact: {
      artisans: 15,
      collections: 5,
      customOrders: 120
    }
  },
  {
    id: 'sugavya',
    title: 'Project Sugavya',
    tagline: 'Circular Economy & Eco-friendly Products',
    description: 'Transforming cow dung and urine into biodegradable products, promoting sustainable celebrations and rural livelihoods.',
    year: '2020',
    image: 'https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=800&q=80',
    color: '#10b981',
    sdgs: [8, 11, 12, 13, 17],
    impact: {
      diyasSold: 1000,
      partnerships: 5,
      wasteConverted: 600
    },
    products: ['Gaumya Diyas', 'Wax Diyas', 'Gaunyl Floor Cleaner', 'Custom Hampers']
  },
  {
    id: 'greenhaven',
    title: 'Project Green Haven',
    tagline: 'IoT-enabled Mushroom Cultivation',
    description: 'Addressing food security through sustainable mushroom cultivation using agricultural waste with cutting-edge IoT technology.',
    year: '2020',
    image: 'https://images.unsplash.com/photo-1612550761236-324000db7cbf?w=800&q=80',
    color: '#059669',
    sdgs: [1, 3, 8, 10, 12, 13],
    impact: {
      trainingParticipants: 100,
      wasteRepurposed: 800,
      incomeGenerated: 600000,
      carbonReduction: 822
    },
    features: ['IoT Facility', '6-month MCP Training', '7+ Mushroom Varieties']
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Nazim',
    project: 'Project Sehej',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'ESR gave me more than skills—they gave me confidence. Through food processing training, I started my own brand "New Bharat Jams & Cookies" and became an entrepreneur.',
    role: 'Food Entrepreneur'
  },
  {
    id: 2,
    name: 'Ragini Ji',
    project: 'Ishnakari',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    quote: 'As a transgender woman, I faced many challenges. ESR\'s training in stitching and design helped me build "Ishnakari," my own apparel brand. Today, I have dignity and purpose.',
    role: 'Fashion Designer & Brand Owner'
  },
  {
    id: 3,
    name: 'Rupesh Ji',
    project: 'Rainbow Artist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    quote: 'Through painting and crochet training, I found a medium for self-expression and empowerment. ESR created a safe space where I could grow.',
    role: 'Artist'
  },
  {
    id: 4,
    name: 'Ram Mohan Ji',
    project: 'Project Green Haven',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    quote: 'The mushroom cultivation training gave me stability and purpose. Now I work at the college and have found my calling.',
    role: 'Mushroom Cultivation Expert'
  },
  {
    id: 5,
    name: 'Sunny Ji',
    project: 'Project Pehchaan',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&q=80',
    quote: 'After years of hardship, Pehchaan gave me acceptance and skills. Through MCP training, I started my own clothing brand. ESR transformed my life.',
    role: 'Entrepreneur'
  },
  {
    id: 6,
    name: 'Prof. Rekha Malhotra',
    project: 'Project Green Haven',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    quote: 'Mentoring students in mushroom cultivation has been rewarding. Watching beneficiaries grow in confidence and build sustainable livelihoods is truly inspiring.',
    role: 'Faculty Mentor, Microbiology Dept.'
  }
];

export const sdgInfo = {
  1: { title: 'No Poverty', color: '#e5243b' },
  2: { title: 'Zero Hunger', color: '#dda63a' },
  3: { title: 'Good Health & Well-Being', color: '#4c9f38' },
  4: { title: 'Quality Education', color: '#c5192d' },
  5: { title: 'Gender Equality', color: '#ff3a21' },
  8: { title: 'Decent Work & Economic Growth', color: '#a21942' },
  9: { title: 'Industry, Innovation & Infrastructure', color: '#fd6925' },
  10: { title: 'Reduced Inequalities', color: '#dd1367' },
  11: { title: 'Sustainable Cities & Communities', color: '#fd9d24' },
  12: { title: 'Responsible Consumption & Production', color: '#bf8b2e' },
  13: { title: 'Climate Action', color: '#3f7e44' },
  17: { title: 'Partnerships for the Goals', color: '#19486a' }
};

export const timeline = [
  {
    year: '2017',
    title: 'Foundation',
    description: 'Enactus Shaheed Rajguru established at SRCASW, University of Delhi'
  },
  {
    year: '2018',
    title: 'Project Pehchaan Launched',
    description: 'Flagship initiative for LGBTQIA+ empowerment begins'
  },
  {
    year: '2019',
    title: 'Project Sehej & Product Launch',
    description: 'Food entrepreneurship initiative and first product line'
  },
  {
    year: '2020',
    title: 'Expansion Year',
    description: 'Launch of Project Sugavya and Green Haven with IoT facility'
  },
  {
    year: '2024',
    title: 'World Cup Representation',
    description: 'ESR represents at Enactus World Cup, national recognition'
  },
  {
    year: '2025',
    title: 'Scaling Impact',
    description: '300+ beneficiaries trained, ₹6L+ income generated'
  }
];

export const socialLinks = {
  instagram: '#',
  linkedin: '#',
  twitter: '#',
  facebook: '#',
  email: 'contact@enactussrcasw.org',
  phone: '+91-XXXXXXXXXX'
};
