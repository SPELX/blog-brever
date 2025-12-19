import { LazyLoad } from "@/components/LazyLoad";

export function NewsletterCTA() {
  return (
    <LazyLoad animation="fade-up" delay={200}>
    <section className="rounded-[32px] border border-border bg-card px-8 py-10 shadow-card-soft">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">
            Conteúdo exclusivo
          </p>
          <h3 className="text-3xl font-semibold leading-tight text-text">
            Receba conteúdos do agro direto no seu e-mail.
          </h3>
          <p className="text-text-muted">
            Insights sobre produtividade, combustível e tecnologia em primeira mão.
          </p>
        </div>
        <form className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="flex-1 rounded-2xl border border-border bg-bg px-5 py-3 text-base text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <button
            type="submit"
            className="rounded-2xl bg-primary px-6 py-3 text-base font-semibold text-primaryFg shadow-card-soft transition hover:opacity-90"
          >
            Quero receber
          </button>
        </form>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-muted">
        <span>Conecte-se também</span>
        <a
          href="https://wa.me/5500000000000"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-text transition hover:border-primary hover:text-primary"
        >
          <span aria-hidden>💬</span> WhatsApp
        </a>
        <a
          href="https://linkedin.com/company/brever"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-text transition hover:border-primary hover:text-primary"
        >
          <span aria-hidden>in</span> LinkedIn
        </a>
      </div>
    </section>
    </LazyLoad>
  );
}
