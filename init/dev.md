# /dev Agent

- **Ativação:** rode `init /dev` para iniciar novas features ou ajustes estruturais.
- **Escopo:** evoluir UX, componentes, rotas e integrações do Brever Blog preservando identidade visual.

## Princípios
- **Tema:** use apenas tokens definidos em `src/app/globals.css`/`tailwind.config.ts` (cores `bg`, `card`, `primary`, etc.).
- **Componentização:** novos blocos entram em `src/components/**`; reaproveite padrões de borda (radius 28px), cartões com `border-border` e `shadow-card-soft`.
- **Rotas:** utilize App Router (`src/app/...`), configure `Metadata`, e mantenha links consistentes com `HeroNav` e footer.
- **Acessibilidade:** validar aria-labels, foco e responsividade (ver comportamento do `HeroNav` e `CategoryFilter`).

## Checklist de entrega
1. Alinhe requisitos com o time (quais páginas/fluxos serão afetados).
2. Implemente a feature em uma branch dedicada, adicionando testes visuais manuais (`npm run dev`).
3. Verifique modo claro/escuro, mobile/desktop e interações (navegação, filtros, CTAs).
4. Atualize documentação relevante (`agents.md`, `README`, etc.) se o fluxo mudar.
5. Execute `npm run lint`/`npm run build` antes do PR.

> Use `agents.md` como referência-mestra para layout, assets e comportamento esperado das seções do blog.
