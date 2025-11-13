import { NewsletterCTA } from "@/components/blog/NewsletterCTA";

export default function NewsletterLandingPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-8 lg:py-16">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Newsletter Brever</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Conteúdos curados sobre gestão do agro direto no seu e-mail.
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Toda semana enviamos análises, checklists e cases práticos para equipes que lideram a transformação digital no campo.
        </p>
      </header>

      <div className="mt-10">
        <NewsletterCTA />
      </div>
    </div>
  );
}
