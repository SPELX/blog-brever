import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";
import { Prose } from "@/components/blog/Prose";
import { posts } from "@/data/posts";

const articleContent: Record<string, string[]> = {
  "vai-plantar-soja": [
    "O apetite global por soja brasileira continua em expansão, mas os compradores mudam de prioridade conforme câmbio, logística e acordos sanitários. Mapear esses movimentos com antecedência permite negociar melhor o frete e o prêmio pago por saca.",
    "Na Brever, enxergamos que dados de exportação, clima e disponibilidade de frota ajudam a planejar carregamentos com até 15 dias de vantagem competitiva. O segredo está em cruzar indicadores de mercado com a realidade do campo.",
  ],
  "frota-inteligente": [
    "Frotas conectadas garantem que cada máquina no campo opere com o máximo de eficiência. Quando sensores, checklists digitais e alertas atuam juntos, o gestor mantém visibilidade contínua do que acontece em cada frente de trabalho.",
    "Com o Brever OS, é possível cruzar telemetria com abastecimentos e ordens de serviço para reduzir paradas e antecipar manutenção.",
  ],
};

const defaultContent = [
  "Transformar dados em ação prática é o que diferencia operações agrícolas resilientes. Este artigo reúne aprendizados coletados com clientes Brever em diferentes regiões do país.",
  "Utilize os insights abaixo como ponto de partida para adaptar processos de campo e evoluir indicadores de produtividade, abastecimento e sustentabilidade.",
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.id }));
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.id === slug);

  if (!post) {
    notFound();
  }

  const body = articleContent[post.id] ?? defaultContent;

  return (
    <div className="bg-bg text-text">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-0">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:opacity-80"
        >
          ← Voltar para o blog
        </Link>
        <div className="mt-6 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">{post.category}</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <span>Por {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="relative h-[420px] w-full overflow-hidden rounded-none">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-0">
        <Prose className="space-y-4">
          {body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <h3>Checklist rápido para aplicar no campo</h3>
          <ul>
            <li>Mapeie indicadores críticos e valide se estão acessíveis em tempo real.</li>
            <li>Integre equipes de campo e escritório em um único fluxo de comunicação.</li>
            <li>Registre aprendizados de cada safra para evoluir protocolos e treinamentos.</li>
          </ul>
          <p>
            Quando a operação tem clareza sobre os números e processos, fica mais simples priorizar
            investimentos, negociar insumos e proteger margens.
          </p>
        </Prose>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-0">
        <NewsletterCTA />
      </div>
    </div>
  );
}
