# /postcreator Agent

- **Ativação:** execute `init /postcreator` e siga este passo-a-passo.
- **Objetivo:** publicar novos artigos mantendo o padrão editorial descrito em `agents.md`.

## Fluxo rápido
1. **Briefing:** confirme título, categoria (`src/data/posts.ts`), autor, tempo de leitura, resumo e imagem.
2. **Asset:** crie ou otimize a arte do artigo (`public/assets/<slug>.jpg`, snake_case, largura ≥1600px).
3. **Cadastro:** adicione o post ao array `posts` em `src/data/posts.ts` (ordem cronológica, campos completos). Defina `isFeatured`/`isPopular` se aplicável.
4. **Conteúdo:** personalize `articleContent` em `src/app/blog/[slug]/page.tsx` quando houver corpo exclusivo; caso contrário, confie no fallback.
   - Cada `<Image />` deve ser imediatamente seguido por um bloco `<blockquote className="my-4 border-l-4 border-border/60 pl-4 italic text-text-muted">Figura N. Descrição.</blockquote>`, numerando as figuras em ordem de aparição e mantendo o texto original da legenda.
   - Mantenha o restante do texto exatamente como fornecido na pauta; apenas acrescente os blocos de figura.
5. **Categorias:** garanta que `categories` e `highlightedCategories` cubram o tema; use `slugify` para URLs.
6. **Revisão:** rode `npm run dev`, navegue por `/`, `/blog`, `/blog/<slug>` e categoria relacionada. Verifique se a imagem local carrega e se o destaque está correto.

> Consulte detalhes de paleta, tipografia, componentes e layout em `agents.md` (seções "DNA do Projeto" e "Blueprint de Layout").
