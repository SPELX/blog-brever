export type Category =
  | "Agronegócio"
  | "Gestão de Frotas"
  | "Combustível"
  | "Tecnologia";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  image: string;
  date: string;
  readTime: string;
  author: string;
  isFeatured?: boolean;
  isPopular?: boolean;
}

export const categories: { id: Category; label: string; icon: string }[] = [
  { id: "Agronegócio", label: "Agronegócio", icon: "🌾" },
  { id: "Gestão de Frotas", label: "Gestão de Frotas", icon: "🚜" },
  { id: "Combustível", label: "Combustível", icon: "⛽" },
  { id: "Tecnologia", label: "Tecnologia", icon: "🧠" },
];

export const highlightedCategories = [
  {
    title: "📈 Gestão eficiente no campo",
    description: "Planejamento de safra, custos e KPIs para equipes dispersas.",
    slug: "gestao-eficiente",
  },
  {
    title: "💡 Inovações e tecnologia agrícola",
    description: "Sensores, IA e conectividade elevando a produtividade.",
    slug: "inovacao-tecnologia",
  },
  {
    title: "🌱 Solo e sustentabilidade",
    description: "Boas práticas de manejo e redução de impactos ambientais.",
    slug: "solo-sustentavel",
  },
];

export const posts: Post[] = [
  {
    id: "vai-plantar-soja",
    title: "Vai plantar soja? Conheça os 5 países que mais compram do Brasil",
    excerpt:
      "Descubra onde concentrar seus esforços comerciais e como a gestão de dados ajuda a prever a demanda internacional.",
    category: "Agronegócio",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=80",
    date: "08 Nov 2024",
    readTime: "6 min",
    author: "Equipe Brever",
    isFeatured: true,
    isPopular: true,
  },
  {
    id: "frota-inteligente",
    title: "Checklist de frota inteligente para acelerar a colheita",
    excerpt:
      "Estruture rotas, telemetria e abastecimento com dados em tempo real e reduza 18% do tempo ocioso.",
    category: "Gestão de Frotas",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    date: "05 Nov 2024",
    readTime: "4 min",
    author: "Marina Souza",
    isPopular: true,
  },
  {
    id: "diesel-otimizado",
    title: "Como negociar combustível com previsibilidade e economia",
    excerpt:
      "Aprenda a usar indicadores de consumo por talhão e contratos indexados para fugir da volatilidade.",
    category: "Combustível",
    image:
      "https://images.unsplash.com/photo-1502622796232-e88458466f23?auto=format&fit=crop&w=1600&q=80",
    date: "01 Nov 2024",
    readTime: "5 min",
    author: "Lucas Andrade",
  },
  {
    id: "mapa-tecnologia",
    title: "Mapa de tecnologias essenciais para o agro em 2025",
    excerpt:
      "Da IA generativa aos drones autônomos, veja o que já entrega ROI e como planejar o rollout.",
    category: "Tecnologia",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
    date: "28 Out 2024",
    readTime: "8 min",
    author: "Equipe Brever",
    isPopular: true,
  },
  {
    id: "solo-saudavel",
    title: "Solo saudável: 4 rituais semanais que evitam surpresas",
    excerpt:
      "Protocolos rápidos para acompanhar microbiologia, umidade e compactação sem depender apenas do laboratório.",
    category: "Agronegócio",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    date: "22 Out 2024",
    readTime: "7 min",
    author: "Patrícia Benites",
  },
  {
    id: "telemetria-alfandega",
    title: "Telemetria na fronteira: como manter a conformidade",
    excerpt:
      "Modelos de checklist digital e alertas automáticos para veículos que cruzam estados ou países.",
    category: "Gestão de Frotas",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80",
    date: "18 Out 2024",
    readTime: "5 min",
    author: "Diogo Lemes",
  },
  {
    id: "energia-limpa",
    title: "Biodiesel, etanol ou eletrificação? Guia rápido de ROI",
    excerpt:
      "Comparativo de investimentos e payback para frotas agrícolas de médio porte.",
    category: "Combustível",
    image:
      "https://images.unsplash.com/photo-1505739775417-85f52d47f729?auto=format&fit=crop&w=1600&q=80",
    date: "12 Out 2024",
    readTime: "6 min",
    author: "Equipe Brever",
  },
  {
    id: "dados-clima",
    title: "Microclimas e dados integrados: como proteger a safra",
    excerpt:
      "Integre sensores locais e APIs meteorológicas para reagir 48h mais rápido a eventos extremos.",
    category: "Tecnologia",
    image:
      "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?auto=format&fit=crop&w=1600&q=80",
    date: "08 Out 2024",
    readTime: "9 min",
    author: "Helena Prado",
  },
];
