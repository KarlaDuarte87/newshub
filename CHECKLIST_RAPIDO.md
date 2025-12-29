# ✅ Checklist Rápido - Implementação Frontend

## 📁 Estrutura de Arquivos

```
newshub/src/
├── types/
│   └── article.ts              ← PASSO 1
├── lib/
│   └── api.ts                  ← PASSO 2
├── components/
│   ├── Header.tsx              ← PASSO 3
│   ├── Footer.tsx              ← PASSO 4
│   ├── ArticleCard.tsx         ← PASSO 5
│   └── ArticleGrid.tsx         ← PASSO 6
└── app/
    ├── layout.tsx              ← PASSO 7 (modificar)
    ├── page.tsx                ← PASSO 8 (modificar)
    └── articles/
        └── [slug]/
            └── page.tsx        ← PASSO 9 (criar)

newshub/
└── .env.local                  ← PASSO 10 (criar)
```

## 🔄 Ordem de Implementação Recomendada

1. ✅ **Tipos** (`types/article.ts`) - Base para tudo
2. ✅ **API Client** (`lib/api.ts`) - Funções de fetch
3. ✅ **Header** (`components/Header.tsx`) - Navegação
4. ✅ **Footer** (`components/Footer.tsx`) - Rodapé
5. ✅ **ArticleCard** (`components/ArticleCard.tsx`) - Card individual
6. ✅ **ArticleGrid** (`components/ArticleGrid.tsx`) - Grid com estados
7. ✅ **Layout** (`app/layout.tsx`) - Estrutura base
8. ✅ **Página Principal** (`app/page.tsx`) - Listagem
9. ✅ **Página Detalhe** (`app/articles/[slug]/page.tsx`) - Artigo completo
10. ✅ **.env.local** - Variáveis de ambiente

## 🔑 Pontos Importantes

- ✅ Usar `next/link` em vez de `react-router-dom`
- ✅ Usar `href` em vez de `to` nos Links
- ✅ Server Components são `async` - não usam hooks
- ✅ `params` em Next.js 15+ é uma Promise (fazer `await`)
- ✅ Campo do artigo é `content` (não `contentHtml`)
- ✅ Classes Tailwind exatamente como no mockup
- ✅ Fonte serifada: `.serif-title` para títulos

## 🎨 Componentes do Mockup Adaptados

| Mockup (React Router) | Next.js App Router |
|----------------------|-------------------|
| `<Link to="/">` | `<Link href="/">` |
| `useParams()` | `await params` (Server Component) |
| `useState/useEffect` | `async function` (Server Component) |
| `data/articles.ts` | `fetchArticles()` (API) |

## 📝 Diferenças Principais

1. **Roteamento**: `react-router-dom` → `next/link` + App Router
2. **Dados**: Mock local → API fetch (mas funciona sem backend também)
3. **Componentes**: Client Components → Server Components (por padrão)
4. **Navegação**: `to` → `href`

---

📖 **Leia o arquivo `GUIA_IMPLEMENTACAO_FRONTEND.md` para instruções detalhadas de cada passo!**

