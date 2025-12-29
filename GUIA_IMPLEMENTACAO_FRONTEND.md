# 📘 Guia Passo a Passo - Implementação Frontend NewsHub

Este guia detalha cada arquivo que você precisa criar/modificar para adaptar o mockup React/Vite para Next.js App Router.

---

## 📋 Visão Geral da Estrutura

```
newshub/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Modificar (remover Geist, adicionar Header/Footer)
│   │   ├── page.tsx            ← Modificar (página principal com listagem)
│   │   └── articles/
│   │       └── [slug]/
│   │           └── page.tsx    ← Criar (página de detalhe)
│   ├── components/
│   │   ├── Header.tsx          ← Criar (do mockup)
│   │   ├── Footer.tsx          ← Criar (do mockup)
│   │   ├── ArticleCard.tsx     ← Criar (do mockup)
│   │   └── ArticleGrid.tsx     ← Criar (do mockup)
│   ├── lib/
│   │   └── api.ts              ← Criar (cliente API)
│   └── types/
│       └── article.ts          ← Criar (interface Article)
├── .env.local                  ← Criar (variáveis de ambiente)
└── tailwind.config.ts          ← Verificar (dark mode)
```

---

## 🔵 PASSO 1: Criar os Tipos TypeScript

**Arquivo:** `src/types/article.ts`

### O que fazer:
Criar a interface `Article` baseada no mockup. **IMPORTANTE:** O campo é `content` (string HTML), não `contentHtml`.

### Código completo:

```typescript
export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;        // ← String HTML
  author: string;
  publishDate: string;
  category: string;
  imageUrl: string;
}
```

### Explicação:
- Esta interface define a estrutura dos dados dos artigos
- O campo `content` será uma string HTML que será renderizada com `dangerouslySetInnerHTML`
- Todos os campos são obrigatórios e tipados como `string`

---

## 🔵 PASSO 2: Criar o Cliente API

**Arquivo:** `src/lib/api.ts`

### O que fazer:
Criar funções que fazem fetch dos dados da API backend. Por enquanto, vamos criar funções que funcionam mesmo sem o backend rodando (retornando dados mockados), mas que já estão preparadas para receber dados reais quando o backend estiver pronto.

### Código completo:

```typescript
import { Article } from '@/types/article';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

/**
 * Busca todos os artigos
 */
export async function fetchArticles(): Promise<Article[]> {
  try {
    const response = await fetch(`${API_URL}/articles`, {
      cache: 'no-store', // Sempre busca dados frescos
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar artigos');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    // Por enquanto, retorna array vazio se houver erro
    // Você pode adicionar dados mockados aqui se preferir testar sem backend
    return [];
  }
}

/**
 * Busca um artigo específico por slug
 */
export async function fetchArticle(slug: string): Promise<Article | null> {
  try {
    const response = await fetch(`${API_URL}/articles/${slug}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null; // Artigo não encontrado
      }
      throw new Error('Erro ao buscar artigo');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar artigo:', error);
    return null;
  }
}
```

### Explicação:
- `NEXT_PUBLIC_API_URL`: Variável de ambiente que será configurada no `.env.local`
- `fetchArticles()`: Busca lista de artigos do endpoint `/articles`
- `fetchArticle(slug)`: Busca um artigo específico por slug
- `cache: 'no-store'`: Garante que sempre busca dados frescos (importante para Server Components)
- Por enquanto, retorna arrays/valores vazios se houver erro, mas quando o backend estiver rodando, essas funções vão funcionar automaticamente

---

## 🔵 PASSO 3: Criar o Componente Header

**Arquivo:** `src/components/Header.tsx`

### O que fazer:
Adaptar o Header do mockup para Next.js. Substituir `react-router-dom` por `next/link`.

### Código completo:

```typescript
import Link from 'next/link';

export default function Header() {
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Barra superior com data e links */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider">
        <span>{today}</span>
        <div className="space-x-4 hidden md:flex">
          <span className="hover:text-red-700 cursor-pointer">Assine</span>
          <span className="hover:text-red-700 cursor-pointer">Newsletter</span>
          <span className="hover:text-red-700 cursor-pointer">Login</span>
        </div>
      </div>
      
      {/* Logo e tagline */}
      <div className="max-w-6xl mx-auto px-4 py-6 text-center border-t border-gray-100">
        <Link href="/" className="inline-block">
          <h1 className="serif-title text-4xl md:text-6xl font-black text-black tracking-tighter hover:text-red-700 transition-colors">
            NEWSHUB<span className="text-red-700">.</span>
          </h1>
        </Link>
        <p className="mt-2 text-sm text-gray-400 font-medium tracking-widest uppercase">
          Excelência em Jornalismo Independente
        </p>
      </div>

      {/* Navegação horizontal */}
      <nav className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex overflow-x-auto space-x-6 py-3 text-xs font-bold uppercase tracking-widest">
            <li className="whitespace-nowrap hover:text-red-400">
              <Link href="/">Página Inicial</Link>
            </li>
            <li className="whitespace-nowrap hover:text-red-400 cursor-pointer">Política</li>
            <li className="whitespace-nowrap hover:text-red-400 cursor-pointer">Economia</li>
            <li className="whitespace-nowrap hover:text-red-400 cursor-pointer">Tecnologia</li>
            <li className="whitespace-nowrap hover:text-red-400 cursor-pointer">Esportes</li>
            <li className="whitespace-nowrap hover:text-red-400 cursor-pointer">Cultura</li>
            <li className="whitespace-nowrap hover:text-red-400 cursor-pointer">Saúde</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
```

### Explicação:
- **Data dinâmica**: `toLocaleDateString('pt-BR', {...})` formata a data em português
- **`next/link`**: Substitui `react-router-dom` Link
- **`href="/"`**: Em Next.js, usamos `href` em vez de `to`
- **Classes Tailwind**: Exatamente como no mockup (cores, espaçamentos, tipografia)
- **Logo com ponto vermelho**: `NEWSHUB<span className="text-red-700">.</span>`
- **Navegação horizontal**: Menu preto com links brancos e hover vermelho

---

## 🔵 PASSO 4: Criar o Componente Footer

**Arquivo:** `src/components/Footer.tsx`

### O que fazer:
Extrair o Footer do `App.tsx` do mockup e criar componente separado.

### Código completo:

```typescript
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h1 className="serif-title text-2xl font-black text-black tracking-tighter">
            NEWSHUB<span className="text-red-700">.</span>
          </h1>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">
            Desde 2025 • Todos os direitos reservados.
          </p>
        </div>
        <div className="flex space-x-6 text-xs font-bold uppercase tracking-widest text-gray-500">
          <span className="hover:text-red-700 cursor-pointer">Quem Somos</span>
          <span className="hover:text-red-700 cursor-pointer">Expediente</span>
          <span className="hover:text-red-700 cursor-pointer">Privacidade</span>
          <span className="hover:text-red-700 cursor-pointer">Contato</span>
        </div>
      </div>
    </footer>
  );
}
```

### Explicação:
- Componente simples e estático
- Logo NEWSHUB com ponto vermelho (menor que no header)
- Links no rodapé com hover vermelho
- Layout responsivo (coluna no mobile, linha no desktop)

---

## 🔵 PASSO 5: Criar o Componente ArticleCard

**Arquivo:** `src/components/ArticleCard.tsx`

### O que fazer:
Adaptar o ArticleCard do mockup. Usar `next/link` e `next/image` (ou `<img>` se preferir).

### Código completo:

```typescript
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex flex-col h-full bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/articles/${article.slug}`} className="block relative h-48 overflow-hidden">
        <Image 
          src={article.imageUrl} 
          alt={article.title}
          width={800}
          height={450}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-700 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
            {article.category}
          </span>
        </span>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">
          {article.publishDate}
        </span>
        
        <Link href={`/articles/${article.slug}`} className="hover:text-red-700 transition-colors">
          <h2 className="serif-title text-xl font-bold leading-tight mb-3">
            {article.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
          {article.summary}
        </p>
        
        <Link 
          href={`/articles/${article.slug}`}
          className="inline-flex items-center text-xs font-extrabold uppercase tracking-widest text-black hover:text-red-700"
        >
          Leia mais 
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
```

### Explicação:
- **`next/image`**: Componente otimizado de imagem (precisa de `width` e `height`)
- **Badge categoria**: Posicionado absolutamente sobre a imagem (canto superior esquerdo)
- **Hover effects**: `group-hover:scale-105` na imagem, `hover:text-red-700` nos links
- **`line-clamp-3`**: Limita o resumo a 3 linhas com ellipsis
- **Seta SVG**: Ícone de seta para direita no link "Leia mais"

**NOTA:** Se preferir usar `<img>` normal em vez de `next/image`, você pode substituir:

```typescript
<img 
  src={article.imageUrl} 
  alt={article.title}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>
```

---

## 🔵 PASSO 6: Criar o Componente ArticleGrid

**Arquivo:** `src/components/ArticleGrid.tsx`

### O que fazer:
Criar componente que renderiza o grid de artigos com estados de loading e empty.

### Código completo:

```typescript
import { Article } from '@/types/article';
import ArticleCard from './ArticleCard';

interface ArticleGridProps {
  articles: Article[];
  isLoading?: boolean;
}

export default function ArticleGrid({ articles, isLoading = false }: ArticleGridProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-red-700 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 font-medium animate-pulse">Carregando últimas notícias...</p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Nenhum artigo encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 py-8">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
```

### Explicação:
- **Props**: Recebe `articles` (array) e `isLoading` (opcional, boolean)
- **Estado loading**: Spinner vermelho com texto animado
- **Estado empty**: Mensagem quando não há artigos
- **Grid responsivo**: 1 coluna no mobile, 2 no tablet, 3 no desktop
- **Gap**: `gap-y-10 gap-x-8` (maior espaçamento vertical)

---

## 🔵 PASSO 7: Modificar o Layout Principal

**Arquivo:** `src/app/layout.tsx`

### O que fazer:
- Remover fontes Geist
- Adicionar Header e Footer
- Manter `lang="pt-BR"` e `suppressHydrationWarning`
- Atualizar metadata

### Código completo:

```typescript
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NewsHub - Excelência em Jornalismo Independente",
  description: "Portal de notícias com as últimas atualizações em tecnologia, economia, política e mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow max-w-6xl mx-auto px-4 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

### Explicação:
- **Removido**: Fontes Geist (já temos Inter e Libre Baskerville no globals.css)
- **Header e Footer**: Incluídos diretamente no layout (aparecem em todas as páginas)
- **`main`**: Container com `max-w-6xl` (mesma largura do mockup)
- **`flex-grow`**: Garante que o main ocupe o espaço disponível, empurrando o footer para baixo
- **Metadata**: Título e descrição apropriados para SEO

---

## 🔵 PASSO 8: Modificar a Página Principal (Listagem)

**Arquivo:** `src/app/page.tsx`

### O que fazer:
Criar Server Component que busca artigos e renderiza a listagem com a seção "Manchetes do Dia".

### Código completo:

```typescript
import { fetchArticles } from '@/lib/api';
import ArticleGrid from '@/components/ArticleGrid';

export default async function Home() {
  // Server Component: busca dados diretamente aqui
  const articles = await fetchArticles();

  return (
    <section className="py-8">
      {/* Cabeçalho da seção */}
      <div className="flex items-center justify-between mb-8 border-b-2 border-black pb-2">
        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-black">
          Manchetes do Dia
        </h2>
        <div className="flex space-x-2">
          <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse"></span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ao Vivo</span>
        </div>
      </div>

      {/* Grid de artigos */}
      <ArticleGrid articles={articles} />
    </section>
  );
}
```

### Explicação:
- **Server Component**: Função `async` que busca dados diretamente (sem `useState`/`useEffect`)
- **`fetchArticles()`**: Chama a função que criamos no `api.ts`
- **Seção "Manchetes do Dia"**: Título com linha decorativa abaixo (border-b-2)
- **Badge "Ao Vivo"**: Ponto vermelho pulsante + texto "Ao Vivo"
- **ArticleGrid**: Renderiza os cards de artigos

**IMPORTANTE:** Em Server Components, não usamos hooks como `useState` ou `useEffect`. A busca de dados é feita diretamente na função async.

---

## 🔵 PASSO 9: Criar a Página de Detalhe do Artigo

**Arquivo:** `src/app/articles/[slug]/page.tsx`

### O que fazer:
Criar Server Component que busca artigo por slug e renderiza a página completa de detalhe.

### Código completo:

```typescript
import { fetchArticle } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  // Em Next.js 15+, params é uma Promise, precisamos fazer await
  const { slug } = await params;
  
  const article = await fetchArticle(slug);

  if (!article) {
    notFound(); // Renderiza página 404 do Next.js
  }

  // Função para compartilhar nas redes sociais
  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/articles/${slug}`;
  const shareText = encodeURIComponent(article.title);

  return (
    <div className="py-8 max-w-4xl mx-auto">
      {/* Botão Voltar */}
      <Link 
        href="/" 
        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-red-700 mb-8"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
        Voltar para a listagem
      </Link>

      {/* Header do artigo */}
      <header className="mb-8">
        <span className="bg-red-700 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-4 inline-block">
          {article.category}
        </span>
        <h1 className="serif-title text-4xl md:text-5xl font-black leading-tight text-black mb-6">
          {article.title}
        </h1>
        
        {/* Autor e data */}
        <div className="flex items-center space-x-4 border-t border-b border-gray-100 py-4 mb-8">
          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
            <Image 
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&size=100`}
              alt={article.author}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-black uppercase tracking-tight">Por {article.author}</p>
            <p className="text-xs text-gray-400">{article.publishDate}</p>
          </div>
        </div>
      </header>

      {/* Imagem principal */}
      <div className="mb-10 rounded-sm overflow-hidden">
        <Image 
          src={article.imageUrl} 
          alt={article.title} 
          width={800}
          height={450}
          className="w-full h-auto object-cover max-h-[500px]"
        />
        <p className="text-[10px] text-gray-400 mt-2 uppercase text-right tracking-widest">
          Foto: Reprodução / NewsHub Imagens
        </p>
      </div>

      {/* Conteúdo HTML */}
      <div 
        className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-serif text-lg"
        dangerouslySetInnerHTML={{ __html: article.content }} 
      />

      {/* Footer com compartilhamento social */}
      <footer className="mt-16 pt-8 border-t border-gray-100">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Compartilhe esta notícia</h3>
        <div className="flex space-x-2">
          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1877F2] text-white p-2 rounded-sm hover:opacity-90 transition-opacity"
            aria-label="Compartilhar no Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          
          {/* Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1DA1F2] text-white p-2 rounded-sm hover:opacity-90 transition-opacity"
            aria-label="Compartilhar no Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          
          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-2 rounded-sm hover:opacity-90 transition-opacity"
            aria-label="Compartilhar no WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
```

### Explicação:
- **`params` é uma Promise**: Em Next.js 15+, precisamos fazer `await params` para acessar o slug
- **`notFound()`**: Função do Next.js que renderiza página 404 quando artigo não encontrado
- **Avatar do autor**: Usando `ui-avatars.com` API para gerar avatar baseado no nome
- **`dangerouslySetInnerHTML`**: Renderiza o HTML do conteúdo (necessário pois `content` é HTML)
- **Compartilhamento social**: Links com URLs das redes sociais (Facebook, Twitter, WhatsApp)
- **`encodeURIComponent`**: Codifica URLs e textos para serem seguros em queries

---

## 🔵 PASSO 10: Criar Arquivo de Variáveis de Ambiente

**Arquivo:** `.env.local` (na raiz de `newshub/`)

### O que fazer:
Criar arquivo com variáveis de ambiente para a URL da API e do site.

### Conteúdo:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Explicação:
- **`NEXT_PUBLIC_`**: Prefixo obrigatório para variáveis que serão expostas ao cliente (browser)
- **`API_URL`**: URL do backend NestJS (porta 3001)
- **`SITE_URL`**: URL do frontend (porta 3000) - usado para gerar links de compartilhamento
- **`.env.local`**: Arquivo local que não deve ser commitado (já está no `.gitignore`)

---

## 🔵 PASSO 11: Verificar Configuração do Tailwind (Dark Mode)

**Arquivo:** `tailwind.config.ts`

### O que fazer:
Adicionar configuração de dark mode (se quiser implementar depois).

### Código completo (verificar se está assim):

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class', // ← Adicionar esta linha para dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
```

### Explicação:
- **`darkMode: 'class'`**: Ativa dark mode baseado em classe (depois você pode adicionar toggle)
- Por enquanto, só precisamos verificar se está configurado corretamente

---

## 🔵 PASSO 12: Verificar globals.css

**Arquivo:** `src/app/globals.css`

### O que fazer:
Verificar se está igual ao do mockup (fontes Inter e Libre Baskerville).

### Código esperado:

```css
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;500;600;700;800&display=swap');
@import "tailwindcss";
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

body {
  font-family: 'Inter', sans-serif;
  background: #fcfcfc;
}

.serif-title {
  font-family: 'Libre Baskerville', serif;
}
```

### Explicação:
- **Fontes Google Fonts**: Inter (sans-serif) e Libre Baskerville (serif)
- **`.serif-title`**: Classe utilitária para títulos com fonte serifada
- **Background**: Cor de fundo leve (#fcfcfc)

---

## ✅ Checklist Final

Após implementar todos os passos, verifique:

- [ ] Todos os arquivos criados nos locais corretos
- [ ] Imports usando `@/` (alias do TypeScript configurado no Next.js)
- [ ] `.env.local` criado na raiz de `newshub/`
- [ ] Layout com Header e Footer
- [ ] Página principal buscando artigos
- [ ] Página de detalhe com slug dinâmico
- [ ] Componentes usando classes Tailwind do mockup

---

## 🧪 Testando (Sem Backend)

Por enquanto, como o backend ainda não existe, você verá:
- Lista vazia na página principal (pois `fetchArticles()` retorna `[]` em caso de erro)
- Página 404 ao clicar em um artigo (pois `fetchArticle()` retorna `null`)

**Isso é normal!** Quando você subir o backend, tudo funcionará automaticamente.

---

## 🚀 Próximos Passos

1. Implementar backend NestJS (conforme plano)
2. Adicionar funcionalidades extras (dark mode, notificações, etc.)
3. Testar integração completa

---

**Dúvidas?** Cada passo tem explicações detalhadas. Siga na ordem e você terá o frontend funcionando! 🎉

