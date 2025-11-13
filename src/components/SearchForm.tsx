"use client";

export function SearchForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get('search');
    if (searchTerm) {
      console.log('Buscar:', searchTerm);
      // TODO: Implementar funcionalidade de busca
    }
  };

  return (
    <form
      className="flex flex-col gap-4 sm:flex-row sm:items-stretch"
      onSubmit={handleSubmit}
    >
      <label className="flex-1">
        <span className="sr-only">Buscar artigo</span>
        <div className="flex h-full items-center gap-3 rounded-3xl border border-border bg-bg px-5 py-3.5 shadow-inner transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
          <span aria-hidden className="text-lg">🔍</span>
          <input
            type="search"
            name="search"
            placeholder="Busque por tema, cultura ou tecnologia"
            className="w-full border-0 bg-transparent text-base text-text placeholder:text-text-muted focus:outline-none"
          />
        </div>
      </label>
      <button
        type="submit"
        className="h-auto rounded-3xl bg-primary px-8 py-3.5 text-base font-semibold text-primaryFg shadow-card-soft transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:min-w-[160px]"
      >
        Buscar agora
      </button>
    </form>
  );
}
