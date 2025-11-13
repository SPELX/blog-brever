import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-8 lg:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80"
      >
        ← Voltar para home
      </Link>

      <header className="max-w-3xl mt-8">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Contato</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight">Vamos conversar sobre o seu plano para o agro?</h1>
        <p className="mt-4 text-lg text-text-muted">
          Preencha o formulário e nossa equipe retornará com um diagnóstico inicial em até 1 dia útil.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[2fr,1fr]">
        <form className="space-y-5 rounded-[32px] border border-border bg-card p-8 shadow-card-soft">
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-text">
              Nome completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Como podemos te chamar?"
              className="mt-2 h-12 w-full rounded-2xl border border-border bg-bg px-4 text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-text">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="seuemail@empresa.com"
                className="mt-2 h-12 w-full rounded-2xl border border-border bg-bg px-4 text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-semibold text-text">
                Assunto
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Gestão de frotas, abastecimento..."
                className="mt-2 h-12 w-full rounded-2xl border border-border bg-bg px-4 text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-text">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Conte um pouco sobre seus desafios."
              className="mt-2 w-full rounded-2xl border border-border bg-bg px-4 py-3 text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-primary px-6 py-3 text-base font-semibold text-primaryFg shadow-card-soft transition hover:opacity-90"
          >
            Enviar mensagem
          </button>
        </form>

        <aside className="space-y-6 rounded-[32px] border border-border bg-bg p-8 shadow-card-soft">
          <div>
            <h2 className="text-lg font-semibold text-text">Canais diretos</h2>
            <p className="mt-2 text-text-muted">Preferir falar agora?</p>
            <div className="mt-4 space-y-3 text-sm font-semibold">
              <a
                href="https://wa.me/5500000000000"
                className="flex items-center justify-between rounded-2xl border border-border px-4 py-3 text-text transition hover:border-primary hover:text-primary"
              >
                WhatsApp <span aria-hidden>↗</span>
              </a>
              <a
                href="mailto:contato@brever.com.br"
                className="flex items-center justify-between rounded-2xl border border-border px-4 py-3 text-text transition hover:border-primary hover:text-primary"
              >
                contato@brever.com.br <span aria-hidden>↗</span>
              </a>
              <a
                href="https://linkedin.com/company/brever"
                className="flex items-center justify-between rounded-2xl border border-border px-4 py-3 text-text transition hover:border-primary hover:text-primary"
              >
                LinkedIn <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text">Bases de operação</h3>
            <p className="mt-2 text-text-muted">
              São Paulo/SP • Ribeirão Preto/SP • Goiânia/GO • Cascavel/PR
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
