# Brever Blog – Guia de Agentes e Boas Práticas

## DNA do Projeto
- **Stack:** Next.js (App Router) com TypeScript, Tailwind e tema controlado via CSS vars em `src/app/globals.css`.
- **Estrutura:** Conteúdo em `src/data/posts.ts`, componentes reutilizáveis em `src/components`, rotas em `src/app` (home/blog, categorias, dinâmicas `[slug]`, institucionais).
- **UX:** Navegação única (`HeroNav`), modo claro/escuro (`ThemeToggle`), CTAs focados em newsletter e contato.

## Paleta e Tipografia
- **Fontes:**
  - Corpo: Inter (variável `--font-inter`).
  - Títulos: Poppins (variável `--font-poppins`).
- **Cores-chave (valores em HSL definidos em `globals.css`):**
  - `--primary`: `151 32% 15%` (verde profundo) com foreground `82 94% 75%`.
  - Fundo claro `--bg`: `0 0% 100%`; fundo escuro `--bg` no modo dark: `222 47% 7%`.
  - Texto primário `--text`: `222 47% 11%` (light) / `210 40% 98%` (dark).
  - `--bg-muted` (`210 20% 98%`) e `--card` (`0 0% 100%`) para cartões.
  - Bordas `--border`: `214 32% 91%`.
  - Acentos adicionais: `--accent`, `--success`, `--warning`, `--danger` para badges.
- **Radius & Sombras:** `--radius: 28px`, sombra padrão `--shadow-agro` para cartões premium.

## Blueprint de Layout
1. **Hero (“/” e “/blog”):** background `bg-hero.jpg`, `HeroNav`, headline, subhead e `SearchForm`.
2. **Filtro de Categorias:** `CategoryFilter` com opção “Todos” levando a `/blog` e links `slugify` → `/blog/categoria/[slug]`.
3. **Artigo em destaque:** `FeaturedPost` agora usa `post.image` (assets locais) com tag “Artigo em destaque”.
4. **Grade recente:** `PostGrid` + `PostCard` mostrando resultados (com highlight do termo pesquisado) e botão “Carregar mais”.
5. **Categorias em destaque:** cards com CTA `/blog/categoria/${slug}` usando `highlightedCategories`.
6. **NewsletterCTA:** formulário + links WhatsApp/LinkedIn; reutilizado em `/newsletter` e rodapé de artigos.
7. **Footer:** links para `/blog`, `/contato`, `/politica-de-privacidade` + direitos autorais.
8. **Outras rotas:**
   - `/blog/categorias` → listagem completa com retorno para `/blog`.
   - `/blog/categoria/[slug]` → header contextual + grid filtrado.
   - `/blog/[slug]` → artigo com imagem hero, metadados e corpo (`articleContent` fallback `defaultContent`).
   - Institucionais (`/contato`, `/sobre`, `/termos`, `/politica-de-privacidade`) usam `Prose` ou layouts próprios; seguir mesma estética (raios amplos, bordas suaves).

## Assets
- Localizados em `public/assets`. Naming convention: snake_case resumindo o tema (`biodiesel_etanol.jpg`, `checklist_de_frota.jpg`, etc.).
- Cada `Post.image` deve usar o caminho relativo (`/assets/...`). Crie o arquivo antes de referenciar e mantenha dimensões generosas para o hero (`>=1600px` largura).

## Fluxo de Dados & Rotas
- **Posts:** em `src/data/posts.ts`. Campos obrigatórios: `id` (slug), `title`, `excerpt`, `category`, `image`, `date`, `readTime`, `author`; flags `isFeatured`/`isPopular` opcionais.
- **Slug:** derive com `slugify` (`src/lib/slug.ts`). Dinâmicas `generateStaticParams` usam `id` ou slugify(category).
- **Article body:** `src/app/blog/[slug]/page.tsx` mapa `articleContent`; se não houver entrada específica, usa `defaultContent`.

## Agentes e Comandos

### `/postcreator`
Responsável por publicar novos artigos.
- **Entrada:** briefing do artigo (título, categoria, resumo, autor, tempo de leitura, imagem).
- **Checklist:**
  1. Criar/comprimir imagem e salvar em `public/assets/<slug>.jpg` seguindo snake_case.
  2. Adicionar entrada em `src/data/posts.ts` mantendo ordenação cronológica (mais recentes primeiro) e definir `isFeatured`/`isPopular` quando necessário.
  3. Atualizar `articleContent` em `src/app/blog/[slug]/page.tsx` se o artigo exigir corpo personalizado; caso contrário o fallback cobre.
  4. Garantir que `highlightedCategories`/`categories` incluam a categoria desejada.
  5. Conferir `CategoryFilter` e `PostGrid` renderizando com `npm run dev`.

### `/dev`
Responsável por evoluir o blog (features, UX, integrações).
- **Práticas:**
  - Respeitar tokens do tema; nunca hardcode cores (use classes derivadas de `tailwind.config.ts`).
  - Componentizar novos blocos dentro de `src/components` e reusar padrões (raio 24-32px, bordas `border-border`, sombras suaves).
  - Rotas novas devem viver em `src/app/<path>` com metadata adequado (`Metadata` API) e manter headless layout.
  - Ao tocar navegação (`HeroNav`), sincronizar com footer e atualizações de sitemap.
  - Testar modo escuro/claro e responsividade (breakpoints mobile-first já usados em Hero/Nav/Filtro).
  - Sempre atualizar documentação quando mudar fluxos críticos (p.ex. se `searchParams` exigir novos filtros).

## Workflow Recomendado
1. **Sync:** `npm install` (se necessário) e `npm run dev` para verificar.
2. **Implementar:** usar `apply_patch` ou editor local mantendo comentários sucintos.
3. **Testar:** navegar em `/`, `/blog`, `/blog/[slug]`, `/blog/categoria/[slug]`, `/sobre`, `/contato`.
4. **Checklist final:** rodar `npm run lint`/`npm run build` antes de abrir PR.

## Observações Finais
- `searchParams` no Home é assíncrono (Next 15); sempre use `async`/`await` ao acessar.
- `ThemeToggle` depende da classe `dark` no `<html>` (veja `themeInitScript`). Evite manipular tema diretamente em componentes.
- Links “Voltar” devem apontar para `/blog` quando a experiência for estritamente do blog.

Siga este arquivo sempre que os agentes forem acionados para manter a identidade visual e o padrão editorial do Brever Blog.
