# NewsHub - Portal de Notícias

Aplicação web desenvolvida em Next.js para listagem e visualização de artigos/notícias, construída como parte do desafio técnico.

## 🚀 Tecnologias Utilizadas

- **Next.js 16.1.1** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização utilitária e responsiva
- **React 19** - Biblioteca para interfaces

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- API backend rodando (ver [newshub-api](../newshub-api/README.md))

## 🛠️ Instalação e Execução

1. Clone o repositório e navegue até a pasta do projeto:
```bash
cd newshub
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (opcional):
Crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse a aplicação no navegador:
```
http://localhost:3000
```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run test` - Executa os testes unitários
- `npm run test:watch` - Executa os testes em modo watch

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial (lista de posts)
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx   # Página de detalhes do post
│   ├── not-found.tsx      # Página 404 customizada
│   ├── error.tsx          # Página de erro
│   ├── loading.tsx        # Loading state da página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Header/           # Cabeçalho com navegação
│   ├── Footer/           # Rodapé
│   ├── PostCard/         # Card de post na listagem
│   ├── PostGrid/         # Grid responsivo de posts
│   └── ErrorMessage/     # Componente de mensagem de erro
├── api/                  # Integração com API
│   └── backend.ts        # Funções de fetch de dados
└── types/                # Definições TypeScript
    └── post.ts           # Interface Post
```

## 🎨 Decisões de Arquitetura

### Escolha do Next.js
Optei pelo Next.js 16 com App Router para aproveitar:
- Server Components nativos (melhor performance)
- Rotas dinâmicas com `[slug]`
- SEO otimizado out-of-the-box
- Image optimization integrada

### Tailwind CSS
Escolhido para:
- Desenvolvimento rápido de interfaces responsivas
- Consistência visual através de classes utilitárias
- Menor bundle size (purge automático)
- Configuração simples e moderna (v4)

### TypeScript
Implementado para:
- Tipagem estática e melhor DX
- Prevenção de erros em tempo de compilação
- Melhor autocomplete e documentação inline
- Requisito do desafio (diferencial)

### Estrutura de Pastas
- Separação clara entre páginas (`app/`) e componentes (`components/`)
- Cada componente em sua própria pasta para facilitar manutenção
- Tipos centralizados em `types/`
- API client isolado em `api/`

## 🔌 Integração com API

A aplicação consome uma API REST desenvolvida em NestJS. As requisições são feitas através de:

- `fetchPosts()` - Lista todos os posts
- `fetchPost(slug)` - Busca um post específico por slug

A URL da API é configurável através da variável `NEXT_PUBLIC_API_URL` (padrão: `http://localhost:3001`).

## ✨ Funcionalidades

### Lista de Artigos
- Exibição em grid responsivo
- Cards com título, resumo, data e categoria
- Imagens otimizadas com Next.js Image
- Link para página de detalhes

### Detalhes do Artigo
- Visualização completa do conteúdo
- Informações do autor e data de publicação
- Compartilhamento social (Facebook, Twitter, WhatsApp, Instagram)
- Navegação de volta para lista

### Responsividade
- Layout adaptável para mobile, tablet e desktop
- Menu hambúrguer em dispositivos móveis
- Breakpoints customizados com Tailwind

## 🧪 Testes

Antes de executar os testes, certifique-se de que as dependências estão instaladas:

```bash
npm install
```

Execute os testes:

```bash
npm run test
```

Execute os testes em modo watch:

```bash
npm run test:watch
```

Testes unitários implementados para componentes principais:
- **PostCard** - Renderização de dados do post, links e estrutura
- **PostGrid** - Renderização de lista, estados de loading, erro e vazio

Tecnologias utilizadas:
- Jest - Framework de testes
- React Testing Library - Utilitários para testar componentes React

## 📝 Notas Adicionais

- A aplicação utiliza Server Components por padrão para melhor performance
- Imagens são otimizadas automaticamente pelo Next.js Image
- Tratamento de erros com componentes de feedback visual
- Loading states implementados com arquivos `loading.tsx` do Next.js App Router
- Página 404 customizada para melhor experiência do usuário
- Error boundaries para captura de erros em runtime
