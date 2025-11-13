const pillars = [
  {
    title: "Inteligência aplicada",
    description: "Transformamos dados operacionais em insights acionáveis para gestores agrícolas e de frotas.",
  },
  {
    title: "Sustentabilidade prática",
    description: "Protocolos que conectam produtividade com redução de emissões e uso eficiente de recursos.",
  },
  {
    title: "Tecnologia humana",
    description: "Plataforma intuitiva, pensada para equipes no campo e no escritório trabalharem juntas.",
  },
];

const milestones = [
  { year: "2021", text: "Lançamento do Brever OS com foco em abastecimento inteligente." },
  {
    year: "2022",
    text: "Integrações com telemetria e sensores de solo ampliam nossa cobertura em tempo real.",
  },
  {
    year: "2024",
    text: "Expansão para mais de 15 estados com squads dedicados a agroenergia e logística.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-8 lg:py-16">
      <header className="rounded-[40px] border border-border bg-card p-10 shadow-card-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Sobre o Brever</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Tecnologia, dados e inteligência para quem movimenta o agro.
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Trabalhamos lado a lado com produtores, cooperativas e empresas de bioenergia para conectar
          pessoas, processos e máquinas em uma única fonte de verdade.
        </p>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-3xl border border-border bg-bg p-6 shadow-card-soft">
            <h3 className="text-xl font-semibold text-text">{pillar.title}</h3>
            <p className="mt-3 text-text-muted">{pillar.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-[32px] border border-border bg-card p-8 shadow-card-soft">
        <h2 className="text-3xl font-semibold">Nossa trajetória</h2>
        <div className="mt-8 space-y-6">
          {milestones.map((step) => (
            <div key={step.year} className="flex flex-col gap-2 border-l-2 border-primary pl-6">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                {step.year}
              </span>
              <p className="text-lg text-text">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
