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
    slug: "gestao-de-frotas",
  },
  {
    title: "💡 Inovações e tecnologia agrícola",
    description: "Sensores, IA e conectividade elevando a produtividade.",
    slug: "tecnologia",
  },
  {
    title: "🌱 Solo e sustentabilidade",
    description: "Boas práticas de manejo e redução de impactos ambientais.",
    slug: "agronegocio",
  },
];

export const posts: Post[] = [
  {
    id: "gestao-frotas-controle",
    title: "Quem não planta gestão colhe prejuízo: controle total da frota",
    excerpt:
      "Planejamento, controle e manutenção inteligente dos bens de capital são a base para margens sustentáveis — veja como estruturar esse ciclo.",
    category: "Gestão de Frotas",
    image: "/assets/gestao-frotas-bg.jpg",
    date: "12 Nov 2024",
    readTime: "9 min",
    author: "Sylvio Liquez Schirmer",
    isPopular: true,
  },
  {
    id: "vai-plantar-soja",
    title: "Vai plantar soja? Conheça os 5 países que mais compram do Brasil",
    excerpt:
      "Descubra onde concentrar seus esforços comerciais e como a gestão de dados ajuda a prever a demanda internacional.",
    category: "Agronegócio",
    image: "/assets/vai_plantar_soja.jpg",
    date: "08 Nov 2024",
    readTime: "6 min",
    author: "Sylvio Liquez Schirmer",
    isFeatured: true,
    isPopular: true,
  },
  {
    id: "mosca-branca-cultura-feijao",
    title: "Mosca-branca no feijão: como proteger sua lavoura",
    excerpt:
      "Conheça o ciclo da Bemisia tabaci, identifique os biótipos presentes no Brasil e aplique um manejo integrado eficaz.",
    category: "Agronegócio",
    image: "/assets/mosca-bg.jpg",
    date: "10 Nov 2024",
    readTime: "8 min",
    author: "Sylvio Liquez Schirmer",
  },
  {
    id: "5-paises-que-mais-compram-soja-brasileira",
    title: "Vai plantar soja? Saiba quais são os 5 países que mais compram",
    excerpt:
      "Ranking completo dos principais importadores de soja brasileira segundo o COMEX STAT e como isso impacta o produtor.",
    category: "Agronegócio",
    image: "/assets/vai_plantar_soja.jpg",
    date: "09 Nov 2024",
    readTime: "6 min",
    author: "Sylvio Liquez Schirmer",
  },
  {
    id: "mapa-tecnologia",
    title: "Mapa de tecnologias essenciais para o agro em 2025",
    excerpt:
      "Da IA generativa aos drones autônomos, veja o que já entrega ROI e como planejar o rollout.",
    category: "Tecnologia",
    image: "/assets/mapa_de_tecnologias.jpg",
    date: "28 Out 2024",
    readTime: "8 min",
    author: "Sylvio Liquez Schirmer",
    isPopular: true,
  },
  {
    id: "solo-saudavel",
    title: "Solo saudável: 4 rituais semanais que evitam surpresas",
    excerpt:
      "Protocolos rápidos para acompanhar microbiologia, umidade e compactação sem depender apenas do laboratório.",
    category: "Agronegócio",
    image: "/assets/solo_saudavel.jpg",
    date: "22 Out 2024",
    readTime: "7 min",
    author: "Sylvio Liquez Schirmer",
  },
  {
    id: "dados-clima",
    title: "Microclimas e dados integrados: como proteger a safra",
    excerpt:
      "Integre sensores locais e APIs meteorológicas para reagir 48h mais rápido a eventos extremos.",
    category: "Tecnologia",
    image: "/assets/microclimas_e_dados.jpg",
    date: "08 Out 2024",
    readTime: "9 min",
    author: "Sylvio Liquez Schirmer",
  },
];
